"use client"
import { useApp } from "../../context/AppContext"
import StarRating from "../UI/StarRating"

function ChannelDetailModal() {
  const { selectedChannel, showChannelDetail, dispatch } = useApp()

  const handleClose = () => {
    dispatch({ type: "TOGGLE_CHANNEL_DETAIL", payload: false })
  }

  const handleBuyNow = () => {
    dispatch({ type: "TOGGLE_CHANNEL_DETAIL", payload: false })
    dispatch({ type: "TOGGLE_PAYMENT_MODAL", payload: true })
  }

  const handleContactSeller = () => {
    dispatch({ type: "TOGGLE_CHANNEL_DETAIL", payload: false })
    dispatch({ type: "TOGGLE_CHAT", payload: true, chatUser: selectedChannel.seller })
  }

  if (!showChannelDetail || !selectedChannel) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-dark-gray border border-light-gray rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-dark-gray border-b border-light-gray p-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-primary">{selectedChannel.name}</h3>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-300">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={selectedChannel.thumbnail || "/placeholder.svg?height=300&width=400"}
                alt={selectedChannel.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Category:</span>
                  <span className="text-primary font-semibold">{selectedChannel.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Subscribers:</span>
                  <span className="text-secondary font-semibold">{selectedChannel.subscribers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Monthly Income:</span>
                  <span className="text-green-400 font-semibold">${selectedChannel.monthlyIncome}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Seller Rating:</span>
                  <StarRating rating={selectedChannel.rating} />
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Seller:</span>
                  <span className="text-primary">{selectedChannel.seller}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-medium-gray rounded-lg p-4 mb-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">${selectedChannel.price}</span>
                  {selectedChannel.isPremium && (
                    <span className="ml-2 premium-badge px-2 py-1 rounded-full text-xs">PREMIUM</span>
                  )}
                </div>
                <p className="text-center text-gray-400 text-sm mt-2">
                  + 7.5% admin fee (${Math.round(selectedChannel.price * 0.075)})
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-primary text-dark font-bold py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
                >
                  <i className="fas fa-shopping-cart mr-2"></i>
                  Buy Now
                </button>
                <button
                  onClick={handleContactSeller}
                  className="w-full bg-transparent border border-primary text-primary font-bold py-3 px-4 rounded-lg hover:bg-primary hover:text-dark transition-colors"
                >
                  <i className="fas fa-comment mr-2"></i>
                  Contact Seller
                </button>
              </div>

              <div className="mt-6 p-4 bg-medium-gray rounded-lg">
                <h4 className="font-bold text-primary mb-2">Secure Transaction</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Escrow protection</li>
                  <li>• Admin-facilitated transfer</li>
                  <li>• 7-day money-back guarantee</li>
                  <li>• Verified channel ownership</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-bold text-primary mb-3">Channel Description</h4>
            <p className="text-gray-300 leading-relaxed">{selectedChannel.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChannelDetailModal
