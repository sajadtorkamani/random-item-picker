import { Item } from '../types'
import { createContext } from 'react'

export interface IStoreContext {
  items: Item[]
  pickedItem: Item | null
  addItem: (name: string) => void
  clearItems: () => void
  removeItem: (itemUuid: string) => void
  pickRandomItem: () => Item
}

export const StoreContext = createContext<IStoreContext | null>(null)
