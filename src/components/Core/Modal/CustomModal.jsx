import React, { Component } from 'react';
import { ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Wrapper } from '../../../StyledComponents/Elements';
import { StyledModal } from '../../../StyledComponents/Extras';
import { StyledModalLink } from '../../../StyledComponents/Link';

class CustomModal extends Component {
      
    toggle = () => {   
        this.props.toggleModal();
    };

    render() {
        const { isOpen, message, links, handleClick } = this.props;
        //handleClick: special click handler only for log out link

        return (
            <Wrapper>
                <StyledModal isOpen={isOpen} toggle={this.toggle} zIndex="1072">
                    <ModalHeader toggle={this.toggle}/>
                    <ModalBody>{message}</ModalBody>
                    <ModalFooter>
                        {isOpen && links.map( props => 
                            <StyledModalLink 
                                key={props.children} {...props} onClick={props.onClick? handleClick : this.toggle} 
                            />
                            )
                        } 
                    </ModalFooter>
                </StyledModal>
            </Wrapper>
        );
    }
}

export default CustomModal;

/**
 * Modals:
 * 1. Cart row: product deleted
 * 2. Product view: product put into cart
 * 3. Login error
 * 4. Sign up success
 * 5. Log out confirm
 */