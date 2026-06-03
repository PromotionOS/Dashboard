import React, { useState, useEffect } from 'react'
import CampaignList from '../components/CampaignList'
import CampaignForm from '../components/CampaignForm'
import AlertBanner from '../components/AlertBanner'

export default function MXDashboard() {
  const [campaigns, setCampaigns] = useState([])
  const [alerts, setAlerts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // TODO Team 6 Sprint 1: fetch campaigns (mock data first, live API Sprint 2)
  // TODO Team 6 Sprint 2: poll every 10s for status changes
  // TODO Team 6 Sprint 3: show alert banner when campaign status changes to PAUSED

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">MX Dashboard</h1>
      {alerts.map(alert => <AlertBanner key={alert.id} alert={alert} />)}
      <button
        onClick={() => setShowForm(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        New Campaign
      </button>
      {showForm && <CampaignForm onClose={() => setShowForm(false)} />}
      {loading && <p>Loading campaigns...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      {!loading && <CampaignList campaigns={campaigns} />}
    </div>
  )
}
