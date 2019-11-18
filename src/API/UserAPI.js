import { checkPassword } from '../components/User/Hash';
import { users } from './Paths';

const UserAPI = {
    errors: {},
    getAll(){
        return fetch(`${users}/`
            ).then(
                response => response.json()
            ).then(
                users => users
            ).catch(
                err => err
            );  
    },
    getUser(){
        const id = localStorage.userId? localStorage.userId : null;
        return fetch(`${users}/${id}`)
            .then(response => response.json())
            .then(user => user)
            .catch(
                err => err
            );
    },
    //create an array of objects each containing all data of each input field (name, val, min and max length)
    extractData({elements}) {
        return Array.from(elements)
            //remove button element before further processing
            .filter(el => el.nodeName === 'INPUT')
            .map(
                el => ({
                    name: el.name,
                    value: el.value,
                    minLength: el.minLength,
                    maxLength: el.maxLength
                })
            );         
    },
    /**
     * -----------------------------------------
     * VALIDATE A SINGLE FIELD
     * -----------------------------------------
     */
    validateSignupInput(field, password = null) {
        const { name, value, minLength = null, maxLength = null } = field;
        this.resetError(name);//{...error: ''}

        //return this.errors (after all stages of validation have been completed)
        return name === 'confirmPassword'? 
            this.comparePasswords(value, password) 
        :
            this.checkLength(name, value, minLength, maxLength)
                .then(prevError => {
                //if the length is not ok, don't validate content, unless it's the password which needs both validation messages displayed at once for better user experience
                if(this.errors[name + 'Error'] !== '' && name !== 'password') return prevError;  

                return this.checkContent(name, value)
            })
            .then(prevError => {
                if (this.errors[name + 'Error'] !== '') return prevError;
                
                return this.checkIfUnique(name, value); 
            })
            .then(() => this.getErrors())
            .catch(err => err);
    },
    validateLoginInput(field) {
        const { name, value } = field;
        this.resetError(name);//{...error: ''}

        return this.checkLength(name, value)
            .then(() => this.getErrors())
            .catch(err => err);
    },
    /**
     * 
     * ---------------------------------------
     * VALIDATE ALL FIELDS ON SUBMIT
     * --------------------------------------
     */
    validateAll(form, action, password = null) {
        //extract data array from the form: [{name: 'username', value: '', minLength: ..., maxLength: ...}, {name: 'password', ...}, {...}]
        const data = this.extractData(form);

        //action: method used for validation, depends on which form is being validated
        const errors  = data.map(field => this[action](field, password));

        return Promise.all(errors)
            .then(() => {   
                //after all the fields have been validated, check for errors and return all errors if at least one has been found, otherwise return undefined
                const { errors } = this;   
                for (let err in errors){
                    if (errors[err]) return errors;
                }
                return undefined;
            })
            .catch(err => err);
    },
    /**
     * -----------------------------------
     * DIFFERENT STAGES OF VALIDATION
     * -----------------------------------
     */
    checkIfUnique(name, value) {
        if (name === 'password' || name === 'confirmPassword') return;

        return this.getAll()
            .then(users => {
                return users.find(user => user[name] === value)
            })
            .then(user => {
                let message = '';
                if (user !== undefined){
                    message = `This ${name} has already been used.`;                     
                }                
                return this.setError(name, message);                
            });
    },
    checkLength(field, value, minLength, maxLength) {
        
        if (field === 'confirmPassword') return;

        const { length } = value;
        let message = '';
        
        if (field !== 'email' && (length < minLength || length > maxLength) ) {
            message = `${field.substr(0, 1).toUpperCase() + field.substr(1)} must be ${minLength} - ${maxLength} characters long. `;
        }
        
        if (length === 0) {
            message = 'This field is required. ';
        }

        return this.setError(field, message);       
    },
    checkContent(field, value) {
        
        let regExp, message;
        
        switch (field) {
            case 'username':
                regExp = /^[_0-9A-Za-z]+$/;
                message = 'Username can only contain letters, numbers and underscores.';
                break;
            case 'password':
                regExp = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!§$%&()=?.,_+*#^-]).*$/;
                message = 'Password  must contain at least one lowercase character, one uppercase character, one number and one special character. ';
                break;
            case 'email':
                regExp = /^[-.\w]+@([\w-]+\.)+[\w-]+$/;
                message = 'Please enter a proper email address.';
                break;
        }

        if (regExp.test(value) !== false) {
            message = '';
        }

        return this.setError(field, message);        
    },
    comparePasswords(password, confirmPassword) {
        this.errors.confirmPasswordError = (password !== confirmPassword)? 'Passwords do not match' : '';
        return Promise.resolve(this.errors);      
    },
    //store the error in this.errors and return a promise containing the current error to be passed to the next validation method
    setError(field, message){
        const errorOld = this.errors[field + 'Error'];

        //concatenate errors if there are several of them
        const errorNew = errorOld !== message? errorOld + message : message;
        
        this.errors[field + 'Error'] = errorNew;
       
        //return current error to stop the 'validation chain' if this error is not equal to ''
        return Promise.resolve({
            [field + 'Error']: errorNew
        });
    },
    resetError(name) {
        this.errors[name + 'Error'] = '';
    },
    resetAllErrors(){
        this.errors = {};
    },
    getErrors() {
        return this.errors;
    },
    saveUser(data){
        fetch(`${users}/`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(
            response => response.json()
        ).then( 
            newUser => newUser
        ).catch(
            err => err
        );
    },
    authenticate(input){
        return this.getAll()
        .then(
            users => {
                let user = users.find(
                    user => (user.username === input.username) && (checkPassword(input.password, user.passwordHash))
                );
                
                if (user === undefined) throw new Error('Unknown user');
                
                return user;
            },
            err => err            
        );
    },
    getNextId(){        
        this.getAll()
            .then(
                users => {
                    //if this is the 1st user in the 'database', store 0 as id
                    return users.length > 0? users[users.length - 1].id : 0;
                }
            ).catch(err => err)
    },    
};

export default UserAPI;