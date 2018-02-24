import { Avatar, Card, Icon, Tag } from 'antd';
import React, { Component } from 'react';
import styled from 'styled-components';
import { FlexContainer, FlexItem } from './Flex';
import GithubStat from './GithubStat';

interface Props {
  test?: any;
}

interface State {
  test?: any
}

const StatContainer = FlexItem.extend`
  align-items: center;
  flex-direction: row;
`;

export default class GithubStats extends Component<Props, State> {
  public render() {
    return (
      <StatContainer>
        <GithubStat title="Public Repositories" data="123"/>
        <GithubStat title="Contributions This Year" data="345"/>
        <GithubStat title="Followers" data=".."/>
      </StatContainer>
    );
  }
}
