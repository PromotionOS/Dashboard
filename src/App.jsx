import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MXDashboard from './pages/MXDashboard'
import CXView from './pages/CXView'
import AnalyticsDashboard from './pages/AnalyticsDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-gray-900 text-white p-4 flex gap-6">
        <span className="font-bold text-lg">PromotionOS</span>
        <Link to="/mx" className="hover:text-gray-300">MX Dashboard</Link>
        <Link to="/cx" className="hover:text-gray-300">Customer View</Link>
        <Link to="/analytics" className="hover:text-gray-300">Analytics</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MXDashboard />} />
        <Route path="/mx" element={<MXDashboard />} />
        <Route path="/cx" element={<CXView />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}