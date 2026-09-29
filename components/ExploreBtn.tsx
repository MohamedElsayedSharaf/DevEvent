'use client'
import Image from 'next/image'
import posthog from "posthog-js"

const ExploreBtn = () => {
  const handleExploreClick = () => {
    posthog.capture("explore_events_clicked")
  }

  return (
    <button type='button' id='explore-btn' onClick={handleExploreClick} className='bg-[#5f9a87]   mx-auto font-bold py-2 px-4 rounded mt-7 hover:bg-[#4cd9c0] transition-colors duration-300'>
      <a href="#events">
        Explore Events
        <Image src="/icons/arrow-down.svg" alt="Explore Events" width={24} height={24} />
      </a>
    </button>
  )
}

export default ExploreBtn
