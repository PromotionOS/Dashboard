export default function AlertBanner({ alert, onDismiss }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded p-4 mb-4 flex justify-between">
      <div>
        <p className="font-medium text-red-800">{alert.message}</p>
        <p className="text-sm text-red-600">{alert.timestamp}</p>
      </div>
      <button onClick={() => onDismiss?.(alert.id)} className="text-red-400 hover:text-red-600">
        ✕
      </button>
    </div>
  )
}