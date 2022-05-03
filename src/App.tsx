import React, { SyntheticEvent, useMemo, useState } from 'react'
import {
  AddItemWrapper,
  Button,
  ClearItemsButton,
  Container,
  Input,
  ItemsList,
  Title,
  Wrapper,
} from './components/styles'
import Item from './components/Item'
import { useStore } from './hooks/useStore'

const App = () => {
  const { items, addItem, clearItems } = useStore()
  const [itemName, setItemName] = useState<string>('')

  const handleAddItem = (event: SyntheticEvent) => {
    event.preventDefault()

    addItem(itemName)
    setItemName('')
  }

  const hasItems = items.length > 0

  const isItemValid = useMemo(() => itemName.trim().length > 0, [itemName])

  return (
    <Wrapper>
      <Container>
        <Title>Random item picker</Title>

        <form onSubmit={handleAddItem}>
          <AddItemWrapper>
            <Input
              autoFocus
              type="text"
              placeholder="Add item..."
              value={itemName}
              onChange={(event) => setItemName(event.currentTarget.value)}
            />

            <Button type="submit" disabled={!isItemValid}>
              Add
            </Button>
          </AddItemWrapper>
        </form>

        {hasItems && (
          <ClearItemsButton onClick={clearItems}>Clear items</ClearItemsButton>
        )}

        {hasItems && (
          <ItemsList>
            {items.map(({ uuid, name }) => (
              <Item key={uuid}>{name}</Item>
            ))}
          </ItemsList>
        )}
      </Container>
    </Wrapper>
  )
}

export default App
