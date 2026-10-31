// src/components/Header.jsx
import { NavLink, Link } from 'react-router'
import { useCart } from '../hooks/useCart.js'

function Header() {
  const { count } = useCart()

  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1 className="logo">CampusEats</h1>
      </Link>
      
      <nav className="nav">
        {/* "end" ensures this only highlights when exactly on "/"[cite: 4] */}
        <NavLink to="/" end className="link">Vendors</NavLink>
        <NavLink to="/orders" className="link">My Orders</NavLink>
        <NavLink to="/cart" className="link cart">
          Cart <span className="badge">{count}</span>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
