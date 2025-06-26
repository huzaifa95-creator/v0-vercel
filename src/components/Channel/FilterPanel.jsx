"use client"
import { useApp } from "../../context/AppContext"
import { categories } from "../../data/mockData"

function FilterPanel() {
  const { filters, dispatch } = useApp()

  const handleFilterChange = (key, value) => {
    dispatch({ type: "SET_FILTERS", payload: { [key]: value } })
  }

  return (
    <div className="bg-dark-gray border border-light-gray rounded-lg p-4 mb-6">
      <h3 className="text-lg font-bold text-primary mb-4">Filters</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Min Subscribers</label>
          <input
            type="text"
            value={filters.minSubscribers}
            onChange={(e) => handleFilterChange("minSubscribers", e.target.value)}
            placeholder="e.g., 10K"
            className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Max Price</label>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
            placeholder="5000"
            className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Premium Only</label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.premiumOnly}
              onChange={(e) => handleFilterChange("premiumOnly", e.target.checked)}
              className="mr-2"
            />
            <span className="text-gray-300">Premium channels only</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default FilterPanel
