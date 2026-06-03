import axios from 'axios'

const BASE = import.meta.env.VITE_CAMPAIGN_API_URL
const TENANT = import.meta.env.VITE_TENANT_ID

export const getCampaigns = async (status = null) => {
  // TODO Team 6 Sprint 1 — wire to live Campaign Service
  // GET /campaigns?tenantId=TENANT&status=status
  // For Sprint 1: return mock data from constants/testData.js
  return null
}

export const createCampaign = async (campaign) => {
  // TODO Team 6 Sprint 2 — POST /campaigns
  return null
}

export const addFunding = async (campaignId, funding) => {
  // TODO Team 6 Sprint 2 — POST /campaigns/:id/funding
  return null
}

export const publishCampaign = async (campaignId) => {
  // TODO Team 6 Sprint 2 — PUT /campaigns/:id/publish
  return null
}

export const getCampaignSummary = async (campaignId) => {
  // TODO Team 6 Sprint 3 — GET /campaigns/:id/summary
  return null
}

export const updateBudget = async (campaignId, totalAmount) => {
  // TODO Team 6 Sprint 3 — PUT /campaigns/:id/budget
  return null
}