import React, { SyntheticEvent, useMemo, useState } from 'react'
import Item from './components/Item'
import { useStore } from './hooks/useStore'
import ActionButton from './components/ActionButton'

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
    <main className="max-w-xl mt-8 mx-auto">
      <div className="border border-gray-400 pt-6 px-4 pb-5">
        <h1 className="text-3xl font-bold mb-5">Random item picker</h1>

        <form onSubmit={handleAddItem}>
          <div className="flex">
            <input
              className="border border-gray-400 px-1.5 w-full h-[36px]"
              autoFocus
              type="text"
              placeholder="Add item..."
              value={itemName}
              onChange={(event) => setItemName(event.currentTarget.value)}
            />

            <button
              type="submit"
              disabled={!isItemValid}
              className="border border-gray-400 px-2.5 min-w-[60px] h-[36px]
                cursor-pointer"
            >
              Add
            </button>
          </div>
        </form>

        {hasItems && (
          <ActionButton className="mt-1.5" onClick={clearItems}>
            Clear items
          </ActionButton>
        )}

        {hasItems && (
          <div className="mt-5">
            {items.map((item) => (
              <Item key={item.uuid} item={item} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default App
