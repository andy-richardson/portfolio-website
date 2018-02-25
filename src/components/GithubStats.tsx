import { Avatar, Card, Icon, Tag } from 'antd';
import { FlexContainer, FlexItem } from 'components/Flex';
import GithubStat from 'components/GithubStat';
import React, { Component } from 'react';
import styled from 'styled-components';

interface Props {
  username: string;
}
interface State {
  contributions: number | string;
  followers: number | string;
  repos: number | string;
}

export default class GithubStats extends Component<Props, State> {
  public state: State = {
    contributions: '..',
    followers: '..',
    repos: '..',
  };

  public render(): JSX.Element {
    return (
      <StatContainer>
        <GithubStat title="Public Repositories" data={this.state.repos}/>
        <GithubStat title="Contributions This Year" data={this.state.contributions}/>
        <GithubStat title="Followers" data={this.state.followers}/>
      </StatContainer>
    );
  }
}

const StatContainer = FlexItem.extend`
  align-items: center;
  flex-direction: row;
`;
