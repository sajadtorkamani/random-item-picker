export function saveItems(items: string[]) {
  localStorage.setItem('items', JSON.stringify(items))
}

export function loadItems(): string[] {
  const items = localStorage.getItem('items')
  return items ? JSON.parse(items) : []
}
