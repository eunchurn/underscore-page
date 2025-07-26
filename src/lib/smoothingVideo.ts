import { ValueProps } from "./sceneInfo";
import { calcValues } from "./calcValue";

let currentScene = 0;

export function smoothingVideo(
  prevScrollHeight: number,
  imageSequence: ValueProps,
  videoImages: HTMLImageElement[],
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
) {
  if (typeof window === 'undefined') return;
  
  let acc = 0.1;
  let delayedYOffset = 0;
  let rafId: number;
  let rafState: boolean = false;
  
  function loop() {
    delayedYOffset = delayedYOffset + (window.scrollY - delayedYOffset) * acc;
    const currentYOffset = delayedYOffset - prevScrollHeight;
    if (currentScene === 0 || currentScene === 2) {
      const sequence = Math.round(calcValues(imageSequence, currentYOffset, currentScene));
      if (videoImages[sequence]) {
        context.drawImage(videoImages[sequence], 0, 0);
      }
    }

    rafId = requestAnimationFrame(loop);
    if (Math.abs(window.scrollY - delayedYOffset) < 1) {
      cancelAnimationFrame(rafId);
      rafState = false;
    }
  }
  
  const handleScroll = () => {
    if (!rafState) {
      rafId = requestAnimationFrame(loop);
      rafState = true;
    }
  };
  
  window.addEventListener("scroll", handleScroll);
  
  // Return cleanup function
  return () => {
    window.removeEventListener("scroll", handleScroll);
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
  };
}

export function setCurrentScene(scene: number) {
  currentScene = scene;
}