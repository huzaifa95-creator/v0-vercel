"use client"
import { useApp } from "../../context/AppContext"
import StarRating from "../UI/StarRating"

function ChannelCard({ channel }) {
  const { dispatch } = useApp()

  const handleShowMore = () => {
    dispatch({ type: "SET_SELECTED_CHANNEL", payload: channel })
    dispatch({ type: "TOGGLE_CHANNEL_DETAIL", payload: true })
  }

  return (
    <div className="bg-dark-gray border border-light-gray rounded-lg p-4 hover-glow transition-all duration-300">
      <div className="relative mb-4">
        <img
          src={channel.thumbnail || "/placeholder.svg?height=200&width=300"}
          alt={channel.name}
          className="w-full h-40 object-cover rounded-lg"
        />
        {channel.isPremium && (
          <span className="absolute top-2 right-2 premium-badge px-2 py-1 rounded-full text-xs">PREMIUM</span>
        )}
      </div>

      <h3 className="text-lg font-bold text-primary mb-2">{channel.name}</h3>
      <p className="text-gray-300 text-sm mb-2">{channel.category}</p>

      <div className="flex justify-between items-center mb-2">
        <span className="text-secondary font-semibold">{channel.subscribers} subscribers</span>
        <StarRating rating={channel.rating} />
      </div>

      <div className="flex justify-between items-center mb-3">
        <span className="text-primary font-bold text-xl">${channel.price}</span>
        {channel.monthlyIncome && <span className="text-green-400 text-sm">${channel.monthlyIncome}/mo</span>}
      </div>

      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{channel.description}</p>

      <button
        onClick={handleShowMore}
        className="w-full bg-primary text-dark font-bold py-2 px-4 rounded-lg hover:bg-secondary transition-colors duration-300"
      >
        Show More
      </button>
    </div>
  )
}

export default ChannelCard
