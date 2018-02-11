import { Button, Col, Icon, Layout, Row } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = any;
type State = any;

const FlexContainer = styled.div`
  background: #fff;
  display: flex;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;

const FlexItem = styled.div`
  display: flex;
  flex: 50%;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 1024px) {
    min-height: 100%;
  }
`;

const HeaderContainer = FlexItem.extend`
  @media screen and (max-width: 1023px) {
    justify-content: flex-end;
  }
`;

const ButtonContainer = FlexItem.extend`
  text-align: center;
  font-size: 40px;
`;

const HeaderText = styled.h1`
`;

const SubheaderText = styled.h2`
`;

export default class Hero extends Component<Props, State> {
  public render() {
    return (
      <FlexContainer>
        <HeaderContainer>
          <HeaderText>About Me</HeaderText>
        </HeaderContainer>

        <ButtonContainer>
          <Link to="/about">
            <Icon type="right-circle-o" />
          </Link>
        </ButtonContainer>
      </FlexContainer>
    );
  }
}
