import { Icon, Rate } from 'antd';
import { ButtonContainer } from 'components/Button';
import { FlexContainer, FlexItem } from 'components/Flex';
import { HeaderContainer, HeaderText } from 'components/Header';
import { Sizes } from 'config/Style';
import GithubLogo from 'images/github-logo.png';
import LinkedinLogo from 'images/linkedin-logo.png';
import TwitterLogo from 'images/twitter-logo.png';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = any;
type State = any;

export default class Online extends Component<Props, State> {
  public state: State = {
    classes: {
      button: ['fade-in'],
      header: ['fade-in'],
    },
  };

  public componentDidMount(): void {
    this.addElements();
  }

  public render(): JSX.Element {
    return (
      <FlexContainer>
        <HeaderContainer>
          <HeaderText className={this.state.classes.header.join(' ')}>You can find me on</HeaderText>
        </HeaderContainer>

        <ImageContainer>
          <a href="https://github.com/andyrichardson/" target="_blank">
            <Image src={GithubLogo}/>
          </a>

          <a href="https://www.linkedin.com/in/andyrichardsondeveloper/" target="_blank">
            <Image src={LinkedinLogo}/>
          </a>

          <a href="https://twitter.com/andyrichrich" target="_blank">
            <Image src={TwitterLogo}/>
          </a>
        </ImageContainer>

        <ButtonContainer className={this.state.classes.button.join(' ')}>
          <Link to="/">
            <Icon type="reload" />
          </Link>
        </ButtonContainer>
      </FlexContainer>
    );
  }

  private addElements() {
    const animations: any = {
      button: 2100,
      header: 200,
    };

    Object.keys(animations)
    .forEach((el: any) =>
      setTimeout(() => {
        const classes: any = {...this.state.classes};
        classes[el].push('active');
        this.setState({ classes });
      }, animations[el]),
    );
  }
}

const ImageContainer = FlexItem.extend`
  align-items: center;

  @media (min-width: ${Sizes.minL}) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  margin: 30px;
  width: 80px;
`;
