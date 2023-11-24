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

  const animControls = useRef<AnimationPlaybackControls>()

  // Motion values

  const scrollProgress = useMotionValue(0)

  const introText1Count = useMotionValue(0)
  const introText2Count = useMotionValue(0)
  const introText3Count = useMotionValue(0)

  // constants

  const introText1 = 'Software makes'
  const introText2 = 'my imagination'
  const introText3 = 'a reality'

  const aboutText1CountRounded = useTransform(introText1Count, (latest) =>
    Math.round(latest),
  )
  const introDisplayText1 = useTransform(aboutText1CountRounded, (latest) =>
    introText1.slice(0, latest),
  )

  const aboutText2CountRounded = useTransform(introText2Count, (latest) =>
    Math.round(latest),
  )
  const introDisplayText2 = useTransform(aboutText2CountRounded, (latest) =>
    introText2.slice(0, latest),
  )

  const aboutText3CountRounded = useTransform(introText3Count, (latest) =>
    Math.round(latest),
  )
  const introDisplayText3 = useTransform(aboutText3CountRounded, (latest) =>
    introText3.slice(0, latest),
  )

  useMotionValueEvent(scrollY, 'change', (later) => {
    if (!animControls.current) return

    let newScrollProgress = later / window.innerHeight

    if (0 <= newScrollProgress) {
      animControls.current.time = newScrollProgress
    } else {
      animControls.current.time = 0
    }
  })

  const timeline = useMemo<AnimationSequence>(
    () => [
      [scrollProgress, 1, { duration: 1 }],
      [
        '#introSection',
        { opacity: [1, 0] },
        { duration: 0.3, delay: 0.1, ease: 'easeInOut' },
      ],
      ['#background', { opacity: [0, 1] }, { duration: 0.3, at: 0.3 }],

      [
        introText1Count,
        introText1.length,
        { type: 'tween', duration: 1.2, ease: 'easeInOut', at: 1 },
      ],
      [
        introText2Count,
        introText2.length,
        { type: 'tween', duration: 1.5, ease: 'easeInOut', at: 2.5 },
      ],
      [
        introText3Count,
        introText3.length,
        { type: 'tween', duration: 1, ease: 'easeInOut', at: 4.2 },
      ],
      [
        '#introAnimSection .Title1',
        { opacity: 1, scale: 1 },
        { duration: 1.2, at: 1 },
      ],
      [
        '#introAnimSection .Title2',
        { opacity: 1, scale: 1 },
        { duration: 1.5, at: 2.5 },
      ],
      [
        '#introAnimSection .Title3',
        { opacity: 1, scale: 1 },
        { duration: 1, at: 4.2 },
      ],
      [
        '#introAnimSection .Titles',
        { opacity: [1, 0], scale: 3, filter: 'blur(8px)' },
        { duration: 1.4, at: 5.5, ease: 'easeInOut' },
      ],
      ['#background', { opacity: [1, 0] }, { duration: 0.3, at: 6.5 }],
    ],

    [introText1Count, introText2Count, introText3Count, scrollProgress],
  )

  useEffect(() => {
    animControls.current = animate(timeline)
    animControls.current.pause()

    return () => {
      animControls.current?.stop()
    }
  }, [scrollProgress, timeline])

  return (
    <motion.main>
      <motion.div
        id="background"
        initial={{ opacity: 0 }}
        className="fixed inset-0 -z bg-zinc-800"
      />
      <section
        id="introSection"
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
          id="introAnimSection"
          className="container mx-auto px-24 py-12"
        >
          <div className="min-h-[600vh]">
            <div className="Titles fixed inset-0 flex flex-col gap-8 items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, scale: 0.6 }}
                className="Title1 text-6xl"
              >
                {introDisplayText1}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, scale: 1 }}
                className="Title2 text-6xl font-medium"
              >
                {introDisplayText2}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, scale: 1 }}
                className="Title3 text-6xl"
              >
                {introDisplayText3}
              </motion.h1>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section
          id="aboutSection"
          className="container mx-auto px-24 py-12 min-h-[200vh] mt-48 flex flex-col gap-24"
        >
          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true, amount: 'all' }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex gap-5 items-center pb-4">
              <div className="text-black/50 text-xl">MY NAME IS</div>
            </div>
            <h1 className="text-black/75 font-medium text-7xl">Buyeon Hwang</h1>
          </motion.div>

          <motion.div
            className="text-right"
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true, amount: 'all' }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="flex flex-row-reverse gap-5 items-center pb-4">
              <div className="text-black/50 text-xl">BIRTHDAY</div>
            </div>
            <h1 className="text-black/75 font-medium text-7xl">Oct 30, 2005</h1>
          </motion.div>
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
