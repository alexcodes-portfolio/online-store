import React, { Component } from 'react';
import UserForm from './UserForm';
import API  from '../../API/UserAPI';
import { signupModalLinks } from '../Core/Modal/ModalLinks';
import { hashPassword } from './Hash';
import * as events from './HandleEvents';

class SignUpView extends Component {
    //props: toggleModal, history, location, match
    //state: username, password, confirmPassword, email, errors
    constructor(){
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {}
        };
    }
   
    handleChange = (e) => {        
        events.handleChange(this, e.target, () => this.validate(e));
    }

    handleBlur = (e) => {
        events.handleBlur(this, () => this.validate(e));
    }

    validate({target}) {
        return target.name !== 'confirmPassword'? API.validateSignupInput(target) : API.validateSignupInput(target, this.state.password);
    }

    setErrors(errors = {}) {
        this.setState({
            errors
        });
    }

    resetForm(){
        Object.keys(this.state).forEach(formField => {
            this.setState({
                [formField]: ''
            });
        });
    }

    signUp = (e) => {
        e.preventDefault();     
        const { username, password, email } = this.state;

        API.validateAll(
            e.target,
            'validateSignupInput',
            password
        )
        .then(errors => {
            //errors -> UserAPI.errors
             if (errors !== undefined) {                    
                this.setErrors(errors);
                throw new Error('Validation failed');
            }
        })
        .then(
            () => {
                API.saveUser({
                    id: API.getNextId() + 1,
                    username,
                    passwordHash: hashPassword(password),
                    email
                });
                    
                //display modal after successful signup
                this.props.toggleModal({
                    isOpen: true,
                    message: `Signed up as ${username}`,
                    links: signupModalLinks
                }); 
                this.resetForm();
        })
        .catch(err => console.log(err));        
    }

    componentWillUnmount() {
        //empty the errors object in the API (so that email and c.P. errors do not prevent the validation of the login form)
        API.resetAllErrors();
    }

    render(){
        const handleEvents = {
            onChange: this.handleChange,
            onBlur: this.handleBlur
        };

        return (          
            <UserForm 
                {...this.state}
                submitForm={this.signUp} 
                {...handleEvents}
                action="Sign up" 
                errors={this.state.errors}
            />
        );
    }
};

export default SignUpView;