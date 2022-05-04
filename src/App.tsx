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
            className="btn block text-green-700 py-2 px-4 my-4 text-center
              w-full border-2 border-green-700"
            onClick={pickRandomItem}
          >
            Pick random item
          </button>
        )}

        {hasItems && !!pickedItem && (
          <div
            className="flex justify-center items-center bg-green-400 block
             px-4 h-28 my-4 text-center w-full text-[30px]"
          >
            <span>{pickedItem.name}</span>
          </div>
        )}

        {hasItems && <ItemList />}
      </div>
    </main>
  )
}

export default App
