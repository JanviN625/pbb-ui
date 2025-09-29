import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AppProvider } from './context/AppContext.jsx'
import { BookProvider } from './context/BookContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'
import { ChatProvider } from './context/ChatContext.jsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <BookProvider>
          <SearchProvider>
            <ChatProvider>
              <App />
            </ChatProvider>
          </SearchProvider>
        </BookProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)