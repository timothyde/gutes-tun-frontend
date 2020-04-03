import * as React from 'react'
import Link from 'next/link'
import { Card, Col, Row } from 'antd'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import moment from 'moment'
import withApollo from '../utils/withApollo'

import { ClockCircleOutlined, HomeOutlined } from '@ant-design/icons'

import Wrapper from '../components/layout/layout'
import Content from '../components/layout/content'

const Request = styled(Card)`
  border-radius: 8px;
  height: 264px;
  width: 100%;
`

const REQUESTS_QUERY = gql`
  query requests {
    requests(orderBy: updatedAt_DESC, first: 36) {
      id
      address
      title
      text
      updatedAt
    }
  }
`

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 0;
  width: 100%;

  span {
    margin: 0px 4px 0 4px;
  }
`

const Index = () => {
  const { loading, data } = useQuery(REQUESTS_QUERY)
  return (
    <Wrapper>
      <Content>
        <h2>Excepteur sunt est enim sunt sunt nostrud sunt sint proident.</h2>
        <h3>Sit do minim sint minim ipsum veniam aute esse.</h3>
        <p>
          Non ea laboris id fugiat nostrud minim nisi. Ea aliquip quis mollit eu
          est ex et amet cupidatat et exercitation duis irure. Tempor magna
          ullamco laborum deserunt officia mollit tempor ut sunt.
        </p>
        {(loading || !data) && <h1>loading...</h1>}
        {!loading && data && (
          <Row gutter={8}>
            {data.requests.map(({ id, address, title, text, updatedAt }) => (
              <Col xs={24} md={8} style={{ marginBottom: 8 }}>
                <Request key={id} style={{ borderRadius: 8 }}>
                  <Card.Meta
                    title={title}
                    description={
                      <Description>
                        <p>
                          <HomeOutlined />
                          {address}
                        </p>
                        <p>
                          <ClockCircleOutlined />
                          {moment(updatedAt).format('DD.MM.YYYY')}
                        </p>
                      </Description>
                    }
                  />
                  <p style={{ marginTop: 16 }}>{text.substring(0, 200)} ...</p>
                  <Link href={{ pathname: 'item', query: { id } }}>more</Link>
                </Request>
              </Col>
            ))}
          </Row>
        )}
      </Content>
    </Wrapper>
  )
}

export default withApollo(Index)
