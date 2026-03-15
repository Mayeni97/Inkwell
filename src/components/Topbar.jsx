export default function Topbar({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'write',   label: '✍️ Write'   },
    { id: 'edit',    label: '🔍 Edit'    },
    { id: 'series',  label: '📚 Series'  },
    { id: 'publish', label: '🚀 Publish' },
  ]

  return (
    <div className="h-14 bg-white border-b border-[#e0d5c5] flex items-center px-6 gap-4">
      
      <div className="text-xl italic font-bold text-[#7a4f2d]">
        Inkwell
      </div>

      <div className="w-px h-6 bg-[#e0d5c5]"></div>

      <div className="flex gap-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-1.5 rounded-lg text-sm transition-colors ${
              activeTab === tab.id
                ? 'bg-[#f2ece3] text-[#7a4f2d] font-bold'
                : 'text-[#a07850] hover:bg-[#f9f6f1]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

    </div>
  )
}