import { sceneInfo, Section1Objs, ValueProps } from "./sceneInfo";
import { playAnimation } from "./main";
import { setLayout } from "./setLayout";
import { setCanvasImages } from "./setCanvasImages";
import { calcValues } from "./calcValue";

// let yOffset = 0; // window.pageYOffset 대신 쓸 변수
let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
let currentScene = 0; // 현재 활성화된(눈 앞에 보고 있는) 씬(scroll-section)

function checkMenu(yOffset: number) {
  if (yOffset > 44) {
    document.body.classList.add("local-nav-sticky");
  } else {
    document.body.classList.remove("local-nav-sticky");
  }
}

function scrollLoop(yOffset: number) {
  prevScrollHeight = 0;
  let entering = false; // debounce
  for (let i = 0; i < currentScene; i++) {
    prevScrollHeight += sceneInfo[i].scrollHeight;
  }
  if (yOffset < prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
    document.body.classList.remove("scroll-effect-end");
  }
  if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
    entering = true;
    if (currentScene === sceneInfo.length - 1) {
      document.body.classList.add("scroll-effect-end");
    }
    if (currentScene < sceneInfo.length - 1) {
      currentScene++;
    }
    document.body.setAttribute("id", `show-scene-${currentScene}`);
  }
  if (yOffset < prevScrollHeight) {
    entering = true;
    if (currentScene === 0) return;
    currentScene--;
    document.body.setAttribute("id", `show-scene-${currentScene}`);
  }
  if (entering) return;
  playAnimation(yOffset, prevScrollHeight, currentScene);
}

export function smoothingVideo(
  prevScrollHeight: number,
  imageSequence: ValueProps,
  videoImages: HTMLImageElement[],
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
) {
  let acc = 0.1;
  let delayedYOffset = 0;
  let rafId;
  let rafState: boolean;
  // const widthRatio = window.innerWidth / canvas.width;
  // const heightRatio = window.innerHeight / canvas.height;
  // const canvasScaleRatio = Math.max(widthRatio, heightRatio);
  // canvas.style.transform = `scale(${canvasScaleRatio})`;
  function loop() {
    delayedYOffset = delayedYOffset + (pageYOffset - delayedYOffset) * acc;
    const currentYOffset = delayedYOffset - prevScrollHeight;
    if (currentScene === 0 || currentScene === 2) {
      const sequence = Math.round(calcValues(imageSequence, currentYOffset, currentScene));
      if (videoImages[sequence]) {
        context.drawImage(videoImages[sequence], 0, 0);
      }
    }

    rafId = requestAnimationFrame(loop);
    if (Math.abs(pageYOffset - delayedYOffset) < 1) {
      cancelAnimationFrame(rafId);
      rafState = false;
    }
  }
  window.addEventListener("scroll", () => {
    if (!rafState) {
      rafId = requestAnimationFrame(loop);
      rafState = true;
    }
  });
}

function afterLoaded() {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      window.location.reload();
      // setLayout(window.pageYOffset, currentScene);
      // sceneInfo[3].values.rectStartY = 0;
    }
  });
  window.addEventListener("orientationchange", () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      // setLayout(window.pageYOffset, currentScene);
      // sceneInfo[3].values.rectStartY = 0;
      window.location.reload();
    }, 500);
  });
  window.addEventListener("scroll", () => {
    scrollLoop(window.pageYOffset);
    checkMenu(window.pageYOffset);
  });
  (document.querySelector(".loading") as HTMLDivElement).addEventListener("transitionend", (e) => {
    document.body.removeChild(e.currentTarget as HTMLDivElement);
  });
}

window.addEventListener("load", () => {
  document.body.classList.remove("before-load");

  setLayout(window.pageYOffset, currentScene);
  const objs = sceneInfo[0].objs as Section1Objs;
  objs.context.drawImage(objs.videoImages[0], 0, 0);
  let tempYOffset = pageYOffset;
  let tempScrollCount = 0;
  if (tempYOffset > 0) {
    let siId = setInterval(() => {
      window.scrollTo(0, tempYOffset);
      tempYOffset += 2;
      if (tempScrollCount++ > 10) {
        clearInterval(siId);
      }
    }, 20);
  }
  afterLoaded();
});
setCanvasImages();
setLayout(window.pageYOffset, currentScene);
