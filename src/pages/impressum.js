import * as React from 'react'
import { Card, Col, Row } from 'antd'
import styled from 'styled-components'

import Wrapper from '../components/layout/layout'
import Content from '../components/layout/content'

const arr = Array.from(Array(12), () => Math.floor(10 * Math.random()))

const Request = styled(Card)`
  border-radius: 8px;
  height: 240px;
  padding: 16px;
  width: 100%;
`

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <h2>Impressum</h2>
          <h3>Sit do minim sint minim ipsum veniam aute esse.</h3>
          <p>
            Non ea laboris id fugiat nostrud minim nisi. Ea aliquip quis mollit
            eu est ex et amet cupidatat et exercitation duis irure. Tempor magna
            ullamco laborum deserunt officia mollit tempor ut sunt.
          </p>
          <h3>Reprehenderit nisi nisi laborum ad quis.</h3>
          <p>
            Id proident laboris duis incididunt aliquip velit veniam
            consectetur. Aliquip ad esse aliquip irure commodo duis cupidatat
            labore minim consectetur voluptate dolor. Tempor proident labore
            laborum anim ipsum aute nisi nisi consectetur magna ut consectetur
            in non. Laboris ullamco dolor occaecat ullamco. Deserunt
            reprehenderit enim qui cupidatat.
          </p>
        </Content>
      </Wrapper>
    )
  }
}
