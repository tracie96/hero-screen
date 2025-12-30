import dots from '../assets/dots.svg'
import topBird from '../assets/top-bird.svg'
import appleIcon from '../assets/apple-icon.svg'

const HeroContent = () => {
  return (
    <div className="relative z-[2] text-center max-w-[800px] w-full animate-slide-up -mt-28 max-md:-mt-16 font-general">
      <div className="absolute left-[-200px] top-[5%] animate-slide-up max-md:hidden" style={{ animationDelay: '0.2s' }}>
        <img src={topBird} alt="bird" className="w-auto h-auto" />
      </div>
      <div className="absolute left-[-80px] top-[12%] animate-slide-up max-md:hidden" style={{ animationDelay: '0.3s' }}>
        <img src={topBird} alt="bird" className="w-auto h-auto" />
      </div>
      <div className="absolute right-[-100px] top-[8%] animate-slide-up max-md:hidden" style={{ animationDelay: '0.4s' }}>
        <img src={topBird} alt="bird" className="w-auto h-auto scale-x-[-1]" />
      </div>
      <div className="absolute right-[-90px] top-[40%] animate-slide-up max-md:hidden" style={{ animationDelay: '0.5s' }}>
        <img src={topBird} alt="bird" className="w-auto h-auto scale-x-[-1]" />
      </div>
      <div className="inline-flex items-center gap-2 bg-white text-blue-darker py-2 px-4 rounded-full shadow-sm mb-8 max-sm:text-xs max-sm:py-1.5 max-sm:px-3">
        <img src={dots} alt="badge" className="" />
        <span className="text-sm font-medium max-sm:text-xs text-[#007AFF]">
          <span className="font-semibold">#1</span> iMessage Automation Tool
        </span>
      </div>
      
      <h1 className="text-6xl font-extrabold leading-tight mb-6 text-gray-800 max-md:text-4xl max-sm:text-3xl">
        <span className=" text-[#006FE8]">iMessage</span><span> Automation</span>
        <span className="block">for Teams and AI</span>
        <span className="block">Workflows.</span>
      </h1>
      
      <p className="text-lg leading-relaxed mb-10 max-w-[600px] mx-auto max-md:text-base max-md:mb-8 max-sm:text-[0.9375rem] text-[#000000]">
        Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini.
      </p>
      
      <div className="flex gap-4 justify-center items-center flex-wrap max-md:flex-col max-md:w-full">
        <button className="bg-blue-darker text-white border-none py-4 px-8 rounded-[50px] text-base font-semibold cursor-pointer transition-colors hover:opacity-90 max-md:w-full max-md:justify-center max-sm:py-3.5 max-sm:px-6 max-sm:text-[0.9375rem]">
          Get Started
        </button>
        <button className="text-gray-800 border border-[#6C788F] py-4 px-8 rounded-[50px] text-base font-semibold cursor-pointer transition-all flex items-center gap-3 max-md:w-full max-md:justify-center max-sm:py-3.5 max-sm:px-6 max-sm:text-[0.9375rem]">
          <img src={appleIcon} alt="Apple" className="w-5 h-5 flex-shrink-0" />
          <div className="w-px h-5 bg-gray-500"></div>
          <span>Download the Mac app</span>
        </button>
      </div>
    </div>
  )
}

export default HeroContent

