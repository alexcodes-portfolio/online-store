import React, { Component, createRef } from 'react';
import { Redirect } from 'react-router-dom';
import { Row } from 'reactstrap';
import CustomCol from '../Core/CustomCol';
import UserForm from './UserForm';
import  * as events  from './HandleEvents';
import { loginErrorLinks } from '../Core/Modal/ModalLinks';
import { FullHeightWrapper as Wrapper, StyledParagraph } from '../../StyledComponents/Elements';
import { StyledLink } from '../../StyledComponents/Link';
import API from '../../API/UserAPI';
import Auth from './Auth';

/**
 * props: onLoginStatusChange, currentUser, cart, updateCart, history, location, match, 
 *     search, searchResults, clearSearch, toggleModal
 * state: username, password, redirectToReferrer, errors
 */
class LoginView extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false,
            errors: {}
        };

        this.formRef = createRef();
    }

    handleChange = e => {
        events.handleChange(this, e.target, () => this.validate(e));
    }; 

    handleBlur = e => {
        events.handleBlur(this, () => this.validate(e));
    };

    //remove the error message after the field is focused (only for login form)
    handleFocus = e => {
        events.handleFocus(this, e);
    
        if (document.documentElement.clientWidth < 767) {
            this.formRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    //check if the field is empty
    validate(e) {
        return API.validateLoginInput(e.target);
    }

    setErrors(errors = {}) {
        this.setState({
            errors
        });
    }

    login = e => {
        const { username, password } = this.state;

        e.preventDefault();        
        API.validateAll(
            e.target,
            'validateLoginInput'
        )
        .then(errors => { 
            //errors -> UserAPI.errors
            if (errors !== undefined) {                    
                this.setErrors(errors);
                //prevent authentication
                throw new Error('One or more required fields are empty.');
            }
        })
        .then(() => Auth.authenticate({username, password}))
        .then(
            user => {
                this.handleAuthenticationError(user);
                this.handleLoginStatusChange(user);
                this.redirect();       
        })
        .catch(err => console.log(err)); 
    };

    handleAuthenticationError(user) {
        if (user instanceof Error){             
            this.setErrors({
                loginError: 'Please check whether your username and password are correct.'
            });            
            throw new Error ('Identification failed');
        }

        if (user.id === undefined) {                
            throw new Error('A user must have an id.');
        }
    }

    handleLoginStatusChange(user){
        this.props.onLoginStatusChange(user);        
    }

    componentDidUpdate(prevProps, prevState){
        const currentLoginError = this.state.errors.loginError;

        if (currentLoginError && prevState.errors.loginError !== currentLoginError) {
            this.props.toggleModal({
                isOpen: true,
                message: currentLoginError,
                links: loginErrorLinks
            });
            //reset login error to hide modal
            this.setErrors();
        }        
    }

    redirect(){
        this.setState({
            redirectToReferrer: true
        });
    }
    
    componentWillUnmount(){
        this.setErrors();
        API.resetAllErrors();
    }

    render(){
        const { from } = this.props.location.state || { from: {pathname: '/'} };
        const { redirectToReferrer } = this.state;

        const handleEvents = {
            onChange: this.handleChange,
            onBlur: this.handleBlur,
            onFocus: this.handleFocus
        };
    
        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            );
        }

        return (
            <Wrapper ref={this.formRef}>
                <UserForm 
                    {...this.state} 
                    submitForm={this.login} 
                    {...handleEvents}
                    action="Log in" 
                />     
                <Row noGutters>
                    <CustomCol tag="hr" xxs="12" md={{size: 10, offset: 1}} lg="5" />
                    <CustomCol xxs="12" md={{size: 10, offset: 1}}>
                        <StyledParagraph marginTop>Don't have an account?</StyledParagraph>
                    </CustomCol>
                    <CustomCol xxs="12" md={{size: 10, offset: 1}}>
                        <StyledLink to='/signup'>Create a new account</StyledLink>
                    </CustomCol>
                </Row>
            </Wrapper> 
        );
    }
}

export default LoginView;