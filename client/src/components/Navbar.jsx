import { Link, useLocation } from 'react-router-dom'
import { FaGamepad, FaShoppingCart, FaTicketAlt, FaUser } from 'react-icons/fa'

export default function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center">
        <Link to="/" className="navbar-brand">
          <FaGamepad className="text-2xl" />
          <span>شحن ستور</span>
        </Link>

        <div className="navbar-menu">
          <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
          >
            الرئيسية
          </Link>
          <Link 
            to="/games" 
            className={`navbar-link ${isActive('/games') ? 'active' : ''}`}
          >
            الألعاب
          </Link>
          <Link 
            to="/track-order" 
            className={`navbar-link ${isActive('/track-order') ? 'active' : ''}`}
          >
            تتبع الطلب
          </Link>
          <Link 
            to="/verify-voucher" 
            className={`navbar-link ${isActive('/verify-voucher') ? 'active' : ''}`}
          >
            التحقق من البون
          </Link>
          <Link 
            to="/admin/login" 
            className={`navbar-link ${isActive('/admin/login') ? 'active' : ''}`}
          >
            الأدمن
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="btn btn-sm btn-primary">
            <FaShoppingCart />
            السلة
          </button>
          <button className="btn btn-sm btn-secondary">
            <FaUser />
            حسابي
          </button>
        </div>
      </div>
    </nav>
  )
}
