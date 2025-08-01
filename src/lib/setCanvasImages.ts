import { sceneInfo, Section1Objs, Section1Values, Section2Objs, Section2Values, Section3Objs } from "./sceneInfo";

export function setCanvasImages() {
  if (typeof window === 'undefined') return;
  
  let imgElem1;
  const objs1 = sceneInfo[0].objs as Section1Objs;
  const values1 = sceneInfo[0].values as Section1Values;
  for (let i = 0; i < values1.videoImageCount; i++) {
    imgElem1 = new Image();
    imgElem1.src = `./public/video/001/IMG_${String(1 + i).padStart(3, "0")}.JPG`;
    objs1.videoImages.push(imgElem1);
  }
  
  let imgElem2;
  const objs2 = sceneInfo[2].objs as Section2Objs;
  const values2 = sceneInfo[2].values as Section2Values;
  for (let i = 0; i < values2.videoImageCount; i++) {
    imgElem2 = new Image();
    imgElem2.src = `./public/video/002/IMG-${156 + i}.JPG`;
    objs2.videoImages.push(imgElem2);
  }
  
  let imgElem3;
  const objs3 = sceneInfo[3].objs as Section3Objs;
  for (let i = 0; i < objs3.imagesPath.length; i++) {
    imgElem3 = new Image();
    imgElem3.src = objs3.imagesPath[i];
    objs3.images.push(imgElem3);
  }
}