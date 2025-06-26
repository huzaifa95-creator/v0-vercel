import { Routes, Route } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import Layout from "./components/Layout/Layout"
import HomePage from "./pages/HomePage"
import AddProductPage from "./pages/AddProductPage"
import ProfilePage from "./pages/ProfilePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import TermsPage from "./pages/TermsPage"
import PrivacyPage from "./pages/PrivacyPage"
import AdminDashboard from "./pages/AdminDashboard"

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen gradient-bg">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sell" element={<AddProductPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Layout>
      </div>
    </AppProvider>
  )
}

export default App
