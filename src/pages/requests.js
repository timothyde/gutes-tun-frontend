import * as React from "react";
import { Card, Col, Row, Table, Tag } from "antd";
import styled from "styled-components";

import Wrapper from "../components/layout/layout";
import Content from "../components/layout/content";

const data = Array.from(Array(12), i => ({
  key: i,
  title: "Dolore ut aute sint minim dolore exercitation cupidatat non cillum.",
  date: "1.1.2000",
  address: "Maxstr. 1337, Bonn",
  tags: ["IT", "Entwickler"]
}));

const columns = [
  {
    title: "Titel",
    dataIndex: "title",
    key: "title",
    render: text => <a>{text}</a>
  },
  {
    title: "Erstellt am",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Aktion",
    key: "action",
    render: (text, record) => (
      <span>
        <a style={{ marginRight: 16 }}>E-Mail</a>
        <a>Anrufen</a>
      </span>
    )
  }
];

const Request = styled(Card)`
  border-radius: 8px;
  height: 240px;
  padding: 16px;
  width: 100%;
`;

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <h2>Sit eiusmod id sunt minim ut Lorem.</h2>
          <h3>
            Consectetur qui enim et et tempor in id anim non quis sunt nisi
            mollit commodo.
          </h3>
          <p>
            Enim aute pariatur pariatur laboris elit mollit sunt. Adipisicing
            aute elit cupidatat commodo officia officia non ut anim ea magna
            est. Do occaecat mollit enim laborum dolor veniam officia
            adipisicing qui laborum Lorem. Deserunt cillum et cupidatat tempor.
            Magna exercitation tempor dolore dolor elit enim ad reprehenderit
            nostrud Lorem consectetur laborum reprehenderit. Sit cupidatat
            proident ipsum ullamco proident elit elit. In incididunt eiusmod
            eiusmod sint culpa voluptate pariatur aliquip aliquip.
          </p>
          <Row gutter={8}>
            <Col xs={24}>
              <Table columns={columns} dataSource={data} bordered />
            </Col>
          </Row>
        </Content>
      </Wrapper>
    );
  }
}
