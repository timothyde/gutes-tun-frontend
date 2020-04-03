import * as React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import withApollo from '../utils/withApollo'
import moment from 'moment'

import { ClockCircleOutlined, HomeOutlined } from '@ant-design/icons'

import Wrapper from '../components/layout/layout'
import Content from '../components/layout/content'

const ITEM_QUERY = gql`
  query request($id: String!) {
    request(id: $id) {
      id
      address
      text
      title
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

const Item = () => {
  const {
    query: { id },
  } = useRouter()
  const { loading, data } = useQuery(ITEM_QUERY, { variables: { id } })
  console.log(id, data)
  return (
    <Wrapper>
      <Content>
        {(loading || !data) && <h1>loading...</h1>}
        {!loading && data && (
          <>
            <h2>{data.request.title}</h2>
            <Description>
              <p>
                <HomeOutlined />
                {data.request.address}
              </p>
              <p>
                <ClockCircleOutlined />
                {moment(data.request.updatedAt).format('DD.MM.YYYY')}
              </p>
            </Description>
            <p>{data.request.text}</p>
          </>
        )}
      </Content>
    </Wrapper>
  )
}

export default withApollo(Item)
