import { JSDOM } from "jsdom";
import { readFileSync } from "fs";
import path from "path";

const { window } = new JSDOM(readFileSync(path.resolve(__dirname, "../../index.html")));

global.document = window.document;
global.Image = window.Image;

describe("app", () => {
  it("snapshot", () => {
    jest.spyOn(document, "querySelector").mockImplementation((selector: string) => {
      if (selector === "#video-canvas-0" || selector === "#video-canvas-1" || selector === ".image-blend-canvas") {
        return { getContext: jest.fn(), style: { transform: jest.fn()} } as unknown as Element;
      }
      return window.document.querySelector(selector);
    });
    require("../init");
    expect(window.document.body).toMatchSnapshot();
  });
});
