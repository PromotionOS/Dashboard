import React from 'react'
import StatusBadge from './StatusBadge'

export default function CampaignDetail({ campaign, onClose }) {
  // TODO Team 6 Sprint 3: fetch and display full campaign summary via getCampaignSummary()

  if (!campaign) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold">{campaign.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <StatusBadge status={campaign.status} />
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Offer Type</span>
            <span>{campaign.offerType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Budget Burn</span>
            <span>{campaign.budgetBurnPercent?.toFixed(1)}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Start</span>
            <span>{campaign.dateRange?.startDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">End</span>
            <span>{campaign.dateRange?.endDate}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
