import { Icon, Layout, Menu } from 'antd';
import 'components/Animation';
import Circles from 'components/Circles';
import About from 'pages/About';
import Github from 'pages/Github';
import Hero from 'pages/Hero';
import Projects from 'pages/Projects';
import Skills from 'pages/Skills';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
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
        <Layout>
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

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  body {
    font-family: 'Open Sans', sans-serif;
    max-height: 100vh;
    max-width: 100vw;
  }
`;
