import React, { useState } from 'react'
import { MOCK_CUSTOMERS } from '../constants/testData'
import OfferList from '../components/OfferList'

export default function CXView() {
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [cartTotal, setCartTotal] = useState('')
  const [offers, setOffers] = useState(null)
  const [loading, setLoading] = useState(false)

  // TODO Team 6 Sprint 1: implement offer check using eligibilityApi.getOffers()
  // TODO Team 6 Sprint 2: add Redeem button per eligible offer
  // TODO Team 6 Sprint 3: show full eligibility breakdown per offer

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customer Offer Check</h1>
      <select
        onChange={e => setSelectedCustomer(MOCK_CUSTOMERS.find(c => c.id === e.target.value))}
        className="border p-2 rounded mr-4"
      >
        <option value="">Select customer</option>
        {MOCK_CUSTOMERS.map(c => (
          <option key={c.id} value={c.id}>
            {c.name} ({c.loyaltyTier})
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Cart total $"
        value={cartTotal}
        onChange={e => setCartTotal(e.target.value)}
        className="border p-2 rounded mr-4"
      />
      <button
        className="px-4 py-2 bg-green-600 text-white rounded"
        disabled={!selectedCustomer || loading}
      >
        {loading ? 'Checking...' : 'Check Offers'}
      </button>
      {offers && <OfferList offers={offers} />}
    </div>
  )
}