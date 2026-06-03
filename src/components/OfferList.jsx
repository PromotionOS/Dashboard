import React from 'react'

export default function OfferList({ offers }) {
  // TODO Team 6 Sprint 2: add Redeem button per eligible offer
  // TODO Team 6 Sprint 3: show eligibility breakdown (reason) per offer

  const { eligibleOffers = [], ineligibleOffers = [] } = offers || {}

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Eligible Offers</h2>
      {eligibleOffers.length === 0 ? (
        <p className="text-gray-500 text-sm">No eligible offers.</p>
      ) : (
        <ul className="space-y-2">
          {eligibleOffers.map(offer => (
            <li key={offer.campaignId} className="border rounded p-3 bg-green-50">
              <p className="font-medium">{offer.campaignId}</p>
              <p className="text-sm text-gray-600">Discount: {offer.discountApplied}</p>
            </li>
          ))}
        </ul>
      )}

      {ineligibleOffers.length > 0 && (
        <>
          <h2 className="text-lg font-semibold mt-4 mb-2">Ineligible Offers</h2>
          <ul className="space-y-2">
            {ineligibleOffers.map(offer => (
              <li key={offer.campaignId} className="border rounded p-3 bg-gray-50">
                <p className="font-medium text-gray-500">{offer.campaignId}</p>
                <p className="text-sm text-gray-400">{offer.reason}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
