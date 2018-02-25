import { Button, Col, Icon, Layout, Row, Tag } from 'antd';
import { FlexContainer, FlexItem } from 'components/Flex';
import { HeaderContainer, HeaderText, SubheaderText } from 'components/Header';
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = any;
interface State {
  classes: {
    button: string[];
    header: string[];
    subHeader: string[];
    tag: string[];
  };
  tag: {
    color: string;
    text: string;
  };
}

export default class Hero extends Component<Props, State> {
  public state: State = {
    classes: {
      button: ['fade-in'],
      header: ['fade-in'],
      subHeader: ['fade-in'],
      tag: ['fade-in'],
    },
    tag: {
      color: tagColors[0],
      text: tags[0],
    },
  };
  private tagDuration = 4000;
  private animationDuration = 800;

  public componentDidMount(): void {
    this.addElements();
    this.animateTags();
  }

  public render(): JSX.Element {
    return (
      <FlexContainer className="flexContainer">
        <HeaderContainer>
          <HeaderText className={this.state.classes.header.join(' ')}>Hi there.</HeaderText>
          <SubheaderText className={this.state.classes.subHeader.join(' ')}>
            My name is Andy. I am a...
          </SubheaderText>
          <div style={{maxWidth: 'min-content'}} className={this.state.classes.tag.join(' ')}>
            <Tag
              color={this.state.tag.color}
            >
              {this.state.tag.text}
            </Tag>
          </div>
        </HeaderContainer>

        <ButtonContainer className={this.state.classes.tag.join(' ')}>
          <Link to="/about">
            <Icon type="arrow-right" />
          </Link>
        </ButtonContainer>
      </FlexContainer>
    );
  }

  private animateTags(): void {
    let i = 1;
    setInterval(() => this.animateTag(i++), this.tagDuration + (this.animationDuration * 2));
  }

  private animateTag(index: number): void {
    this.showTag();
    setTimeout(() => this.hideTag(), this.tagDuration + this.animationDuration);
    setTimeout(() => this.changeTag(index), this.tagDuration + (this.animationDuration) * 2);
  }

  private showTag(): void {
    const classes = {...this.state.classes};
    classes.tag.push('active');
    this.setState({ classes });
  }

  private hideTag(): void {
    const classes = {...this.state.classes};
    classes.tag.pop();

    this.setState({
      classes,
    });
  }

  private changeTag(index: number) {
    this.setState({
      tag: {
        color: tagColors[++index % tagColors.length],
        text: tags[++index % tags.length],
      },
    });
  }

  private addElements(): void {
    const animations = {
      button: 900,
      header: 200,
      subHeader: 400,
      tag: 600,
    };

    Object.keys(animations)
    .forEach((el: any) =>
      setTimeout(() => {
        if (el === 'tag') {
          return this.animateTag(0);
        }

        const classes: any = {...this.state.classes};
        classes[el].push('active');
        this.setState({ classes });
      }, animations[el]),
    );
  }
}

const tagColors: string[] = [
  'green',
  'magenta',
  'blue',
  'volcano',
  'cyan',
  'purple',
  'gold',
  'geekblue',
  'lime',
  'orange',
];

const tags: string[] = [
  'full stack developer',
  'team leader',
  'software architect',
  'blockchain enthusiast',
  'react developer',
];

const ButtonContainer = FlexItem.extend`
  text-align: center;
  font-size: 24px;

  a {
    color: #444;
  }
`;
