import React, { SyntheticEvent, useState } from 'react'
import {
  AddItemWrapper,
  Button,
  Container,
  Input,
  ItemsList,
  Title,
  Wrapper,
} from './components/styles'
import Item from './components/Item'

const App = () => {
  const [items, setItems] = useState<string[]>([])
  const [item, setItem] = useState<string>('')

  const handleAddItem = (event: SyntheticEvent) => {
    event.preventDefault()

    setItems((prevItems) => [item, ...prevItems])
    setItem('')
  }

  const isItemValid = () => {
    return item.trim().length > 0
  }

  return (
    <Wrapper>
      <Container>
        <Title>Random item picker</Title>

        <form onSubmit={handleAddItem}>
          <AddItemWrapper>
            <Input
              type="text"
              placeholder="Add item..."
              value={item}
              onChange={(event) => setItem(event.currentTarget.value)}
            />

            <Button type="submit" disabled={!isItemValid()}>
              Add
            </Button>
          </AddItemWrapper>
        </form>

        {items.length > 0 && (
          <ItemsList>
            {items.map((item, index) => (
              <Item key={index}>{item}</Item>
            ))}
          </ItemsList>
        )}
      </Container>
    </Wrapper>
  )
}

export default App
