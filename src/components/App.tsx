import { Icon, Layout, Menu } from 'antd';
import React, { Component } from 'react';

import Hero from './Hero';
import Projects from './Projects';
const { Header, Sider, Content } = Layout;

type Props = any;
type State = any;

const layoutStyle: React.CSSProperties = {
  fontFamily: 'Open Sans',
};

const contentStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: 24,
};

export default class App extends Component<Props, State> {
  public state: State = {
    collapsed: false,
  };

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Layout style={layoutStyle}>
        <Hero/>
        <Content style={contentStyle}>
          <Projects/>
        </Content>
      </Layout>
    );
  }

  private toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
}
