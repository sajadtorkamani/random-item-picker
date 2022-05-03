import React, { useCallback, useEffect, useState } from 'react'
import { IStoreContext, StoreContext } from '../contexts/StoreContext'
import { loadItems, saveItems, uuid } from '../utilities'
import { Item } from '../types'

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const previouslySavedItems = loadItems()
  const [items, setItems] = useState<Item[]>(previouslySavedItems)
  const [pickedItem, setPickedItem] = useState<Item | null>(null)

  // Save items every item they're updated.
  useEffect(() => {
    saveItems(items)
  }, [items])

  const addItem = (name: string) => {
    const item: Item = { uuid: uuid(), name }
    const newItems = [item, ...items]
    setItems(newItems)
  }

  const clearItems = () => {
    setItems([])
    setPickedItem(null)
  }

  const removeItem = (itemUuid: string) => {
    const newItems = items.filter((item) => item.uuid !== itemUuid)
    setItems(newItems)
  }

  const pickRandomItem = useCallback((): Item => {
    const randomIndex = Math.floor(Math.random() * items.length)
    const randomItem = items[randomIndex]
    setPickedItem(randomItem)
    return randomItem
  }, [items])

  const initialStoreContext: IStoreContext = {
    items,
    pickedItem,
    addItem,
    clearItems,
    removeItem,
    pickRandomItem,
  }

  return (
    <StoreContext.Provider value={initialStoreContext}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
