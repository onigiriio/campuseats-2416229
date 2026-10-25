function MenuItemCard({ item, onAdd, onView }) {
  return (
    <article 
      className="card menu-card" 
      onClick={() => onView && onView(item)} 
      style={{ cursor: 'pointer' }}
    >
      <div className="thumb" aria-hidden="true">{item.name.charAt(0)}</div>
      <p className="tag">{item.category}</p>
      <h3>{item.name}</h3>
      <p className="muted">{item.description}</p>
      <p className="price">RM {item.price.toFixed(2)}</p>
      <button 
        className="btn" 
        disabled={!item.available} 
        onClick={(e) => {
          e.stopPropagation() // Prevents the card's click event from firing
          onAdd(item)
        }}
      >
        {item.available ? 'Add to cart' : 'Sold out'}
      </button>
    </article>
  )
}

export default MenuItemCard