import { CartContext } from './cart-context.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('campuseats-cart', [])
  const [orders, setOrders] = useLocalStorage('campuseats-orders', [])
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage('campuseats-viewed', [])

  function addToCart(item) {
    setCart((prevCart) => {
      const existing = prevCart.find((line) => line.item.id === item.id)
      if (existing) {
        return prevCart.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line
        )
      }
      return [...prevCart, { item, qty: 1 }]
    })
  }

  function changeQty(itemId, delta) {
    setCart((prevCart) =>
      prevCart.map((line) =>
        line.item.id === itemId ? { ...line, qty: line.qty + delta } : line
      ).filter((line) => line.qty > 0)
    )
  }

  function removeFromCart(itemId) {
    setCart((prevCart) => prevCart.filter((line) => line.item.id !== itemId))
  }

  function placeOrder(details) {
    const orderTotal = cart.reduce((sum, line) => sum + (line.item.price * line.qty), 0)
    const newOrder = {
      id: Date.now().toString(),
      ...details,
      items: [...cart],
      total: orderTotal,
      date: new Date().toISOString(),
    }
    setOrders((prev) => [newOrder, ...prev])
    setCart([])
    return newOrder
  }

  function addViewedItem(item) {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((i) => i.id !== item.id) 
      return [item, ...filtered].slice(0, 5) 
    })
  }

  function clearViewedItems() {
    setRecentlyViewed([])
  }

  const count = cart.reduce((total, line) => total + line.qty, 0)
  const total = cart.reduce((sum, line) => sum + (line.item.price * line.qty), 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        count,
        total,
        recentlyViewed,
        addToCart,
        changeQty,
        removeFromCart,
        placeOrder,
        addViewedItem, 
        clearViewedItems, 
      }}
    >
      {children}
    </CartContext.Provider>
  )
}