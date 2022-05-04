import React from 'react'
import { useStore } from './hooks/useStore'
import ActionButton from './components/ActionButton'
import AddBox from './components/AddBox'
import ItemList from './components/ItemList'

const App = () => {
  const { items, clearItems, pickRandomItem, pickedItem } = useStore()

  const hasItems = items.length > 0

  return (
    <main className="max-w-xl mt-12 mx-auto text-center">
      <div className="bg-white border border-gray-300 mx-4 py-7 px-6">
        <h1 className="text-3xl font-bold mb-6">Random item picker</h1>

        <p className="text-sm mb-4">
          Add some items and then click "Pick random item".
        </p>

        <AddBox />

        {hasItems && (
          <ActionButton className="mt-1" onClick={clearItems}>
            Clear items
          </ActionButton>
        )}

        {items.length > 1 && (
          <button
            className="btn block text-green-700 py-2 px-4 mt-6 mb-4 text-center
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
