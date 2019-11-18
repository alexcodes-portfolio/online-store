import React from 'react';
import { logoutModalLinks } from '../Core/Modal/ModalLinks';

//rest: to (path), activeClassName (if applies)
const LinkWrapper = ({CustomNavLink, hideNavbar, toggleModal, onLoginStatusChange, ...rest}) => {
    
    function handleClick(e){
        //handle click on logout link:
        if (rest.to === '#') {
            e.preventDefault();
            toggleModal({
                isOpen: true,
                message: 'Do you really want to log out?',
                links: logoutModalLinks,
                handleClick: () => {
                    onLoginStatusChange();
                    toggleModal();
                }
            });
        }        
        hideNavbar();
    }
    return (    
        <CustomNavLink {...rest} onClick={handleClick} />
    );
}

export default LinkWrapper;