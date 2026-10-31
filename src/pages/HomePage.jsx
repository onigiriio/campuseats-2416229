import { useVendors } from '../hooks/useVendors.js'
import { useCart } from '../hooks/useCart.js'
import VendorCard from '../components/VendorCard.jsx'
import MenuItemCard from '../components/MenuItemCard.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

export default function HomePage() {
  const { vendors, loading, error, reload } = useVendors()
  const { recentlyViewed, clearViewedItems } = useCart()

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  return (
    <>
      <section>
        <h2 className="section-title">Choose a vendor</h2>
        <div className="vendor-grid">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </section>

      {recentlyViewed.length > 0 && (
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Recently Viewed</h2>
            <button className="link danger" onClick={clearViewedItems} style={{ cursor: 'pointer', background: 'none', border: 'none', color: '#d9534f', textDecoration: 'underline' }}>
              Clear history
            </button>
          </div>
          <div className="grid" style={{ marginTop: '1rem' }}>
            {recentlyViewed.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}