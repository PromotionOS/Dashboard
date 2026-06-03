// Used by Team 6 Sprint 1 while Campaign Service is being built
export const MOCK_CAMPAIGNS = [
  {
    id: 'camp-001',
    name: 'Weekend Mega Sale',
    status: 'PAUSED',
    offerType: 'PCT_OFF',
    budgetBurnPercent: 95.2,
    dateRange: { startDate: '2026-06-01', endDate: '2026-06-30' }
  },
  {
    id: 'camp-002',
    name: 'Buy 2 Get 1 Free — Cereal',
    status: 'ACTIVE',
    offerType: 'BOGO',
    budgetBurnPercent: 40.0,
    dateRange: { startDate: '2026-06-01', endDate: '2026-06-15' }
  },
  {
    id: 'camp-003',
    name: 'Spend $50 Get $10 Off',
    status: 'ACTIVE',
    offerType: 'THRESHOLD',
    budgetBurnPercent: 23.0,
    dateRange: { startDate: '2026-06-01', endDate: '2026-06-30' }
  },
  {
    id: 'camp-004',
    name: 'Platinum Member Exclusive — 30% Off Wine',
    status: 'ACTIVE',
    offerType: 'PCT_OFF',
    budgetBurnPercent: 25.0,
    dateRange: { startDate: '2026-06-01', endDate: '2026-06-30' }
  },
  {
    id: 'camp-006',
    name: 'Pharmacy — Vitamin Bundle',
    status: 'PAUSED',
    offerType: 'PCT_OFF',
    budgetBurnPercent: 100.0,
    dateRange: { startDate: '2026-06-01', endDate: '2026-06-30' }
  },
  {
    id: 'camp-007',
    name: 'Back to School Stationery',
    status: 'SCHEDULED',
    offerType: 'PCT_OFF',
    budgetBurnPercent: 0.0,
    dateRange: { startDate: '2026-08-01', endDate: '2026-08-31' }
  }
]

export const MOCK_CUSTOMERS = [
  { id: 'cust-001', name: 'Alice Johnson', loyaltyTier: 'PLATINUM', division: 'division-midwest' },
  { id: 'cust-002', name: 'Bob Martinez', loyaltyTier: 'GOLD', division: 'division-southeast' },
  { id: 'cust-003', name: 'Carol White', loyaltyTier: 'SILVER', division: 'division-midwest' },
  { id: 'cust-004', name: 'David Kim', loyaltyTier: 'BASIC', division: 'division-southeast' },
  { id: 'cust-006', name: 'Frank Nguyen (GOLD boundary)', loyaltyTier: 'GOLD', division: 'division-west' },
  { id: 'cust-007', name: 'Grace Lee (PLATINUM boundary)', loyaltyTier: 'PLATINUM', division: 'division-west' },
  { id: 'cust-010', name: 'Jack Wilson (geo miss)', loyaltyTier: 'BASIC', division: 'division-southwest' },
  { id: 'cust-011', name: 'Karen Adams (multi-segment PLATINUM)', loyaltyTier: 'PLATINUM', division: 'division-midwest' }
]