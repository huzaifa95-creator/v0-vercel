"use client"

import { useState } from "react"
import { categories } from "../data/mockData"

function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    subscribers: "",
    price: "",
    monthlyIncome: "",
    description: "",
    isPremium: false,
  })

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.category || !formData.subscribers || !formData.price) {
      alert("Please fill in all required fields")
      return
    }

    alert("Channel listing submitted for admin approval!")
    setFormData({
      name: "",
      category: "",
      subscribers: "",
      price: "",
      monthlyIncome: "",
      description: "",
      isPremium: false,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">List Your YouTube Channel</h2>

      <div className="bg-dark-gray border border-light-gray rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Channel Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter your channel name"
              className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Category *</label>
            <select
              value={formData.category}
              onChange={(e) => handleInputChange("category", e.target.value)}
              className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subscribers *</label>
              <input
                type="text"
                value={formData.subscribers}
                onChange={(e) => handleInputChange("subscribers", e.target.value)}
                placeholder="e.g., 125K"
                className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Price (USD) *</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                placeholder="2500"
                className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Income (USD)</label>
            <input
              type="number"
              value={formData.monthlyIncome}
              onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
              placeholder="450"
              className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Describe your channel, its content, audience, and any other relevant details..."
              rows="4"
              className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary resize-none"
            />
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.isPremium}
                onChange={(e) => handleInputChange("isPremium", e.target.checked)}
                className="mr-2"
              />
              <span className="text-gray-300">Mark as Premium Listing (+$50 fee)</span>
            </label>
          </div>

          <div className="bg-medium-gray rounded-lg p-4">
            <h4 className="font-bold text-primary mb-2">Listing Guidelines</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Channel must be monetized and in good standing</li>
              <li>• Provide accurate subscriber count and revenue data</li>
              <li>• All listings are subject to admin approval</li>
              <li>• False information may result in account suspension</li>
            </ul>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-dark font-bold py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
          >
            Submit for Approval
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProductPage
