import React, { Component, createRef } from 'react';
import { FullHeightWrapper as Wrapper } from '../../StyledComponents/Elements';
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
        this.formRef = createRef();
    }

    abortController = new window.AbortController();
   
    handleChange = (e) => {        
        events.handleChange(this, e.target, () => this.validate(e));
    };

    handleBlur = (e) => {
        events.handleBlur(this, () => this.validate(e));
    };

    handleFocus = () => {
        if (document.documentElement.clientWidth < 767) {
            this.formRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    validate({target}) {
        const { signal } = this.abortController;
        return target.name !== 'confirmPassword'? API.validateSignupInput(target, null, signal) : API.validateSignupInput(target, this.state.password, signal);
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
        const { signal } = this.abortController;

        API.validateAll(
            e.target,
            'validateSignupInput',
            password,
            signal
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
                    id: API.getNextId(signal) + 1,
                    username,
                    passwordHash: hashPassword(password),
                    email
                }, signal);
                    
                //display modal after successful signup
                this.props.toggleModal({
                    isOpen: true,
                    message: `Signed up as ${username}`,
                    links: signupModalLinks
                }); 
                this.resetForm();
        })
        .catch(err => err);        
    };

    componentWillUnmount() {
        //empty the errors object in the API (so that email and c.P. errors do not prevent the validation of the login form)
        API.resetAllErrors();
        this.abortController.abort();
    }

    render(){
        const handleEvents = {
            onChange: this.handleChange,
            onBlur: this.handleBlur,
            onFocus: this.handleFocus
        };

        return (    
            <Wrapper ref={this.formRef}>      
                <UserForm 
                    {...this.state}
                    submitForm={this.signUp} 
                    {...handleEvents}
                    action="Sign up" 
                    errors={this.state.errors}
                />
            </Wrapper>
        );
    }
};

export default SignUpView;