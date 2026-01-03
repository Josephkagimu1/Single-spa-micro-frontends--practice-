import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary() {
    return <div>Navbar failed to load</div>;
  }
});

export const { bootstrap, mount, unmount } = lifecycles;
