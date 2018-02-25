import { Avatar, Card, Icon, Tag } from 'antd';
import { Colors } from 'config/Style';
import React, { Component } from 'react';
import styled from 'styled-components';

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
  font-weight: 600;
  text-align: center;
`;

interface Props {
  title: string;
  data: number | string;
}
type State = any;

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
