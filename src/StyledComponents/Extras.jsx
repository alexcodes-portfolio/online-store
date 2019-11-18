import styled from 'styled-components';
import { Progress, Modal } from 'reactstrap';
import { sm, md, lg } from './MediaQueries';

export const ScrollIconWrapper = styled.div`
    position: fixed;
    bottom: 1em;
    right: 1em;
  
  @media ${sm} {
    font-size: 150%;
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export const StyledProgress = styled(Progress)`
  width: 90%;

  @media ${md} {
    width: 80%;
  }

  @media ${lg} {
    width: 50%;
  }
`;

export const StyledModal = styled(Modal)`
  font-size: 1.5rem;
`;