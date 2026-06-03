import axios from 'axios'

const BASE = import.meta.env.VITE_ANALYTICS_API_URL
const TENANT = import.meta.env.VITE_TENANT_ID

export const getCampaignReport = async (campaignId) => {
  // TODO Team 6 Sprint 2 — GET /analytics/campaigns/:id/report
  return null
}

export const getCampaignBurn = async (campaignId) => {
  // TODO Team 6 Sprint 2 — GET /analytics/campaigns/:id/burn
  // Used for real-time polling
  return null
}