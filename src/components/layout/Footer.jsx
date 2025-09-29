import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-sm text-gray-300">
              Made with
            </span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span className="text-sm text-gray-300">
              for spiritual seekers worldwide
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-300">
              © 2025 Pure Bhakti Base. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Dedicated to spreading the divine wisdom of our beloved Gurudev
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer