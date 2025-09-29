import { Link } from 'react-router-dom'

const VerseLookupPage = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Verse Lookup - Coming Soon</h1>
      <Link to="/testbed" className="text-blue-600 hover:underline">Go to Reader</Link>
    </div>
  </div>
)

export default VerseLookupPage