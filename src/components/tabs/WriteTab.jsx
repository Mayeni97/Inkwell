export default function WriteTab() {
    return ( 
        <div className=" flex flex-col h-full">
            
            {/* Book Title */}
            <div className="px-6 py-3 bg-white border-b border-[#2c1f14] outline-none font-serif placerholder-[#c4a882]">
                <input
                    type="text"
                    placeholder="Untitled Book..."
                    className="flex-1 text-lg italic text-[#2c1f14] outline-none font-serif placeholder-[#c4a882]"
                    /> 
            </div>

            {/* Output */}
            <div className="flex-1 overflow-y-auto px-12 py-10 bg-[#faf7f2]">
                <div className="max-w-2xl mx-auto">

                    {/* Empty */}
                    <div className="flex flex-col items-center justify-center h-96 text-center">
                        <div className="text-5xl mb-4 opacity-20">🪶</div>
                        <p className="text-[#a07850] italic text-lg opacity-60">
                            Your story begins with a single line.
                        </p>
                        <p className="text[#a07850] text-sm opacity-40 mt-2">
                            Describe your book below and press Generate.
                        </p>
                    </div>
                </div>
            </div>

            {/* Prompt Bar */}
            <div className="px-6 py-4 bg-white border-t border-[#e0d5c5]">
                <div className="border border-[#e0d5c5] rounded-xl overflow-hidden">
                    <textarea
                        rows={3}
                        placeholder="Describe your book: genre, character, plot, setting, etc"
                        className="w-full px-4 py-3 text-sm text-[#2c1f14] oultine-none resize-none font-serif placeholder-[#c4a882]"
                    />
                    <div className="flex items-center justify-between px-4 py-2 bg-[#f9f6f1] border-t border-[#e0d5c5]">
                        <span className="text-xs text-[#a07850] italic">
                            ⚡ Auto mode
                        </span>
                        <button className="bg-[#7a4f2d] text-white px-6 py-1.5 rounded-lg text-sm hover:bg-[#9a6f4d] transition-colors">
                            Generate
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}