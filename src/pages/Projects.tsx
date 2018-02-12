import { Col, Icon, Row } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectItem from '../components/ProjectItem';

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

const FlexContainer = styled.div`
  background: #fff;
  display: flex;
  padding: 20px 20%;

  @media screen and (max-width: 1023px) {
    padding: 30px;
    flex-direction: column;
  }

  .slideFromRight {
    transform: translateX(100vw);
  }
`;

const FlexItem = styled.div`
  padding: 5%;
  display: flex;
  flex: 50%;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 1024px) {
    min-height: 100%;
  }
`;

const HeaderContainer = FlexItem.extend`
  @media screen and (max-width: 1023px) {
    flex: auto;
    justify-content: flex-end;
  }
`;

const ProjectsContainer = FlexItem.extend`
  display: flex;
  flex-direction: column;

  & > div {
    min-width: 100%;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1023px) {
    display: block;
    padding: 0;
  }
`;

const ProjectItemContainer = styled.div`
  transition: transform 500ms ease-out;
  transform: translateX(100vw);

  &.animate-in {
    transform: translateX(0);
  }
`;

const ButtonContainer = FlexItem.extend`
  text-align: center;
  font-size: 24px;
  position: absolute;
  right: 5%;
  transition: transform 300ms ease-out;
  transform: translateY(100vh);

  a {
    color: #444;
  }

  &.animate-in {
    transform: translateY(0vh);
  }

  @media screen and (max-width: 1023px) {
    display: block;
    position: inherit;
    max-height: min-content;
  }
`;

const HeaderText = styled.h1`
  transition: transform 500ms ease-out;
  transform: translateY(100vh);

  &.animate-in {
    transform: translateY(0);
  }
`;

export default class Projects extends Component<Props, State> {
  public state: State = {
    buttonIn: false,
    headerIn: false,
    project1: false,
    project2: false,
    project3: false,
  };

  public componentDidMount() {
    setTimeout(() => this.setState({headerIn: true}), 200);
    setTimeout(() => this.setState({project1: true}), 400);
    setTimeout(() => this.setState({project2: true}), 1000);
    setTimeout(() => this.setState({project3: true}), 1600);
    setTimeout(() => this.setState({buttonIn: true}), 2400);
  }

  public render() {
    const projectItems = projects.map((item: any, i: number) => {
      return (
        <ProjectItemContainer
          key={i}
          className={(this.state[`project${i+1}`]) ? 'animate-in' : ''}
        >
          <ProjectItem
            title={item.title}
            description={item.description}
            tags={item.tags}
            repo={item.repo}
            link={item.link}
            downloads={item.downloads}
          />
        </ProjectItemContainer>
      );
    });

    return (
      <FlexContainer>
        <HeaderContainer>
          <HeaderText className={(this.state.headerIn) ? 'animate-in' : ''}>
            Here are my recent projects
          </HeaderText>
        </HeaderContainer>

        <ProjectsContainer>
          {projectItems}
        </ProjectsContainer>

        <ButtonContainer className={(this.state.buttonIn) ? 'animate-in' : ''}>
          <Link to="/projects">
            <Icon type="arrow-right" />
          </Link>
        </ButtonContainer>
      </FlexContainer>
    );
  }
}
