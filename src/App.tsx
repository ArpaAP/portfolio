import React, { useState } from 'react';
import codebg from './assets/codebg.png';
import arpa from './assets/arpa.png';
import aboutbg from './assets/starry_sky_clouds_sunset.jpeg';
import techbg from './assets/lake_forest_snow.jpeg';
import projectsbg from './assets/starry_sky_boat_reflection.jpeg';

import reactIcon from './assets/react.svg';
import nextjsIcon from './assets/nextjs.svg';
import pythonIcon from './assets/python.svg';
import jsIcon from './assets/js.svg';
import tsIcon from './assets/ts.svg';
import cIcon from './assets/c.png';
import cppIcon from './assets/cpp.svg';
import csharpIcon from './assets/csharp.png';
import kotlinIcon from './assets/kotlin.svg';
import dartIcon from './assets/dart.svg';
import expressjsIcon from './assets/expressjs.svg';
import djangoIcon from './assets/django.svg';
import flutterIcon from './assets/flutter.svg';
import mysqlIcon from './assets/mysql.png';
import mongodbIcon from './assets/mongodb.svg';
import { Fade, Slide } from 'react-awesome-reveal';

import ReactFullpage from '@fullpage/react-fullpage';

const App: React.FC = () => {
  const [techCategory, setTechCategory] = useState('languages');

  return (
    <>
      <ReactFullpage
        scrollingSpeed={900}
        licenseKey="gplv3-license"
        scrollBar
        keyboardScrolling
        anchors={['intro', 'about', 'tech', 'projects']}
        normalScrollElements={
          '#tech-languages, #tech-frontend, #tech-backend, #tech-mobile, #tech-database'
        }
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section relative text-center select-none">
                <img
                  src={codebg}
                  className="blur-sm dark animate-fade-in min-h-screen object-cover brightness-90"
                  style={{
                    animationDelay: '0.3s',
                    animationTimingFunction: 'ease-in-out',
                  }}
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 h-full flex flex-col justify-center items-center gap-5">
                  <div className="hover:-translate-y-1 hover:scale-125 transition-all duration-300">
                    <img
                      alt="??????"
                      src={arpa}
                      className="w-40 h-40 drop-shadow-2xl animate-avatar-sleepdown"
                    />
                  </div>
                  <h1 className="text-7xl font-semibold drop-shadow-2xl animate-fade-in">
                    ???????????????!
                  </h1>
                  <h3 className="text-2xl drop-shadow-2xl animate-fade-in">
                    ???????????? ????????? ???????????????.
                  </h3>
                  <div className="flex animate-fade-in">
                    <a
                      href="https://github.com/ArpaAP"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="xi-github xi-2x drop-shadow-2xl" />
                    </a>
                  </div>
                </div>
                <div
                  className="absolute bottom-5 left-0 right-0 flex text-center mt-auto font-semibold shadow-2xl animate-fade-in text-lg"
                  style={{ animationDelay: '1.8s' }}
                >
                  <div
                    className="mx-auto px-4 py-2 animate-bounce items-center hover:text-violet-500 transition-all cursor-pointer duration-300"
                    onClick={() => {
                      fullpageApi.moveSectionDown();
                    }}
                  >
                    <i className="xi-angle-down mr-2" />??? ????????????
                  </div>
                </div>
              </div>

              <div className="section relative bg-slate-100 overflow-hidden min-h-screen">
                <img src={aboutbg} className="min-h-screen object-cover" />
                <div className="absolute left-0 right-0 text-center">
                  <h2
                    className="text-5xl font-bold"
                    style={{
                      lineHeight: 1.25,
                      textShadow: '1px 1px 7px rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    <Fade duration={1000} cascade damping={0.4} triggerOnce>
                      <div>
                        ??????????????????
                        <br />
                        ????????? ????????????
                      </div>
                    </Fade>
                  </h2>

                  <p
                    className="mt-5 container mx-auto w-5/6 lg:w-2/5 flex flex-col gap-1"
                    style={{
                      lineHeight: 1.25,
                      textShadow: '1px 1px 8px rgba(0, 0, 0, 0.6)',
                      wordBreak: 'keep-all',
                    }}
                  >
                    <Fade
                      duration={1000}
                      cascade
                      damping={0.4}
                      delay={700}
                      triggerOnce
                    >
                      <div>
                        ?????? ??????????????? ???????????? ????????? ?????? 05?????? ???????????????!
                      </div>
                    </Fade>
                    <Fade
                      duration={1000}
                      cascade
                      damping={0.4}
                      delay={1400}
                      triggerOnce
                    >
                      <div>
                        ???????????? ???????????? ?????? ???????????????! ??????????????????
                        ??????????????? ?????? ???????????? ????????????.
                      </div>
                    </Fade>
                  </p>
                </div>
              </div>

              <div className="section relative bg-slate-100 overflow-hidden min-h-screen shadow-xl text-slate-700">
                <img src={techbg} className="min-h-screen object-cover" />
                <h2
                  className="absolute text-center left-0 right-0 top-12 font-bold text-3xl md:text-4xl lg:text-5xl text-white"
                  style={{ textShadow: '1px 1px 8px rgba(0, 0, 0, 0.8)' }}
                >
                  <Fade
                    duration={1000}
                    delay={400}
                    cascade
                    damping={0.4}
                    triggerOnce
                  >
                    <div>?????? ????????? ?????????</div>
                  </Fade>
                </h2>

                <div
                  className="absolute bottom-0 left-0 right-0 mx-auto rounded-t-xl sm:w-5/6 md:w-2/3 h-4/5"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div className="h-full shadow-xl">
                    <div className="h-7 bg-slate-200 rounded-t-xl flex items-center gap-2 px-2 shadow-xl">
                      <div className="rounded-full w-3 h-3 bg-rose-500" />
                      <div className="rounded-full w-3 h-3 bg-orange-300" />
                      <div className="rounded-full w-3 h-3 bg-green-600" />
                    </div>
                    <div
                      className="flex shadow-xl"
                      style={{ height: 'calc(100% - 1.75rem)' }}
                    >
                      <div className="w-1/3 px-2 py-2 bg-slate-300 shadow-xl h-full">
                        <div
                          className="px-3 font-semibold text-slate-900"
                          style={{ wordBreak: 'keep-all' }}
                        >
                          <span>?????? ????????????</span>
                        </div>
                        <hr
                          className="mx-2 mt-2 mb-1 border-slate-400"
                          style={{ borderWidth: '0.1px' }}
                        />
                        <div className="flex flex-col">
                          {[
                            ['languages', '??????????????? ??????', []],
                            ['frontend', '???????????????'],
                            ['backend', '?????????'],
                            ['mobile', '????????? ???'],
                            ['database', '??????????????????'],
                          ].map(([tech, name]) => (
                            <div
                              key={tech as string}
                              className="rounded-lg px-3 py-1.5 font-semibold cursor-pointer transition-all duration-300"
                              style={{
                                backgroundColor:
                                  techCategory === tech
                                    ? 'rgba(0, 5, 10, 0.08)'
                                    : undefined,
                                wordBreak: 'keep-all',
                              }}
                              onClick={() => {
                                setTechCategory(tech as string);
                              }}
                            >
                              {name}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="pl-4 pr-2 py-4 w-full text-black">
                        {techCategory === 'languages' && (
                          <>
                            <h2 className="font-bold text-2xl mb-5">
                              ?????? ???????????? ??????
                            </h2>
                            <div
                              id="tech-languages"
                              className="grid lg:grid-cols-2 gap-y-6 overflow-y-scroll"
                              style={{ height: 'calc(100% - 48px)' }}
                            >
                              {[
                                ['Python', '?????????', pythonIcon],
                                ['JavaScript', '??????????????????', jsIcon],
                                ['TypeScript', '??????????????????', tsIcon],
                                ['C', '', cIcon],
                                ['C++', '', cppIcon],
                                ['C#', '', csharpIcon],
                                ['Kotlin', '?????????', kotlinIcon],
                                ['Dart', '??????', dartIcon],
                              ].map((one) => {
                                const name: string = one[0];
                                const description: string = one[1];
                                const icon: string = one[2];

                                return (
                                  <div
                                    key={name}
                                    className="col-span-1 flex items-center gap-3 text-2xl font-medium"
                                  >
                                    <img
                                      className="w-14 drop-shadow-xl"
                                      src={icon}
                                    />
                                    <div>
                                      <h3 className="pb-0 mb-0">{name}</h3>
                                      <div className="text-sm">
                                        {description}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        )}
                        {techCategory === 'frontend' && (
                          <>
                            <h2 className="font-bold text-2xl mb-5">
                              ?????? ???????????? ???????????????
                            </h2>
                            <div
                              id="tech-frontend"
                              className="grid lg:grid-cols-2 gap-y-6 overflow-y-scroll"
                            >
                              {[
                                ['React', '??????????????? ???????????????', reactIcon],
                                [
                                  'Next.js',
                                  'React ?????? SSR ???????????????',
                                  nextjsIcon,
                                ],
                              ].map((one) => {
                                const name: string = one[0];
                                const description: string = one[1];
                                const icon: string = one[2];

                                return (
                                  <div
                                    key={name}
                                    className="col-span-1 flex items-center gap-3 text-2xl font-medium"
                                  >
                                    <img
                                      className="w-14 drop-shadow-xl"
                                      src={icon}
                                    />
                                    <div>
                                      <h3 className="pb-0 mb-0">{name}</h3>
                                      <div className="text-sm">
                                        {description}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        )}
                        {techCategory === 'backend' && (
                          <>
                            <h2
                              id="tech-backend"
                              className="font-bold text-2xl mb-5"
                            >
                              ?????? ???????????? ?????????
                            </h2>
                            <div className="grid lg:grid-cols-2 gap-y-6 overflow-y-scroll">
                              {[
                                ['Express.js', 'Node.js ??????', expressjsIcon],
                                ['Django', 'Python ??????', djangoIcon],
                              ].map((one) => {
                                const name: string = one[0];
                                const description: string = one[1];
                                const icon: string = one[2];

                                return (
                                  <div
                                    key={name}
                                    className="col-span-1 flex items-center gap-3 text-2xl font-medium"
                                  >
                                    <img
                                      className="w-14 drop-shadow-xl"
                                      src={icon}
                                    />
                                    <div>
                                      <h3 className="pb-0 mb-0">{name}</h3>
                                      <div className="text-sm">
                                        {description}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        )}
                        {techCategory === 'mobile' && (
                          <>
                            <h2 className="font-bold text-2xl mb-5">
                              ?????? ???????????? ????????? ??? ???????????????
                            </h2>
                            <div
                              id="tech-mobile"
                              className="grid lg:grid-cols-2 gap-y-6 overflow-y-scroll"
                            >
                              {[
                                [
                                  'Flutter',
                                  '?????????????????? ??? ???????????????',
                                  flutterIcon,
                                ],
                                ['React Native', 'React ??????', reactIcon],
                              ].map((one) => {
                                const name: string = one[0];
                                const description: string = one[1];
                                const icon: string = one[2];

                                return (
                                  <div
                                    key={name}
                                    className="col-span-1 flex items-center gap-3 text-2xl font-medium"
                                  >
                                    <img
                                      className="w-14 drop-shadow-xl"
                                      src={icon}
                                    />
                                    <div>
                                      <h3 className="pb-0 mb-0">{name}</h3>
                                      <div className="text-sm">
                                        {description}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        )}
                        {techCategory === 'database' && (
                          <>
                            <h2 className="font-bold text-2xl mb-5">
                              ?????? ???????????? ??????????????????
                            </h2>
                            <div
                              id="tech-database"
                              className="grid lg:grid-cols-2 gap-y-6 overflow-y-scroll"
                            >
                              {[
                                ['MySQL', 'RDBMS', mysqlIcon],
                                ['MongoDB', 'NoSQL', mongodbIcon],
                              ].map((one) => {
                                const name: string = one[0];
                                const description: string = one[1];
                                const icon: string = one[2];

                                return (
                                  <div
                                    key={name}
                                    className="col-span-1 flex items-center gap-3 text-2xl font-medium"
                                  >
                                    <img
                                      className="w-14 drop-shadow-xl"
                                      src={icon}
                                    />
                                    <div>
                                      <h3 className="pb-0 mb-0">{name}</h3>
                                      <div className="text-sm">
                                        {description}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section relative bg-slate-100 overflow-hidden min-h-screen shadow-xl text-slate-700">
                <img src={projectsbg} className="min-h-screen object-cover" />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default App;
