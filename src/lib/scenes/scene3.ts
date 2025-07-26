import { Section3Objs, Section3Values } from "../sceneInfo";
import { calcValues } from "../calcValue";

export function scene3(
  yOffset: number,
  prevScrollHeight: number,
  currentScene: number,
  objs: Section3Objs,
  values: Section3Values,
  scrollHeight: number,
  scrollRatio: number,
) {
  const currentYOffset = yOffset - prevScrollHeight;
  // 가로/세로 모두 꽉 차게 하기 위해 여기서 계산 필요
  const { canvas, context, images, canvasCaption } = objs;
  const {
    rect1X,
    rect2X,
    rectStartY,
    imageBlendHeight,
    canvas_scale,
    canvasCaption_opacity,
    canvasCaption_translateY,
  } = values;
  
  if (!canvas || !context || !images.length || !canvasCaption) return;
  
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
    (values as Section3Values).rectStartY = canvas.offsetTop + (canvas.height - canvas.height * canvasScaleRatio) / 2;
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
}