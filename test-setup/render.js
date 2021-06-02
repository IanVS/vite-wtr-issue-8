import { render as rtlRender } from "@testing-library/react";

/**
 * This helper function creates and provides a container element for react-testing-library
 * to render into, which means if we pull debug or queries off the result, the log output
 * will only include this code under test, not all the rest of the body containing test runner code.
 */
export function render(ui) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  return rtlRender(ui, { container, baseElement: container });
}

window.render = render;
