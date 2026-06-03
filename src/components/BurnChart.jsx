import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

export default function BurnChart({ data }) {
  // TODO Team 6 Sprint 2: wire to live getCampaignBurn() data

  if (!data || data.length === 0) return null

  const getColour = (pct) => {
    if (pct >= 95) return '#ef4444'
    if (pct >= 80) return '#f59e0b'
    return '#22c55e'
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Budget Burn by Campaign</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, 100]} tickFormatter={v => `${v}%`} />
          <Tooltip formatter={v => `${v}%`} />
          <Bar dataKey="budgetBurnPercent">
            {data.map((entry, i) => (
              <Cell key={i} fill={getColour(entry.budgetBurnPercent)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
