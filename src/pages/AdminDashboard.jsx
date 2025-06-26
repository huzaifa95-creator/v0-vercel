"use client"

import { useState } from "react"

function AdminDashboard() {
  const [pendingListings, setPendingListings] = useState([
    { id: 1, channelName: "New Gaming Channel", seller: "user123", status: "pending" },
    { id: 2, channelName: "Music Beats", seller: "musiclover", status: "pending" },
  ])

  const [reportedUsers, setReportedUsers] = useState([
    { id: 1, reportedUser: "baduser1", reporter: "gooduser1", reason: "Spam" },
    { id: 2, reportedUser: "scammer2", reporter: "victim2", reason: "Fraud" },
  ])

  const approveListing = (id) => {
    setPendingListings((prev) => prev.filter((listing) => listing.id !== id))
    alert("Listing approved successfully!")
  }

  const rejectListing = (id) => {
    setPendingListings((prev) => prev.filter((listing) => listing.id !== id))
    alert("Listing rejected.")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-primary mb-8">Admin Dashboard</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-dark-gray border border-light-gray rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary mb-4">Pending Listings</h3>
          <div className="space-y-4">
            {pendingListings.map((listing) => (
              <div key={listing.id} className="bg-medium-gray rounded-lg p-4">
                <h4 className="font-semibold text-secondary mb-2">{listing.channelName}</h4>
                <p className="text-gray-300 text-sm mb-3">Seller: {listing.seller}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => approveListing(listing.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => rejectListing(listing.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
            {pendingListings.length === 0 && <p className="text-gray-400 text-center py-4">No pending listings</p>}
          </div>
        </div>

        <div className="bg-dark-gray border border-light-gray rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary mb-4">Reported Users</h3>
          <div className="space-y-4">
            {reportedUsers.map((report) => (
              <div key={report.id} className="bg-medium-gray rounded-lg p-4">
                <h4 className="font-semibold text-red-400 mb-2">{report.reportedUser}</h4>
                <p className="text-gray-300 text-sm mb-1">Reported by: {report.reporter}</p>
                <p className="text-gray-300 text-sm mb-3">Reason: {report.reason}</p>
                <div className="flex gap-2">
                  <button className="bg-yellow-600 text-white px-3 py-1 rounded text-sm hover:bg-yellow-700 transition-colors">
                    Investigate
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors">
                    Ban User
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
