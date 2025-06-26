"use client"

import { useState } from "react"

function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (key, value) => {
    setContactForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert("Please fill in all required fields")
      return
    }
    alert("Message sent successfully! We'll get back to you within 24 hours.")
    setContactForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Contact Us</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-dark-gray border border-light-gray rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  value={contactForm.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows="5"
                  className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-dark font-bold py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div>
          <div className="bg-dark-gray border border-light-gray rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-primary mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-envelope text-primary mr-3"></i>
                <span className="text-gray-300">support@xsmmarket.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-primary mr-3"></i>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-primary mr-3"></i>
                <span className="text-gray-300">24/7 Support Available</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-primary mr-3"></i>
                <span className="text-gray-300">Global Service</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-gray border border-light-gray rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary mb-4">Frequently Asked Questions</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-secondary mb-1">How long does a transaction take?</h4>
                <p className="text-gray-300 text-sm">
                  Most transactions are completed within 24-48 hours after payment confirmation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-1">Is my payment secure?</h4>
                <p className="text-gray-300 text-sm">
                  Yes, all payments are processed through secure payment gateways and protected by our escrow system.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-1">What if there's an issue?</h4>
                <p className="text-gray-300 text-sm">
                  Our support team is available 24/7 to resolve any issues that may arise during transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
