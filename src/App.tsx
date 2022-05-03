import React from 'react'
import { useStore } from './hooks/useStore'
import ActionButton from './components/ActionButton'
import AddBox from './components/AddBox'
import ItemList from './components/ItemList'

const App = () => {
  const { items, clearItems, pickRandomItem, pickedItem } = useStore()

  const hasItems = items.length > 0

  return (
    <main className="max-w-xl mt-8 mx-auto">
      <div className="border border-gray-400 pt-6 px-4 pb-5">
        <h1 className="text-3xl font-bold mb-5">Random item picker</h1>

        <AddBox />

        {hasItems && (
          <ActionButton className="mt-1.5" onClick={clearItems}>
            Clear items
          </ActionButton>
        )}

        {items.length > 1 && (
          <button
            className="btn block py-2 px-4 my-4 text-center w-full"
            onClick={pickRandomItem}
          >
            Pick random item
          </button>
        )}

        {hasItems && !!pickedItem && (
          <div
            className="bg-green-400 block py-2 px-4 my-4 text-center w-full
              text-[20px]"
          >
            {pickedItem.name}
          </div>
        )}

        {hasItems && <ItemList />}
      </div>
    </main>
  )
}

export default App
