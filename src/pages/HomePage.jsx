"use client"
import { useApp } from "../context/AppContext"
import ChannelCard from "../components/Channel/ChannelCard"
import FilterPanel from "../components/Channel/FilterPanel"

function HomePage() {
  const { channels, searchTerm, filters, dispatch } = useApp()

  // Filter channels based on search and filters
  const filteredChannels = channels.filter((channel) => {
    const matchesSearch =
      channel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      channel.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !filters.category || channel.category === filters.category
    const matchesPremium = !filters.premiumOnly || channel.isPremium
    const matchesPrice = !filters.maxPrice || channel.price <= Number.parseInt(filters.maxPrice)

    return matchesSearch && matchesCategory && matchesPremium && matchesPrice
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-primary mb-4">Premium YouTube Channel Marketplace</h2>
        <p className="text-gray-300 text-lg">Buy and sell established YouTube channels with confidence</p>
      </div>

      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value })}
              placeholder="Search channels by name or category..."
              className="w-full bg-medium-gray border border-light-gray rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-primary"
            />
          </div>
          <button className="bg-primary text-dark font-bold px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
            <i className="fas fa-search mr-2"></i>
            Search
          </button>
        </div>
      </div>

      <FilterPanel />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredChannels.map((channel) => (
          <ChannelCard key={channel.id} channel={channel} />
        ))}
      </div>

      {filteredChannels.length === 0 && (
        <div className="text-center py-12">
          <i className="fas fa-search text-6xl text-gray-600 mb-4"></i>
          <h3 className="text-xl font-bold text-gray-400 mb-2">No channels found</h3>
          <p className="text-gray-500">Try adjusting your search criteria or filters</p>
        </div>
      )}
    </div>
  )
}

export default HomePage
