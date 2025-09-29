import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Search, MessageCircle, Quote, BookMarked, ArrowRight, TestTube2 } from 'lucide-react'
import { useBooks } from '../context/BookContext'

const HomePage = () => {
  const { books, loading, loadBooks } = useBooks()
  const [featuredBooks, setFeaturedBooks] = useState([])

  useEffect(() => {
    if (!books || (Array.isArray(books) ? books.length === 0 : !books.books)) {
      loadBooks()
    } else {
      // Handle both array and object formats
      const booksArray = Array.isArray(books) ? books : (books?.books || [])
      setFeaturedBooks(booksArray.slice(0, 3))
    }
  }, [books, loadBooks])

  const features = [
    {
      title: 'Book Reader',
      description: 'Read spiritual books with an intuitive page-by-page interface',
      icon: BookOpen,
      link: '/reader',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      title: 'Book Search',
      description: 'Search across all books to find specific content and teachings',
      icon: Search,
      link: '/search/books',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      title: 'Glossary',
      description: 'Look up spiritual terms and concepts with detailed explanations',
      icon: BookMarked,
      link: '/search/glossary',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100'
    },
    {
      title: 'Verse Lookup',
      description: 'Find specific verses and references across all scriptures',
      icon: Quote,
      link: '/verses',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100'
    },
    {
      title: 'AI Chat',
      description: 'Have conversations about spiritual topics with book context',
      icon: MessageCircle,
      link: '/chat',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100'
    },
    {
      title: 'Original Reader (Testbed)',
      description: 'Access the original full-featured book reading interface',
      icon: TestTube2,
      link: '/testbed',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:bg-indigo-100'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-24 flex items-center justify-center">
              <img
                src="/images/bhakti_base_logo.webp"
                alt="Bhakti Base Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
            Pure Bhakti Base
          </h1>
          <p className="text-xl text-slate-600 font-medium mb-8 max-w-3xl mx-auto">
            Unlocking the Eternal Teachings of Yugācārya Śrīla Bhaktivedānta Nārāyaṇa Gosvāmī Mahārāja
          </p>
          
          {/* Quick Access to Original Reader */}
          <div className="mb-12">
            <Link
              to="/testbed"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <BookOpen className="mr-3" size={24} />
              Start Reading Books
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Explore Sacred Wisdom
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                to={feature.link}
                className={`group p-6 rounded-2xl border border-slate-200 ${feature.bgColor} ${feature.hoverColor} transition-all hover:shadow-lg hover:scale-105`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`${feature.color}`} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 ml-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-slate-700">
                  Explore <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      {featuredBooks.length > 0 && (
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Featured Books
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredBooks.map((book) => {
                const bookTitle = book.original_book_title || book.english_book_title || book.title || book.name
                const bookId = book.id || book._id || book.book_id
                
                return (
                  <div key={bookId} className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {bookTitle}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      {book.author || 'Unknown Author'}
                    </p>
                    <p className="text-xs text-slate-500 mb-4">
                      {book.description || 'No description available'}
                    </p>
                    <Link
                      to="/testbed"
                      className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
                    >
                      Start Reading <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Vision & Mission */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Pure Bhakti Base Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To preserve, organize, and make accessible the divine teachings of Yugācārya Śrīla Bhaktivedānta Nārāyaṇa Gosvāmī Mahārāja to inspire and uplift seekers on the path of pure bhakti.
              </p>
            </div>

            {/* Mission Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Pure Bhakti Base Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To serve as a spiritual companion to devotees by offering intelligent access to Śrīla Gurudev's books and insights, enabling personalized, immersive, and multilingual learning experiences rooted in Gaudiya Vaishnava tradition.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 Gokul Bhajan & Vedic Studies. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage