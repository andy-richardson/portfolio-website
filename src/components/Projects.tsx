import { Col, Row } from 'antd';
import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

type Props = any;
type State = any;

const projects: any[] = [
  {
    description: 'Be notified of updates to Atom and install without leaving the editor.',
    downloads: 1000,
    link: 'https://atom.io/packages/atom-updater-linux',
    repo: 'https://github.com/andyrichardson/atom-updater-linux',
    tags: ['Atom', 'Open Source'],
    title: 'Atom Updater Linux',
  },
  {
    description: 'Npm package for retrieving a users contributions made in the last year',
    repo: 'https://github.com/andy-richardson/github-yearly-contributions',
    tags: ['npm', 'Open Source'],
    title: 'Github Yearly Contributions',
  },
  {
    description: 'Personal website',
    repo: 'https://github.com/andy-richardson/portfolio-website',
    tags: ['React', 'Open Source'],
    title: 'Portfolio Website',
  },
];

const headerStyle: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 600,
};

export default class Projects extends Component<Props, State> {
  public render() {
    const projectItems = projects.map((item: any, i: number) => {
      return (
        <Col xs={24} lg={8} style={{display: 'flex'}} key={i}>
          <ProjectItem
            title={item.title}
            description={item.description}
            tags={item.tags}
            repo={item.repo}
            link={item.link}
            downloads={item.downloads}
          />
        </Col>
      );
    });

    return (
      <Row>
        <h3 style={headerStyle}>Public Projects</h3>
        <Row gutter={16} type="flex">
          {projectItems}
        </Row>
      </Row>
    );
  }
}
