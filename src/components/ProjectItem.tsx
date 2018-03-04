import { Avatar, Card, Icon, Tag } from 'antd';
import GithubLogo from 'images/github-logo.png';
import React, { Component } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  description: string;
  link: string;
  repo: string;
  tags: string[];
  downloads?: number;
}
type State = any;

export default class ProjectItem extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  public render(): JSX.Element {
    return (
      <Card hoverable={true} style={{minWidth: '100%'}} onClick={this.handleCardClick}>
        <Row>
          <ImageLink href={this.props.repo} target="_blank" onClick={this.handleRepoClick}>
            <Image src={GithubLogo} />
          </ImageLink>
          <Header>{this.props.title}</Header>
          <Description>{this.props.description}</Description>
        </Row>

        <BottomRow>
          <DownloadsContainer>
            {this.getDownloads()}
          </DownloadsContainer>
          {this.getTags()}
        </BottomRow>
      </Card>
    );
  }

  private getTags(): JSX.Element {
    const tags = this.props.tags.map((tag: string, i: number) => {
      return (
        <Tag color={this.getTagColor(tag)} key={i}>
          {tag}
        </Tag>
      );
    });

    return (
      <TagsContainer>
        {tags}
      </TagsContainer>
    );
  }

  private getTagColor(label: string): string {
    const id = label.replace(/\s+/g, '').toLowerCase();
    return tagColors[id];
  }

  private getDownloads(): JSX.Element {
    if (this.props.downloads > 0) {
      return (
        <span>
          <Icon type="cloud-download-o" />
          <DownloadsText>{this.props.downloads}</DownloadsText>
        </span>
      );
    }
  }

  private handleCardClick(): void {
    window.open(this.props.link, '_blank');
  }

  private handleRepoClick(e: any): void {
    e.stopPropagation();
  }
}

const ImageLink = styled.a`
`;

const Image = styled.img`
  float: right;
  width: 20px;
`;

const Row = styled.div`
  margin-bottom: 35px;
  min-width: 100%;
`;

const BottomRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  position: relative;
`;

const DownloadsContainer = styled.div`
  display: inline-flex;
`;

const DownloadsText = styled.p`
  font-size: 14px;
  line-height: 1px;
  margin-bottom: 2px;
  margin-left: 5px;
  display: inline;
`;

const TagsContainer = styled.div`
  float: right;
  display: flex;
  justify-content: end;
`;

const Header = styled.h4`
  margin-right: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Description = styled.p`
  @media screen and (max-width: 1023px) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const tagColors: any = {
  atom: 'green',
  npm: 'magenta',
  opensource: 'gold',
  react: 'blue',
};
