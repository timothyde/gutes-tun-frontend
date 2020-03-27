import { withRouter } from "next/router";
import { Layout, Menu } from "antd";
import styled from "styled-components";

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: #fff;
  border-radius: 6px;
  margin: 16px 28px 16px 0;
  float: left;
`;

const { Header } = Layout;

const Head = ({ router }) => {
  return (
    <Header>
      <Logo />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[router.pathname]}
        onSelect={({ key }) => router.push(key)}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="/">Aktuelle Gesuche</Menu.Item>
        <Menu.Item key="/new">Gesuch Aufgeben</Menu.Item>
        <Menu.Item key="/requests">Vergangene Gesuche</Menu.Item>
        <Menu.Item key="/faq">FAQs</Menu.Item>
      </Menu>
    </Header>
  );
};

export default withRouter(Head);
