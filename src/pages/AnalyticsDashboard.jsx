import React, { useState, useEffect } from 'react'
import BurnChart from '../components/BurnChart'
import LiftChart from '../components/LiftChart'

export default function AnalyticsDashboard() {
  const [metrics, setMetrics] = useState([])
  const [loading, setLoading] = useState(true)

  // TODO Team 6 Sprint 2: fetch analytics for all campaigns
  // TODO Team 6 Sprint 2: render burn chart and lift chart

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      {loading && <p>Loading analytics...</p>}
      <BurnChart data={metrics} />
      <LiftChart data={metrics} />
    </div>
  )
}