import { Avatar, Card, Icon, Row, Tag } from 'antd';
import React, { Component } from 'react';

import GithubLogo from 'images/github-logo.png';

interface Props {
  title: string;
  description: string;
  tags: string[];
  logo: string;
  downloads?: number;
}
type State = any;

const styles: CSSMap = {
  card: {
    display: 'flex',
    marginBottom: 20,
    minWidth: '100%',
  },
  downloadText: {
    fontSize: 14,
    lineHeight: 1,
    marginBottom: 2,
    marginLeft: 5,
  },
  downloads: {
    bottom: 0,
    fontSize: 20,
    left: 0,
    padding: 'inherit',
    position: 'absolute',
  },
  header: {
    fontSize: 20,
  },
  img: {
    float: 'right',
    width: 25,
  },
  row: {
    marginBottom: 35,
    minWidth: '100%',
  },
  tags: {
    bottom: 0,
    padding: 'inherit',
    position: 'absolute',
    right: 0,
  },
};

const tagColors: any = {
  atom: 'green',
  npm: 'magenta',
  opensource: 'gold',
  react: 'blue',
};

export default class ProjectItem extends Component<Props, State> {
  public render() {
    return (
      <Card hoverable={true} style={styles.card}>
        <Row style={styles.row}>
          <img style={styles.img} src={GithubLogo} />
          <span>
            <h3 style={styles.header}>{this.props.title}</h3>
            <p>{this.props.description}</p>
          </span>
        </Row>

        {this.getDownloads()}
        {this.getTags()}
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
      <Row type="flex" justify="end" style={styles.tags}>
        {tags}
      </Row>
    );
  }

  private getTagColor(label: string): string {
    const id = label.replace(/\s+/g, '').toLowerCase();
    return tagColors[id];
  }

  private getDownloads(): JSX.Element {
    if (this.props.downloads > 0) {
      return (
        <Row type="flex" align="bottom" style={styles.downloads}>
          <Icon type="cloud-download-o" />
          <p style={styles.downloadText}>{this.props.downloads}</p>
        </Row>
      );
    }
  }
}
