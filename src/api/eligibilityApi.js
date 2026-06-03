import axios from 'axios'

const BASE = import.meta.env.VITE_ELIGIBILITY_API_URL
const TENANT = import.meta.env.VITE_TENANT_ID

export const checkEligibility = async (campaignId, customerId, cartTotal, cartUPCs = []) => {
  // TODO Team 6 Sprint 1 — POST /eligibility/check
  // Returns { eligible, campaignId, offerType, discountApplied, reason }
  return null
}

export const getOffers = async (customerId, cartTotal = 0) => {
  // TODO Team 6 Sprint 2 — GET /offers?customerId=X&tenantId=Y&cartTotal=Z
  // Returns { eligibleOffers: [], ineligibleOffers: [] }
  return null
}