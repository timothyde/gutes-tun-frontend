import * as React from "react";
import { Card, Col, Row } from "antd";
import styled from "styled-components";

import Wrapper from "../components/layout/layout";
import Content from "../components/layout/content";

const arr = Array.from(Array(12), () => Math.floor(10 * Math.random()));

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
          <h2>Excepteur sunt est enim sunt sunt nostrud sunt sint proident.</h2>
          <h3>Sit do minim sint minim ipsum veniam aute esse.</h3>
          <p>
            Non ea laboris id fugiat nostrud minim nisi. Ea aliquip quis mollit
            eu est ex et amet cupidatat et exercitation duis irure. Tempor magna
            ullamco laborum deserunt officia mollit tempor ut sunt.
          </p>
          <Row gutter={8}>
            {arr.map((n, i) => (
              <Col xs={24} md={8}>
                <Request style={{ borderRadius: 8, marginTop: 8 }} key={i}>
                  <Card.Meta
                    title="Ut incididunt culpa minim minim ut ullamco tempor occaecat reprehenderit."
                    description="Culpa et dolore exercitation."
                  />
                  <p>
                    Sunt consequat officia tempor consequat est labore ad non
                    fugiat mollit velit enim sunt. Eiusmod occaecat aliquip est
                    consequat labore incididunt ut est. Ex eiusmod veniam esse
                    excepteur cillum ex id deserunt. Dolor culpa minim deserunt
                    id duis irure exercitation id irure occaecat occaecat
                    incididunt in ...
                  </p>
                  <a href="/">more</a>
                </Request>
              </Col>
            ))}
          </Row>
        </Content>
      </Wrapper>
    );
  }
}
