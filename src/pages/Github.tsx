import { Icon, Rate } from 'antd';
import React, { Component } from 'react';
import styled from 'styled-components';
import { FlexContainer, FlexItem } from '../components/Flex';
import GithubStats from '../components/GithubStats';
import { HeaderContainer, HeaderText } from '../components/Header';

type Props = any;
type State = any;

export default class Skills extends Component<Props, State> {
  public state: State = {
    buttonIn: false,
    headerIn: false,
    subheaderIn: false,
  };

  public render() {
    return (
      <FlexContainer>
        <HeaderContainer>
          <HeaderText className='animate-in'>
            But you can see for yourself
          </HeaderText>
        </HeaderContainer>

        <FlexItem>
          <GithubStats/>
        </FlexItem>
      </FlexContainer>
    );
  }
}
