import styled from 'styled-components';
import { sm, md, xl } from './MediaQueries';

export const Wrapper = styled.div``;

export const StyledParagraph = styled.p`
    ${props => props.centered && 
      `text-align: center;
      padding: 0 .2em;`}

    @media ${sm} {
      text-align: left;
    }

    @media ${xl} {
      font-size: 1.1em;
      ${props => props.marginTop && 
        'margin-top: 1.5rem;'
      }
    }
`;

export const UnstyledSpan = styled.span``;

export const StyledSpan = styled.span`
    @media ${md} {
      display: none;
    }
`;

export const StyledImage = styled.img`
  max-width:  100%; 
  display: inline-block;
  margin: ${props => props.withMargin? '1em 0' : 0};
`;

export const StyledHr = styled.hr`
  width: 100%;
  margin-top: ${props => props.marginTop || '1em'};
  margin-bottom: ${props => props.marginBottom || '1em'};
  @media ${md} {
    display: ${props => props.displayMd || 'block'};
  }
`;

export const ErrorWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  height: 60vh;
`;