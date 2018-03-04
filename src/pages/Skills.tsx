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

export default class Skills extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <FlexContainer>
        <HeaderContainer>
          <HeaderText className={'animate-in'}>I am skilled in</HeaderText>
        </HeaderContainer>

        <SkillsContainer>
          <SkillItem>
            <h3>Full Stack Development</h3>
            <p>
              Using bleeding edge languages and frameworks to deliver scalable
              websites and services.
            </p>
            <Rate disabled={true} defaultValue={5} />
          </SkillItem>

          <SkillItem>
            <h3>Developer Experience</h3>
            <p>Creating and integrating tools for other developers to use.</p>
            <p><Rate disabled={true} defaultValue={5} /></p>
          </SkillItem>

          <SkillItem>
            <h3>Software Architecture</h3>
            <p>Soluction design and delivery which is focused on growth and efficiency.</p>
            <p><Rate disabled={true} defaultValue={4} /></p>
          </SkillItem>

          <SkillItem>
            <h3>Developer Operations</h3>
            <p>Containerisation, integration and deployment for optimal delivery.</p>
            <p><Rate disabled={true} defaultValue={4} /></p>
          </SkillItem>
        </SkillsContainer>

        <ButtonContainer>
          <Link to="/skills">
            <Icon type="arrow-right" />
          </Link>
        </ButtonContainer>
      </FlexContainer>
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
