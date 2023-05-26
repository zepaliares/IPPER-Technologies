export const metadata = {
  title: 'IPPER Techonologies',
  description: 'IPPER Techonologies',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Features />    
      <Testimonials />
    </>
  )
}
