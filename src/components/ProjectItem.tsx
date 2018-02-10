import { Avatar, Card, Row, Tag } from 'antd';
import React, { Component } from 'react';

interface Props {
  title: string;
  description: string;
  tags: string[];
  logo: string;
}
type State = any;

const tagColors: any = {
  atom: 'green',
  npm: 'magenta',
  opensource: 'gold',
  react: 'blue',
};

const cardStyle: React.CSSProperties = {
  display: 'flex',
  marginBottom: 20,
  minWidth: '100%',
};

const rowStyle: React.CSSProperties = {
  marginBottom: 18,
  minWidth: '100%',
};

const imgStyle: React.CSSProperties = {
  float: 'right',
  width: 25,
};

const headerStyle: React.CSSProperties = {
  fontSize: 20,
};

const tagRowStyle: React.CSSProperties = {
  bottom: 0,
  padding: 'inherit',
  position: 'absolute',
  right: 0,
};

export default class ProjectItem extends Component<Props, State> {
  public render() {
    return (
      <Card hoverable={true} style={cardStyle}>
        <Row style={rowStyle}>
          <img style={imgStyle} src={this.props.logo} />
          <span>
            <h3 style={headerStyle}>{this.props.title}</h3>
            <p>{this.props.description}</p>
          </span>
        </Row>
        <Row type="flex" justify="end" style={tagRowStyle}>
          {this.getTags()}
        </Row>
      </Card>
    );
  }

  private getTags(): JSX.Element[] {
    return this.props.tags.map((tag: string, i: number) => {
      return (
        <Tag color={this.getTagColor(tag)} key={i}>
          {tag}
        </Tag>
      );
    });
  }

  private getTagColor(label: string): string {
    const id = label.replace(/\s+/g, '').toLowerCase();
    return tagColors[id];
  }
}
