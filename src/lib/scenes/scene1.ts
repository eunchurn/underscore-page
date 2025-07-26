import { Section1Objs, Section1Values } from "../sceneInfo";
import { smoothingVideo } from "../smoothingVideo";
import { calcValues } from "../calcValue";

let scene = true;

export function scene1(yOffset: number, prevScrollHeight: number, currentScene: number, objs: Section1Objs, values: Section1Values, scrollRatio: number) {
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
    messageD_opacity_in,
    messageD_opacity_out,
    messageD_translateY_in,
    messageD_translateY_out,
    imageSequence,
    canvas_opacity,
  } = values;
  const { messageA, messageB, messageC, messageD, canvas, context, videoImages } = objs;
  
  if (!messageA || !messageB || !messageC || !messageD || !canvas || !context) return;
  
  const triggerA = ((messageA_opacity_in.end || 0) + (messageA_opacity_out.start || 0)) / 2;
  const triggerB = ((messageB_opacity_in.end || 0) + (messageB_opacity_out.start || 0)) / 2;
  const triggerC = ((messageC_opacity_in.end || 0) + (messageC_opacity_out.start || 0)) / 2;
  const triggerD = ((messageD_opacity_in?.end || 0) + (messageD_opacity_out?.start || 0)) / 2;
  
  if (scene) {
    smoothingVideo(prevScrollHeight, imageSequence, videoImages, canvas, context);
    scene = false;
  }
  
  canvas.style.opacity = `${calcValues(canvas_opacity, currentYOffset, currentScene)}`;

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
  } else {
    // out
    messageC.style.opacity = `${calcValues(messageC_opacity_out, currentYOffset, currentScene)}`;
    messageC.style.transform = `translate3d(0, ${calcValues(
      messageC_translateY_out,
      currentYOffset,
      currentScene,
    )}%, 0)`;
  }
  
  if (scrollRatio <= triggerD) {
    // in
    messageD.style.opacity = `${calcValues(messageD_opacity_in, currentYOffset, currentScene)}`;
    messageD.style.transform = `translate3d(0, ${calcValues(
      messageD_translateY_in,
      currentYOffset,
      currentScene,
    )}%, 0)`;
  } else {
    // out
    messageD.style.opacity = `${calcValues(messageD_opacity_out, currentYOffset, currentScene)}`;
    messageD.style.transform = `translate3d(0, ${calcValues(
      messageD_translateY_out,
      currentYOffset,
      currentScene,
    )}%, 0)`;
  }
}