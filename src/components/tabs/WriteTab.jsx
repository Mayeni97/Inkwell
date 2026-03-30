import { useState } from "react"

export default function WriteTab({ apiKey }) {
  const [title, setTitle]     = useState("")
  const [prompt, setPrompt]   = useState("")
  const [output, setOutput]   = useState("")
  const [loading, setLoading] = useState(false)

  async function generate() {
    if (!prompt) return
    if (!apiKey) {
      alert("Please enter your Gemini API key in the top bar first!")
      return
    }

    setLoading(true)
    setOutput("")

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are a master author. Write the opening chapters of a book based on this concept: ${prompt}. 
                Write with vivid detail, strong characters, and compelling prose. 
                Use chapter headings. Write at least 1000 words.`
              }]
            }]
          })
        }
      )

      const data = await response.json()
      const text = data.candidates[0].content.parts[0].text
      setOutput(text)

    } catch (error) {
      setOutput("Something went wrong: " + error.message)
    }

    setLoading(false)
  }

  return (
    <div className="flex flex-col h-full">

      {/* TITLE BAR */}
      <div className="px-6 py-3 bg-white border-b border-[#e0d5c5] flex items-center gap-3">
        <input
          type="text"
          placeholder="Untitled Book..."
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="flex-1 text-lg italic text-[#2c1f14] outline-none font-serif placeholder-[#c4a882]"
        />
      </div>

      {/* OUTPUT AREA */}
      <div className="flex-1 overflow-y-auto px-12 py-10 bg-[#faf7f2]">
        <div className="max-w-2xl mx-auto">

          {loading && (
            <div className="flex flex-col items-center justify-center h-96 text-center">
              <div className="text-4xl mb-4 animate-bounce">🪶</div>
              <p className="text-[#a07850] italic">
                Inkwell is writing your story...
              </p>
            </div>
          )}

          {!loading && !output && (
            <div className="flex flex-col items-center justify-center h-96 text-center">
              <div className="text-5xl mb-4 opacity-20">🪶</div>
              <p className="text-[#a07850] italic text-lg opacity-60">
                Your story begins with a single line.
              </p>
              <p className="text-[#a07850] text-sm opacity-40 mt-2">
                Describe your book below and press Generate.
              </p>
            </div>
          )}

          {!loading && output && (
            <div className="prose max-w-none font-serif text-[#2c1f14] leading-relaxed whitespace-pre-wrap">
              {output}
            </div>
          )}

        </div>
      </div>

      {/* PROMPT BAR */}
      <div className="px-6 py-4 bg-white border-t border-[#e0d5c5]">
        <div className="border border-[#e0d5c5] rounded-xl overflow-hidden">
          <textarea
            rows={3}
            placeholder="Describe your book: genre, characters, plot, setting..."
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            className="w-full px-4 py-3 text-sm text-[#2c1f14] outline-none resize-none font-serif placeholder-[#c4a882]"
          />
          <div className="flex items-center justify-between px-4 py-2 bg-[#f9f6f1] border-t border-[#e0d5c5]">
            <span className="text-xs text-[#a07850] italic">
              ⚡ Auto mode
            </span>
            <button
              onClick={generate}
              disabled={loading}
              className="bg-[#7a4f2d] text-white px-6 py-1.5 rounded-lg text-sm hover:bg-[#9a6f4d] transition-colors disabled:opacity-50"
            >
              {loading ? "Writing..." : "Generate ✨"}
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}