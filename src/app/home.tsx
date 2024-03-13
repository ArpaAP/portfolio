'use client'

import {
  TbChevronsDown,
  TbBrandGithub,
  TbMail,
  TbBrandInstagram,
  TbBrandDiscord,
  TbBrandX,
  TbBrandLinkedin,
  TbList,
  TbChevronLeft,
  TbChevronRight,
  TbBrandGooglePlay,
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
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomePage() {
  const { scrollY } = useScroll()

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
    <div>
      <Navbar />
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
              <div className="flex gap-5 items-center pb-3">
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
              <div className="flex flex-row-reverse gap-5 items-center pb-3">
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
              <div className="flex gap-5 items-center pb-3">
                <div className="text-black/50 md:text-xl">EDUCATION</div>
              </div>
              <h1 className="text-black/75 font-medium text-4xl md:text-6xl leading-[1.4]">
                <div className="pb-5">
                  경북대학교{' '}
                  <span className="text-3xl md:text-4xl font-normal">
                    (Kyungpook National University)
                  </span>
                </div>
                <div className="text-2xl font-light">
                  IT대학 컴퓨터학부 24학번{' '}
                  <span className="text-lg">
                    (Computer Science and Engineering, College of IT
                    Engineering)
                  </span>
                </div>
              </h1>
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
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="flex gap-2 items-center border border-zinc-600 rounded-lg text-sm text-white px-4 py-2 hover:bg-white/10 transition-all duration-300"
                >
                  <TbList />
                  SHOW ALL
                </button>
              </div>
            </div>

            <Carousel
              className="absolute top-28 bottom-0 inset-x-0 flex-grow"
              renderArrowPrev={(clickHandler) => {
                return (
                  <button
                    type="button"
                    className="absolute z-50 inset-y-0 left-0 flex items-center ml-5 text-6xl text-zinc-500"
                    onClick={clickHandler}
                  >
                    <TbChevronLeft />
                  </button>
                )
              }}
              renderArrowNext={(clickHandler) => {
                return (
                  <button
                    type="button"
                    className="absolute z-50 inset-y-0 right-0 flex items-center mr-5 text-6xl text-zinc-500"
                    onClick={clickHandler}
                  >
                    <TbChevronRight />
                  </button>
                )
              }}
              showThumbs={false}
              showStatus={false}
              infiniteLoop
            >
              <div className="h-[calc(100vh-9rem)] flex flex-col justify-center items-start px-48 mr-auto">
                <h1 className="text-7xl pb-4">Aztra</h1>
                <div className="text-xl font-medium">
                  웹 대시보드를 지원하는 Discord 관리 챗봇 & 웹 대시보드 서비스
                </div>

                <div className="flex gap-4 mt-10 mb-8">
                  <a href="https://aztra.xyz" target="_blank">
                    <button
                      type="button"
                      className="bg-[#6D28D9] rounded-lg text-white px-4 py-2"
                    >
                      사이트 방문하기
                    </button>
                  </a>
                  <button type="button" className="rounded-lg px-4 py-2">
                    자세히 알아보기
                  </button>
                </div>

                <hr className="border-zinc-700/50 w-full my-6" />

                <div className="flex flex-col gap-3 items-start">
                  <div>2020.08.31 ~ 진행 중 / 이용 채팅방 수 8,000곳 이상</div>
                  <div className="flex flex-wrap gap-2 w-2/3">
                    <span>태그: </span>
                    {[
                      '대형 프로젝트',
                      '챗봇',
                      'Web',
                      'Full-stack',
                      'React',
                      'Next.js',
                      'SSR',
                      'Web Dashboard',
                      '관리자 페이지',
                      'Node.js',
                      'Express',
                      'TypeScript',
                      'MySQL',
                    ].map((tag, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-lg px-1 py-0.5 text-sm"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-[calc(100vh-9rem)] flex flex-col justify-center items-start px-48 mr-auto">
                <h1 className="text-7xl pb-4">호산고 알리미</h1>
                <div className="text-xl font-medium">
                  더 나은 호산고등학교 생활을 도와줄 통합 학업 관리 애플리케이션
                </div>

                <div className="flex gap-4 mt-10 mb-8">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.hosandevlab.hosan_notice"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="bg-[#12935F] rounded-lg flex gap-2 items-center text-white px-4 py-2"
                    >
                      <TbBrandGooglePlay />
                      Google Play 페이지 방문하기
                    </button>
                  </a>
                  <button type="button" className="rounded-lg px-4 py-2">
                    자세히 알아보기
                  </button>
                </div>

                <hr className="border-zinc-700/50 w-full my-6" />

                <div className="flex flex-col gap-3 items-start">
                  <div>2021.09.17 ~ 진행 중 / 고1 여름 프로젝트</div>
                  <div className="flex flex-wrap gap-2 w-2/3">
                    <span>태그: </span>
                    {[
                      '교육',
                      '일정 관리',
                      'Android',
                      'iOS',
                      'Flutter',
                      'Kotlin',
                      'Swift',
                      'Cross-platform',
                      'Node.js',
                      'TypeScript',
                      'Express',
                      'MongoDB',
                      'BLE Beacon',
                      'IoT',
                    ].map((tag, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-lg px-1 py-0.5 text-sm"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-[calc(100vh-9rem)] flex flex-col justify-center items-start px-48 mr-auto">
                <h1 className="text-7xl pb-4">Mollang</h1>
                <div className="text-xl font-medium">
                  모바일 게임 &apos;블루아카이브&apos;에서의 인터넷 밈
                  &apos;몰?루&apos;를 소재로 만든 난해한 프로그래밍 언어
                </div>

                <div className="flex gap-4 mt-10 mb-8">
                  <a href="https://molu.arpaap.dev" target="_blank">
                    <button
                      type="button"
                      className="bg-white rounded-lg text-black px-4 py-2"
                    >
                      웹 인터프리터 방문하기
                    </button>
                  </a>
                  <a href="https://github.com/ArpaAP/mollang" target="_blank">
                    <button type="button" className="rounded-lgpx-4 py-2">
                      언어 명세 자세히 보기
                    </button>
                  </a>
                </div>

                <hr className="border-zinc-700/50 w-full my-6" />

                <div className="flex flex-col gap-3 items-start">
                  <div>2022.2.8 ~ 2022.2.24 / 고1 봄방학 팀프로젝트</div>
                  <div className="flex flex-wrap gap-2 w-3/4">
                    <span>태그: </span>
                    {['C++', 'Node.js', 'esolang', '인터프리터'].map(
                      (tag, index) => (
                        <div
                          key={index}
                          className="bg-white/10 rounded-lg px-1 py-0.5 text-sm"
                        >
                          {tag}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="h-[calc(100vh-9rem)] flex flex-col justify-center items-start px-48 mr-auto">
                <h1 className="text-7xl pb-4">CafeIN</h1>
                <div className="text-xl font-medium">
                  내 주변 카페 탐색 및 카페 다이어리 서비스
                </div>

                <div className="flex gap-4 mt-10 mb-8">
                  <button type="button" className="rounded-lg px-4 py-2">
                    자세히 알아보기
                  </button>
                </div>

                <hr className="border-zinc-700/50 w-full my-6" />

                <div className="flex flex-col gap-3 items-start">
                  <div>2022.4.22 ~ 2022.11.30 / 고2 동아리 프로젝트</div>
                  <div className="flex flex-wrap gap-2 w-3/4">
                    <span>태그: </span>
                    {[
                      'Android',
                      'iOS',
                      'Flutter',
                      'Cross-platform',
                      '지도 API 연동',
                    ].map((tag, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-lg px-1 py-0.5 text-sm"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-[calc(100vh-9rem)] flex flex-col justify-center items-start px-48 mr-auto">
                <h1 className="text-7xl pb-4">2¹²</h1>
                <div className="text-xl font-medium">
                  Discord에서 즐기는 2048 미니게임
                </div>

                <div className="flex gap-4 mt-10 mb-8">
                  <a href="https://4096.inft.kr" target="_blank">
                    <button
                      type="button"
                      className="bg-[#E62F41] rounded-lg text-white px-4 py-2"
                    >
                      사이트 방문하기
                    </button>
                  </a>
                  <button type="button" className="rounded-lg px-4 py-2">
                    자세히 알아보기
                  </button>
                </div>

                <hr className="border-zinc-700/50 w-full my-6" />

                <div className="flex flex-col gap-3 items-start">
                  <div>2022.08</div>
                  <div className="flex flex-wrap gap-2 w-2/3">
                    <span>태그: </span>
                    {[
                      '챗봇',
                      'Web',
                      '인터랙티브 웹',
                      '스크롤 애니메이션',
                      'SPA',
                      'React',
                      'Next.js',
                      'Node.js',
                      'TypeScript',
                    ].map((tag, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-lg px-1 py-0.5 text-sm"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-[calc(100vh-9rem)] flex flex-col justify-center items-start px-48 mr-auto">
                <h1 className="text-7xl pb-4">Alpha Mirror</h1>
                <div className="text-xl font-medium">
                  하이브리드 웹 프레임워크 기반 스마트미러
                </div>

                <div className="flex gap-4 mt-10 mb-8">
                  <button type="button" className="rounded-lg px-4 py-2">
                    자세히 알아보기
                  </button>
                </div>

                <hr className="border-zinc-700/50 w-full my-6" />

                <div className="flex flex-col gap-3 items-start">
                  <div>
                    2022.9.22 ~ 2022.11.11 / 고2 [로봇 하드웨어 개발] 과목
                    프로젝트
                  </div>
                  <div className="flex flex-wrap gap-2 w-3/4">
                    <span>태그: </span>
                    {[
                      'Hybrid App',
                      'Raspberry Pi',
                      'Arduino',
                      'Linux',
                      '하드웨어 연동',
                      'IPC통신',
                      'React',
                      'Vite',
                      'Typescript',
                      'Python',
                      'Rust',
                      '시스템프로그래밍',
                    ].map((tag, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-lg px-1 py-0.5 text-sm"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-[calc(100vh-9rem)] flex flex-col justify-center items-start px-48 mr-auto">
                <h1 className="text-7xl pb-4">Social Trend</h1>
                <div className="text-xl font-medium">
                  크롤링 + BERT모델 기반 사회 이슈 키워드 추출
                </div>

                <div className="flex gap-4 mt-10 mb-8">
                  <button type="button" className="rounded-lg px-4 py-2">
                    자세히 알아보기
                  </button>
                </div>

                <hr className="border-zinc-700/50 w-full my-6" />

                <div className="flex flex-col gap-3 items-start">
                  <div>
                    2022.10.25 ~ 2022.11.9 / 고2 [응용 프로그래밍 개발] 과목
                    프로젝트
                  </div>
                  <div className="flex flex-wrap gap-2 w-3/4">
                    <span>태그: </span>
                    {[
                      'Python',
                      'Deep Learning',
                      'NLP',
                      'BERT',
                      'Web Crawling',
                      '키워드 추출',
                    ].map((tag, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-lg px-1 py-0.5 text-sm"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-[calc(100vh-9rem)] flex flex-col justify-center items-start px-48 mr-auto">
                <h1 className="text-7xl pb-4">AWIN</h1>
                <div className="text-xl font-medium">
                  간단한 아두이노 자동 창문
                </div>

                <div className="flex gap-4 mt-10 mb-8">
                  <button type="button" className="rounded-lg px-4 py-2">
                    자세히 알아보기
                  </button>
                </div>

                <hr className="border-zinc-700/50 w-full my-6" />

                <div className="flex flex-col gap-3 items-start">
                  <div>
                    2023.5.4 ~ 2023.6.16 / 고3 [로보프로젝트] 과목 프로젝트
                  </div>
                  <div className="flex flex-wrap gap-2 w-1/2">
                    <span>태그: </span>
                    {[
                      'Bluetooth 시리얼 통신',
                      '원격 제어',
                      'IoT',
                      '서버리스',
                      'Arduino',
                      'Raspberry Pi',
                      'Flutter',
                      'Android',
                      'iOS',
                      'Cross-platform',
                      'Python',
                      'Node.js',
                      'Nest.js',
                      'Socket.io',
                      '비동기 프로그래밍',
                    ].map((tag, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-lg px-1 py-0.5 text-sm"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-[calc(100vh-9rem)] flex flex-col justify-center items-start px-48 mr-auto">
                <h1 className="text-7xl pb-4">CSAT Simulator</h1>
                <div className="text-xl font-medium">
                  대학수학능력시험 안내방송 시뮬레이터
                </div>

                <div className="flex gap-4 mt-10 mb-8">
                  <a href="https://csat.arpaap.dev" target="_blank">
                    <button
                      type="button"
                      className="bg-white rounded-lg text-black px-4 py-2"
                    >
                      사이트 방문하기
                    </button>
                  </a>
                  <button type="button" className="rounded-lg px-4 py-2">
                    자세히 알아보기
                  </button>
                </div>

                <hr className="border-zinc-700/50 w-full my-6" />

                <div className="flex flex-col gap-3 items-start">
                  <div>
                    2023.5.9 ~ 2023.5.13 / 2024 수능 모의 시뮬레이션을 위해
                    개인적으로 제작한 웹앱 / 2024학년도 기준
                  </div>
                  <div className="flex flex-wrap gap-2 w-1/2">
                    <span>태그: </span>
                    {[
                      '시뮬레이션',
                      '인터랙티브 웹',
                      'React',
                      'Next.js',
                      'SSR',
                      'HTML5 Audio API',
                    ].map((tag, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-lg px-1 py-0.5 text-sm"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-[calc(100vh-9rem)] flex flex-col justify-center items-start px-48 mr-auto">
                <h1 className="text-7xl pb-4">Physika</h1>
                <div className="text-xl font-medium">
                  뉴턴의 운동법칙에 기반한 역학 시뮬레이터
                </div>

                <div className="flex gap-4 mt-10 mb-8">
                  <a href="https://physika.arpaap.dev" target="_blank">
                    <button
                      type="button"
                      className="bg-white rounded-lg text-black px-4 py-2"
                    >
                      사이트 방문하기
                    </button>
                  </a>
                  <button type="button" className="rounded-lg px-4 py-2">
                    자세히 알아보기
                  </button>
                </div>

                <hr className="border-zinc-700/50 w-full my-6" />

                <div className="flex flex-col gap-3 items-start">
                  <div>
                    2023.7.7 ~ 2023.7.12 / 물리학Ⅰ, 물리학Ⅱ 교과과정의 역학 및
                    에너지 단원에 기반한 물리 시뮬레이터
                  </div>
                  <div className="flex flex-wrap gap-2 w-1/2">
                    <span>태그: </span>
                    {[
                      '시뮬레이션',
                      '물리 엔진',
                      '인터랙티브 웹',
                      '샌드박스',
                      'React',
                      'Next.js',
                      'SSR',
                    ].map((tag, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-lg px-1 py-0.5 text-sm"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Carousel>

            <div className="absolute -z-10 flex justify-center items-center top-36 bottom-0 inset-x-0 h-2/3 shadow-inner"></div>
          </section>
        </div>
      </motion.main>
      <Footer />
    </div>
  )
}
