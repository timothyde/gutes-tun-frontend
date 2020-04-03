import * as React from 'react'
import { Col, Collapse, Row } from 'antd'

import Wrapper from '../components/layout/layout'
import Content from '../components/layout/content'

const { Panel } = Collapse

function callback(key) {
  console.log(key)
}

const text = `
  Mollit nisi elit excepteur excepteur amet sit. Anim ex magna do commodo cillum esse sunt ea voluptate est. Ea ullamco consequat fugiat mollit occaecat eiusmod elit ad aliquip in pariatur aliquip fugiat cupidatat. Labore irure fugiat aliqua eu minim dolore adipisicing reprehenderit ea dolore. Tempor eiusmod quis non enim amet do nulla tempor veniam aliqua velit dolore laboris do.
`

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <h2>Shut up and take these answers</h2>
          <h3>In eu consequat sint irure.</h3>
          <p>
            Ex irure reprehenderit ad sint et eu deserunt in minim ea. Anim sint
            laborum est nisi esse veniam est. Consectetur amet esse irure
            enim.Ad ea voluptate deserunt anim do cupidatat laborum. Tempor
            culpa non dolore in occaecat quis qui excepteur et. Et ipsum
            deserunt ex officia excepteur. Enim consequat culpa culpa ipsum
            mollit in magna. Elit eu veniam consectetur aliquip fugiat esse
            incididunt voluptate.
          </p>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <h3>
                Deserunt ex officia occaecat ullamco non eiusmod aute nostrud.
              </h3>
              <Collapse defaultActiveKey={['1']} onChange={callback}>
                {[1, 2, 3, 4, 5].map(key => (
                  <Panel
                    header="Id ex culpa cupidatat culpa eu nostrud minim sunt proident eiusmod dolor."
                    key={key}
                  >
                    <p>{text}</p>
                  </Panel>
                ))}
              </Collapse>
            </Col>
            <Col xs={24} md={12}>
              <h3>
                Excepteur eiusmod nulla officia veniam ipsum nostrud sint.
              </h3>
              <Collapse defaultActiveKey={['1']} onChange={callback}>
                {[6, 7, 8, 9, 10].map(key => (
                  <Panel
                    header="Id ex culpa cupidatat culpa eu nostrud minim sunt proident eiusmod dolor."
                    key={key}
                  >
                    <p>{text}</p>
                  </Panel>
                ))}
              </Collapse>
            </Col>
          </Row>
        </Content>
      </Wrapper>
    )
  }
}
