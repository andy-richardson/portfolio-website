import { Button, Col, Icon, Layout, Row, Tag } from 'antd';
import { FlexContainer, FlexItem } from 'components/Flex';
import { HeaderContainer, HeaderText } from 'components/Header';
import { Sizes } from 'config/Style';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = any;
type State = any;
export default class Hero extends Component<Props, State> {
  public state: State = {
    classes: {
      button: ['fade-in'],
      header: ['fade-in'],
      text1: ['fade-in'],
      text2: ['fade-in'],
      text3: ['fade-in'],
    },
  };

  public componentDidMount(): void {
    this.addElements();
  }

  public render(): JSX.Element {
    return (
      <FlexContainer>
        <HeaderContainer>
          <HeaderText className={this.state.classes.header.join(' ')}>
            Welcome to my world
          </HeaderText>
        </HeaderContainer>

        <TextContainer>
          <TextItem className={this.state.classes.text1.join(' ')}>
          I'm passionate about collaborating with teams to design, architect, and implement
          great products</TextItem>

          <TextItem className={this.state.classes.text2.join(' ')}>
            I am a strong believer and frequent contributor to open source projects
          </TextItem>

          <TextItem className={this.state.classes.text3.join(' ')}>
          I have years of experience working with technologies such as
          &nbsp;<Tag color="blue">React</Tag>
          &nbsp;<Tag color="magenta">Node</Tag> and
          &nbsp;<Tag color="green">Docker</Tag>
          </TextItem>

        </TextContainer>

        <ButtonContainer className={this.state.classes.button.join(' ')}>
          <Link to="/projects">
            <Icon type="arrow-right"/>
          </Link>
        </ButtonContainer>
      </FlexContainer>
    );
  }

  private addElements(): void {
    const animations: any = {
      button: 1000,
      header: 200,
      text1: 400,
      text2: 600,
      text3: 800,
    };

    Object.keys(animations)
    .forEach((el: any) =>
      setTimeout(() => {
        const classes = {...this.state.classes};
        classes[el].push('active');
        this.setState({ classes });
      }, animations[el]),
    );
  }
}

const TextContainer = FlexItem.extend`
`;

const TextItem = styled.div`
  line-height: 25px;
  margin: 20px 0;

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

  a {
    color: #444;
  }

  @media (min-width: ${Sizes.minL}) {
    height: 100%;
    right: 20px;
  }

  @media (max-width: ${Sizes.maxM}) {
    bottom: 20px;
    left: 0;
    width: 100vw;
  }
`;
