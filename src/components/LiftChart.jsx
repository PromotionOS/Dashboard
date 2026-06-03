import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export default function LiftChart({ data }) {
  // TODO Team 6 Sprint 2: wire to live getCampaignReport() data

  if (!data || data.length === 0) return null

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Campaign Lift</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="lift" stroke="#6366f1" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}