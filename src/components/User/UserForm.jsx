import React from 'react';
import { Button, Form, Row } from 'reactstrap';
import CustomCol from '../Core/CustomCol';
import { Label, InputError } from '../Core/Form/FormComponents';
import { FormWrapper, StyledFormGroup as FormGroup, StyledInput as Input } from '../../StyledComponents/UserForm';

/**
 * props: submitForm, action, handleChange, handleBlur, handleFocus, username, password, confirmPassword, email, errors
 */
const UserForm = ({ submitForm, action, username, password, confirmPassword, email, errors = {}, redirectToReferrer, ...handleEvents }) => {
    
    const { usernameError, emailError, passwordError, confirmPasswordError } = errors;

    return (
        <FormWrapper>
            <Form name="userForm" noValidate onSubmit={submitForm}>
                <FormGroup>
                   <Label for="username">Username</Label>
                    <Input 
                        type="text" id="username" name="username" minLength="4" maxLength="20" bsSize="lg"
                        value={username} {...handleEvents}  
                    /> 
                    {usernameError &&
                        <InputError target="username" message={usernameError} />
                    }                   
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input 
                        type="password" id="password" name="password" minLength="8" maxLength="20" bsSize="lg"
                        value={password} {...handleEvents}
                    />
                    {passwordError && 
                       <InputError target="password" message={passwordError} />
                    }
                </FormGroup>
                {action === 'Sign up'  &&
                    <FormGroup>
                        <Label for="confirmPassword">Confirm password</Label>
                        <Input 
                            type="password" id="confirmPassword" name="confirmPassword" minLength="8" maxLength="20" bsSize="lg"
                            value={confirmPassword} {...handleEvents}
                        />
                        {confirmPasswordError && 
                            <InputError target="confirmPassword" message={confirmPasswordError} />
                }
                    </FormGroup>
                }
                {action === 'Sign up'  &&
                    <FormGroup>
                        <Label for="email">E-Mail</Label>
                        <Input 
                            type="email" id="email" name="email" bsSize="lg" 
                            value={email} {...handleEvents}
                        />
                        {emailError && 
                    <InputError target="email" message={emailError} />
                }
                    </FormGroup>
                }
                <Row noGutters>
                    <CustomCol xxs="auto" sm={{offset: 1}}>
                        <Button type="submit" color="primary">{action}</Button>
                    </CustomCol>
                </Row>
            </Form>
        </FormWrapper>
    );
};

export default UserForm;