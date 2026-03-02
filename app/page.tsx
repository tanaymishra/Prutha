import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-white text-gray-900">

      {/* 
        LEFT COLUMN: Content
        A beautifully spaced, typographical layout typical of modern premium startups 
      */}
      <div className="flex w-full flex-col justify-between px-8 py-12 lg:w-1/2 lg:px-20 xl:px-28">

        {/* Header / Logo */}
        <header className="flex items-center justify-between">
          <div className="text-xl font-bold tracking-widest text-black">
            PRUTHA
            <div className="h-[2px] w-1/2 bg-black mt-1"></div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="my-auto max-w-xl">
          <div className="mt-10 mb-6 inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-600 shadow-sm">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            Coming Soon
          </div>

          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:leading-[1.1]">
            Bridging Borders,<br />
            <span className="text-gray-400">Delivering Excellence.</span>
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-gray-600">
            Prutha Enterprises is redefining the global supply chain. Our new digital
            gateway for international trade and logistics is currently under construction,
            designed to bring maximum efficiency and transparency to your business.
          </p>

          <div className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-8 font-medium text-white transition-all bg-black hover:bg-gray-800 shadow-xl hover:shadow-2xl">
            <a href="mailto:info@pruthaenterprises.com" className="absolute inset-0 z-10"></a>
            Contact Us
            <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </main>

        {/* Footer info */}
        <footer className="mt-12 text-sm text-gray-500">
          <p>
            Inquiries: <a href="mailto:info@pruthaenterprises.com" className="font-semibold text-gray-900 hover:underline transition-all">info@pruthaenterprises.com</a>
          </p>
          <p className="mt-2 text-xs text-gray-400">&copy; {new Date().getFullYear()} Prutha Enterprises. All rights reserved.</p>
        </footer>
      </div>

      {/* 
        RIGHT COLUMN: Visual/Image 
        Hidden on mobile, taking up half the screen on large monitors 
      */}
      <div className="relative hidden w-1/2 lg:block">
        <div className="absolute inset-0 bg-gray-900/10 z-10 pointer-events-none mix-blend-multiply"></div>
        <Image
          src="/ports.jpg" width={500} height={500}
          alt="Cargo ship at port demonstrating global logistics"
          className="h-full w-full object-cover"
        />

        {/* Subtle decorative elements over the image */}
        <div className="absolute bottom-12 right-12 z-20 rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/20 text-white shadow-2xl max-w-xs transition-transform hover:scale-105">
          <div className="mb-2 flex items-center space-x-2">
            <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">Global Network</span>
          </div>
          <p className="text-sm text-gray-100">Connecting markets across continents with seamless, end-to-end supply chain solutions.</p>
        </div>
      </div>

    </div>
  );
}
