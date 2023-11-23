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
  useTransform,
} from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

export default function HomePage() {
  const { scrollY } = useScroll()

  const [currentSection, setCurrentSection] = useState(0)

  const introSectionRef = useRef<HTMLDivElement>(null)

  const aboutSectionRef = useRef<HTMLDivElement>(null)

  const introAnimControls = useRef<AnimationPlaybackControls>()
  const aboutAnimControls = useRef<AnimationPlaybackControls>()

  // Motion values

  const introScrollProgress = useMotionValue(0)
  const aboutScrollProgress = useMotionValue(0)

  const aboutText1Count = useMotionValue(0)
  const aboutText2Count = useMotionValue(0)
  const aboutText3Count = useMotionValue(0)

  // constants

  const aboutText1 = 'Software makes'
  const aboutText2 = 'my imagination'
  const aboutText3 = 'a reality'

  const aboutText1CountRounded = useTransform(aboutText1Count, (latest) =>
    Math.round(latest),
  )
  const aboutDisplayText1 = useTransform(aboutText1CountRounded, (latest) =>
    aboutText1.slice(0, latest),
  )

  const aboutText2CountRounded = useTransform(aboutText2Count, (latest) =>
    Math.round(latest),
  )
  const aboutDisplayText2 = useTransform(aboutText2CountRounded, (latest) =>
    aboutText2.slice(0, latest),
  )

  const aboutText3CountRounded = useTransform(aboutText3Count, (latest) =>
    Math.round(latest),
  )
  const aboutDisplayText3 = useTransform(aboutText3CountRounded, (latest) =>
    aboutText3.slice(0, latest),
  )

  useMotionValueEvent(scrollY, 'change', (later) => {
    if (!introAnimControls.current) return
    if (!aboutAnimControls.current) return

    let introSection = introSectionRef.current!

    let newIntroScrollProgress =
      -introSection.getBoundingClientRect().top / window.innerHeight

    if (0 <= newIntroScrollProgress) {
      introAnimControls.current.time = newIntroScrollProgress
    } else {
      introAnimControls.current.time = 0
    }

    let aboutSection = aboutSectionRef.current!

    let newAboutSectionProgress =
      -aboutSection.getBoundingClientRect().top / window.innerHeight

    if (0 <= newAboutSectionProgress) {
      aboutAnimControls.current.time = newAboutSectionProgress
    } else {
      aboutAnimControls.current.time = 0
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
        aboutText1Count,
        aboutText1.length,
        { type: 'tween', duration: 1.2, ease: 'easeInOut', at: 0 },
      ],
      [
        aboutText2Count,
        aboutText2.length,
        { type: 'tween', duration: 1.5, ease: 'easeInOut', at: 1.5 },
      ],
      [
        aboutText3Count,
        aboutText3.length,
        { type: 'tween', duration: 1, ease: 'easeInOut', at: 3.2 },
      ],
      [
        '#aboutSection .Title1',
        { opacity: 1, scale: 1 },
        { duration: 1.2, at: 0 },
      ],
      [
        '#aboutSection .Title2',
        { opacity: 1, scale: 1 },
        { duration: 1.5, at: 1.5 },
      ],
      [
        '#aboutSection .Title3',
        { opacity: 1, scale: 1 },
        { duration: 1, at: 3.2 },
      ],
      [
        '#aboutSection .Titles',
        { opacity: 0, scale: 0.9 },
        { duration: 0.8, at: 4.2, ease: 'easeInOut' },
      ],
    ],
    [aboutScrollProgress, aboutText1Count, aboutText2Count, aboutText3Count],
  )

  useEffect(() => {
    introAnimControls.current = animate(introSectionTimeline)
    introAnimControls.current.pause()
    aboutAnimControls.current = animate(aboutSectionTimeline)
    aboutAnimControls.current.pause()

    return () => {
      introAnimControls.current?.stop()
      aboutAnimControls.current?.stop()
    }
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
          className="container mx-auto px-24 py-12 min-h-[8000px]"
        >
          <div className="Titles fixed inset-0 flex flex-col gap-8 items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.6 }}
              className="Title1 text-6xl"
            >
              {aboutDisplayText1}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, scale: 1 }}
              className="Title2 text-6xl font-medium"
            >
              {aboutDisplayText2}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, scale: 1 }}
              className="Title3 text-6xl"
            >
              {aboutDisplayText3}
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
