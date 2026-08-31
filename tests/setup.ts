import "@testing-library/jest-dom/vitest";

// jsdom does not implement scrollIntoView, which the featured cards call.
if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = () => {};
}
