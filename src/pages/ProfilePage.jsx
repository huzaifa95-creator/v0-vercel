"use client"

import { useState } from "react"
import { useApp } from "../context/AppContext"
import StarRating from "../components/UI/StarRating"

function ProfilePage() {
  const { user, dispatch } = useApp()
  const [editMode, setEditMode] = useState(false)
  const [profileData, setProfileData] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
  })

  const handleInputChange = (key, value) => {
    setProfileData((prev) => ({ ...prev, [key]: value }))
  }

  const saveProfile = () => {
    dispatch({ type: "UPDATE_USER", payload: profileData })
    setEditMode(false)
    alert("Profile updated successfully!")
  }

  const deleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      alert("Account deletion request submitted. You will receive a confirmation email.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h2 className="text-3xl font-bold text-primary mb-8">User Profile</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-dark-gray border border-light-gray rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-primary">Profile Information</h3>
              <button
                onClick={() => setEditMode(!editMode)}
                className="bg-primary text-dark px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
              >
                {editMode ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                {editMode ? (
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
                  />
                ) : (
                  <p className="text-gray-300">{user.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
                {editMode ? (
                  <input
                    type="text"
                    value={profileData.username}
                    onChange={(e) => handleInputChange("username", e.target.value)}
                    className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
                  />
                ) : (
                  <p className="text-gray-300">{user.username}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                {editMode ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
                  />
                ) : (
                  <p className="text-gray-300">{user.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Member Since</label>
                <p className="text-gray-300">{new Date(user.joinDate).toLocaleDateString()}</p>
              </div>

              {editMode && (
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={saveProfile}
                    className="bg-primary text-dark px-6 py-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="bg-dark-gray border border-light-gray rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary mb-4">Account Actions</h3>
            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Change Password
              </button>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                Download Account Data
              </button>
              <button
                onClick={deleteAccount}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-dark-gray border border-light-gray rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-primary mb-4">Account Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Rating:</span>
                <div className="flex items-center">
                  <StarRating rating={user.rating} />
                  <span className="ml-2 text-primary font-semibold">{user.rating}</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Total Transactions:</span>
                <span className="text-primary font-semibold">{user.totalTransactions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Listed Channels:</span>
                <span className="text-primary font-semibold">{user.listedChannels}</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-gray border border-light-gray rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-primary text-dark py-2 px-4 rounded-lg hover:bg-secondary transition-colors">
                <i className="fas fa-plus mr-2"></i>
                List New Channel
              </button>
              <button className="w-full bg-transparent border border-primary text-primary py-2 px-4 rounded-lg hover:bg-primary hover:text-dark transition-colors">
                <i className="fas fa-chart-line mr-2"></i>
                View Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
