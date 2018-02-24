import { Icon, Rate } from 'antd';
import React, { Component } from 'react';
import styled from 'styled-components';
import { FlexContainer, FlexItem } from '../components/Flex';

type Props = any;
type State = any;

const layoutStyle: React.CSSProperties = {
  fontFamily: 'Open Sans',
};

const contentStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: 24,
};

const HeaderContainer = FlexItem.extend`
  @media screen and (max-width: 1023px) {
    flex: auto;
    justify-content: flex-end;
  }
`;

const HeaderText = styled.h1`
  transition: transform 500ms ease-out;
  transform: translateY(100vh);

  &.animate-in {
    transform: translateY(0);
  }
`;

const TextContainer = FlexItem.extend;

export default class Skills extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <FlexContainer>
        <HeaderContainer>
          <HeaderText className={'animate-in'}>My Skills</HeaderText>
        </HeaderContainer>

        <TextContainer>
          <p><Rate disabled defaultValue={4} /></p>
          <p><Rate disabled defaultValue={4} /></p>
        </TextContainer>
      </FlexContainer>
    );
  }
}
