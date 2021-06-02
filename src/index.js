import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
const floatStyle = `font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; position: fixed; left: calc(100vw - 210px); top: 90vh; width: 200px; display: flex; flex-direction: row; align-items: center; justify-content: space-evenly; padding: 5px; background: rgba(0, 0, 0, 0.1); color: black; mix-blend-mode: difference; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;`;
const innerHTML = `
  <img class="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAwUExURQAAAJxxN76fY8m1btrIh6tfVcmFcdadf2Oyx4bR3OG4mOXIq9SAjenaytzGtwAAAGJEbygAAAAQdFJOU////////////////////wDgI10ZAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACZUlEQVR4Xu2W3W6bQBQG66TGbZrW7/+20UqznxYWDMHGitKZuz2/w80RP653cNoI5btQsED5LhQsUL4LBQuU7+J7CbIvvMDrAqRfKA+M24SCBcoD4zahYIHywLhNKFigPDBuE99DkLmrQmvQHmHG30TBFtoVVLBFwRbaHyfInFWxnxMIL8K4TaIKzsE4BQNegfAijFMw4BUIL8K4/0iQvYE9nViFdPL4dB/IeAU7SCuoIOMV7CB9nCB9J+ZkEc8cWsKBdCAcQZ6BspuiChYoV1BB1o9QsED5cYJT2NcdXsKJ8wyEuw9mnYIKBuoV5KlgIPw8QeZ2C3kGwqtiPLs36xRUMFCvIE8Fny94BvpysJm3unAAnov1jD+x7sz6EQoWSCuoIOtHKFggfb8gdWfmD/R3B/sChANtA+nkaXslPfCMIOGB9SNRBQu0Kagg6xU8XpD5F/oC4csv+A2EwxtQljrG5IDzzFzWK6iggvgp+HUEeQb2Bnw6SAfaA+MVVDCQV7DCeAWfJ1ihLj+u9OcA/5lAuIN0IPzGuAiybiRWUbCFsIIKtijYQvh+wQp9OdzMXwSPReEK42YP8xQF52Ccgh34KRjoV5B1s2wS5J52B/uz0L7pQFcUbKFdQQVbFGyh/XGCFeZ0B/sd/k74B6TfKY8g426KVRQsUK6ggnMoWKD8eEHu68C+gEcH6UD7pgNdUbCFdgUVbFGwhfbHC1aY2x3sNSj/1IGuKFigXEEF51CwQPnxghX2rIqS3iVWUbBAuYKBfQoWFCxQ/jzBCntXoXwXChYo34WCBcp3oWCB8l18ccHr9QPhSYcuQRJg/gAAAABJRU5ErkJggg==" style="height: 25px;" height="25">
  <p class="text" style="text-align: center; filter: drop-shadow(0.05em 0.05em rgba(255, 255, 255, 0.8));">Project by<a class="link" href="https://georgewl.dev" style="padding: 0 5px;">GeorgeWL</a></p>
`;
const floatDiv = document.createElement("div");
floatDiv.style = floatStyle;
floatDiv.innerHTML = innerHTML;
document.addEventListener('readystatechange', () => {
    document.body.appendChild(floatDiv);
})

