import { createContext, useContext, useState, useCallback } from 'react'
import { apiService } from '../services/api'

const BookContext = createContext()

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadBooks = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const booksData = await apiService.getBooks()
      setBooks(booksData)
    } catch (err) {
      console.error('Error loading books:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const value = {
    books,
    loading,
    error,
    loadBooks
  }

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  )
}

export const useBooks = () => {
  const context = useContext(BookContext)
  if (!context) {
    throw new Error('useBooks must be used within BookProvider')
  }
  return context
}