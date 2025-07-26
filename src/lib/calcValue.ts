import { sceneInfo, ValueProps } from "./sceneInfo";

export function calcValues(values: ValueProps | undefined, currentYOffet: number, currentScene: number) {
  // 현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기
  if (!values) return 0;
  let rv;
  const scrollHeight = sceneInfo[currentScene].scrollHeight;
  const scrollRatio = currentYOffet / scrollHeight;
  let partScrollStart = 0;
  let partScrollEnd = 0;
  let partScrollHeight = 0;
  if (values.start !== undefined && values.end !== undefined) {
    partScrollStart = values.start * scrollHeight;
    partScrollEnd = values.end * scrollHeight;
    partScrollHeight = partScrollEnd - partScrollStart;
    if (currentYOffet < partScrollStart) {
      rv = values.in;
    } else if (currentYOffet > partScrollEnd) {
      rv = values.out;
    } else {
      rv = ((currentYOffet - partScrollStart) / partScrollHeight) * (values.out - values.in) + values.in;
    }
  } else {
    rv = (values.out - values.in) * scrollRatio + values.in;
  }
  return rv;
}