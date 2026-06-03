import axios from 'axios'

const BASE = import.meta.env.VITE_REDEMPTION_API_URL
const TENANT = import.meta.env.VITE_TENANT_ID

export const redeem = async (campaignId, customerId, discountApplied, cartTotal,
                              storeId, division) => {
  // TODO Team 6 Sprint 2
  // POST /redeem with idempotencyKey = `browser-${Date.now()}-${Math.random()}`
  return null
}