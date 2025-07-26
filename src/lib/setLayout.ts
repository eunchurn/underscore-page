import { sceneInfo, Section1Objs, Section2Objs, initSceneInfo } from './sceneInfo'

export function setLayout(yOffset: number, currentScene: number) {
  // Initialize DOM elements
  initSceneInfo()
  
  // 각 스크롤 섹션의 높이 세팅
  sceneInfo.forEach((item) => {
    if (item.type === "sticky") {
      item.scrollHeight = item.heightNum * window.innerHeight
    } else {
      item.scrollHeight = item.objs.container?.offsetHeight || 0
    }
    if (item.objs.container) {
      item.objs.container.style.height = `${item.scrollHeight}px`
    }
  })
  
  let totalScrollHeight = 0
  for (let i = 0; i < sceneInfo.length; i++) {
    totalScrollHeight += sceneInfo[i].scrollHeight
    if (totalScrollHeight >= yOffset) {
      currentScene = i
      break
    }
  }
  
  document.body.setAttribute("id", `show-scene-${currentScene}`)
  
  const heightRatio = Math.max(window.innerHeight / 1080, window.innerWidth / 1920)
  const section0Canvas = (sceneInfo[0].objs as Section1Objs).canvas
  const section2Canvas = (sceneInfo[2].objs as Section2Objs).canvas
  
  if (section0Canvas) {
    section0Canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`
  }
  if (section2Canvas) {
    section2Canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`
  }
}