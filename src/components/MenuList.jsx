import MenuItemCard from './MenuItemCard.jsx'

function MenuList({ items, onAdd, onView }) {
  if (items.length === 0) {
    return <p className="muted">No items on this menu yet.</p>
  }
  return (
    <div className="grid">
      {items.map((item) => (
        <MenuItemCard 
          key={item.id} 
          item={item} 
          onAdd={onAdd} 
          onView={onView} 
        />
      ))}
    </div>
  )
}

export default MenuList
