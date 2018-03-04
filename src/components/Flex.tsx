import { Sizes } from 'config/Style';
import styled from 'styled-components';

export const FlexContainer = styled.div`
  background: #fff;
  display: flex;
  max-height: 100vh;
  padding: 20px 20%;
  z-index: 200;

  @media screen and (max-width: ${Sizes.maxM}) {
    padding: 10px 30px;
    flex-direction: column;
  }

  .slideFromRight {
    transform: translateX(100vw);
  }
`;

export const FlexItem = styled.div`
  padding: 5%;
  display: flex;
  flex: 50%;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media screen and (min-width: ${Sizes.minL}) {
    min-height: 100%;
  }

  @media screen and (max-width: ${Sizes.maxM}) {
    padding: 20px 0;
  }
`;
