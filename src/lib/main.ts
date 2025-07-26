import {
  sceneInfo,
  Section1Objs,
  Section1Values,
  Section2Objs,
  Section2Values,
  Section3Objs,
  Section3Values,
} from "./sceneInfo";
import { scene1, scene2, scene3 } from "./scenes";

export function playAnimation(yOffset: number, prevScrollHeight: number, currentScene: number) {
  const objs = sceneInfo[currentScene].objs;
  const values = sceneInfo[currentScene].values;
  const currentYOffset = yOffset - prevScrollHeight;
  const scrollHeight = sceneInfo[currentScene].scrollHeight;
  const scrollRatio = currentYOffset / scrollHeight;
  switch (currentScene) {
    case 0: {
      scene1(yOffset, prevScrollHeight, currentScene, objs as Section1Objs, values as Section1Values, scrollRatio);
      break;
    }
    case 1: {
      break;
    }
    case 2: {
      scene2(yOffset, prevScrollHeight, currentScene, objs as Section2Objs, values as Section2Values, scrollRatio);
      break;
    }
    case 3: {
      scene3(
        yOffset,
        prevScrollHeight,
        currentScene,
        objs as Section3Objs,
        values as Section3Values,
        scrollHeight,
        scrollRatio,
      );
      break;
    }
  }
}