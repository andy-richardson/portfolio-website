import React, { Component } from 'react';
import styled from 'styled-components';

type Props = any;
type State = any;

export default class Circles extends Component<Props, State> {
  public state: State = {
    classes: {
      primary: ['fadeIn'],
      secondary: ['fadeIn'],
      text1: ['fadeIn'],
      text2: [''],
    },
  };

  private animationInterval: NodeJS.Timer;

  public componentDidMount() {
    this.flashText();
    setTimeout(() => this.goFullscreen('primary'), 900);
  }

  public render(): JSX.Element {
    return (
      <CircleContainer>
        <CirclePrimary className={this.state.classes.primary.join(' ')}>
          <Text className={this.state.classes.text1.join(' ')}>A</Text>
        </CirclePrimary>
        <CircleSecondary className={this.state.classes.secondary.join(' ')}>
          <Text className={this.state.classes.text2.join(' ')}>_</Text>
        </CircleSecondary>
      </CircleContainer>
    );
  }

  private addClass(key: string, value: string) {
    const classes: any = {...this.state.classes};
    classes[key].push(value);
    this.setState({ classes });
  }

  private removeClass(key: string, value: string) {
    const classes: any = {...this.state.classes};
    classes[key] = classes[key].filter((v: string) => v !== value);
    this.setState({ classes });
  }

  private flashText() {
    const onDuration = 2000;
    const offDuration = 900;

    const flash = () => {
      this.unhide('text2');
      setTimeout(() => this.hide('text2'), offDuration);
    };

    flash();
    this.animationInterval = setInterval(() => flash(), onDuration);
  }

  private stopFlashText() {
    clearInterval(this.animationInterval);
  }

  private goFullscreen(key: string) {
    this.stopFlashText();
    this.fadeOut('text1');
    this.fadeOut('text2');

    const other = (key === 'primary') ? 'secondary' : 'primary';
    setTimeout(() => this.shrink(other), 300);
    setTimeout(() => this.addClass(key, 'fullscreen'), 900);
  }

  private fadeIn(key: string) {
    this.removeClass(key, 'fadeOut');
    this.addClass(key, 'fadeIn');
  }

  private fadeOut(key: string) {
    this.removeClass(key, 'fadeIn');
    this.addClass(key, 'fadeOut');
  }

  private shrink(key: string) {
    const classes: any = {...this.state.classes};
    classes[key].push('shrink');
    this.setState({ classes });
  }

  private hide(key: string) {
    const classes: any = {...this.state.classes};
    classes[key].push('hidden');
    this.setState({ classes });
  }

  private unhide(key: string) {
    const classes = {...this.state.classes};
    classes[key] = this.state.classes[key].filter((s: string) => s !== 'hidden');
    this.setState({ classes });
  }
}

const Circle = styled.div`
  align-items: center;
  background-color: #404040;
  border-radius: 50%;
  display: flex;
  height: 150px;
  justify-content: center;
  position: relative;
  top: 0;
  width: 150px;

  @keyframes fullscreen {
    to {
      border-radius: 0;
      height: 100%;
      position: absolute;
      width: 100%;

      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }
  }

  @keyframes shrink {
    to {
      width: 0;
      height: 0;
    }
  }

  &.fullscreen {
    animation: fullscreen 300ms ease-in forwards;
  }

  &.shrink {
    animation: shrink 300ms ease-in forwards;
  }
`;

const CircleContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  width: 100%;
`;

const CirclePrimary = Circle.extend`
  left: 20px;
  background-color: #2D8EC4;
  z-index: 3;
`;

const CircleSecondary = Circle.extend`
  right: 20px;
  background-color: #404040;
  z-index: 2;
`;

const CircleTertiary = Circle.extend`
  background-color: #F2994A;
`;

const Text =  styled.p`
  color: #fff;
  font-size: 70px;
  margin-bottom: 0;
  z-index: 99;

  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }

  &.fade-out {
    animation: fadeOut 300ms ease-in forwards;
  }

  &.hidden {
    opacity: 0;
  }
`;
