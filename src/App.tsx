import React, { SyntheticEvent, useEffect, useMemo, useState } from 'react'
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
import { loadItems, saveItems } from './lib/utilities'

const App = () => {
  const previouslySavedItems = loadItems()
  const [items, setItems] = useState<string[]>(previouslySavedItems)
  const [item, setItem] = useState<string>('')

  const handleAddItem = (event: SyntheticEvent) => {
    event.preventDefault()

    const newItems = [item, ...items]
    setItems(newItems)
    setItem('')
  }

  const clearItems = () => {
    setItems([])
  }

  const hasItems = items.length > 0

  // Save items every item they're updated.
  useEffect(() => {
    saveItems(items)
  }, [items])

  const isItemValid = useMemo(() => item.trim().length > 0, [item])

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
              value={item}
              onChange={(event) => setItem(event.currentTarget.value)}
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
