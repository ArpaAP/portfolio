'use client'

import {
  TbChevronsDown,
  TbBrandGithub,
  TbMail,
  TbPhone,
  TbBrandInstagram,
  TbBrandDiscord,
  TbBrandX,
  TbBrandLinkedin,
  TbBrandSamsungpass,
  TbList,
  TbChevronLeft,
  TbChevronRight,
} from 'react-icons/tb'
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
import classNames from 'classnames'

export default function HomePage() {
  const { scrollY } = useScroll()

  const [currentSection, setCurrentSection] = useState(0)

  const [visibleIntroText, setVisibleIntroText] = useState(false)

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

    if (newScrollProgress >= 1 && newScrollProgress <= 6.5) {
      setVisibleIntroText(true)
    } else {
      setVisibleIntroText(false)
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
      [
        'main',
        { backgroundColor: ['#ededfb', '#27272A'] },
        { duration: 0.3, at: 0.3 },
      ],

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
      ['#introAnimSection .Title1', { opacity: 1 }, { duration: 1.2, at: 1 }],
      ['#introAnimSection .Title2', { opacity: 1 }, { duration: 1.5, at: 2.5 }],
      ['#introAnimSection .Title3', { opacity: 1 }, { duration: 1, at: 4.2 }],
      [
        '#introAnimSection .Titles',
        { scale: 0.8 },
        {
          duration: 1.2,
          at: 1,
          ease: 'easeInOut',
        },
      ],
      [
        '#introAnimSection .Titles',
        { scale: 0.9 },
        {
          duration: 1.5,
          at: 2.5,
          ease: 'easeInOut',
        },
      ],
      [
        '#introAnimSection .Titles',
        { scale: 1 },
        {
          duration: 1,
          at: 4.2,
          ease: 'easeInOut',
        },
      ],
      [
        '#introAnimSection .Titles',
        {
          opacity: [1, 0],
          scale: 3,
        },
        {
          duration: 1.3,
          at: 5.5,
          ease: 'easeInOut',
        },
      ],
      [
        'main',
        { backgroundColor: ['#27272A', '#ededfb'] },
        { duration: 0.3, at: 6.5 },
      ],
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
              className="text-3xl md:text-5xl font-normal pb-5 text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
              }}
            >
              Life is short <span className="font-light">—</span>
            </motion.h1>
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-gray-800 pb-12 leading-[1.25]"
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
              className="font-light md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
            >
              안녕하세요, 소프트웨어 개발자 <b>황 부 연</b> 입니다.
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
            <motion.div
              initial={{ scale: 0.6 }}
              className={classNames(
                'Titles fixed inset-0 flex flex-col gap-8 items-center justify-center',
                !visibleIntroText && 'hidden',
              )}
            >
              <motion.h1
                initial={{ opacity: 0 }}
                className="Title1 text-4xl md:text-6xl"
              >
                {introDisplayText1}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0 }}
                className="Title2 text-4xl md:text-6xl font-medium"
              >
                {introDisplayText2}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0 }}
                className="Title3 text-4xl md:text-6xl"
              >
                {introDisplayText3}
              </motion.h1>
            </motion.div>
          </div>
        </section>
      </div>

      <div>
        <section
          id="aboutSection"
          className="container mx-auto px-8 sm:px-12 lg:px-24 py-48 mt-48 flex flex-col gap-16"
        >
          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
          >
            <div className="flex gap-5 items-center">
              <div className="text-black/50 md:text-xl">MY NAME IS</div>
            </div>
            <h1 className="text-black/75 font-medium text-4xl md:text-6xl leading-[1.4]">
              Buyeon Hwang
            </h1>
          </motion.div>

          <motion.div
            className="text-right"
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex flex-row-reverse gap-5 items-center">
              <div className="text-black/50 md:text-xl">BIRTHDAY</div>
            </div>
            <h1 className="text-black/75 font-medium text-4xl md:text-6xl leading-[1.4]">
              Oct 30, 2005
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <div className="flex gap-5 items-center">
              <div className="text-black/50 md:text-xl">EDUCATION</div>
            </div>
            <h1 className="text-black/75 font-medium text-4xl md:text-6xl leading-[1.4]">
              <div>
                Hosan High School,
                <br />
                3rd Grade (2023)
              </div>
            </h1>
            <div className="pt-3 text-lg">Expected to graduate</div>
          </motion.div>

          <motion.div
            className="flex gap-4 items-center my-8"
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <hr className="w-full border-violet-600/20" />
            <h2 className="flex-shrink-0 text-zinc-700 font-light">
              Contact Me
            </h2>
            <hr className="w-full border-violet-600/20" />
          </motion.div>

          <div className="md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-zinc-800/80">
            <motion.div
              className="col-span-1 text-center bg-white/50 rounded-md shadow-lg px-4 py-5"
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="flex justify-center gap-3 items-center text-xl font-medium pb-2">
                <TbMail />
                <span>EMAIL</span>
              </div>

              <a
                href="mailto:me@arpaap.dev"
                className="text-zinc-700 underline"
              >
                me@arpaap.dev
              </a>
            </motion.div>

            <motion.div
              className="col-span-1 text-center bg-white/50 rounded-md shadow-lg px-4 py-5"
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="flex justify-center gap-3 items-center text-xl font-medium pb-2">
                <TbBrandGithub />
                <span>GitHub</span>
              </div>

              <a
                href="https://github.com/ArpaAP"
                target="_blank"
                className="text-zinc-700 underline"
              >
                @ArpaAP
              </a>
            </motion.div>

            <motion.div
              className="col-span-1 text-center bg-white/50 rounded-md shadow-lg px-4 py-5"
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="flex justify-center gap-3 items-center text-xl font-medium pb-2">
                <TbBrandInstagram />
                <span>Instagram</span>
              </div>

              <a
                href="https://www.instagram.com/dev._.buyeon"
                target="_blank"
                className="text-zinc-700 underline"
              >
                @dev._.buyeon
              </a>
            </motion.div>

            <motion.div
              className="col-span-1 text-center bg-white/50 rounded-md shadow-lg px-4 py-5"
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="flex justify-center gap-3 items-center text-xl font-medium pb-2">
                <TbBrandDiscord />
                <span>Discord</span>
              </div>

              <div className="text-zinc-700">@applekorea</div>
            </motion.div>

            <motion.div
              className="col-span-1 text-center bg-white/50 rounded-md shadow-lg px-4 py-5"
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="flex justify-center gap-3 items-center text-xl font-medium pb-2">
                <TbBrandX />
                <span>X</span>
              </div>

              <a
                href="https://x.com/arpa_ap"
                target="_blank"
                className="text-zinc-700 underline"
              >
                @arpa_ap
              </a>
            </motion.div>

            <motion.div
              className="col-span-1 text-center bg-white/50 rounded-md shadow-lg px-4 py-5"
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="flex justify-center gap-3 items-center text-xl font-medium pb-2">
                <TbBrandLinkedin />
                <span>Linkedin</span>
              </div>

              <a
                href="https://linkedin.com/in/arpaap"
                target="_blank"
                className="text-zinc-700 underline"
              >
                @arpaap
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      <div className="relative text-white bg-zinc-800">
        <section className="container mx-auto px-24 py-12 min-h-screen flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Projects</h1>
            <button
              type="button"
              className="flex gap-2 items-center border border-zinc-600 rounded-lg text-sm text-white px-4 py-2 hover:bg-white/10 transition-all duration-300"
            >
              <TbList />
              SHOW ALL
            </button>
          </div>

          <div className="flex-grow flex flex-col justify-center w-1/2 px-16 mr-auto">
            {' '}
            <h1 className="text-7xl pb-4">Aztra</h1>
            <div className="text-xl font-medium">
              웹 대시보드를 지원하는 Discord 관리 챗봇
            </div>
            <hr className="border-zinc-700/50 my-8" />
            <div className="flex gap-4">
              <a href="https://aztra.xyz" target="_blank">
                <button
                  type="button"
                  className="bg-[#6D28D9] rounded-lg text-white px-4 py-2"
                >
                  사이트 방문하기
                </button>
              </a>
              <button
                type="button"
                className="bg-white rounded-lg text-black px-4 py-2"
              >
                자세히 알아보기
              </button>
            </div>
          </div>

          <div className="absolute -z-10 flex justify-center items-center top-36 bottom-0 inset-x-0 h-2/3 shadow-inner"></div>

          <div className="absolute z-30 inset-x-0 bottom-0 flex gap-4 justify-center py-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="rounded-full w-3 h-3 bg-white" />
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center ml-5 text-6xl text-zinc-500">
            <TbChevronLeft />
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center mr-5 text-6xl text-zinc-500">
            <TbChevronRight />
          </div>
        </section>
      </div>
    </motion.main>
  )
}
