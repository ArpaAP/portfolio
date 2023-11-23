'use client'

import { TbChevronsDown, TbBrandGithub } from 'react-icons/tb'
import { FaGithub } from 'react-icons/fa'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimationPlaybackControls,
  useMotionValue,
  animate,
  AnimationSequence,
} from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

export default function HomePage() {
  const { scrollY } = useScroll()

  const [currentSection, setCurrentSection] = useState(0)

  const introSectionRef = useRef<HTMLDivElement>(null)

  const aboutSectionRef = useRef<HTMLDivElement>(null)

  const introAnimControls = useRef<AnimationPlaybackControls>()
  const aboutAnimControls = useRef<AnimationPlaybackControls>()

  const introScrollProgress = useMotionValue(0)
  const aboutScrollProgress = useMotionValue(0)

  useMotionValueEvent(scrollY, 'change', (later) => {
    if (!introAnimControls.current) return
    if (!aboutAnimControls.current) return

    let introSection = introSectionRef.current!

    let newIntroScrollProgress =
      -introSection.getBoundingClientRect().top / introSection.offsetHeight

    if (0 <= newIntroScrollProgress && newIntroScrollProgress <= 1) {
      introAnimControls.current.time =
        Math.min(newIntroScrollProgress, 1) * introAnimControls.current.duration
    } else if (newIntroScrollProgress < 0) {
      introAnimControls.current.time = 0
    } else if (newIntroScrollProgress > 1) {
      introAnimControls.current.time = 1
    }

    let aboutSection = aboutSectionRef.current!

    let newAboutSectionProgress =
      -aboutSection.getBoundingClientRect().top / aboutSection.offsetHeight

    if (0 <= newAboutSectionProgress && newAboutSectionProgress <= 1) {
      aboutAnimControls.current.time =
        Math.min(newAboutSectionProgress, 1) *
        aboutAnimControls.current.duration
    } else if (newAboutSectionProgress < 0) {
      aboutAnimControls.current.time = 0
    } else if (newAboutSectionProgress > 1) {
      aboutAnimControls.current.time = 1
    }
  })

  const introSectionTimeline = useMemo<AnimationSequence>(
    () => [
      [introScrollProgress, 1, { duration: 1 }],
      [
        '#introSection',
        { opacity: 0 },
        { duration: 0.3, delay: 0.1, ease: 'easeInOut' },
      ],
      ['#background', { opacity: 1 }, { duration: 0.3 }],
    ],
    [introScrollProgress],
  )

  const aboutSectionTimeline = useMemo<AnimationSequence>(
    () => [
      [aboutScrollProgress, 1, { duration: 1 }],
      [
        '#aboutSection .welcomeTitle',
        { opacity: 1, scale: 2 },
        { duration: 0.2 },
      ],
      ['#aboutSection .toTitle', { opacity: 1, scale: 2 }, { duration: 0.2 }],
      [
        '#aboutSection .welcomeTitle',
        { opacity: 0 },
        { duration: 0.2, delay: 0.5 },
      ],
    ],
    [aboutScrollProgress],
  )

  useEffect(() => {
    introAnimControls.current = animate(introSectionTimeline)
    introAnimControls.current.pause()
    aboutAnimControls.current = animate(aboutSectionTimeline)
    aboutAnimControls.current.pause()
  }, [
    aboutScrollProgress,
    aboutSectionTimeline,
    introScrollProgress,
    introSectionTimeline,
  ])

  return (
    <motion.main>
      <motion.div
        id="background"
        initial={{ opacity: 0 }}
        className="fixed inset-0 -z bg-zinc-800"
      />
      <section
        id="introSection"
        ref={introSectionRef}
        className="container mx-auto px-8 sm:px-12 lg:px-24 h-screen relative"
      >
        <a
          className="absolute top-6 right-1 ml-auto"
          href="https://github.com/ArpaAP"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <FaGithub size={28} />
          </div>
        </a>

        <motion.div className="flex items-center h-full pb-10">
          <div className="my-auto">
            <motion.h1
              className="text-5xl font-normal pb-5 text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
              }}
            >
              Life is short <span className="font-light">—</span>
            </motion.h1>
            <motion.h1
              className="text-7xl font-extrabold text-gray-800 pb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
            >
              I code for the{' '}
              <span className="font-black text-violet-500">Future</span>
            </motion.h1>
            <motion.div
              className="font-light text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
            >
              안녕하세요, 소프트웨어 개발자 <b>알파</b>입니다.
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-x-0 bottom-8 flex justify-center items-center animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
          }}
        >
          <span className="text-lg mr-2">
            <TbChevronsDown />
          </span>{' '}
          Scroll to see more
        </motion.div>
      </section>

      <div className="text-white">
        <section
          id="aboutSection"
          ref={aboutSectionRef}
          className="container mx-auto px-24 py-12 min-h-[4000px]"
        >
          <div className="fixed inset-0 flex flex-col gap-8 items-center justify-center">
            <motion.h1 initial={{ opacity: 0 }} className="welcomeTitle">
              상상을 현실로.
            </motion.h1>
          </div>
        </section>
      </div>

      <div className="bg-gradient-to-br from-violet-500 to-sky-600 text-white">
        <section className="container mx-auto px-24 py-12 min-h-screen">
          <h1 className="font-semibold pb-8">getProjects()</h1>
        </section>
      </div>
    </motion.main>
  )
}
