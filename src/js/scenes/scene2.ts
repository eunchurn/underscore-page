import { sceneInfo, Section2Objs, Section2Values, Section3Objs, Section3Values } from "../sceneInfo";
import { smoothingVideo } from "../init";
import { calcValues } from "../calcValue";

let scene = true;

export function scene2(
  yOffset: number,
  prevScrollHeight: number,
  currentScene: number,
  objs: Section2Objs,
  values: Section2Values,
  scrollRatio: number,
) {
  const currentYOffset = yOffset - prevScrollHeight;
  const {
    messageA_opacity_in,
    messageA_opacity_out,
    messageA_translateY_in,
    messageA_translateY_out,
    messageB_opacity_in,
    messageB_opacity_out,
    messageB_translateY_in,
    messageB_translateY_out,
    messageC_opacity_in,
    messageC_opacity_out,
    messageC_translateY_in,
    messageC_translateY_out,
    pinB_opacity_in,
    pinB_opacity_out,
    pinB_scaleY,
    pinC_opacity_in,
    pinC_opacity_out,
    pinC_scaleY,
    imageSequence,
    canvas_opacity_in,
    canvas_opacity_out,
  } = values as Section2Values;
  const { messageA, messageB, messageC, pinB, pinC, context, canvas, videoImages } = objs as Section2Objs;
  const triggerA = ((messageA_opacity_in.end || 0) + (messageA_opacity_out.start || 0)) / 2;
  const triggerB = ((messageB_opacity_in.end || 0) + (messageB_opacity_out.start || 0)) / 2;
  const triggerC = ((messageC_opacity_in.end || 0) + (messageC_opacity_out.start || 0)) / 2;
  if (scene) {
    smoothingVideo(prevScrollHeight, imageSequence, videoImages, canvas, context);
    scene = false;
  }
  // const sequence = Math.round(calcValues(imageSequence, currentYOffset, currentScene));
  // context.drawImage(videoImages[sequence], 0, 0);
  if (scrollRatio <= 0.5) {
    canvas.style.opacity = `${calcValues(canvas_opacity_in, currentYOffset, currentScene)}`;
  } else {
    canvas.style.opacity = `${calcValues(canvas_opacity_out, currentYOffset, currentScene)}`;
  }
  if (scrollRatio <= triggerA) {
    // in
    messageA.style.opacity = `${calcValues(messageA_opacity_in, currentYOffset, currentScene)}`;
    messageA.style.transform = `translate3d(0, ${calcValues(
      messageA_translateY_in,
      currentYOffset,
      currentScene,
    )}%, 0)`;
  } else {
    // out
    messageA.style.opacity = `${calcValues(messageA_opacity_out, currentYOffset, currentScene)}`;
    messageA.style.transform = `translate3d(0, ${calcValues(
      messageA_translateY_out,
      currentYOffset,
      currentScene,
    )}%, 0)`;
  }
  if (scrollRatio <= triggerB) {
    // in
    messageB.style.opacity = `${calcValues(messageB_opacity_in, currentYOffset, currentScene)}`;
    messageB.style.transform = `translate3d(0, ${calcValues(
      messageB_translateY_in,
      currentYOffset,
      currentScene,
    )}%, 0)`;
    pinB.style.transform = `scaleY(${calcValues(pinB_scaleY, currentYOffset, currentScene)})`;
  } else {
    // out
    messageB.style.opacity = `${calcValues(messageB_opacity_out, currentYOffset, currentScene)}`;
    messageB.style.transform = `translate3d(0, ${calcValues(
      messageB_translateY_out,
      currentYOffset,
      currentScene,
    )}%, 0)`;
  }
  if (scrollRatio <= triggerC) {
    // in
    messageC.style.opacity = `${calcValues(messageC_opacity_in, currentYOffset, currentScene)}`;
    messageC.style.transform = `translate3d(0, ${calcValues(
      messageC_translateY_in,
      currentYOffset,
      currentScene,
    )}%, 0)`;
    pinC.style.transform = `scaleY(${calcValues(pinC_scaleY, currentYOffset, currentScene)})`;
  } else {
    // out
    messageC.style.opacity = `${calcValues(messageC_opacity_out, currentYOffset, currentScene)}`;
    messageC.style.transform = `translate3d(0, ${calcValues(
      messageC_translateY_out,
      currentYOffset,
      currentScene,
    )}%.0 )`;
  }
  // 3 section canvas 미리 그리기
  if (scrollRatio >= 0.9) {
    const objs = sceneInfo[3].objs as Section3Objs;
    const values = sceneInfo[3].values as Section3Values;
    const { canvas, context, images } = objs;
    const { rect1X, rect2X } = values;
    const widthRatio = window.innerWidth / canvas.width;
    const heightRatio = window.innerHeight / canvas.height;
    const canvasScaleRatio = Math.max(widthRatio, heightRatio);
    canvas.style.transform = `scale(${canvasScaleRatio})`;
    context.fillStyle = "white";
    context.drawImage(images[0], 0, 0);

    // 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
    const recalculatedInnerWidth = document.body.offsetWidth / canvasScaleRatio;
    const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;

    const whiteRectWidth = recalculatedInnerWidth * 0.15;
    rect1X.in = (canvas.width - recalculatedInnerWidth) / 2;
    rect1X.out = rect1X.in - whiteRectWidth;
    rect2X.in = rect1X.in + recalculatedInnerWidth - whiteRectWidth;
    rect2X.out = rect2X.in + whiteRectWidth;

    context.fillRect(rect1X.in, 0, Math.floor(whiteRectWidth), recalculatedInnerHeight);
    context.fillRect(rect2X.in, 0, Math.floor(whiteRectWidth), recalculatedInnerHeight);
  }
}
