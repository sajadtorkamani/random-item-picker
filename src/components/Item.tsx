import React from 'react'
import styled from 'styled-components'
import { palette } from '../constants'

type Props = {
  children: React.ReactNode
}

const Item: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <div>{children}</div>

      <div>
        <button>Delete</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid ${palette.grey};
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
`

export default Item
