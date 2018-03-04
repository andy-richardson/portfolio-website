import { Col, Icon, Row } from 'antd';
import { ButtonContainer } from 'components/Button';
import { FlexContainer, FlexItem } from 'components/Flex';
import { HeaderContainer, HeaderText } from 'components/Header';
import ProjectItem from 'components/ProjectItem';
import { Sizes } from 'config/Style';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

export default class Projects extends Component<Props, State> {
  public state: State = {
    buttonIn: false,
    headerIn: false,
    project1: false,
    project2: false,
    project3: false,
  };

  public componentDidMount(): void {
    setTimeout(() => this.setState({headerIn: true}), 200);
    setTimeout(() => this.setState({project1: true}), 600);
    setTimeout(() => this.setState({project2: true}), 1200);
    setTimeout(() => this.setState({project3: true}), 1800);
    setTimeout(() => this.setState({buttonIn: true}), 2600);
  }

  public render(): JSX.Element {
    const projectItems = projects.map((item: any, i: number) => {
      return (
        <ProjectItemContainer
          key={i}
          className={(this.state[`project${i + 1}`]) ? 'animate-in' : ''}
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
          <Link to="/skills">
            <Icon type="arrow-right" />
          </Link>
        </ButtonContainer>
      </FlexContainer>
    );
  }
}

const ProjectsContainer = FlexItem.extend`
  display: flex;

  & > div {
    min-width: 100%;
    margin-bottom: 20px;
  }

  @media screen and (max-width: ${Sizes.maxM}) {
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
