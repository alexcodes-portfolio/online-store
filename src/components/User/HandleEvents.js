export function handleChange(component, field, validate){

   const { name, value } = field;
   const currentError = name + 'Error';

    component.setState({
        [name]: value
    });        

    //do not validate if the field was focused for the first time (unless it's the password in a signup form)
    if (component.state.errors[currentError] === undefined && name !== 'password') return;
       
    validate() 
        //resolved promise containing an object like {userError: ''} is returned
        .then(error => {
            if (error !== undefined) {                    
                component.setErrors(error);
            }
        })
        .catch(err => console.log(err));
}

export function handleBlur(component, validate) {

    validate()
        .then(errors => {
            if (errors !== undefined) {                    
                component.setErrors(errors);
            }
        })
        .catch(err => console.log(err));
}

//only for login forms
export function handleFocus(component, event) {

    const { errors } = component.state;
    const  currentError = event.target.name + 'Error';

    if (errors.hasOwnProperty(currentError)) {
        errors[currentError] = '';
        component.setErrors(errors);
    }
}