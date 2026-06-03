export default function StatusBadge({ status }) {
  const colours = {
    ACTIVE: 'bg-green-100 text-green-800',
    PAUSED: 'bg-red-100 text-red-800',
    SCHEDULED: 'bg-blue-100 text-blue-800',
    DRAFT: 'bg-gray-100 text-gray-800',
    EXPIRED: 'bg-gray-100 text-gray-500'
  }
  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${colours[status] || colours.DRAFT}`}>
      {status}
    </span>
  )
}