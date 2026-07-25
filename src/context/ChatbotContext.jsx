import { createContext, useContext, useState } from 'react'

const ChatbotContext = createContext(null)

export function ChatbotProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)

  const addMessage = (message) => setMessages((prev) => [...prev, message])

  const value = {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((v) => !v),
    messages,
    addMessage,
    isTyping,
    setIsTyping,
  }

  return <ChatbotContext.Provider value={value}>{children}</ChatbotContext.Provider>
}

export function useChatbotContext() {
  const ctx = useContext(ChatbotContext)
  if (!ctx) throw new Error('useChatbotContext must be used within a ChatbotProvider')
  return ctx
}