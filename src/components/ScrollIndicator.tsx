import arrowDown from '../assets/arrow-down-04.svg'

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-sm z-[2] animate-bounce-scroll font-general">
      <span>Scroll to learn more</span>
      <img src={arrowDown} alt="scroll down" className="w-6 h-6" />
    </div>
  )
}

export default ScrollIndicator

