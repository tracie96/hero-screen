import { useState } from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-[1200px] max-w-[calc(100%-2rem)] bg-white rounded-[200px] pt-5 pb-5 pl-6 pr-5 flex items-center justify-between gap-8 shadow-[0_1px_4px_0_rgba(12,12,13,0.05)] max-md:pl-4 max-md:pr-4">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-800">
          <img src={logo} alt="logo" className="" />
        </div>
        <nav className="flex gap-8 items-center max-md:hidden">
          <a href="#" className="font-general text-[#8C97A8] no-underline text-base font-medium leading-none tracking-normal transition-colors hover:text-gray-800">
            How it Works
          </a>
          <a href="#" className="font-general text-[#8C97A8] no-underline text-base font-medium leading-none tracking-normal transition-colors hover:text-gray-800">
            Pricing
          </a>
          <a href="#" className="font-general text-[#8C97A8] no-underline text-base font-medium leading-none tracking-normal transition-colors hover:text-gray-800">
            Use Case
          </a>
          <a href="#" className="font-general text-[#8C97A8] no-underline text-base font-medium leading-none tracking-normal transition-colors hover:text-gray-800">
            FAQ
          </a>
        </nav>
        <button className="font-general bg-[#007AFF] text-white border-none py-2.5 px-6 rounded-[43.62px] text-[0.9375rem] cursor-pointer transition-colors hover:opacity-90 max-md:hidden">
          Contact Sales
        </button>
        <button 
          onClick={toggleMenu}
          className="hidden max-md:flex flex-col gap-1 bg-transparent border-none cursor-pointer p-2" 
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-gray-800 rounded-sm transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 rounded-sm transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 rounded-sm transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </header>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-white max-md:block hidden">
          <div className="flex items-center justify-between px-6 pt-6 pb-8">
            <div className="flex items-center gap-2 font-bold text-xl text-gray-800">
              <img src={logo} alt="logo" className="" />
            </div>
            <button
              onClick={toggleMenu}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex flex-col px-6 pb-8">
            <a 
              href="#" 
              className="font-general text-gray-800 no-underline text-lg font-medium leading-relaxed tracking-normal transition-colors hover:text-[#007AFF] py-3 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#" 
              className="font-general text-gray-800 no-underline text-lg font-medium leading-relaxed tracking-normal transition-colors hover:text-[#007AFF] py-3 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#" 
              className="font-general text-gray-800 no-underline text-lg font-medium leading-relaxed tracking-normal transition-colors hover:text-[#007AFF] py-3 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Case
            </a>
            <a 
              href="#" 
              className="font-general text-gray-800 no-underline text-lg font-medium leading-relaxed tracking-normal transition-colors hover:text-[#007AFF] py-3 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <button 
              className="font-general bg-[#007AFF] text-white border-none py-3.5 px-8 rounded-full text-base font-medium cursor-pointer transition-all hover:opacity-90 hover:shadow-lg mt-8 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Sales
            </button>
          </nav>
        </div>
      )}
    </>
  )
}

export default Header

