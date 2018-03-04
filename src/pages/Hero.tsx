import { Button, Col, Icon, Layout, Row, Tag } from 'antd';
import { ButtonContainer } from 'components/Button';
import { FlexContainer, FlexItem } from 'components/Flex';
import { HeaderContainer, HeaderText, SubheaderText } from 'components/Header';
import { Sizes } from 'config/Style';
import React, { Component } from 'react';
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
  private animationInterval: NodeJS.Timer;

  public componentDidMount(): void {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 500);
    this.addElements();
    this.animateTags();
  }

  public componentWillUnmount(): void {
    clearInterval(this.animationInterval);
  }

  public render(): JSX.Element {
    return (
      <FlexContainer className="flexContainer">
        <HeaderContainerResponsive>
          <HeaderTextLarge className={this.state.classes.header.join(' ')}>Hi there.</HeaderTextLarge>
          <SubheaderText className={this.state.classes.subHeader.join(' ')}>
            My name is Andy. I am a...
          </SubheaderText>
          <TagContainer className={this.state.classes.tag.join(' ')}>
            <Tag color={this.state.tag.color}>
              {this.state.tag.text}
            </Tag>
          </TagContainer>
        </HeaderContainerResponsive>

        <ButtonContainer className={this.state.classes.button.join(' ')}>
          <Link to="/about">
            <Icon type="arrow-right" />
          </Link>
        </ButtonContainer>
      </FlexContainer>
    );
  }

  private animateTags(): void {
    let i = 0;
    this.animationInterval = setInterval(
      () => this.animateTag(i++), this.tagDuration + (this.animationDuration * 2),
    );
  }

  private animateTag(index: number): void {
    this.hideTag();
    setTimeout(() => this.changeTag(index), this.animationDuration);
    setTimeout(() => this.showTag(), this.animationDuration);
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
      button: 1200,
      header: 200,
      subHeader: 400,
      tag: 600,
    };

    Object.keys(animations)
    .forEach((el: any) =>
      setTimeout(() => {
        if (el === 'tag') {
          return this.showTag();
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

const HeaderContainerResponsive = HeaderContainer.extend`
  @media (max-width: ${Sizes.maxM}) {
    display: flex;
    height: 100vh;
    justify-content: center;
  }
`;

const HeaderTextLarge = HeaderText.extend`
  font-size: 30px;
`;

const TagContainer = styled.div`
  margin-top: 10px;
  max-width: min-content;
`;
