import { createContext, useContext } from 'react'

const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  return (
    <SearchContext.Provider value={{}}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)