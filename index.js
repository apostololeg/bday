const view = document.querySelector(".view");
const fires = [].slice.call(document.querySelectorAll(".fire"));

const initialRotate = { x: 70, y: 0 };
const rotationLimit = 100; // deg
const xc = window.innerWidth / 2;
const yc = window.innerHeight / 2;

function setViewRotation(x, y) {
  view.style = `transform: rotateX(${x}deg) rotateY(${y}deg)`;
}

function light() {
  fires.shift().classList.add("animation");
  if (fires.length) setTimeout(light, Math.random() * 300);
}

function isSafari() {
  const { userAgent } = navigator;
  return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
}

function fixSafari() {
  if (isSafari()) {
    view.classList.add("fadeIn");
    const s = document.createElement("style");
    s.innerText = `.wall { position: static; }`;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 100);
  }
}

function getCoords(e) {
  if (e.targetTouches) {
  }
}

function updateRotation(x, y) {
  const dx = x / xc;
  const dy = y / yc;
  const rx = initialRotate.x - rotationLimit * (dy - 1);
  const ry = initialRotate.y + rotationLimit * (dx - 1);

  setViewRotation(rx, ry);
}

function getHandler() {
  if ("ontouchstart" in window) {
    return [
      "touchmove",
      (e) => {
        e.preventDefault();
        updateRotation(e.touches[0].clientX, e.touches[0].clientY);
      },
    ];
  }

  return ["mousemove", (e) => updateRotation(e.pageX, e.pageY)];
}

const [event, handler] = getHandler();

document.addEventListener(event, throttle(handler), 200);

setTimeout(function () {
  setViewRotation(initialRotate.x, initialRotate.y);
  light();
  fixSafari();
}, 100);

function throttle(func, wait) {
  let throttling = false;
  let result;

  return function () {
    const args = Array.prototype.slice.call(arguments);

    if (!throttling) {
      throttling = true;
      result = func.apply(this, arguments);
      setTimeout(function () {
        throttling = false;
      }, wait);
    }

    return result;
  };
}
