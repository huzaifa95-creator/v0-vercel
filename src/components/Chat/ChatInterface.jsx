"use client"

import { useState, useEffect, useRef } from "react"
import { useApp } from "../../context/AppContext"

function ChatInterface() {
  const { showChat, chatUser, dispatch } = useApp()
  const [messages, setMessages] = useState([
    { id: 1, sender: "other", text: "Hi! I'm interested in your gaming channel.", time: "10:30 AM" },
    { id: 2, sender: "me", text: "Hello! Thanks for your interest. What would you like to know?", time: "10:32 AM" },
  ])
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleClose = () => {
    dispatch({ type: "TOGGLE_CHAT", payload: false })
  }

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: "me",
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
  }

  const reportUser = () => {
    alert("User reported to admin. Thank you for keeping our platform safe!")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  if (!showChat) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-dark-gray border border-light-gray rounded-lg w-full max-w-md h-96 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-light-gray">
          <h3 className="text-lg font-bold text-primary">Chat with {chatUser}</h3>
          <div className="flex gap-2">
            <button
              onClick={reportUser}
              className="text-red-400 hover:text-red-300 transition-colors"
              title="Report User"
            >
              <i className="fas fa-flag"></i>
            </button>
            <button onClick={handleClose} className="text-gray-400 hover:text-gray-300 transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`chat-bubble flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg ${
                  message.sender === "me" ? "bg-primary text-dark" : "bg-medium-gray text-gray-300"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">{message.time}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-light-gray">
          <div className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-medium-gray border border-light-gray rounded-lg px-3 py-2 text-primary focus:outline-none focus:border-primary"
            />
            <button
              onClick={sendMessage}
              className="bg-primary text-dark px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInterface
