import { FlexItem } from 'components/Flex';
import styled from 'styled-components';

export const HeaderContainer = FlexItem.extend`
  @media screen and (max-width: 1023px) {
    display: block;
    flex: auto;
  }
`;

export const HeaderText = styled.h1`
  font-size: 20px;
`;

export const SubheaderText = styled.h2`
`;
