import { useState } from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import WriteTab from '../components/tabs/WriteTab'

export default function StudioPage() {
  const [activeTab, setActiveTab] = useState('write')

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <Topbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="flex h-[calc(100vh-56px)]">
        <Sidebar />
        <div className="flex-1 overflow-hidden">
          {activeTab === 'write' && <WriteTab />}
          {activeTab === 'edit' && (
            <div className="flex items-center justify-center h-full text-[#a07850] italic">
              Edit tab coming soon!
            </div>
          )}
          {activeTab === 'series' && (
            <div className="flex items-center justify-center h-full text-[#a07850] italic">
              Series tab coming soon!
            </div>
          )}
          {activeTab === 'publish' && (
            <div className="flex items-center justify-center h-full text-[#a07850] italic">
              Publish tab coming soon!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}