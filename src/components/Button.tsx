import { Sizes } from 'config/Style';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 24px;
  justify-content: center;
  text-align: center;

  a {
    color: #444;
  }

  @media (max-width: ${Sizes.maxM}) {
    bottom: 20px;
    left: 0;
    position: absolute;
    width: 100vw;
  }
`;
