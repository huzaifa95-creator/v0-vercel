import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-dark-gray border-t border-light-gray mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Xsm Market</h3>
            <p className="text-gray-300 text-sm">
              The premier marketplace for buying and selling YouTube channels securely.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-secondary mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-gray-300 hover:text-primary transition-colors">
                  Sell Channel
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-secondary mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-secondary mb-3">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <i className="fab fa-discord"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-light-gray mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Xsm Market. All rights reserved. | Secure YouTube Channel Marketplace
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
