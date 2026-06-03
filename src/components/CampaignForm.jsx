import React, { useState } from 'react'

const OFFER_TYPES = ['PCT_OFF', 'AMT_OFF', 'BOGO', 'THRESHOLD']

export default function CampaignForm({ onClose, onSuccess }) {
  const [form, setForm] = useState({
    name: '', offerType: 'PCT_OFF', offerValue: '',
    upcScope: [], dateStart: '', dateEnd: '',
    stackPermission: false, stackLimit: 1,
    vendorId: '', vendorShare: 100, krogerShare: 0
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const vendorShareChange = (val) => {
    setForm(f => ({ ...f, vendorShare: val, krogerShare: 100 - val }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO Team 6 Sprint 2: call campaignApi.createCampaign() then addFunding()
    setError('Campaign creation not yet implemented')
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">New Campaign</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input placeholder="Campaign name" required
            value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
            className="w-full border p-2 rounded" />
          <select value={form.offerType}
            onChange={e => setForm(f => ({...f, offerType: e.target.value}))}
            className="w-full border p-2 rounded">
            {OFFER_TYPES.map(t => <option key={t}>{t}</option>)}
          </select>
          <input type="number" placeholder="Offer value"
            value={form.offerValue} onChange={e => setForm(f => ({...f, offerValue: e.target.value}))}
            className="w-full border p-2 rounded" />
          <div className="flex gap-4">
            <input type="date" value={form.dateStart}
              onChange={e => setForm(f => ({...f, dateStart: e.target.value}))}
              className="flex-1 border p-2 rounded" />
            <input type="date" value={form.dateEnd}
              onChange={e => setForm(f => ({...f, dateEnd: e.target.value}))}
              className="flex-1 border p-2 rounded" />
          </div>
          <hr />
          <h3 className="font-medium">Funding</h3>
          <input placeholder="Vendor ID" value={form.vendorId}
            onChange={e => setForm(f => ({...f, vendorId: e.target.value}))}
            className="w-full border p-2 rounded" />
          <div className="flex gap-4">
            <input type="number" min="0" max="100" placeholder="Vendor share %"
              value={form.vendorShare}
              onChange={e => vendorShareChange(Number(e.target.value))}
              className="flex-1 border p-2 rounded" />
            <input type="number" readOnly value={form.krogerShare}
              className="flex-1 border p-2 rounded bg-gray-50" />
          </div>
          {form.vendorShare + form.krogerShare !== 100 && (
            <p className="text-red-600 text-sm">Shares must sum to 100%</p>
          )}
          <div className="flex gap-4 pt-4">
            <button type="button" onClick={onClose}
              className="flex-1 border p-2 rounded">Cancel</button>
            <button type="submit" disabled={loading || form.vendorShare + form.krogerShare !== 100}
              className="flex-1 bg-blue-600 text-white p-2 rounded disabled:opacity-50">
              {loading ? 'Creating...' : 'Create Campaign'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
