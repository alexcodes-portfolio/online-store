import React, { useState, useEffect } from 'react';
import CookieConsentWrapper from './StyledComponents/CookieConsentWrapper';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { Link } from 'react-router-dom';
import RevokeConsent from './StyledComponents/RevokeConsent';
import { ButtonGroup, ConsentButton, DeclineButton } from './StyledComponents/Buttons';

const Disclaimer = (props) => {  

	const [cookiesAllowed, setCookiesAllowed] = useState(false);
	const [bannerVisible, setBannerVisible] = useState(false);

	const enableCookies = () => {
		Cookies.set('cookieconsent', 'true', {expires: 100});
		setCookiesAllowed(true);
		setBannerVisible(false);
	};

	const disableCookies = () => {
		
		if (Cookies.get()) {
			Object.keys(Cookies.get()).forEach(key => {
				if (key !== 'CookieConsent') {
					Cookies.remove(key, {domain: 'react-app.eu'});
				}
			});
			setCookiesAllowed(false);
			setBannerVisible(false);
			Cookies.set('cookieconsent', 'false', {expires: 100});
			window['ga-disable-UA-152715531-1'] = true;
		} 
	};

	const handleClick = () => {
		setBannerVisible(true);
	};

	useEffect( 
		() => {
			if (cookiesAllowed) {
				window['ga-disable-UA-152715531-1'] = false;
				window.dataLayer = window.dataLayer || [];
				function gtag(){window.dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'UA-152715531-1');
			}

			//display banner when the page is being visited for the 1st time or the cache has been cleared
			if (!Cookies.get('cookieconsent')) {
				setBannerVisible(true);
			}
		}, [cookiesAllowed]
	);

   return (
	   	<CookieConsentWrapper>
			{!bannerVisible &&
				<RevokeConsent onClick={handleClick}>Cookie Policy</RevokeConsent>
			}
			{bannerVisible &&
				<CookieConsent buttonStyle={{display: 'none'}}>
					<h4>This is a mock online store. I am not selling anything!</h4>
					<h5>Most photos have been picked randomly and do not match the products.</h5>
					<p>This website uses cookies to enhance the user experience. Please let me know if you agree to cookies. For further information visit  <Link to="/privacypolicy">privacy policy.</Link></p>
					<ButtonGroup>
						<ConsentButton onClick={enableCookies}>Yes I agree</ConsentButton>
						<DeclineButton onClick={disableCookies}>I decline</DeclineButton>
					</ButtonGroup>
				</CookieConsent> 
			}
		</CookieConsentWrapper>	
	)
};		
	
export default Disclaimer;