import { FlexItem } from 'components/Flex';
import styled from 'styled-components';

export const HeaderContainer = FlexItem.extend`
  @media screen and (max-width: 1023px) {
    flex: auto;
    justify-content: flex-end;
  }
`;

export const HeaderText = styled.h1`
`;

export const SubheaderText = styled.h2`
`;
