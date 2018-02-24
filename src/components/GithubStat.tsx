import { Avatar, Card, Icon, Tag } from 'antd';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../config/Style';

interface Props {
  title: string;
  data?: number;
}

interface State {
  test?: any
}

const Wrapper = styled.div`
  padding: 0 20px;
`;

const Header = styled.h3`
  font-size: 14px;
  text-align: center;
`;

const Value = styled.p`
  color: ${Colors.primary};
  font-size: 20px;
  text-align: center;
`;

export default class GithubStats extends Component<Props, State> {
  public render() {
    return (
      <Wrapper>
        <Header>{this.props.title}</Header>
        <Value>{this.props.data}</Value>
      </Wrapper>
    );
  }
}
