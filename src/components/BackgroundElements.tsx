import { motion } from 'framer-motion'
import firstBird from '../assets/first-bird.svg'
import secondBird from '../assets/second-bird.svg'
import thirdBird from '../assets/third-bird.svg'
import fourthBird from '../assets/fourth-bird.svg'
import bottomSvg from '../assets/bottom.svg'
import radialImg from '../assets/radial.png'

const Bird = ({ 
  src,
  className
}: { 
  src: string
  className: string
}) => (
  <div className={`absolute ${className}`}>
    <img src={src} alt="bird" className="scale-75" />
  </div>
)

const BackgroundElements = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-[1]">
      <div className="absolute top-0 left-0 z-[1]">
        <img src={radialImg} alt="radial decoration" className="w-auto h-auto" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full z-[1]">
        <img src={bottomSvg} alt="bottom decoration" className="w-full h-auto" />
      </div>

      <Bird src={firstBird} className="bottom-[80px] left-[8%] z-[2] max-md:hidden" />
      <Bird src={secondBird} className="bottom-[100px] left-[30%] z-[2] max-md:hidden" />
      <Bird src={thirdBird} className="bottom-[90px] right-[30%] z-[2] max-md:hidden" />
      <Bird src={fourthBird} className="bottom-[95px] right-[8%] z-[2] max-md:hidden" />
      <motion.div
        className="absolute bottom-[120px] left-0 z-[2] max-md:hidden"
        initial={{ x: -50, y: 0, opacity: 1 }}
        animate={{
          x: '200vw',
          y: '-100vh',
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 5,
          ease: 'linear',
        }}
      >
        <img src={firstBird} alt="flying bird" className="w-auto h-auto scale-x-[-1]" />
        </motion.div>
      <motion.div
        className="absolute bottom-[120px] right-0 z-[2] max-md:hidden"
        initial={{ x: -50, y: 0, opacity: 1 }}
        animate={{
          x: '-200vw',
          y: '-100vh',
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 5,
          ease: 'linear',
        }}
      >
        <img src={firstBird} alt="flying bird" className="w-auto h-auto scale-x-[-1]" />
      </motion.div>
    </div>
  )
}

export default BackgroundElements

