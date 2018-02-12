import { Button, Col, Icon, Layout, Row, Tag } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = any;
type State = any;

const FlexContainer = styled.div`
  background: #fff;
  display: flex;
  padding: 20px 25%;

  @media screen and (max-width: 1023px) {
    padding: 30px;
    flex-direction: column;
  }

  .slideFromRight {
    transform: translateX(100vw);
  }
`;

const FlexItem = styled.div`
  padding: 5%;
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
    flex: auto;
    justify-content: flex-end;
  }
`;

const TextContainer = FlexItem.extend`
`;

const TextItem = styled.p`
  line-height: 25px;
  transition: transform 500ms ease-out;
  transform: translateY(100vh);

  &.animate-in {
    transform: translateY(0);
  }

  +p {
    margin-top: 30px;
  }

  .ant-tag {
    margin-right: 0;
  }
`;

const ButtonContainer = FlexItem.extend`
  text-align: center;
  font-size: 24px;
  position: absolute;
  right: 15%;
  transition: transform 300ms ease-out;
  transform: translateY(100vh);

  a {
    color: #444;
  }

  &.animate-in {
    transform: translateY(0vh);
  }

  @media screen and (max-width: 1023px) {
    left: 0;
    right: 0;
    bottom: 50px;
  }
`;

const HeaderText = styled.h1`
  transition: transform 500ms ease-out;
  transform: translateY(100vh);

  &.animate-in {
    transform: translateY(0);
  }
`;

const SubheaderText = styled.h2`
`;

export default class Hero extends Component<Props, State> {
  public state: State = {
    buttonIn: false,
    headerIn: false,
    text1: false,
    text2: false,
    text3: false,
  };

  public componentDidMount() {
    setTimeout(() => this.setState({headerIn: true}), 200);
    setTimeout(() => this.setState({text1: true}), 400);
    setTimeout(() => this.setState({text2: true}), 2000);
    setTimeout(() => this.setState({text3: true}), 3600);
    setTimeout(() => this.setState({buttonIn: true}), 5200);
  }

  public render() {
    return (
      <FlexContainer>
        <HeaderContainer>
          <HeaderText className={(this.state.headerIn) ? 'animate-in' : ''}>
            Welcome to my world
          </HeaderText>
        </HeaderContainer>

        <TextContainer>
          <TextItem className={(this.state.text1) ? 'animate-in' : ''}>
          I'm passionate about collaborating with teams to design, architect, and implement
          great products</TextItem>

          <TextItem className={(this.state.text2) ? 'animate-in' : ''}>
            I am a strong believer and frequent contributor to open source projects
          </TextItem>

          <TextItem className={(this.state.text3) ? 'animate-in' : ''}>
          I have years of experience working with technologies such as
          &nbsp;<Tag color="blue">React</Tag>
          &nbsp;<Tag color="magenta">Node</Tag> and
          &nbsp;<Tag color="green">Docker</Tag>
          </TextItem>

        </TextContainer>

        <ButtonContainer className={(this.state.buttonIn) ? 'animate-in' : ''}>
          <Link to="/projects">
            <Icon type="arrow-right" />
          </Link>
        </ButtonContainer>
      </FlexContainer>
    );
  }
}
