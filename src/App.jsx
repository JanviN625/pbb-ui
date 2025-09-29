import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import BookReaderPage from './pages/BookReaderPage'
import BookSearchPage from './pages/BookSearchPage'
import GlossarySearchPage from './pages/GlossarySearchPage'
import VerseLookupPage from './pages/VerseLookupPage'
import ChatPage from './pages/ChatPage'
import TestbedPage from './pages/TestbedPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reader" element={<BookReaderPage />} />
        <Route path="/search/books" element={<BookSearchPage />} />
        <Route path="/search/glossary" element={<GlossarySearchPage />} />
        <Route path="/verses" element={<VerseLookupPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/testbed" element={<TestbedPage />} />
      </Routes>
    </Layout>
  )
}

export default App