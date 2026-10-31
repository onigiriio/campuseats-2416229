import { useCart } from '../hooks/useCart.js'

function MenuItemCard({ item }) {
  const { addToCart, addViewedItem } = useCart() 

  return (
    <article 
      className="card menu-card" 
      onClick={() => addViewedItem(item)} // Automatically saves when clicked!
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
          e.stopPropagation() 
          addToCart(item) 
        }}
      >
        {item.available ? 'Add to cart' : 'Sold out'}
      </button>
    </article>
  )
}

export default MenuItemCard