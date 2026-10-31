import { useCart } from '../hooks/useCart.js'

export default function OrdersPage() {
  const { orders } = useCart()

  if (orders.length === 0) {
    return <p className="muted">You have no previous orders.</p>
  }

  return (
    <section>
      <h2 className="section-title">My Orders</h2>
      <div className="grid">
        {orders.map((order) => (
          <div key={order.id} className="card">
            <h3>Order placed for {order.name}</h3>
            <p>Pickup time: {order.pickupTime} at Mahallah {order.mahallah}</p>
            <p>Total paid: RM {order.total.toFixed(2)}</p>
            <p className="muted" style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              Order ID: {order.id}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}