import React from 'react'
import styled from 'styled-components'
import { palette } from '../constants'
import { useStore } from '../hooks/useStore'
import { Item as IItem } from '../types'

type Props = { item: IItem }

const Item: React.FC<Props> = ({ item }) => {
  const { removeItem } = useStore()

  return (
    <Wrapper>
      <div>{item.name}</div>

      <div>
        <button onClick={() => removeItem(item.uuid)}>Delete</button>
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
