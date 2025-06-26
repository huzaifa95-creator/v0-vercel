"use client"

import { createContext, useContext, useReducer } from "react"
import { mockChannels, mockUser } from "../data/mockData"

const AppContext = createContext()

const initialState = {
  user: mockUser,
  channels: mockChannels,
  filters: {
    category: "",
    minSubscribers: "",
    maxPrice: "",
    premiumOnly: false,
  },
  searchTerm: "",
  selectedChannel: null,
  showChannelDetail: false,
  showPaymentModal: false,
  showChat: false,
  chatUser: "",
}

function appReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload }
    case "SET_FILTERS":
      return { ...state, filters: { ...state.filters, ...action.payload } }
    case "SET_SELECTED_CHANNEL":
      return { ...state, selectedChannel: action.payload }
    case "TOGGLE_CHANNEL_DETAIL":
      return { ...state, showChannelDetail: action.payload }
    case "TOGGLE_PAYMENT_MODAL":
      return { ...state, showPaymentModal: action.payload }
    case "TOGGLE_CHAT":
      return { ...state, showChat: action.payload, chatUser: action.chatUser || "" }
    case "UPDATE_USER":
      return { ...state, user: { ...state.user, ...action.payload } }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const value = {
    ...state,
    dispatch,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
