import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
  return (
    <div className="container-custom py-24 text-center">
      <h1 className="text-5xl font-bold mb-6">404</h1>
      <p className="text-gray-700 mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  )
}

export default NotFoundPage
