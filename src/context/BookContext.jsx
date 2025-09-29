import { createContext, useContext } from 'react'

const BookContext = createContext()

export const BookProvider = ({ children }) => {
  return (
    <BookContext.Provider value={{}}>
      {children}
    </BookContext.Provider>
  )
}

export const useBooks = () => useContext(BookContext)