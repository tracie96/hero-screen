import BackgroundElements from './BackgroundElements'
import HeroContent from './HeroContent'
import ScrollIndicator from './ScrollIndicator'

const Hero = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-8 overflow-hidden max-md:pt-16 max-md:px-4 max-md:pb-12">
      <HeroContent />
      <ScrollIndicator />
      <BackgroundElements />

    </main>
  )
}

export default Hero

