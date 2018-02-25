import { Icon, Layout, Menu } from 'antd';
import 'components/Animation';
import About from 'pages/About';
import Github from 'pages/Github';
import Hero from 'pages/Hero';
import Projects from 'pages/Projects';
import Skills from 'pages/Skills';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

type Props = any;
type State = any;

export default class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <Router>
        <Layout style={layoutStyle}>
          <Route exact={true} path="/" component={Hero}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/github" component={Github}/>
        </Layout>
      </Router>
    );
  }
}

const layoutStyle: React.CSSProperties = {
  fontFamily: 'Open Sans',
};

const contentStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: 24,
};
