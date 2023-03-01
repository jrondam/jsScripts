  var frameElem = document.createElement("iframe");
  frameElem.setAttribute("id", frame.id);
  frameElem.setAttribute("class", "weatherwidget-io-frame");
  frameElem.setAttribute("title", "Weather Widget");
  frameElem.setAttribute("scrolling", "no");
  frameElem.setAttribute("frameBorder", "0");
  frameElem.setAttribute("width", "100%");
  frameElem.setAttribute("src", "https://weatherwidget.io/w/");
  frameElem.style.display = "block";
  frameElem.style.position = "absolute";
  frameElem.style.top = "0";
  frameElem.onload = function () {
    frameElem.contentWindow.postMessage(frame, "https://weatherwidget.io");
  };

  widget.style.display = "block";
  widget.style.position = "relative";
  widget.style.height = "150px";
  widget.style.padding = "0";
  widget.style.overflow = "hidden";
  widget.style.textAlign = "left";
  widget.style.textIndent = "-299rem";
  widget.appendChild(frameElem);
}

window.addEventListener("message", function (event) {
  if (event.origin === "https://weatherwidget.io" && widgetFrames[event.data.wwId] && widgetFrames[event.data.wwId].parentNode) {
    widgetFrames[event.data.wwId].style.height = event.data.wwHeight + "px";
    widgetFrames[event.data.wwId].parentNode.style.height = event.data.wwHeight + "px";
  }
