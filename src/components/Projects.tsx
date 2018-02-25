import { Col, Row } from 'antd';
import ProjectItem from 'components/ProjectItem';
import React, { Component } from 'react';
import styled from 'styled-components';

interface Project {
  description: string;
  downloads: number;
  link: string;
  repo: string;
  tags: string[];
  title: string;
}

type Props = any;
interface State {
  projects: Project[];
}

export default class Projects extends Component<Props, State> {
  public render(): JSX.Element {
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
      <Container>
        <HeaderText>Here are some of my recent projects</HeaderText>
        {projectItems}
      </Container>
    );
  }
}

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

const HeaderText = styled.h1`
  font-size: 21px;
  color: #fff;
`;

const Container = styled.div`
  background-color: #1890FF;
  padding: 20px;
`;
