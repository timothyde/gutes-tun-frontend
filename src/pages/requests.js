import { useState } from 'react'
import Link from 'next/link'
import { Col, Row, Table } from 'antd'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import moment from 'moment'

import withApollo from '../utils/withApollo'

import Wrapper from '../components/layout/layout'
import Content from '../components/layout/content'

const data = Array.from(Array(12), i => ({
  key: i,
  title: 'Dolore ut aute sint minim dolore exercitation cupidatat non cillum.',
  date: '1.1.2000',
  address: 'Maxstr. 1337, Bonn',
  tags: ['IT', 'Entwickler'],
}))

const REQUESTS_QUERY = gql`
  query requests {
    requests(orderBy: updatedAt_DESC) {
      id
      address
      email
      name
      phone
      title
      text
      updatedAt
    }
  }
`

const columns = [
  {
    title: 'Titel',
    dataIndex: 'title',
    key: 'title',
    render: (title, { id }) => (
      <Link href={{ pathname: 'item', query: { id } }}>{title}</Link>
    ),
  },
  {
    title: 'Erstellt am',
    dataIndex: 'updatedAt',
    key: 'date',
    render: updatedAt => moment(updatedAt).format('DD.MM.YYYY'),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Aktion',
    key: 'action',
    render: (text, { email, phone }) => (
      <span>
        <a href={`mailto:${email}`} style={{ marginRight: 16 }}>
          E-Mail
        </a>
        <a href={`phone:${phone}`}>Anrufen</a>
      </span>
    ),
  },
]

const Requests = () => {
  const { loading, data } = useQuery(REQUESTS_QUERY)

  return (
    <Wrapper>
      <Content>
        <h2>Sit eiusmod id sunt minim ut Lorem.</h2>
        <h3>
          Consectetur qui enim et et tempor in id anim non quis sunt nisi mollit
          commodo.
        </h3>
        <p>
          Enim aute pariatur pariatur laboris elit mollit sunt. Adipisicing aute
          elit cupidatat commodo officia officia non ut anim ea magna est. Do
          occaecat mollit enim laborum dolor veniam officia adipisicing qui
          laborum Lorem. Deserunt cillum et cupidatat tempor. Magna exercitation
          tempor dolore dolor elit enim ad reprehenderit nostrud Lorem
          consectetur laborum reprehenderit. Sit cupidatat proident ipsum
          ullamco proident elit elit. In incididunt eiusmod eiusmod sint culpa
          voluptate pariatur aliquip aliquip.
        </p>
        <Row gutter={8}>
          <Col xs={24}>
            <Table
              columns={columns}
              dataSource={data ? data.requests : []}
              bordered
              loading={loading}
              pagination={false}
            />
          </Col>
        </Row>
      </Content>
    </Wrapper>
  )
}

export default withApollo(Requests)
