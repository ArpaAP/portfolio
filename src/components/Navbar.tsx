'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
  const { scrollY } = useScroll()
  const [showNavbar, setShowNavbar] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShowNavbar(latest > 50 ? true : false)
  })

  return (
    <motion.div
      className="fixed inset-x-0 h-14 px-5 py-3 z-50 backdrop-blur-md transition-all duration-300 ease-in-out"
      style={{
        opacity: showNavbar ? 1 : 0,
        top: showNavbar ? -1 : -64,
      }}
    >
      <div className="text-neutral-500 text-base font-light h-full flex items-center justify-center gap-16">
        <a className="text-violet-400 font-medium">INTRO</a>
        <a>ABOUT</a>
        <a>SKILLS</a>
        <a>PROJECTS</a>
      </div>
    </motion.div>
  )
}
