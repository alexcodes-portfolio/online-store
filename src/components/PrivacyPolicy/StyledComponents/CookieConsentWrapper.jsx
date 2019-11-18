import styled, { keyframes } from 'styled-components';

const slideup = keyframes`
from {
	bottom: -10em;
	opacity: .5;
}
to {
	bottom: 0;
	opacity: 1;
}
`; 

const CookieConsentWrapper = styled.div`
	position: fixed;
	width: 100%;
	bottom: -10em;
	opacity: .5;
	animation: ${slideup} 1s ease-in forwards;
`;

export default CookieConsentWrapper;