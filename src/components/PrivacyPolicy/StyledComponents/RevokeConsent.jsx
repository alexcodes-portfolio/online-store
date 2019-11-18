import React from 'react';
import styled from 'styled-components';

const RevokeConsent = styled.div`
	position: fixed;
	bottom: -2em;
	left: 3em;
	background: rgb(53, 53, 53);
	color: white;
	padding: .7em 1em;
	border-radius: .5em;
	transition: all .5s ease-in;

	:hover {
		bottom: .2em;
	}
`;

export default RevokeConsent;