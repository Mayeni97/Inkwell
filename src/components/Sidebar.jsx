import { useState } from "react"

export default function Sidebar() {
  const [mode, setMode] = useState("auto")
  const [chapters, setChapters] = useState(12)

  return (
    <div className="w-72 bg-white border-r border-[#e0d5c5] h-full overflow-y-auto flex-shrink-0">

      {/* WRITING MODE */}
      <div className="p-5 border-b border-[#e0d5c5]">
        <div className="text-xs tracking-widest uppercase text-[#a07850] font-bold mb-3">
          Writing Mode
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: "auto",    icon: "⚡", label: "Auto"     },
            { id: "guided",  icon: "🧭", label: "Guided"   },
            { id: "cowrite", icon: "🤝", label: "Co-Write" },
          ].map(m => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`flex flex-col items-center py-2 px-1 rounded-lg border text-xs transition-colors ${
                mode === m.id
                  ? "border-[#7a4f2d] bg-[#f9f3ee] text-[#7a4f2d]"
                  : "border-[#e0d5c5] text-[#a07850] hover:border-[#c4a882]"
              }`}
            >
              <span className="text-lg mb-1">{m.icon}</span>
              <span>{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* GENRE, TONE, LENGTH */}
      <div className="p-5 border-b border-[#e0d5c5]">
        <div className="text-xs tracking-widest uppercase text-[#a07850] font-bold mb-2">
          Genre
        </div>
        <select className="w-full border border-[#e0d5c5] rounded-lg px-3 py-2 text-sm text-[#2c1f14] mb-4 outline-none focus:border-[#7a4f2d]">
          <optgroup label="Fiction">
            <option>Fantasy</option>
            <option>Science Fiction</option>
            <option>Mystery</option>
            <option>Romance</option>
            <option>Horror</option>
            <option>Thriller</option>
          </optgroup>
          <optgroup label="Non-Fiction">
            <option>Biography</option>
            <option>History</option>
            <option>Science</option>
            <option>Self-Help</option>
            <option>Business</option>
          </optgroup>
        </select>

        <div className="text-xs tracking-widest uppercase text-[#a07850] font-bold mb-2">
          Tone
        </div>
        <select className="w-full border border-[#e0d5c5] rounded-lg px-3 py-2 text-sm text-[#2c1f14] mb-4 outline-none focus:border-[#7a4f2d]">
          <option>Cinematic & Gripping</option>
          <option>Dark & Atmospheric</option>
          <option>Warm & Heartfelt</option>
          <option>Witty & Playful</option>
          <option>Lyrical & Poetic</option>
          <option>Gritty & Realistic</option>
          <option>Inspirational</option>
        </select>

        <div className="text-xs tracking-widest uppercase text-[#a07850] font-bold mb-2">
          Length
        </div>
        <select className="w-full border border-[#e0d5c5] rounded-lg px-3 py-2 text-sm text-[#2c1f14] outline-none focus:border-[#7a4f2d]">
          <option value="short">Short Story (~2,000 words)</option>
          <option value="novella">Novella (~10,000 words)</option>
          <option value="novel">Novel (~50,000 words)</option>
          <option value="chapter">Single Chapter</option>
          <option value="outline">Outline Only</option>
        </select>
      </div>

      {/* CHAPTERS */}
      <div className="p-5 border-b border-[#e0d5c5]">
        <div className="text-xs tracking-widest uppercase text-[#a07850] font-bold mb-3">
          Chapters
        </div>

        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={() => setChapters(c => Math.max(1, c - 1))}
            className="w-8 h-8 rounded-lg border border-[#e0d5c5] text-[#7a4f2d] hover:border-[#7a4f2d] transition-colors"
          >
            −
          </button>

          <div className="flex-1 text-center border border-[#e0d5c5] rounded-lg py-1">
            <span className="font-bold text-[#2c1f14]">{chapters}</span>
            <span className="text-xs text-[#a07850] ml-1">chapters</span>
          </div>

          <button
            onClick={() => setChapters(c => Math.min(50, c + 1))}
            className="w-8 h-8 rounded-lg border border-[#e0d5c5] text-[#7a4f2d] hover:border-[#7a4f2d] transition-colors"
          >
            +
          </button>
        </div>

        <input
          type="range"
          min="1"
          max="50"
          value={chapters}
          onChange={e => setChapters(Number(e.target.value))}
          className="w-full accent-[#7a4f2d]"
        />

        <div className="flex justify-between text-xs text-[#a07850] mt-1">
          <span>1</span>
          <span>50</span>
        </div>

        <div className="mt-2 bg-[#f9f6f1] border border-[#e0d5c5] rounded-lg px-3 py-2 text-xs text-[#a07850] italic">
          ~{Math.round(50000 / chapters).toLocaleString()} words per chapter
        </div>
      </div>

      {/* CHARACTERS */}
      <div className="p-5 border-b border-[#e0d5c5]">
        <div className="text-xs tracking-widest uppercase text-[#a07850] font-bold mb-3">
          Characters
        </div>
        <div className="italic text-xs text-[#a07850] opacity-50">
          Coming next!
        </div>
      </div>

    </div>
  )
}