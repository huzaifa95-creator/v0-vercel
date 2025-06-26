import Navigation from "./Navigation"
import Footer from "./Footer"
import ChannelDetailModal from "../Modals/ChannelDetailModal"
import PaymentModal from "../Modals/PaymentModal"
import ChatInterface from "../Chat/ChatInterface"

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />

      {/* Global Modals */}
      <ChannelDetailModal />
      <PaymentModal />
      <ChatInterface />
    </>
  )
}

export default Layout
