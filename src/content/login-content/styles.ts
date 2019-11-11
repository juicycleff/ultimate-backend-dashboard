
import styled from 'styled-components';
import {responsive} from '../../utils/responsive';

export const Wrapper = styled.div`
  display: flex;
  min-width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  
  ${responsive.lg} {
    width: 40%;
  }
  
  ${responsive.md} {
    width: 40%;
  }
  
  ${responsive.smAndLess} {
    width: 90%;
  }
`;
