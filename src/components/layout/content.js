import { Layout } from 'antd'
import styled from 'styled-components'

const Content = styled(Layout.Content)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 2.2px rgba(0, 0, 0, 0.039),
    0 2.4px 5.3px rgba(0, 0, 0, 0.057), 0 4.5px 10px rgba(0, 0, 0, 0.07),
    0 8px 17.9px rgba(0, 0, 0, 0.083), 0 15px 33.4px rgba(0, 0, 0, 0.101),
    0 36px 80px rgba(0, 0, 0, 0.14);

  margin: 0;
  min-height: 280px;
  padding: 24px 32px;
`

export default Content
