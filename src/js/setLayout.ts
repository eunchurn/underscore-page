import { sceneInfo, Section1Objs, Section2Objs } from "./sceneInfo";

export function setLayout(yOffset: number, currentScene: number) {
  // 각 스크롤 섹션의 높이 세팅
  sceneInfo.map((item) => {
    if (item.type === "sticky") {
      item.scrollHeight = item.heightNum * window.innerHeight;
    } else {
      item.scrollHeight = item.objs.container.offsetHeight;
    }
    item.objs.container.style.height = `${item.scrollHeight}px`;
  });
  let totalScrollHeight = 0;
  for (let i = 0; i < sceneInfo.length; i++) {
    totalScrollHeight += sceneInfo[i].scrollHeight;
    if (totalScrollHeight >= yOffset) {
      currentScene = i;
      break;
    }
  }
  document.body.setAttribute("id", `show-scene-${currentScene}`);
  const heightRatio = Math.max(window.innerHeight / 1080, window.innerWidth / 1920);
  (sceneInfo[0].objs as Section1Objs).canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
  (sceneInfo[2].objs as Section2Objs).canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
}
