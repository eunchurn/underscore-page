export interface ValueProps {
  in: number;
  out: number;
  start: number;
  end: number;
}

export interface Section1Values {
  videoImageCount: number;
  imageSequence: ValueProps;
  canvas_opacity: ValueProps;
  messageA_opacity_in: ValueProps;
  messageA_opacity_out: ValueProps;
  messageA_translateY_in: ValueProps;
  messageA_translateY_out: ValueProps;
  messageB_opacity_in: ValueProps;
  messageB_opacity_out: ValueProps;
  messageB_translateY_in: ValueProps;
  messageB_translateY_out: ValueProps;
  messageC_opacity_in: ValueProps;
  messageC_opacity_out: ValueProps;
  messageC_translateY_in: ValueProps;
  messageC_translateY_out: ValueProps;
  messageD_opacity_in: ValueProps;
  messageD_opacity_out: ValueProps;
  messageD_translateY_in: ValueProps;
  messageD_translateY_out: ValueProps;
}

export interface Section2Values {
  videoImageCount: number;
  imageSequence: ValueProps;
  canvas_opacity_in: ValueProps;
  canvas_opacity_out: ValueProps;
  messageA_opacity_in: ValueProps;
  messageA_opacity_out: ValueProps;
  messageA_translateY_in: ValueProps;
  messageA_translateY_out: ValueProps;
  messageB_opacity_in: ValueProps;
  messageB_opacity_out: ValueProps;
  messageB_translateY_in: ValueProps;
  messageB_translateY_out: ValueProps;
  messageC_opacity_in: ValueProps;
  messageC_opacity_out: ValueProps;
  messageC_translateY_in: ValueProps;
  messageC_translateY_out: ValueProps;
  pinB_scaleY: ValueProps;
  pinB_opacity_in: ValueProps;
  pinB_opacity_out: ValueProps;
  pinC_scaleY: ValueProps;
  pinC_opacity_in: ValueProps;
  pinC_opacity_out: ValueProps;
}

export interface Section1Objs {
  container: HTMLDivElement | null;
  messageA: HTMLDivElement | null;
  messageB: HTMLDivElement | null;
  messageC: HTMLDivElement | null;
  messageD: HTMLDivElement | null;
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
  videoImages: HTMLImageElement[];
}

export interface Section2Objs {
  container: HTMLDivElement | null;
  messageA: HTMLDivElement | null;
  messageB: HTMLDivElement | null;
  messageC: HTMLDivElement | null;
  pinB: HTMLDivElement | null;
  pinC: HTMLDivElement | null;
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
  videoImages: HTMLImageElement[];
}

export interface Section3Objs {
  container: HTMLDivElement | null;
  canvasCaption: HTMLDivElement | null;
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
  imagesPath: string[];
  images: HTMLImageElement[];
}

export interface Section3Values {
  rect1X: ValueProps;
  rect2X: ValueProps;
  imageBlendHeight: ValueProps;
  canvas_scale: ValueProps;
  canvasCaption_opacity: ValueProps;
  canvasCaption_translateY: ValueProps;
  rectStartY: number;
}

type sceneInfo = [
  { type: string; heightNum: number; scrollHeight: number; objs: Section1Objs; values: Section1Values },
  { type: string; heightNum: number; scrollHeight: number; objs: { container: HTMLDivElement | null }; values: null },
  { type: string; heightNum: number; scrollHeight: number; objs: Section2Objs; values: Section2Values },
  {
    type: string;
    heightNum: number;
    scrollHeight: number;
    objs: { container: HTMLDivElement | null };
    values: Section3Values;
  },
];

export const sceneInfo: sceneInfo = [
  {
    // 0
    type: "sticky",
    heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
    scrollHeight: 0,
    objs: {
      container: null,
      messageA: null,
      messageB: null,
      messageC: null,
      messageD: null,
      canvas: null,
      context: null,
      videoImages: [],
    } as Section1Objs,
    values: {
      videoImageCount: 181,
      imageSequence: { in: 0, out: 180, start: 0, end: 1 },
      canvas_opacity: { in: 1, out: 0, start: 0.9, end: 1 },
      messageA_opacity_in: { in: 0, out: 1, start: 0.1, end: 0.2 },
      messageA_opacity_out: { in: 1, out: 0, start: 0.25, end: 0.3 },
      messageA_translateY_in: { in: 20, out: 0, start: 0.1, end: 0.2 },
      messageA_translateY_out: { in: 0, out: -20, start: 0.25, end: 0.3 },
      messageB_opacity_in: { in: 0, out: 1, start: 0.3, end: 0.4 },
      messageB_opacity_out: { in: 1, out: 0, start: 0.45, end: 0.5 },
      messageB_translateY_in: { in: 20, out: 0, start: 0.3, end: 0.4 },
      messageB_translateY_out: { in: 0, out: -20, start: 0.45, end: 0.5 },
      messageC_opacity_in: { in: 0, out: 1, start: 0.5, end: 0.6 },
      messageC_opacity_out: { in: 1, out: 0, start: 0.65, end: 0.7 },
      messageC_translateY_in: { in: 20, out: 0, start: 0.5, end: 0.6 },
      messageC_translateY_out: { in: 0, out: -20, start: 0.65, end: 0.7 },
      messageD_opacity_in: { in: 0, out: 1, start: 0.7, end: 0.8 },
      messageD_opacity_out: { in: 1, out: 0, start: 0.85, end: 0.9 },
      messageD_translateY_in: { in: 20, out: 0, start: 0.7, end: 0.8 },
      messageD_translateY_out: { in: 0, out: -20, start: 0.85, end: 0.9 },
    } as Section1Values,
  },
  {
    // 1
    type: "normal",
    heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
    scrollHeight: 0,
    objs: {
      container: null,
    },
    values: null,
  },
  {
    // 2
    type: "sticky",
    heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
    scrollHeight: 0,
    objs: {
      container: null,
      messageA: null,
      messageB: null,
      messageC: null,
      pinB: null,
      pinC: null,
      canvas: null,
      context: null,
      videoImages: [],
    } as Section2Objs,
    values: {
      videoImageCount: 58,
      imageSequence: { in: 0, out: 57, start: 0, end: 1 },
      canvas_opacity_in: { in: 0, out: 1, start: 0, end: 0.1 },
      canvas_opacity_out: { in: 1, out: 0, start: 0.95, end: 1 },
      messageA_translateY_in: { in: 20, out: 0, start: 0.15, end: 0.2 },
      messageB_translateY_in: { in: 30, out: 0, start: 0.6, end: 0.65 },
      messageC_translateY_in: { in: 30, out: 0, start: 0.87, end: 0.92 },
      messageA_opacity_in: { in: 0, out: 1, start: 0.25, end: 0.3 },
      messageB_opacity_in: { in: 0, out: 1, start: 0.6, end: 0.65 },
      messageC_opacity_in: { in: 0, out: 1, start: 0.87, end: 0.92 },
      messageA_translateY_out: { in: 0, out: -20, start: 0.4, end: 0.45 },
      messageB_translateY_out: { in: 0, out: -20, start: 0.68, end: 0.73 },
      messageC_translateY_out: { in: 0, out: -20, start: 0.95, end: 1 },
      messageA_opacity_out: { in: 1, out: 0, start: 0.4, end: 0.45 },
      messageB_opacity_out: { in: 1, out: 0, start: 0.68, end: 0.73 },
      messageC_opacity_out: { in: 1, out: 0, start: 0.95, end: 1 },
      pinB_opacity_in: { in: 0, out: 1, start: 0.6, end: 0.65 },
      pinB_opacity_out: { in: 1, out: 0, start: 0.68, end: 0.73 },
      pinB_scaleY: { in: 0.5, out: 1, start: 0.6, end: 0.65 },
      pinC_opacity_in: { in: 0, out: 1, start: 0.87, end: 0.92 },
      pinC_opacity_out: { in: 1, out: 0, start: 0.95, end: 1 },
      pinC_scaleY: { in: 0.5, out: 1, start: 0.87, end: 0.92 },
    } as Section2Values,
  },
  {
    // 3
    type: "sticky",
    heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
    scrollHeight: 0,
    objs: {
      container: null,
      canvasCaption: null,
      canvas: null,
      context: null,
      imagesPath: ["./public/images/EPAS.JPG", "./public/images/MullaeInstant.png"],
      images: [],
    } as Section3Objs,
    values: {
      rect1X: { in: 0, out: 0, start: 0, end: 0 },
      rect2X: { in: 0, out: 0, start: 0, end: 0 },
      imageBlendHeight: { in: 0, out: 0, start: 0, end: 0 },
      canvas_scale: {in: 0, out: 0, start: 0, end: 0},
      canvasCaption_opacity: {in: 0, out: 1, start: 0, end: 0},
      canvasCaption_translateY: {in: 20, out: 0, start: 0, end: 0},
      rectStartY: 0,
    },
  },
];

// DOM elements initialization function
export function initSceneInfo() {
  if (typeof window === 'undefined') return;
  
  // Section 0
  const section0 = sceneInfo[0];
  section0.objs.container = document.querySelector("#scroll-section-0");
  section0.objs.messageA = document.querySelector("#scroll-section-0 .main-message.a");
  section0.objs.messageB = document.querySelector("#scroll-section-0 .main-message.b");
  section0.objs.messageC = document.querySelector("#scroll-section-0 .main-message.c");
  section0.objs.messageD = document.querySelector("#scroll-section-0 .main-message.d");
  section0.objs.canvas = document.querySelector("#video-canvas-0");
  section0.objs.context = section0.objs.canvas?.getContext("2d") || null;

  // Section 1
  const section1 = sceneInfo[1];
  section1.objs.container = document.querySelector("#scroll-section-1");

  // Section 2
  const section2 = sceneInfo[2];
  section2.objs.container = document.querySelector("#scroll-section-2");
  section2.objs.messageA = document.querySelector("#scroll-section-2 .a");
  section2.objs.messageB = document.querySelector("#scroll-section-2 .b");
  section2.objs.messageC = document.querySelector("#scroll-section-2 .c");
  section2.objs.pinB = document.querySelector("#scroll-section-2 .b .pin");
  section2.objs.pinC = document.querySelector("#scroll-section-2 .c .pin");
  section2.objs.canvas = document.querySelector("#video-canvas-1");
  section2.objs.context = section2.objs.canvas?.getContext("2d") || null;

  // Section 3
  const section3 = sceneInfo[3];
  section3.objs.container = document.querySelector("#scroll-section-3");
  section3.objs.canvasCaption = document.querySelector(".canvas-caption");
  section3.objs.canvas = document.querySelector(".image-blend-canvas");
  section3.objs.context = section3.objs.canvas?.getContext("2d") || null;
}