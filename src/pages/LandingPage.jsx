export default function LandingPage({onEnter}) {
    return (
       <div className="min-h-screen bg-[#faf7f2]">
        <nav className="flex item-center justify-between px-8 py-5 border-b border-[#e8e0d4]">
            <div className="text-2xl italic text-[7a4f2d] font-bold">
                Inkwell
            </div>
            <button
                onClick={onEnter}
                className="bg-[#7a4f2d] text-[#faf7f2] px-5 py-2 rounded-lg text sm">
                    Start Writing Free
                </button>
        </nav>

                <section className="text-center px-6 py-20 max-w-2xl mx-auto">
                    <div className ="text-xs tracking-widest uppercase text-[#a007850] mb-4">
                        AI Author Studio
                    </div>
                    <h1 className="text-5xl leading-tight mb-5 font-serif">
                        Your story deserves to be told<br /> 
                        to be <em className="text-[#7a4f2d]">written.</em>
                    </h1>
                    <p className="text-lg text-[5a4535] leading-relaxed mb-8 max-w-md mx-auto">
                        Inkwell helps aspiring authors writes full books, edit prose, manage series, and publish <br /> all in one place. Unleash your creativity and let your stories flow with Inkwell.
                    </p>
                    <div className="flex gap-3 justify-center">
                        <button
                            onClick={onEnter}
                            className="bg-[#7a4f2d] text-[#faf7f2] px-5 py-3 rounded-lg text-lg font-medium">
                                Start Writing Free
                        </button>
                        <button
                            onClick={onEnter}
                            className="bg-transparent border border-[#7a4f2d] text-[#7a4f2d] px-5 py-3 rounded-lg text-lg font-medium">
                                Learn More
                        </button>
                    </div>
                </section>

                <div className="text-center text-[#c4a88c] tracking-widest py-4">
                    -✦-
                </div>

                <section className="bg-[#f2ece3]px-6 py-20">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-xs tracking-widest uppercase text-[#a07850] mb-2">
                            What it does
                        </div>

                        <h2 className="text-3xl italic font-serif mb-10">
                            Everything a writer needs to bring their stories to life
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                            <div className="bg-[#faf7f2] border border-[#e0d5c5] rounded-x1 p-5">
                                <div className="text-2xl mb-3">
                                    🖋️
                                </div>
                                <div className="text-lg font-semibold mb-2">
                                    Write
                                </div>
                                <div className="text-sm text-[#5a4535] leading-relaxed">
                                    Auto-generate a full book, build chapters by chapter, or edit your prose with AI assistance.
                                </div>
                            </div>

                            <div className="bg-[#faf7f2] border border-[#e0d5c5] rounded-x1 p-5">
                                <div className="text-2xl mb-3">
                                    🔍
                                </div>
                                <div className="text-lg font-semibold mb-2">
                                    Edit
                                </div>
                                <div className="text-sm text-[#5a4535] leading-relaxed">
                                    Polish pros, shift tone, check pacing and consistency with one click.
                                </div>
                            </div>

                            <div className="bg-[#faf7f2] border border-[#e0d5c5] rounded-x1 p-5">
                                <div className="text-2xl mb-3">
                                    📚
                                </div>
                                <div className="text-lg font-semibold mb-2">
                                    Series
                                </div>
                                <div className="text-sm text-[#5a4535] leading-relaxed">
                                    Manage your series, track character arcs, and keep your world-building details in one place.
                                </div>
                            </div>

                            <div className="bg-[#faf7f2] border border-[#e0d5c5] rounded-x1 p-5">
                                <div className="text-2xl mb-3">
                                    🚀
                                </div>
                                <div className="text-lg font-semibold mb-2">
                                    Publish
                                </div>
                                <div className="text-sm text-[#5a4535] leading-relaxed">
                                    Export your manuscript in multiple formats, ready for self-publishing or sharing with beta readers.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center text-[#c4a88c] tracking-widest py-4">
                    — ✦ —
                </div>

                <section className="text-center px-6 py-20 max-w-2xl mx-auto"> 
                    <div className="text-xs tracking-widest uppercase text-[#a07850] mb-4">
                        How it works
                    </div>

                    <h2 className="text-3xl italic font-serif mb-10">
                        How it works
                    </h2>
                    
                    <div className="flex gap-5 mb-8">
                        <div className="text-4xl italic text-[#c4a88c] w-9 flex-shrink-0">
                            1
                        </div>
                        <div className="font-bold mb-1">Get your free API key</div>
                        <div className="text-sm text-[#7a6555] leading-relaxed">
                            Sign up for a free account and get your API key to start using Inkwell's AI writing tools.
                        </div>
                    </div>

                    <div className="flex gap-5 mb-8">
                        <div className="text-4xl italic text-[#c4a882] w-9 flex-shrink-0">
                            2
                        </div>
                        <div className="font-bold mb-1">Describe your book</div>
                        <div className="text-sm text-[#7a6555] leading-relaxed">
                            Pick your genre, tone and chapter count. Then describe your concept in plain English.
                        </div>
                    </div>

                    <div className="flex gap-5 mb-8">
                        <div className="text-4xl italic text-[#c4a88c] w-9 flex-shrink-0">
                            3
                        </div>
                        <div className="font-bold mb-1">Write, edit and publish</div>
                        <div className="text-sm text-[#7a6555] leading-relaxed">
                            Inkwell generates your book. Edit with AI tools.
                            Export as PDF or KDP format when you are done.
                        </div>
                    </div>

                </section>

                <footer className="border-t border-[#e0d5c5] px-8 py-6 flex justify-between items-center flex-wrap gap-3">
                    <div className="italic text-[#a07850] font-bold">
                    Inkwell
                    </div>
                    <div className="text-xs text-[#a09080]">
                    Free forever · Powered by Gemini · Built with React + Vite and a dream
                    </div>
                </footer>
        </div>
    )
}

