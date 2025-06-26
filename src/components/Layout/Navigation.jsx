import { Link, useLocation } from "react-router-dom"
import { useApp } from "../../context/AppContext"
import StarRating from "../UI/StarRating"

function Navigation() {
  const location = useLocation()
  const { user } = useApp()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-dark-gray border-b border-light-gray sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
              <i className="fas fa-play-circle mr-2"></i>
              Xsm Market
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`hover:text-primary transition-colors ${isActive("/") ? "text-primary" : "text-gray-300"}`}
            >
              Home
            </Link>
            <Link
              to="/sell"
              className={`hover:text-primary transition-colors ${isActive("/sell") ? "text-primary" : "text-gray-300"}`}
            >
              Sell Channel
            </Link>
            <Link
              to="/profile"
              className={`hover:text-primary transition-colors ${isActive("/profile") ? "text-primary" : "text-gray-300"}`}
            >
              Profile
            </Link>
            <Link
              to="/about"
              className={`hover:text-primary transition-colors ${isActive("/about") ? "text-primary" : "text-gray-300"}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`hover:text-primary transition-colors ${isActive("/contact") ? "text-primary" : "text-gray-300"}`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <StarRating rating={user.rating} size="text-xs" />
              <span className="ml-2 text-sm text-gray-300">{user.username}</span>
            </div>
            <button className="md:hidden text-primary">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
