import styled from 'styled-components';
import { FlexItem } from './Flex';

export const HeaderContainer = FlexItem.extend`
  @media screen and (max-width: 1023px) {
    flex: auto;
    justify-content: flex-end;
  }
`;

export const HeaderText = styled.h1`
  transition: transform 500ms ease-out;
  transform: translateY(100vh);

  &.animate-in {
    transform: translateY(0);
  }
`;
