import {
  sceneInfo,
  Section1Objs,
  Section1Values,
  Section2Objs,
  Section2Values,
  Section3Objs,
  Section3Values,
} from "./sceneInfo";
import { calcValues } from "./calcValue";
import { smoothingVideo } from "./init";

let scene1 = true;
let scene2 = true;

export function playAnimation(yOffset: number, prevScrollHeight: number, currentScene: number) {
  const objs = sceneInfo[currentScene].objs;
  const values = sceneInfo[currentScene].values;
  const currentYOffset = yOffset - prevScrollHeight;
  const scrollHeight = sceneInfo[currentScene].scrollHeight;
  const scrollRatio = currentYOffset / scrollHeight;
  switch (currentScene) {
    case 0: {
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
      } = values as Section1Values;
      const { messageA, messageB, messageC, messageD, canvas, context, videoImages } = objs as Section1Objs;
      const triggerA = ((messageA_opacity_in.end || 0) + (messageA_opacity_out.start || 0)) / 2;
      const triggerB = ((messageB_opacity_in.end || 0) + (messageB_opacity_out.start || 0)) / 2;
      const triggerC = ((messageC_opacity_in.end || 0) + (messageC_opacity_out.start || 0)) / 2;
      const triggerD = ((messageD_opacity_in?.end || 0) + (messageD_opacity_out?.start || 0)) / 2;
      if (scene1) {
        smoothingVideo(prevScrollHeight, imageSequence, videoImages, context);
        scene1 = false;
      }
      // const sequence = Math.round(calcValues(imageSequence, currentYOffset, currentScene));
      // context.drawImage(videoImages[sequence], 0, 0);
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
      break;
    }
    case 1: {
      break;
    }
    case 2: {
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
      if (scene2) {
        smoothingVideo(prevScrollHeight, imageSequence, videoImages, context);
        scene2 = false;
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
      break;
    }
    case 3: {
      // 가로/세로 모두 꽉 차게 하기 위해 여기서 계산 필요
      const { canvas, context, images, canvasCaption } = objs as Section3Objs;
      const {
        rect1X,
        rect2X,
        rectStartY,
        imageBlendHeight,
        canvas_scale,
        canvasCaption_opacity,
        canvasCaption_translateY,
      } = values as Section3Values;
      const widthRatio = window.innerWidth / canvas.width;
      const heightRatio = window.innerHeight / canvas.height;
      const canvasScaleRatio = Math.max(widthRatio, heightRatio);
      canvas.style.transform = `scale(${canvasScaleRatio})`;
      context.fillStyle = "white";
      context.drawImage(images[0], 0, 0);

      // 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
      const recalculatedInnerWidth = document.body.offsetWidth / canvasScaleRatio;
      const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;
      if (rectStartY === 0) {
        // (values as Section3Values).rectStartY = canvas.getBoundingClientRect().top;
        (values as Section3Values).rectStartY =
          canvas.offsetTop + (canvas.height - canvas.height * canvasScaleRatio) / 2;
        rect1X.start = window.innerHeight / 2 / scrollHeight;
        rect2X.start = window.innerHeight / 2 / scrollHeight;
        rect1X.end = (values as Section3Values).rectStartY / scrollHeight;
        rect2X.end = (values as Section3Values).rectStartY / scrollHeight;
      }
      const whiteRectWidth = recalculatedInnerWidth * 0.15;
      rect1X.in = (canvas.width - recalculatedInnerWidth) / 2;
      rect1X.out = rect1X.in - whiteRectWidth;
      rect2X.in = rect1X.in + recalculatedInnerWidth - whiteRectWidth;
      rect2X.out = rect2X.in + whiteRectWidth;

      // context.fillRect(rect1X.in, 0, Math.floor(whiteRectWidth), recalculatedInnerHeight);
      // context.fillRect(rect2X.in, 0, Math.floor(whiteRectWidth), recalculatedInnerHeight);
      context.fillRect(
        Math.floor(calcValues(rect1X, currentYOffset, currentScene)),
        0,
        Math.floor(whiteRectWidth),
        recalculatedInnerHeight,
      );
      context.fillRect(
        calcValues(rect2X, currentYOffset, currentScene),
        0,
        Math.floor(whiteRectWidth),
        recalculatedInnerHeight,
      );
      if (scrollRatio < rect1X.end) {
        canvas.classList.remove("sticky");
      } else {
        imageBlendHeight.out = canvas.height;
        imageBlendHeight.start = rect1X.end;
        imageBlendHeight.end = imageBlendHeight.start + 0.2;
        const blendHeight = calcValues(imageBlendHeight, currentYOffset, currentScene);
        context.drawImage(
          images[1],
          0,
          canvas.height - blendHeight,
          canvas.width,
          blendHeight,
          0,
          canvas.height - blendHeight,
          canvas.width,
          blendHeight,
        );

        canvas.classList.add("sticky");
        canvas.style.top = `${-(canvas.height - canvas.height * canvasScaleRatio) / 2}px`;
        if (scrollRatio > imageBlendHeight.end) {
          canvas_scale.in = canvasScaleRatio;
          canvas_scale.out = document.body.offsetWidth / (1.5 * canvas.width);
          canvas_scale.start = imageBlendHeight.end;
          canvas_scale.end = imageBlendHeight.end + 0.2;

          canvas.style.transform = `scale(${calcValues(canvas_scale, currentYOffset, currentScene)})`;
          canvas.style.marginTop = "0";
        }
        if (scrollRatio > canvas_scale.end && canvas_scale.end > 0) {
          canvas.classList.remove("sticky");
          canvas.style.marginTop = `${scrollHeight * 0.4}px`;

          canvasCaption_opacity.start = canvas_scale.end;
          canvasCaption_opacity.end = canvas_scale.end + 0.1;
          canvasCaption_translateY.start = canvas_scale.end;
          canvasCaption_translateY.end = canvas_scale.end + 0.1;
          canvasCaption.style.opacity = `${calcValues(canvasCaption_opacity, currentYOffset, currentScene)}`;
          canvasCaption.style.transform = `translate3d(0, ${calcValues(
            canvasCaption_translateY,
            currentYOffset,
            currentScene,
          )}%, 0)`;
        }
      }
      break;
    }
  }
}

