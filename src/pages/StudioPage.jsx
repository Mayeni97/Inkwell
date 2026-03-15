import { useState } from 'react'
import Topbar from '../components/Topbar'

export default function StudioPage() {
  const [activeTab, setActiveTab] = useState('write')

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <Topbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="flex items-center justify-center h-[calc(100vh-56px)]">
        <p className="text-[#a07850] italic">
          Active tab: {activeTab}
        </p>
      </div>
    </div>
  )
}