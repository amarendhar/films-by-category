import { BrowserRouter } from "react-router-dom";
import { render as rtlRender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "App";

const render = (ui, { route = "" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...rtlRender(ui, { wrapper: route ? App : BrowserRouter }),
  };
};

export * from "@testing-library/react";
export { render };
