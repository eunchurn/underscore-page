import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { sceneInfo } from '../src/lib/sceneInfo'
import { setLayout } from '../src/lib/setLayout'
import { setCanvasImages } from '../src/lib/setCanvasImages'
import { playAnimation } from '../src/lib/main'
import { smoothingVideo } from '../src/lib/smoothingVideo'
import type { Section1Objs } from '../src/lib/sceneInfo'

let prevScrollHeight = 0
let currentScene = 0

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLocalNavSticky, setIsLocalNavSticky] = useState(false)
  const [showScene, setShowScene] = useState(0)
  const [scrollEffectEnd, setScrollEffectEnd] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const loadingRef = useRef<HTMLDivElement>(null)

  const checkMenu = (yOffset: number) => {
    if (yOffset > 44) {
      setIsLocalNavSticky(true)
    } else {
      setIsLocalNavSticky(false)
    }
  }

  const scrollLoop = (yOffset: number) => {
    prevScrollHeight = 0
    let entering = false
    
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight
    }
    
    if (yOffset < prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      setScrollEffectEnd(false)
    }
    
    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      entering = true
      if (currentScene === sceneInfo.length - 1) {
        setScrollEffectEnd(true)
      }
      if (currentScene < sceneInfo.length - 1) {
        currentScene++
      }
      setShowScene(currentScene)
    }
    
    if (yOffset < prevScrollHeight) {
      entering = true
      if (currentScene === 0) return
      currentScene--
      setShowScene(currentScene)
    }
    
    if (entering) return
    playAnimation(yOffset, prevScrollHeight, currentScene)
  }

  const afterLoaded = () => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        window.location.reload()
      }
    }

    const handleOrientationChange = () => {
      window.scrollTo(0, 0)
      setTimeout(() => {
        window.location.reload()
      }, 500)
    }

    const handleScroll = () => {
      scrollLoop(window.pageYOffset)
      checkMenu(window.pageYOffset)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleOrientationChange)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleOrientationChange)
      window.removeEventListener('scroll', handleScroll)
    }
  }

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true)
      setLayout(window.pageYOffset, currentScene)
      
      const objs = sceneInfo[0].objs as Section1Objs
      if (objs.context && objs.videoImages[0]) {
        objs.context.drawImage(objs.videoImages[0], 0, 0)
      }
      
      let tempYOffset = window.scrollY
      let tempScrollCount = 0
      
      if (tempYOffset > 0) {
        const siId = setInterval(() => {
          window.scrollTo(0, tempYOffset)
          tempYOffset += 2
          if (tempScrollCount++ > 10) {
            clearInterval(siId)
          }
        }, 20)
      }
      
      const cleanup = afterLoaded()
      return cleanup
    }

    if (typeof window !== 'undefined') {
      setCanvasImages()
      setLayout(window.pageYOffset, currentScene)
      
      if (document.readyState === 'complete') {
        handleLoad()
      } else {
        window.addEventListener('load', handleLoad)
        return () => window.removeEventListener('load', handleLoad)
      }
    }
  }, [])

  const handleLoadingTransitionEnd = (e: React.TransitionEvent) => {
    if (loadingRef.current && containerRef.current) {
      containerRef.current.removeChild(loadingRef.current)
    }
  }

  return (
    <>
      <Head>
        <title>Becho</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>

      <div className={`${!isLoaded ? 'overflow-hidden' : ''}`}>
        {/* Loading */}
        <div 
          ref={loadingRef}
          className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-500 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          } ${!isLoaded ? 'block' : 'hidden'}`}
          onTransitionEnd={handleLoadingTransitionEnd}
        >
          <svg className="w-[54px] h-[54px] animate-loading-spin">
            <circle 
              cx="50%" 
              cy="50%" 
              r="25"
              className="stroke-black stroke-4 fill-transparent animate-loading-circle"
              style={{
                strokeDasharray: '157',
                strokeDashoffset: '-157'
              }}
            />
          </svg>
        </div>

        {/* Main Container */}
        <div 
          ref={containerRef}
          className={`overflow-x-hidden ${!isLoaded ? 'hidden' : 'block'}`}
          id={`show-scene-${showScene}`}
        >
          {/* Global Navigation */}
          <nav className="absolute top-0 left-0 z-10 w-full h-44 px-4">
            <div className="flex items-center max-w-[1000px] h-full mx-auto"></div>
          </nav>

          {/* Local Navigation */}
          <nav className={`absolute left-0 z-[11] w-full h-52 px-4 border-b-0 border-[#ddd] ${
            isLocalNavSticky 
              ? 'fixed top-0 bg-white/50 backdrop-blur-[15px] backdrop-saturate-[180%]' 
              : 'top-[45px]'
          }`}>
            <div className="flex items-center max-w-[1000px] h-full mx-auto justify-between">
              <a 
                href="#" 
                className={`mr-auto text-base font-bold ${
                  isLocalNavSticky ? 'text-apple-dark no-underline' : 'text-white no-underline'
                }`}
              >
                underscore
              </a>
              <a 
                href="#" 
                className={`ml-8 text-xs no-underline ${
                  isLocalNavSticky ? 'text-apple-dark' : 'text-white'
                }`}
              >
                about
              </a>
              <a 
                href="#" 
                className={`ml-8 text-xs no-underline ${
                  isLocalNavSticky ? 'text-apple-dark' : 'text-white'
                }`}
              >
                works
              </a>
              <a 
                href="#" 
                className={`ml-8 text-xs no-underline ${
                  isLocalNavSticky ? 'text-apple-dark' : 'text-white'
                }`}
              >
                more
              </a>
              <a 
                href="#" 
                className={`ml-8 text-xs no-underline ${
                  isLocalNavSticky ? 'text-apple-dark' : 'text-white'
                }`}
              >
                contact
              </a>
            </div>
          </nav>

          {/* Section 0 */}
          <section className="pt-[50vh] scroll-section" id="scroll-section-0">
            <h1 className="relative -top-[10vh] z-[5] text-3xl md:text-5xl text-center text-white">
              underscore
            </h1>
            <div className="sticky-elem sticky-elem-canvas fixed left-0 w-full top-0 h-full hidden will-change-[opacity,transform]">
              <canvas 
                id="video-canvas-0" 
                width="1920" 
                height="1080"
                className="absolute top-1/2 left-1/2 bg-[#ccc] -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="sticky-elem main-message a fixed left-0 w-full flex items-center justify-center h-12 top-[35vh] text-xl md:text-4xl my-[5px] opacity-0 hidden will-change-[opacity,transform]">
              <div>
                <p className="font-bold text-center leading-[1.2] text-white">"underscore"</p>
                <p className="font-normal text-center leading-[1.2] text-white">
                  We set problems through reading and underscoring, and carry out research upon those problems.
                </p>
              </div>
            </div>
            <div className="sticky-elem main-message b fixed left-0 w-full flex items-center justify-center h-12 top-[35vh] text-xl md:text-4xl my-[5px] opacity-0 hidden will-change-[opacity,transform]">
              <div>
                <p className="font-bold text-center leading-[1.2] text-white">"____________"</p>
                <p className="font-normal text-center leading-[1.2] text-white">
                  We connect the conceptual to the sensible.
                </p>
              </div>
            </div>
            <div className="sticky-elem main-message c fixed left-0 w-full flex items-center justify-center h-12 top-[35vh] text-xl md:text-4xl my-[5px] opacity-0 hidden will-change-[opacity,transform]">
              <div>
                <p className="font-bold text-center leading-[1.2] text-white">"______score"</p>
                <p className="font-normal text-center leading-[1.2] text-white">
                  We deal with scores as what enable future performances as aesthetic forms.
                </p>
              </div>
            </div>
            <div className="sticky-elem main-message d fixed left-0 w-full flex items-center justify-center h-12 top-[35vh] text-xl md:text-4xl my-[5px] opacity-0 hidden will-change-[opacity,transform]">
              <div>
                <p className="font-bold text-center leading-[1.2] text-white">"(working) under (the) score"</p>
                <p className="font-normal text-center leading-[1.2] text-white">
                  We carry out performances following the scores.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1 */}
          <section className="pt-[50vh] scroll-section" id="scroll-section-1">
            <p className="max-w-[1000px] mx-auto px-4 text-sm md:text-lg text-[#888] leading-[1.6]">
              <strong className="float-left mr-1 text-2xl md:text-4xl text-apple-dark">보통 스크롤 영역</strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aliquid
              doloremque. Perferendis aliquam fuga magni, ratione fugit error cupiditate voluptas, tenetur aspernatur enim
              ullam dignissimos voluptatum tempora debitis officiis eligendi odio distinctio architecto sapiente! Facilis
              nihil odit suscipit quibusdam vitae nesciunt autem asperiores molestiae quaerat tenetur ab quis harum amet,
              ratione deserunt, commodi animi eveniet necessitatibus! Earum magnam ad, nam placeat consequuntur natus
              explicabo deserunt. Deserunt nulla veritatis corrupti pariatur illum error deleniti? Doloremque accusantium,
              minus quibusdam ex laborum ut est enim repellat! Voluptate commodi quidem mollitia animi itaque aperiam saepe
              amet nemo odit soluta in provident numquam veritatis quos beatae vitae maxime minima, ipsam eum perferendis
              quisquam corporis id illo? Dolorum, illum? Temporibus neque aliquam rem, consectetur maxime optio fuga eius
              aut, at quasi voluptatem est eos voluptatum dolorem ipsam dolorum fugiat architecto illo! Sint, pariatur amet
              doloremque rem odit dolorem corporis.
            </p>
          </section>

          {/* Section 2 */}
          <section className="pt-[50vh] scroll-section" id="scroll-section-2">
            <div className="sticky-elem sticky-elem-canvas fixed left-0 w-full top-0 h-full hidden will-change-[opacity,transform]">
              <canvas 
                id="video-canvas-1" 
                width="1920" 
                height="1080"
                className="absolute top-1/2 left-1/2 bg-[#ccc] -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="sticky-elem main-message a fixed left-0 w-full flex items-center justify-center h-12 top-[35vh] text-2xl md:text-2xl my-[5px] opacity-0 hidden will-change-[opacity,transform]">
              <p className="font-bold text-center leading-[1.2] text-white">
                <small className="block mb-2 text-sm md:text-base">Artistic research</small>
                <small className="block mb-2 text-sm md:text-base">Performance</small>
              </p>
            </div>
            <div className="sticky-elem desc-message b fixed left-0 w-full opacity-0 hidden will-change-[opacity,transform] top-[10%] md:top-[20%] left-[40%] md:left-[53%] w-1/2 md:w-1/5 font-bold">
              <p className="text-white">
                <small className="block mb-2 text-sm text-white">Text</small>
                <small className="block mb-2 text-sm text-white">Sound</small>
              </p>
              <div className="pin w-px h-[100px] bg-white"></div>
            </div>
            <div className="sticky-elem desc-message c fixed left-0 w-full opacity-0 hidden will-change-[opacity,transform] top-[15%] left-[45%] md:left-[55%] w-1/2 md:w-1/5 font-bold">
              <p className="text-white">
                <small className="block mb-2 text-sm text-white">Choreography</small>
                <small className="block mb-2 text-sm text-white">Image</small>
              </p>
              <div className="pin w-px h-[100px] bg-white"></div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="pt-[50vh] scroll-section relative flex flex-col items-center" id="scroll-section-3">
            <p className="max-w-[1000px] mx-auto px-4 md:px-0 text-sm md:text-base text-[#888] leading-[1.6]">
              <strong className="text-lg md:text-4xl text-apple-dark">Featured Project</strong><br />
              Exercise in Performing Arts Studies Sep 2017 | SNU College of Humanities Building 8
            </p>
            <canvas 
              className="image-blend-canvas" 
              width="1920" 
              height="1080"
            />
            <p className="max-w-[1000px] mx-auto px-4 md:px-0 text-sm md:text-base text-[#888] leading-[1.6]">
              <strong className="text-lg md:text-4xl text-apple-dark">Featured Project</strong><br />
              #mullae_instant Jul - Oct 2019 | Online and Mullae Area
            </p>
            <p className="canvas-caption max-w-[1000px] mx-auto mt-[-24rem] md:mt-32 px-4 md:px-0 text-sm md:text-lg text-[#888] leading-[1.6]">
              #mullae_instant explores the modus operandi of an art "work". It traces how the various activities of creation
              taking place in Mullae, a space of the real, come to be saved, circulated, reproduced and dispersed through
              the cyber space, a visual field to be manipulated as well as an apparatus that mediates them all.
              #mullaeinstant_ is thus an experiment on the physical/conceptual elasticity of the stage. It has been selected
              as part of "2019 MEET" organized by Seoul Foundation of Arts and Culture and Seoul Art Space Mullae, and
              sponsored by GS SHOP.
            </p>
          </section>

          {/* Normal Content Sections */}
          <section className="mb-40">
            <p className="max-w-[1000px] mx-auto px-4 md:px-0 text-sm md:text-base text-[#888] leading-[1.6]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptatum sequi. Nostrum sapiente vel maxime
              assumenda molestias id doloribus facilis ipsam dolores, iste quos, natus a libero quas nulla obcaecati quaerat
              impedit minima veritatis ab ducimus ex, voluptatum earum quae! Minima autem aspernatur dicta! Nam id libero
              eveniet voluptate distinctio? Est ullam exercitationem praesentium corrupti reprehenderit tenetur atque
              dolore, perspiciatis esse placeat asperiores a, voluptate accusamus fugiat, nemo dolorum! Eaque rerum nihil
              sed quibusdam placeat, fuga doloremque ullam perspiciatis suscipit id at ipsa possimus aliquam quam unde
              voluptas praesentium, veniam reprehenderit dolorem? Iste nostrum doloremque aspernatur ipsam, dolorem
              cupiditate nesciunt.
            </p>
          </section>

          <section className="mb-40">
            <p className="max-w-[1000px] mx-auto px-4 md:px-0 text-sm md:text-base text-[#888] leading-[1.6]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptatum sequi. Nostrum sapiente vel maxime
              assumenda molestias id doloribus facilis ipsam dolores, iste quos, natus a libero quas nulla obcaecati quaerat
              impedit minima veritatis ab ducimus ex, voluptatum earum quae! Minima autem aspernatur dicta! Nam id libero
              eveniet voluptate distinctio? Est ullam exercitationem praesentium corrupti reprehenderit tenetur atque
              dolore, perspiciatis esse placeat asperiores a, voluptate accusamus fugiat, nemo dolorum! Eaque rerum nihil
              sed quibusdam placeat, fuga doloremque ullam perspiciatis suscipit id at ipsa possimus aliquam quam unde
              voluptas praesentium, veniam reprehenderit dolorem? Iste nostrum doloremque aspernatur ipsam, dolorem
              cupiditate nesciunt.
            </p>
          </section>

          {/* Footer */}
          <footer className="flex justify-center items-center h-28 text-white bg-orange-600">
            2020
          </footer>
        </div>

        {/* Additional styles for show-scene classes */}
        <style jsx global>{`
          #show-scene-0 #scroll-section-0 .sticky-elem,
          #show-scene-1 #scroll-section-1 .sticky-elem,
          #show-scene-2 #scroll-section-2 .sticky-elem,
          #show-scene-3 #scroll-section-3 .sticky-elem {
            display: block !important;
          }
          
          ${scrollEffectEnd ? '.sticky-elem { display: none !important; }' : ''}
          
          .image-blend-canvas.sticky {
            position: fixed;
            top: 0;
          }
        `}</style>
      </div>
    </>
  )
}