"use client"

import { useState } from "react"
import { useApp } from "../../context/AppContext"

function PaymentModal() {
  const { selectedChannel, showPaymentModal, dispatch } = useApp()
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [cardName, setCardName] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const adminFee = Math.round((selectedChannel?.price || 0) * 0.075)

  const handleClose = () => {
    dispatch({ type: "TOGGLE_PAYMENT_MODAL", payload: false })
  }

  const processPayment = () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      handleClose()
      alert("Payment successful! The admin will now facilitate the channel transfer.")
    }, 2000)
  }

  if (!showPaymentModal || !selectedChannel) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-dark-gray border border-light-gray rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-primary">Complete Purchase</h3>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-300">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="mb-6 p-4 bg-medium-gray rounded-lg">
          <h4 className="font-bold text-primary mb-2">{selectedChannel.name}</h4>
          <div className="flex justify-between text-sm text-gray-300">
            <span>Channel Price:</span>
            <span>${selectedChannel.price}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-300">
            <span>Admin Fee (7.5%):</span>
            <span>${adminFee}</span>
          </div>
          <div className="border-t border-light-gray mt-2 pt-2 flex justify-between font-bold text-primary">
            <span>Total:</span>
            <span>${selectedChannel.price + adminFee}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Expiry Date</label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Cardholder Name</label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="John Doe"
              className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <button
          onClick={processPayment}
          disabled={isProcessing}
          className="w-full mt-6 bg-primary text-dark font-bold py-3 px-4 rounded-lg hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isProcessing ? (
            <>
              <div className="loading-spinner mr-2"></div>
              Processing...
            </>
          ) : (
            `Pay $${selectedChannel.price + adminFee}`
          )}
        </button>

        <p className="text-xs text-gray-400 mt-4 text-center">
          Secure payment processed by Stripe. Your payment is protected by our escrow system.
        </p>
      </div>
    </div>
  )
}

export default PaymentModal
