import { Icon, Layout, Menu } from 'antd';
import React, { Component } from 'react';

const { Header, Sider, Content } = Layout;

type Props = any;
type State = any;

const style: React.CSSProperties = {
  padding: 24,
};

export default class Hero extends Component<Props, State> {
  public render() {
    return (
      <Content style={style}>
        <h1>
          Hi there.
        </h1>
        <h2>
          My name is Andy Richardson. I am a <b>software architect</b> & <b>full stack developer</b>.
        </h2>
      </Content>
    );
  }
}
