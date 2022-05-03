import React from 'react'
import { useStore } from './hooks/useStore'
import ActionButton from './components/ActionButton'
import AddBox from './components/AddBox'
import ItemList from './components/ItemList'

const App = () => {
  const { items, clearItems } = useStore()

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

        {hasItems && <ItemList />}
      </div>
    </main>
  )
}

export default App
