import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const BookReaderPage = () => {
  const navigate = useNavigate()
  useEffect(() => { navigate('/testbed') }, [navigate])
  return null
}

export default BookReaderPage