import { Icon, Rate } from 'antd';
import { ButtonContainer } from 'components/Button';
import { FlexContainer, FlexItem } from 'components/Flex';
import { HeaderContainer, HeaderText } from 'components/Header';
import { Sizes } from 'config/Style';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = any;
type State = any;

interface Skill {
  label: string;
  description: string;
  rating: number;
}

export default class Skills extends Component<Props, State> {
  public state: State = {
    classes: {
      button: ['fade-in'],
      header: ['fade-in'],
      skill1: ['fade-in'],
      skill2: ['fade-in'],
      skill3: ['fade-in'],
      skill4: ['fade-in'],
    },
  };

  private skills: Skill[] = [
    {
      description: 'Using bleeding edge languages and frameworks to deliver scalable websites and services.',
      label: 'Full Stack Development',
      rating: 5,
    },
    {
      description: 'Creating and integrating tools for other developers to use.',
      label: 'Developer Experience',
      rating: 5,
    },
    {
      description: 'Soluction design and delivery which is focused on growth and efficiency.',
      label: 'Software Architecture',
      rating: 4,
    },
    {
      description: 'Containerisation, integration and deployment for optimal delivery.',
      label: 'Developer Operations',
      rating: 4,
    },
  ];

  public componentDidMount(): void {
    this.addElements();
  }

  public render(): JSX.Element {
    return (
      <FlexContainer>
        <HeaderContainer>
          <HeaderText className={this.state.classes.header.join(' ')}>I am skilled in</HeaderText>
        </HeaderContainer>

        <SkillsContainer>
          {this.skillList()}
        </SkillsContainer>

        <ButtonContainer className={this.state.classes.button.join(' ')}>
          <Link to="/skills">
            <Icon type="arrow-right" />
          </Link>
        </ButtonContainer>
      </FlexContainer>
    );
  }

  private addElements() {
    const animations: any = {
      button: 2100,
      header: 200,
      skill1: 600,
      skill2: 1000,
      skill3: 1400,
      skill4: 1800,
    };

    Object.keys(animations)
    .forEach((el: any) =>
      setTimeout(() => {
        const classes: any = {...this.state.classes};
        classes[el].push('active');
        this.setState({ classes });
      }, animations[el]),
    );
  }

  private skillList() {
    return this.skills.map(
      (s: Skill, index: number) => (
        <SkillItem className={this.state.classes[`skill${++index}`].join(' ')} key={index}>
          <h3>{s.label}</h3>
          <p>{s.description}</p>
          <Rate disabled={true} defaultValue={s.rating} />
        </SkillItem>
      ),
    );
  }
}

const SkillItem = styled.div`
  padding: 0;
  padding-bottom: 30px;
`;

const SkillsContainer = FlexItem.extend`
  @media screen and (max-width: ${Sizes.maxM}) {
    display: block;
    padding: 0;
  }
`;
