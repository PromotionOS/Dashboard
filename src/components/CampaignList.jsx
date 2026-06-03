import StatusBadge from './StatusBadge'

export default function CampaignList({ campaigns }) {
  // TODO Team 6 Sprint 1: render campaign table with status badges and burn bars

  const burnColour = (pct) => {
    if (pct >= 95) return 'bg-red-500'
    if (pct >= 80) return 'bg-amber-500'
    return 'bg-green-500'
  }

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-50">
          <th className="text-left p-3 border-b">Name</th>
          <th className="text-left p-3 border-b">Status</th>
          <th className="text-left p-3 border-b">Offer Type</th>
          <th className="text-left p-3 border-b">Budget Burn</th>
          <th className="text-left p-3 border-b">Date Range</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map(c => (
          <tr key={c.id} className="border-b hover:bg-gray-50">
            <td className="p-3">{c.name}</td>
            <td className="p-3"><StatusBadge status={c.status} /></td>
            <td className="p-3">{c.offerType}</td>
            <td className="p-3">
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded h-2">
                  <div
                    className={`h-2 rounded ${burnColour(c.budgetBurnPercent)}`}
                    style={{ width: `${Math.min(c.budgetBurnPercent, 100)}%` }}
                  />
                </div>
                <span className="text-sm">{c.budgetBurnPercent?.toFixed(1)}%</span>
              </div>
            </td>
            <td className="p-3 text-sm">{c.dateRange?.startDate} → {c.dateRange?.endDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}