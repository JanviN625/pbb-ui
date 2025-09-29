import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  BookOpen, 
  Search, 
  BookMarked, 
  Quote, 
  MessageCircle, 
  TestTube2 
} from 'lucide-react'

const Navigation = ({ mobile = false, onItemClick }) => {
  const location = useLocation()

  const navigationItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/reader', label: 'Book Reader', icon: BookOpen },
    { path: '/search/books', label: 'Book Search', icon: Search },
    { path: '/search/glossary', label: 'Glossary', icon: BookMarked },
    { path: '/verses', label: 'Verse Lookup', icon: Quote },
    { path: '/chat', label: 'Chat', icon: MessageCircle },
    { path: '/testbed', label: 'Testbed', icon: TestTube2 }
  ]

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const handleItemClick = () => {
    if (onItemClick) onItemClick()
  }

  if (mobile) {
    return (
      <nav className="px-4 py-2 space-y-1">
        {navigationItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            onClick={handleItemClick}
            className={`
              flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${isActive(path)
                ? 'bg-orange-100 text-orange-700'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }
            `}
          >
            <Icon size={20} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    )
  }

  return (
    <nav className="flex space-x-8">
      {navigationItems.map(({ path, label, icon: Icon }) => (
        <Link
          key={path}
          to={path}
          className={`
            flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
            ${isActive(path)
              ? 'bg-orange-100 text-orange-700'
              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }
          `}
        >
          <Icon size={18} />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  )
}

export default Navigation