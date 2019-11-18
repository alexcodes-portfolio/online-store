import styled from 'styled-components';
import { Button } from 'reactstrap';

export const ButtonGroup = styled.div.attrs(props => ({
	className: 'buttons'
}))`
	display: flex;
	justify-content: flex-end;
`;

export const ConsentButton = styled(Button).attrs(props => ({
	color: 'success'
}))`
	margin-right: 1em;
`;

export const DeclineButton = styled(Button).attrs(props => ({
	color: 'secondary'
}))``;