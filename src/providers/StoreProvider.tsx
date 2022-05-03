import React, { useEffect, useState } from 'react'
import { IStoreContext, StoreContext } from '../contexts/StoreContext'
import { loadItems, saveItems, uuid } from '../lib/utilities'
import { Item } from '../types'

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const previouslySavedItems = loadItems()
  const [items, setItems] = useState<Item[]>(previouslySavedItems)

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
  }

  const removeItem = (itemUuid: string) => {
    const newItems = items.filter((item) => item.uuid !== itemUuid)
    setItems(newItems)
  }

  const initialStoreContext: IStoreContext = {
    items,
    addItem,
    clearItems,
    removeItem,
  }

  return (
    <StoreContext.Provider value={initialStoreContext}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
