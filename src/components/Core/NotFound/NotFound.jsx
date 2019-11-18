import React from 'react';
import { StyledLink as Link } from '../../../StyledComponents/Link';
import { ErrorWrapper as Wrapper } from '../../../StyledComponents/Elements';
import { CenteredRow, CenteredCol } from '../../../StyledComponents/Layout';
import Col from '../CustomCol';
import { ErrorHeading as Heading } from '../../../StyledComponents/Heading';
import { ErrorSubHeading as SubHeading } from '../../../StyledComponents/SubHeading';

const NotFound = ({heading, subheadings, children}) => (
    <Wrapper>
        <CenteredRow fullWidth>
            <Col xxs="10">
                <Heading>{heading}</Heading>
            </Col>
            <Col xxs="10">
				{ subheadings.map(subheading => <SubHeading key={subheading}>{subheading}</SubHeading>) }
            </Col>
			{children}
            <CenteredCol>
                <Link to="/">Return to homepage</Link>
            </CenteredCol>
        </CenteredRow>
    </Wrapper>
);

export default NotFound;