import { Icon, Rate } from 'antd';
import { FlexContainer, FlexItem } from 'components/Flex';
import GithubStats from 'components/GithubStats';
import { HeaderContainer, HeaderText } from 'components/Header';
import React, { Component } from 'react';
import styled from 'styled-components';

type Props = any;
type State = any;

export default class Github extends Component<Props, State> {
  public state: State = {
    buttonIn: false,
    headerIn: false,
    subheaderIn: false,
  };

  public render(): JSX.Element {
    return (
      <FlexContainer>
        <HeaderContainer>
          <HeaderText className="animate-in">
            But you can see for yourself
          </HeaderText>
        </HeaderContainer>

        <FlexItem>
          <GithubStats username="andyrichardson"/>
        </FlexItem>
      </FlexContainer>
    );
  }
}
