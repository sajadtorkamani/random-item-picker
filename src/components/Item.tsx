import React from 'react'
import styled from 'styled-components'
import { palette } from '../constants'

type Props = {
  children: React.ReactNode
}

const Item: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  border: 1px solid ${palette.grey};
  margin-bottom: 10px;
  padding: 10px;
`

export default Item
