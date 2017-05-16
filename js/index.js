'use strict';

var w = window.innerWidth;

var getPercentX = function getPercentX(x) {
  return Math.round(x / w * 360);
};

var mouse$ = Rx.Observable.fromEvent(document, 'mousemove').map(function (_ref) {
  var clientX = _ref.clientX;

  var percentX = getPercentX(clientX);

  return {
    xStart: percentX,
    xEnd: percentX + 120
  };
});

RxCSS({ grad: mouse$ });
