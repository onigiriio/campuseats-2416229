import { useParams } from 'react-router'
import { useVendors } from '../hooks/useVendors.js'
import MenuList from '../components/MenuList.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

export default function VendorPage() {
  const { id } = useParams() // Grabs the ID straight from the URL
  const { vendors, loading, error, reload } = useVendors()

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  const vendor = vendors.find((v) => v.id === id)
  
  if (!vendor) {
    return (
      <div className="card">
        <h2>Vendor not found</h2>
        <p>Sorry, we couldn't find a vendor with that ID.</p>
      </div>
    )
  }

  return (
    <section>
      <h2 className="section-title">Menu: {vendor.name}</h2>
      <MenuList items={vendor.menu} />
    </section>
  )
}