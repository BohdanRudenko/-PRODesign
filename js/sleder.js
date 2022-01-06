// WARNING! This file contains some subset of JS that is not supported by type inference.
// You can try checking 'Transpile to ES5' checkbox if you want the types to be inferred
'use strict';
!function(bindObject, definition) {
  if ("object" == typeof exports && "undefined" != typeof module) {
    module.exports = definition();
  } else {
    if ("function" == typeof define && define.amd) {
      define(definition);
    } else {
      (bindObject = "undefined" != typeof globalThis ? globalThis : bindObject || self).Swiper = definition();
    }
  }
}(this, function() {
  function equal(a) {
    return null !== a && "object" == typeof a && "constructor" in a && a.constructor === Object;
  }
  function fn(a = {}, args = {}) {
    Object.keys(args).forEach((i) => {
      if (void 0 === a[i]) {
        a[i] = args[i];
      } else {
        if (equal(args[i]) && equal(a[i]) && Object.keys(args[i]).length > 0) {
          fn(a[i], args[i]);
        }
      }
    });
  }
  function $() {
    const res = "undefined" != typeof document ? document : {};
    return fn(res, html), res;
  }
  function indexOf() {
    const t = "undefined" != typeof window ? window : {};
    return fn(t, e), t;
  }
  function test(pipelets = []) {
    const collectedEffects = [];
    return pipelets.forEach((val) => {
      if (Array.isArray(val)) {
        collectedEffects.push(...test(val));
      } else {
        collectedEffects.push(val);
      }
    }), collectedEffects;
  }
  function keys(object, predicate) {
    return Array.prototype.filter.call(object, predicate);
  }
  function filter(target, error) {
    const limitParent = indexOf();
    const data = $();
    let array = [];
    if (!error && target instanceof Array) {
      return target;
    }
    if (!target) {
      return new Array(array);
    }
    if ("string" == typeof target) {
      const innerHTML = target.trim();
      if (innerHTML.indexOf("<") >= 0 && innerHTML.indexOf(">") >= 0) {
        let nodeName = "div";
        if (0 === innerHTML.indexOf("<li")) {
          nodeName = "ul";
        }
        if (0 === innerHTML.indexOf("<tr")) {
          nodeName = "tbody";
        }
        if (!(0 !== innerHTML.indexOf("<td") && 0 !== innerHTML.indexOf("<th"))) {
          nodeName = "tr";
        }
        if (0 === innerHTML.indexOf("<tbody")) {
          nodeName = "table";
        }
        if (0 === innerHTML.indexOf("<option")) {
          nodeName = "select";
        }
        const root1 = data.createElement(nodeName);
        root1.innerHTML = innerHTML;
        for (let i = 0; i < root1.childNodes.length; i = i + 1) {
          array.push(root1.childNodes[i]);
        }
      } else {
        array = function(selector, linksContainer) {
          if ("string" != typeof selector) {
            return [selector];
          }
          const result = [];
          const cutouts = linksContainer.querySelectorAll(selector);
          for (let i = 0; i < cutouts.length; i = i + 1) {
            result.push(cutouts[i]);
          }
          return result;
        }(target.trim(), error || data);
      }
    } else {
      if (target.nodeType || target === limitParent || target === data) {
        array.push(target);
      } else {
        if (Array.isArray(target)) {
          if (target instanceof Array) {
            return target;
          }
          array = target;
        }
      }
    }
    return new Array(function(keys) {
      const ret = [];
      for (let i = 0; i < keys.length; i = i + 1) {
        if (-1 === ret.indexOf(keys[i])) {
          ret.push(keys[i]);
        }
      }
      return ret;
    }(array));
  }
  function setTimeout(fn, ajaxInterval = 0) {
    return setTimeout(fn, ajaxInterval);
  }
  function now() {
    return Date.now();
  }
  function transform(html, y = "x") {
    const window = indexOf();
    let rDefs;
    let b;
    let transformMatrix;
    const curStyle = function(el) {
      const header = indexOf();
      let value;
      return header.getComputedStyle && (value = header.getComputedStyle(el, null)), !value && el.currentStyle && (value = el.currentStyle), value || (value = el.style), value;
    }(html);
    return window.WebKitCSSMatrix ? (b = curStyle.transform || curStyle.webkitTransform, b.split(",").length > 6 && (b = b.split(", ").map((originalBaseURL) => {
      return originalBaseURL.replace(",", ".");
    }).join(", ")), transformMatrix = new window.WebKitCSSMatrix("none" === b ? "" : b)) : (transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), rDefs = transformMatrix.toString().split(",")), "x" === y && (b = window.WebKitCSSMatrix ? transformMatrix.m41 : 16 === rDefs.length ? parseFloat(rDefs[12]) : parseFloat(rDefs[4])), "y" === 
    y && (b = window.WebKitCSSMatrix ? transformMatrix.m42 : 16 === rDefs.length ? parseFloat(rDefs[13]) : parseFloat(rDefs[5])), b || 0;
  }
  function isObject(t) {
    return "object" == typeof t && null !== t && t.constructor && "Object" === Object.prototype.toString.call(t).slice(8, -1);
  }
  function extend(...templates) {
    const target = Object(templates[0]);
    const scenes = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < templates.length; i = i + 1) {
      const source = templates[i];
      if (null != source && (copy = source, !("undefined" != typeof window && void 0 !== window.HTMLElement ? copy instanceof HTMLElement : copy && (1 === copy.nodeType || 11 === copy.nodeType)))) {
        const onCompleteBindings = Object.keys(Object(source)).filter((sceneUid) => {
          return scenes.indexOf(sceneUid) < 0;
        });
        for (let i = 0, l = onCompleteBindings.length; i < l; i = i + 1) {
          const key = onCompleteBindings[i];
          const j = Object.getOwnPropertyDescriptor(source, key);
          if (void 0 !== j && j.enumerable) {
            if (isObject(target[key]) && isObject(source[key])) {
              if (source[key].__swiper__) {
                target[key] = source[key];
              } else {
                extend(target[key], source[key]);
              }
            } else {
              if (!isObject(target[key]) && isObject(source[key])) {
                target[key] = {};
                if (source[key].__swiper__) {
                  target[key] = source[key];
                } else {
                  extend(target[key], source[key]);
                }
              } else {
                target[key] = source[key];
              }
            }
          }
        }
      }
    }
    var copy;
    return target;
  }
  function setStyle(dom, styleName, styleValue) {
    dom.style.setProperty(styleName, styleValue);
  }
  function animate({
    swiper : self,
    targetPosition : value,
    side : container
  }) {
    const $window = indexOf();
    const result = -self.translate;
    let connectNumber;
    let concurency = null;
    const rangeIn = self.params.speed;
    self.wrapperEl.style.scrollSnapType = "none";
    $window.cancelAnimationFrame(self.cssModeFrameID);
    const undefined = value > result ? "next" : "prev";
    const callback = (value, min) => {
      return "next" === undefined && value >= min || "prev" === undefined && value <= min;
    };
    const render = () => {
      connectNumber = (new Date).getTime();
      if (null === concurency) {
        concurency = connectNumber;
      }
      const p = Math.max(Math.min((connectNumber - concurency) / rangeIn, 1), 0);
      const alpha = .5 - Math.cos(p * Math.PI) / 2;
      let context = result + alpha * (value - result);
      if (callback(context, value) && (context = value), self.wrapperEl.scrollTo({
        [container]:context
      }), callback(context, value)) {
        return self.wrapperEl.style.overflow = "hidden", self.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          self.wrapperEl.style.overflow = "";
          self.wrapperEl.scrollTo({
            [container]:context
          });
        }), void $window.cancelAnimationFrame(self.cssModeFrameID);
      }
      self.cssModeFrameID = $window.requestAnimationFrame(render);
    };
    render();
  }
  function main() {
    return w || (w = function() {
      const window = indexOf();
      const document = $();
      return {
        smoothScroll : document.documentElement && "scrollBehavior" in document.documentElement.style,
        touch : !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        passiveListener : function() {
          let t = false;
          try {
            const useCapture = Object.defineProperty({}, "passive", {
              get() {
                t = true;
              }
            });
            window.addEventListener("testPassiveListener", null, useCapture);
          } catch (e) {
          }
          return t;
        }(),
        gestures : "ongesturestart" in window
      };
    }()), w;
  }
  function init(sAtom2a = {}) {
    return b || (b = function({
      userAgent : userAgent
    } = {}) {
      const settings = main();
      const that = indexOf();
      const a = that.navigator.platform;
      const searcher_name = userAgent || that.navigator.userAgent;
      const device = {
        ios : false,
        android : false
      };
      const TRAVIS_API_JOBS_URL = that.screen.width;
      const stripeAPIVersion = that.screen.height;
      const i = searcher_name.match(/(Android);?[\s\/]+([\d.]+)?/);
      let x = searcher_name.match(/(iPad).*OS\s([\d_]+)/);
      const z = searcher_name.match(/(iPod)(.*OS\s([\d_]+))?/);
      const y = !x && searcher_name.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      const h = "Win32" === a;
      let placeholderFallback = "MacIntel" === a;
      return !x && placeholderFallback && settings.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${TRAVIS_API_JOBS_URL}x${stripeAPIVersion}`) >= 0 && (x = searcher_name.match(/(Version)\/([\d.]+)/), x || (x = [0, 1, "13_0_0"]), placeholderFallback = false), i && !h && (device.os = "android", device.android = true), (x || y || z) && (device.os = "ios", device.ios = true), device;
    }(sAtom2a)), b;
  }
  function runTests() {
    return x || (x = function() {
      const window = indexOf();
      return {
        isSafari : function() {
          const ua = window.navigator.userAgent.toLowerCase();
          return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
        }(),
        isWebView : /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
      };
    }()), x;
  }
  function callback({
    swiper : user,
    runCallbacks : action,
    direction : direction,
    step : simulate
  }) {
    const {
      activeIndex : distance,
      previousIndex : width
    } = user;
    let type = direction;
    if (type || (type = distance > width ? "next" : distance < width ? "prev" : "reset"), user.emit(`transition${simulate}`), action && distance !== width) {
      if ("reset" === type) {
        return void user.emit(`slideResetTransition${simulate}`);
      }
      user.emit(`slideChangeTransition${simulate}`);
      if ("next" === type) {
        user.emit(`slideNextTransition${simulate}`);
      } else {
        user.emit(`slidePrevTransition${simulate}`);
      }
    }
  }
  function start(event) {
    const that = this;
    const doc = $();
    const $extPanel = indexOf();
    const _this = that.touchEventsData;
    const {
      params : params,
      touches : data,
      enabled : users
    } = that;
    if (!users) {
      return;
    }
    if (that.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!that.animating && params.cssMode && params.loop) {
      that.loopFix();
    }
    let e = event;
    if (e.originalEvent) {
      e = e.originalEvent;
    }
    let result = filter(e.target);
    if ("wrapper" === params.touchEventsTarget && !result.closest(that.wrapperEl).length) {
      return;
    }
    if (_this.isTouchEvent = "touchstart" === e.type, !_this.isTouchEvent && "which" in e && 3 === e.which) {
      return;
    }
    if (!_this.isTouchEvent && "button" in e && e.button > 0) {
      return;
    }
    if (_this.isTouched && _this.isMoved) {
      return;
    }
    if (!!params.noSwipingClass && "" !== params.noSwipingClass && e.target && e.target.shadowRoot && event.path && event.path[0]) {
      result = filter(event.path[0]);
    }
    const row = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const formulas = !(!e.target || !e.target.shadowRoot);
    if (params.noSwiping && (formulas ? function(start, word_model_instance = this) {
      return function filter(current) {
        return current && current !== $() && current !== indexOf() ? (current.assignedSlot && (current = current.assignedSlot), current.closest(start) || filter(current.getRootNode().host)) : null;
      }(word_model_instance);
    }(row, e.target) : result.closest(row)[0])) {
      return void(that.allowClick = true);
    }
    if (params.swipeHandler && !result.closest(params.swipeHandler)[0]) {
      return;
    }
    data.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
    data.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
    const absAngle = data.currentX;
    const temp = data.currentY;
    const w = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const ANGLE_THRESHOLD = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (w && (absAngle <= ANGLE_THRESHOLD || absAngle >= $extPanel.innerWidth - ANGLE_THRESHOLD)) {
      if ("prevent" !== w) {
        return;
      }
      event.preventDefault();
    }
    if (Object.assign(_this, {
      isTouched : true,
      isMoved : false,
      allowTouchCallbacks : true,
      isScrolling : void 0,
      startMoving : void 0
    }), data.startX = absAngle, data.startY = temp, _this.touchStartTime = now(), that.allowClick = true, that.updateSize(), that.swipeDirection = void 0, params.threshold > 0 && (_this.allowThresholdMove = false), "touchstart" !== e.type) {
      let data = true;
      if (result.is(_this.focusableElements)) {
        data = false;
      }
      if (doc.activeElement && filter(doc.activeElement).is(_this.focusableElements) && doc.activeElement !== result[0]) {
        doc.activeElement.blur();
      }
      const a = data && that.allowTouchMove && params.touchStartPreventDefault;
      if (!(!params.touchStartForcePreventDefault && !a || result[0].isContentEditable)) {
        e.preventDefault();
      }
    }
    that.emit("touchStart", e);
  }
  function update(percentageValues) {
    const _self = $();
    const s = this;
    const self = s.touchEventsData;
    const {
      params : options,
      touches : data,
      rtlTranslate : users,
      enabled : max
    } = s;
    if (!max) {
      return;
    }
    let e = percentageValues;
    if (e.originalEvent && (e = e.originalEvent), !self.isTouched) {
      return void(self.startMoving && self.isScrolling && s.emit("touchMoveOpposite", e));
    }
    if (self.isTouchEvent && "touchmove" !== e.type) {
      return;
    }
    const oldTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    const x = "touchmove" === e.type ? oldTouch.pageX : e.pageX;
    const y = "touchmove" === e.type ? oldTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      return data.startX = x, void(data.startY = y);
    }
    if (!s.allowTouchMove) {
      return s.allowClick = false, void(self.isTouched && (Object.assign(data, {
        startX : x,
        startY : y,
        currentX : x,
        currentY : y
      }), self.touchStartTime = now()));
    }
    if (self.isTouchEvent && options.touchReleaseOnEdges && !options.loop) {
      if (s.isVertical()) {
        if (y < data.startY && s.translate <= s.maxTranslate() || y > data.startY && s.translate >= s.minTranslate()) {
          return self.isTouched = false, void(self.isMoved = false);
        }
      } else {
        if (x < data.startX && s.translate <= s.maxTranslate() || x > data.startX && s.translate >= s.minTranslate()) {
          return;
        }
      }
    }
    if (self.isTouchEvent && _self.activeElement && e.target === _self.activeElement && filter(e.target).is(self.focusableElements)) {
      return self.isMoved = true, void(s.allowClick = false);
    }
    if (self.allowTouchCallbacks && s.emit("touchMove", e), e.targetTouches && e.targetTouches.length > 1) {
      return;
    }
    data.currentX = x;
    data.currentY = y;
    const b = data.currentX - data.startX;
    const a = data.currentY - data.startY;
    if (s.params.threshold && Math.sqrt(b ** 2 + a ** 2) < s.params.threshold) {
      return;
    }
    if (void 0 === self.isScrolling) {
      let touchAngle;
      if (s.isHorizontal() && data.currentY === data.startY || s.isVertical() && data.currentX === data.startX) {
        self.isScrolling = false;
      } else {
        if (b * b + a * a >= 25) {
          touchAngle = 180 * Math.atan2(Math.abs(a), Math.abs(b)) / Math.PI;
          self.isScrolling = s.isHorizontal() ? touchAngle > options.touchAngle : 90 - touchAngle > options.touchAngle;
        }
      }
    }
    if (self.isScrolling && s.emit("touchMoveOpposite", e), void 0 === self.startMoving && (data.currentX === data.startX && data.currentY === data.startY || (self.startMoving = true)), self.isScrolling) {
      return void(self.isTouched = false);
    }
    if (!self.startMoving) {
      return;
    }
    s.allowClick = false;
    if (!options.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (options.touchMoveStopPropagation && !options.nested) {
      e.stopPropagation();
    }
    if (!self.isMoved) {
      if (options.loop && !options.cssMode) {
        s.loopFix();
      }
      self.startTranslate = s.getTranslate();
      s.setTransition(0);
      if (s.animating) {
        s.$wrapperEl.trigger("webkitTransitionEnd transitionend");
      }
      self.allowMomentumBounce = false;
      if (!(!options.grabCursor || true !== s.allowSlideNext && true !== s.allowSlidePrev)) {
        s.setGrabCursor(true);
      }
      s.emit("sliderFirstMove", e);
    }
    s.emit("sliderMove", e);
    self.isMoved = true;
    let diff = s.isHorizontal() ? b : a;
    data.diff = diff;
    diff = diff * options.touchRatio;
    if (users) {
      diff = -diff;
    }
    s.swipeDirection = diff > 0 ? "prev" : "next";
    self.currentTranslate = diff + self.startTranslate;
    let w = true;
    let cache = options.resistanceRatio;
    if (options.touchReleaseOnEdges && (cache = 0), diff > 0 && self.currentTranslate > s.minTranslate() ? (w = false, options.resistance && (self.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + self.startTranslate + diff) ** cache)) : diff < 0 && self.currentTranslate < s.maxTranslate() && (w = false, options.resistance && (self.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - self.startTranslate - diff) ** cache)), w && (e.preventedByNestedSwiper = true), !s.allowSlideNext && 
    "next" === s.swipeDirection && self.currentTranslate < self.startTranslate && (self.currentTranslate = self.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && self.currentTranslate > self.startTranslate && (self.currentTranslate = self.startTranslate), s.allowSlidePrev || s.allowSlideNext || (self.currentTranslate = self.startTranslate), options.threshold > 0) {
      if (!(Math.abs(diff) > options.threshold || self.allowThresholdMove)) {
        return void(self.currentTranslate = self.startTranslate);
      }
      if (!self.allowThresholdMove) {
        return self.allowThresholdMove = true, data.startX = data.currentX, data.startY = data.currentY, self.currentTranslate = self.startTranslate, void(data.diff = s.isHorizontal() ? data.currentX - data.startX : data.currentY - data.startY);
      }
    }
    if (options.followFinger && !options.cssMode) {
      if (options.freeMode && options.freeMode.enabled && s.freeMode || options.watchSlidesProgress) {
        s.updateActiveIndex();
        s.updateSlidesClasses();
      }
      if (s.params.freeMode && options.freeMode.enabled && s.freeMode) {
        s.freeMode.onTouchMove();
      }
      s.updateProgress(self.currentTranslate);
      s.setTranslate(self.currentTranslate);
    }
  }
  function onTouchEnd(event) {
    const self = this;
    const _this = self.touchEventsData;
    const {
      params : params,
      touches : app,
      rtlTranslate : users,
      slidesGrid : keys,
      enabled : initialState
    } = self;
    if (!initialState) {
      return;
    }
    let e = event;
    if (e.originalEvent && (e = e.originalEvent), _this.allowTouchCallbacks && self.emit("touchEnd", e), _this.allowTouchCallbacks = false, !_this.isTouched) {
      return _this.isMoved && params.grabCursor && self.setGrabCursor(false), _this.isMoved = false, void(_this.startMoving = false);
    }
    if (params.grabCursor && _this.isMoved && _this.isTouched && (true === self.allowSlideNext || true === self.allowSlidePrev)) {
      self.setGrabCursor(false);
    }
    const current = now();
    const timeDiff = current - _this.touchStartTime;
    if (self.allowClick && (self.updateClickedSlide(e), self.emit("tap click", e), timeDiff < 300 && current - _this.lastClickTime < 300 && self.emit("doubleTap doubleClick", e)), _this.lastClickTime = now(), setTimeout(() => {
      if (!self.destroyed) {
        self.allowClick = true;
      }
    }), !_this.isTouched || !_this.isMoved || !self.swipeDirection || 0 === app.diff || _this.currentTranslate === _this.startTranslate) {
      return _this.isTouched = false, _this.isMoved = false, void(_this.startMoving = false);
    }
    let currentPos;
    if (_this.isTouched = false, _this.isMoved = false, _this.startMoving = false, currentPos = params.followFinger ? users ? self.translate : -self.translate : -_this.currentTranslate, params.cssMode) {
      return;
    }
    if (self.params.freeMode && params.freeMode.enabled) {
      return void self.freeMode.onTouchEnd({
        currentPos : currentPos
      });
    }
    let index = 0;
    let groupSize = self.slidesSizesGrid[0];
    for (let i = 0; i < keys.length; i = i + (i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup)) {
      const offset = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (void 0 !== keys[i + offset]) {
        if (currentPos >= keys[i] && currentPos < keys[i + offset]) {
          index = i;
          groupSize = keys[i + offset] - keys[i];
        }
      } else {
        if (currentPos >= keys[i]) {
          index = i;
          groupSize = keys[keys.length - 1] - keys[keys.length - 2];
        }
      }
    }
    const ratio = (currentPos - keys[index]) / groupSize;
    const dir = index < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        return void self.slideTo(self.activeIndex);
      }
      if ("next" === self.swipeDirection) {
        if (ratio >= params.longSwipesRatio) {
          self.slideTo(index + dir);
        } else {
          self.slideTo(index);
        }
      }
      if ("prev" === self.swipeDirection) {
        if (ratio > 1 - params.longSwipesRatio) {
          self.slideTo(index + dir);
        } else {
          self.slideTo(index);
        }
      }
    } else {
      if (!params.shortSwipes) {
        return void self.slideTo(self.activeIndex);
      }
      if (self.navigation && (e.target === self.navigation.nextEl || e.target === self.navigation.prevEl)) {
        if (e.target === self.navigation.nextEl) {
          self.slideTo(index + dir);
        } else {
          self.slideTo(index);
        }
      } else {
        if ("next" === self.swipeDirection) {
          self.slideTo(index + dir);
        }
        if ("prev" === self.swipeDirection) {
          self.slideTo(index);
        }
      }
    }
  }
  function render() {
    const self = this;
    const {
      params : options,
      el : item
    } = self;
    if (item && 0 === item.offsetWidth) {
      return;
    }
    if (options.breakpoints) {
      self.setBreakpoint();
    }
    const {
      allowSlideNext : Component,
      allowSlidePrev : run,
      snapGrid : on
    } = self;
    self.allowSlideNext = true;
    self.allowSlidePrev = true;
    self.updateSize();
    self.updateSlides();
    self.updateSlidesClasses();
    if (("auto" === options.slidesPerView || options.slidesPerView > 1) && self.isEnd && !self.isBeginning && !self.params.centeredSlides) {
      self.slideTo(self.slides.length - 1, 0, false, true);
    } else {
      self.slideTo(self.activeIndex, 0, false, true);
    }
    if (self.autoplay && self.autoplay.running && self.autoplay.paused) {
      self.autoplay.run();
    }
    self.allowSlidePrev = run;
    self.allowSlideNext = Component;
    if (self.params.watchOverflow && on !== self.snapGrid) {
      self.checkOverflow();
    }
  }
  function eventHandler(event) {
    const s = this;
    if (s.enabled) {
      if (!s.allowClick) {
        if (s.params.preventClicks) {
          event.preventDefault();
        }
        if (s.params.preventClicksPropagation && s.animating) {
          event.stopPropagation();
          event.stopImmediatePropagation();
        }
      }
    }
  }
  function done() {
    const self = this;
    const {
      wrapperEl : t,
      rtlTranslate : newTime,
      enabled : ctrl1
    } = self;
    if (!ctrl1) {
      return;
    }
    let contentSig;
    self.previousTranslate = self.translate;
    if (self.isHorizontal()) {
      self.translate = -t.scrollLeft;
    } else {
      self.translate = -t.scrollTop;
    }
    if (-0 === self.translate) {
      self.translate = 0;
    }
    self.updateActiveIndex();
    self.updateSlidesClasses();
    const r = self.maxTranslate() - self.minTranslate();
    contentSig = 0 === r ? 0 : (self.translate - self.minTranslate()) / r;
    if (contentSig !== self.progress) {
      self.updateProgress(newTime ? -self.translate : self.translate);
    }
    self.emit("setTranslate", self.translate, false);
  }
  function onHeadClick() {
  }
  function save(storage, result) {
    return function(foundLanguages = {}) {
      const name = Object.keys(foundLanguages)[0];
      const data = foundLanguages[name];
      if ("object" == typeof data && null !== data) {
        if (["navigation", "pagination", "scrollbar"].indexOf(name) >= 0 && true === storage[name]) {
          storage[name] = {
            auto : true
          };
        }
        if (name in storage && "enabled" in data) {
          if (true === storage[name]) {
            storage[name] = {
              enabled : true
            };
          }
          if (!("object" != typeof storage[name] || "enabled" in storage[name])) {
            storage[name].enabled = true;
          }
          if (!storage[name]) {
            storage[name] = {
              enabled : false
            };
          }
          extend(result, foundLanguages);
        } else {
          extend(result, foundLanguages);
        }
      } else {
        extend(result, foundLanguages);
      }
    };
  }
  function show(el, t, model, data) {
    const util = $();
    return el.params.createElements && Object.keys(data).forEach((i) => {
      if (!model[i] && true === model.auto) {
        let f = el.$el.children(`.${data[i]}`)[0];
        if (!f) {
          f = util.createElement("div");
          f.className = data[i];
          el.$el.append(f);
        }
        model[i] = f;
        t[i] = f;
      }
    }), model;
  }
  function bind(categoryName = "") {
    return `.${categoryName.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
  }
  function emit(obj) {
    const message = this;
    const {
      $wrapperEl : model,
      params : instance
    } = message;
    if (instance.loop && message.loopDestroy(), "object" == typeof obj && "length" in obj) {
      for (let i = 0; i < obj.length; i = i + 1) {
        if (obj[i]) {
          model.append(obj[i]);
        }
      }
    } else {
      model.append(obj);
    }
    if (instance.loop) {
      message.loopCreate();
    }
    if (!instance.observer) {
      message.update();
    }
  }
  function parse(value) {
    const fx = this;
    const {
      params : instance,
      $wrapperEl : data,
      activeIndex : index
    } = fx;
    if (instance.loop) {
      fx.loopDestroy();
    }
    let start = index + 1;
    if ("object" == typeof value && "length" in value) {
      for (let i = 0; i < value.length; i = i + 1) {
        if (value[i]) {
          data.prepend(value[i]);
        }
      }
      start = index + value.length;
    } else {
      data.prepend(value);
    }
    if (instance.loop) {
      fx.loopCreate();
    }
    if (!instance.observer) {
      fx.update();
    }
    fx.slideTo(start, 0, false);
  }
  function _init(y, data) {
    const s = this;
    const {
      $wrapperEl : response,
      params : params,
      activeIndex : activeItemIndex
    } = s;
    let x = activeItemIndex;
    if (params.loop) {
      x = x - s.loopedSlides;
      s.loopDestroy();
      s.slides = response.children(`.${params.slideClass}`);
    }
    const y3 = s.slides.length;
    if (y <= 0) {
      return void s.prependSlide(data);
    }
    if (y >= y3) {
      return void s.appendSlide(data);
    }
    let index = x > y ? x + 1 : x;
    const results = [];
    for (let i = y3 - 1; i >= y; i = i - 1) {
      const e = s.slides.eq(i);
      e.remove();
      results.unshift(e);
    }
    if ("object" == typeof data && "length" in data) {
      for (let i = 0; i < data.length; i = i + 1) {
        if (data[i]) {
          response.append(data[i]);
        }
      }
      index = x > y ? x + data.length : x;
    } else {
      response.append(data);
    }
    for (let i = 0; i < results.length; i = i + 1) {
      response.append(results[i]);
    }
    if (params.loop) {
      s.loopCreate();
    }
    if (!params.observer) {
      s.update();
    }
    if (params.loop) {
      s.slideTo(index + s.loopedSlides, 0, false);
    } else {
      s.slideTo(index, 0, false);
    }
  }
  function load(a) {
    const _this = this;
    const {
      params : params,
      $wrapperEl : query,
      activeIndex : users
    } = _this;
    let current = users;
    if (params.loop) {
      current = current - _this.loopedSlides;
      _this.loopDestroy();
      _this.slides = query.children(`.${params.slideClass}`);
    }
    let j;
    let index = current;
    if ("object" == typeof a && "length" in a) {
      for (let i = 0; i < a.length; i = i + 1) {
        j = a[i];
        if (_this.slides[j]) {
          _this.slides.eq(j).remove();
        }
        if (j < index) {
          index = index - 1;
        }
      }
      index = Math.max(index, 0);
    } else {
      j = a;
      if (_this.slides[j]) {
        _this.slides.eq(j).remove();
      }
      if (j < index) {
        index = index - 1;
      }
      index = Math.max(index, 0);
    }
    if (params.loop) {
      _this.loopCreate();
    }
    if (!params.observer) {
      _this.update();
    }
    if (params.loop) {
      _this.slideTo(index + _this.loopedSlides, 0, false);
    } else {
      _this.slideTo(index, 0, false);
    }
  }
  function setData() {
    const s = this;
    const index = [];
    for (let i = 0; i < s.slides.length; i = i + 1) {
      index.push(i);
    }
    s.removeSlide(index);
  }
  function initialize(description) {
    const {
      effect : effect,
      swiper : options,
      on : add,
      setTranslate : isAdmin,
      setTransition : firstPointGuide,
      overwriteParams : secondPointGuide,
      perspective : initFiatRateService
    } = description;
    add("beforeInit", () => {
      if (options.params.effect !== effect) {
        return;
      }
      options.classNames.push(`${options.params.containerModifierClass}${effect}`);
      if (initFiatRateService && initFiatRateService()) {
        options.classNames.push(`${options.params.containerModifierClass}3d`);
      }
      const tabProps = secondPointGuide ? secondPointGuide() : {};
      Object.assign(options.params, tabProps);
      Object.assign(options.originalParams, tabProps);
    });
    add("setTranslate", () => {
      if (options.params.effect === effect) {
        isAdmin();
      }
    });
    add("setTransition", (canCreateDiscussions, event) => {
      if (options.params.effect === effect) {
        firstPointGuide(event);
      }
    });
  }
  function next(options, value) {
    return options.transformEl ? value.find(options.transformEl).css({
      "backface-visibility" : "hidden",
      "-webkit-backface-visibility" : "hidden"
    }) : value;
  }
  function hide({
    swiper : element,
    duration : offsets,
    transformEl : n,
    allSlides : listener
  }) {
    const {
      slides : slides,
      activeIndex : slideIndex,
      $wrapperEl : settings
    } = element;
    if (element.params.virtualTranslate && 0 !== offsets) {
      let dialog;
      let l = false;
      dialog = listener ? n ? slides.find(n) : slides : n ? slides.eq(slideIndex).find(n) : slides.eq(slideIndex);
      dialog.transitionEnd(() => {
        if (l) {
          return;
        }
        if (!element || element.destroyed) {
          return;
        }
        l = true;
        element.animating = false;
        const matches = ["webkitTransitionEnd", "transitionend"];
        for (let i = 0; i < matches.length; i = i + 1) {
          settings.trigger(matches[i]);
        }
      });
    }
  }
  function set(node, root, prefix) {
    const a = "swiper-slide-shadow" + (prefix ? `-${prefix}` : "");
    const path = node.transformEl ? root.find(node.transformEl) : root;
    let obj = path.children(`.${a}`);
    return obj.length || (obj = filter(`<div class="swiper-slide-shadow${prefix ? `-${prefix}` : ""}"></div>`), path.append(obj)), obj;
  }
  const html = {
    body : {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement : {
      blur() {
      },
      nodeName : ""
    },
    querySelector : () => {
      return null;
    },
    querySelectorAll : () => {
      return [];
    },
    getElementById : () => {
      return null;
    },
    createEvent : () => {
      return {
        initEvent() {
        }
      };
    },
    createElement : () => {
      return {
        children : [],
        childNodes : [],
        style : {},
        setAttribute() {
        },
        getElementsByTagName : () => {
          return [];
        }
      };
    },
    createElementNS : () => {
      return {};
    },
    importNode : () => {
      return null;
    },
    location : {
      hash : "",
      host : "",
      hostname : "",
      href : "",
      origin : "",
      pathname : "",
      protocol : "",
      search : ""
    }
  };
  const e = {
    document : html,
    navigator : {
      userAgent : ""
    },
    location : {
      hash : "",
      host : "",
      hostname : "",
      href : "",
      origin : "",
      pathname : "",
      protocol : "",
      search : ""
    },
    history : {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent : function() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle : () => {
      return {
        getPropertyValue : () => {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen : {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia : () => {
      return {};
    },
    requestAnimationFrame : (callback) => {
      return "undefined" == typeof setTimeout ? (callback(), null) : setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if ("undefined" != typeof setTimeout) {
        clearTimeout(id);
      }
    }
  };
  class Array extends Array {
    constructor(value) {
      super(...value || []);
      (function(e) {
        const options = e.__proto__;
        Object.defineProperty(e, "__proto__", {
          get : () => {
            return options;
          },
          set(logger) {
            options.__proto__ = logger;
          }
        });
      })(this);
    }
  }
  filter.fn = Array.prototype;
  const c = {
    addClass : function(...navLinksArr) {
      const className = test(navLinksArr.map((clusterShardData) => {
        return clusterShardData.split(" ");
      }));
      return this.forEach((e) => {
        e.classList.add(...className);
      }), this;
    },
    removeClass : function(...navLinksArr) {
      const classNameArr = test(navLinksArr.map((clusterShardData) => {
        return clusterShardData.split(" ");
      }));
      return this.forEach((focusedObj) => {
        focusedObj.classList.remove(...classNameArr);
      }), this;
    },
    hasClass : function(...navLinksArr) {
      const eCfgEl = test(navLinksArr.map((clusterShardData) => {
        return clusterShardData.split(" ");
      }));
      return keys(this, (divChatButton) => {
        return eCfgEl.filter((tenantsWithPrincipals) => {
          return divChatButton.classList.contains(tenantsWithPrincipals);
        }).length > 0;
      }).length > 0;
    },
    toggleClass : function(...navLinksArr) {
      const pipelets = test(navLinksArr.map((clusterShardData) => {
        return clusterShardData.split(" ");
      }));
      this.forEach((toolbarEl) => {
        pipelets.forEach((sourceEditor) => {
          toolbarEl.classList.toggle(sourceEditor);
        });
      });
    },
    attr : function(name, value) {
      if (1 === arguments.length && "string" == typeof name) {
        return this[0] ? this[0].getAttribute(name) : void 0;
      }
      for (let i = 0; i < this.length; i = i + 1) {
        if (2 === arguments.length) {
          this[i].setAttribute(name, value);
        } else {
          for (const prop in name) {
            this[i][prop] = name[prop];
            this[i].setAttribute(prop, name[prop]);
          }
        }
      }
      return this;
    },
    removeAttr : function(name) {
      for (let i = 0; i < this.length; i = i + 1) {
        this[i].removeAttribute(name);
      }
      return this;
    },
    transform : function(name) {
      for (let i = 0; i < this.length; i = i + 1) {
        this[i].style.transform = name;
      }
      return this;
    },
    transition : function(token) {
      for (let i = 0; i < this.length; i = i + 1) {
        this[i].style.transitionDuration = "string" != typeof token ? `${token}ms` : token;
      }
      return this;
    },
    on : function(...test) {
      function setup(e) {
        const obj = e.target;
        if (!obj) {
          return;
        }
        const i = e.target.dom7EventData || [];
        if (i.indexOf(e) < 0 && i.unshift(e), filter(obj).is(value)) {
          self.apply(obj, i);
        } else {
          const nodes = filter(obj).parents();
          for (let j = 0; j < nodes.length; j = j + 1) {
            if (filter(nodes[j]).is(value)) {
              self.apply(nodes[j], i);
            }
          }
        }
      }
      function listen(event) {
        const t = event && event.target && event.target.dom7EventData || [];
        if (t.indexOf(event) < 0) {
          t.unshift(event);
        }
        self.apply(this, t);
      }
      let [key, value, self, expected] = test;
      if ("function" == typeof test[1]) {
        [key, self, expected] = test;
        value = void 0;
      }
      if (!expected) {
        expected = false;
      }
      const keywordResults = key.split(" ");
      let i;
      for (let i = 0; i < this.length; i = i + 1) {
        const t = this[i];
        if (value) {
          i = 0;
          for (; i < keywordResults.length; i = i + 1) {
            const k = keywordResults[i];
            if (!t.dom7LiveListeners) {
              t.dom7LiveListeners = {};
            }
            if (!t.dom7LiveListeners[k]) {
              t.dom7LiveListeners[k] = [];
            }
            t.dom7LiveListeners[k].push({
              listener : self,
              proxyListener : setup
            });
            t.addEventListener(k, setup, expected);
          }
        } else {
          i = 0;
          for (; i < keywordResults.length; i = i + 1) {
            const e = keywordResults[i];
            if (!t.dom7Listeners) {
              t.dom7Listeners = {};
            }
            if (!t.dom7Listeners[e]) {
              t.dom7Listeners[e] = [];
            }
            t.dom7Listeners[e].push({
              listener : self,
              proxyListener : listen
            });
            t.addEventListener(e, listen, expected);
          }
        }
      }
      return this;
    },
    off : function(...params) {
      let [min, name, max, format] = params;
      if ("function" == typeof params[1]) {
        [min, max, format] = params;
        name = void 0;
      }
      if (!format) {
        format = false;
      }
      const keywordResults = min.split(" ");
      for (let i = 0; i < keywordResults.length; i = i + 1) {
        const k = keywordResults[i];
        for (let i = 0; i < this.length; i = i + 1) {
          const node = this[i];
          let fns;
          if (!name && node.dom7Listeners ? fns = node.dom7Listeners[k] : name && node.dom7LiveListeners && (fns = node.dom7LiveListeners[k]), fns && fns.length) {
            for (let i = fns.length - 1; i >= 0; i = i - 1) {
              const entry = fns[i];
              if (max && entry.listener === max || max && entry.listener && entry.listener.dom7proxy && entry.listener.dom7proxy === max) {
                node.removeEventListener(k, entry.proxyListener, format);
                fns.splice(i, 1);
              } else {
                if (!max) {
                  node.removeEventListener(k, entry.proxyListener, format);
                  fns.splice(i, 1);
                }
              }
            }
          }
        }
      }
      return this;
    },
    trigger : function(...e) {
      const window = indexOf();
      const keywordResults = e[0].split(" ");
      const requiredMessageStr = e[1];
      for (let i = 0; i < keywordResults.length; i = i + 1) {
        const type = keywordResults[i];
        for (let i = 0; i < this.length; i = i + 1) {
          const document = this[i];
          if (window.CustomEvent) {
            const deviceOrientationEvent = new window.CustomEvent(type, {
              detail : requiredMessageStr,
              bubbles : true,
              cancelable : true
            });
            document.dom7EventData = e.filter((canCreateDiscussions, isSlidingUp) => {
              return isSlidingUp > 0;
            });
            document.dispatchEvent(deviceOrientationEvent);
            document.dom7EventData = [];
            delete document.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd : function(fn) {
      const el = this;
      return fn && el.on("transitionend", function fireCallBack(e) {
        if (e.target === this) {
          fn.call(this, e);
          el.off("transitionend", fireCallBack);
        }
      }), this;
    },
    outerWidth : function(bool) {
      if (this.length > 0) {
        if (bool) {
          const styles = this.styles();
          return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight : function(bool) {
      if (this.length > 0) {
        if (bool) {
          const styles = this.styles();
          return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles : function() {
      const styleUtils = indexOf();
      return this[0] ? styleUtils.getComputedStyle(this[0], null) : {};
    },
    offset : function() {
      if (this.length > 0) {
        const window = indexOf();
        const aIterator = $();
        const container = this[0];
        const offset = container.getBoundingClientRect();
        const body = aIterator.body;
        const comboTop = container.clientTop || body.clientTop || 0;
        const AIR_MODE_POPOVER_X_OFFSET = container.clientLeft || body.clientLeft || 0;
        const dropOuterHeight = container === window ? window.scrollY : container.scrollTop;
        const calendarWidth = container === window ? window.scrollX : container.scrollLeft;
        return {
          top : offset.top + dropOuterHeight - comboTop,
          left : offset.left + calendarWidth - AIR_MODE_POPOVER_X_OFFSET
        };
      }
      return null;
    },
    css : function(name, value) {
      const styleUtils = indexOf();
      let i;
      if (1 === arguments.length) {
        if ("string" != typeof name) {
          i = 0;
          for (; i < this.length; i = i + 1) {
            for (const prop in name) {
              this[i].style[prop] = name[prop];
            }
          }
          return this;
        }
        if (this[0]) {
          return styleUtils.getComputedStyle(this[0], null).getPropertyValue(name);
        }
      }
      if (2 === arguments.length && "string" == typeof name) {
        i = 0;
        for (; i < this.length; i = i + 1) {
          this[i].style[name] = value;
        }
        return this;
      }
      return this;
    },
    each : function(self) {
      return self ? (this.forEach(($item, status) => {
        self.apply($item, [$item, status]);
      }), this) : this;
    },
    html : function(html) {
      if (void 0 === html) {
        return this[0] ? this[0].innerHTML : null;
      }
      for (let i = 0; i < this.length; i = i + 1) {
        this[i].innerHTML = html;
      }
      return this;
    },
    text : function(text) {
      if (void 0 === text) {
        return this[0] ? this[0].textContent.trim() : null;
      }
      for (let i = 0; i < this.length; i = i + 1) {
        this[i].textContent = text;
      }
      return this;
    },
    is : function(selector) {
      const table = indexOf();
      const layer = $();
      const element = this[0];
      let result;
      let i;
      if (!element || void 0 === selector) {
        return false;
      }
      if ("string" == typeof selector) {
        if (element.matches) {
          return element.matches(selector);
        }
        if (element.webkitMatchesSelector) {
          return element.webkitMatchesSelector(selector);
        }
        if (element.msMatchesSelector) {
          return element.msMatchesSelector(selector);
        }
        result = filter(selector);
        i = 0;
        for (; i < result.length; i = i + 1) {
          if (result[i] === element) {
            return true;
          }
        }
        return false;
      }
      if (selector === layer) {
        return element === layer;
      }
      if (selector === table) {
        return element === table;
      }
      if (selector.nodeType || selector instanceof Array) {
        result = selector.nodeType ? [selector] : selector;
        i = 0;
        for (; i < result.length; i = i + 1) {
          if (result[i] === element) {
            return true;
          }
        }
        return false;
      }
      return false;
    },
    index : function() {
      let keyIndex;
      let previousSiblingElement = this[0];
      if (previousSiblingElement) {
        keyIndex = 0;
        for (; null !== (previousSiblingElement = previousSiblingElement.previousSibling);) {
          if (1 === previousSiblingElement.nodeType) {
            keyIndex = keyIndex + 1;
          }
        }
        return keyIndex;
      }
    },
    eq : function(index) {
      if (void 0 === index) {
        return this;
      }
      const numSlides = this.length;
      if (index > numSlides - 1) {
        return filter([]);
      }
      if (index < 0) {
        const indexLookupKey = numSlides + index;
        return filter(indexLookupKey < 0 ? [] : [this[indexLookupKey]]);
      }
      return filter([this[index]]);
    },
    append : function(...anonpositions) {
      let a;
      const util = $();
      for (let j = 0; j < anonpositions.length; j = j + 1) {
        a = anonpositions[j];
        for (let j = 0; j < this.length; j = j + 1) {
          if ("string" == typeof a) {
            const slot = util.createElement("div");
            slot.innerHTML = a;
            for (; slot.firstChild;) {
              this[j].appendChild(slot.firstChild);
            }
          } else {
            if (a instanceof Array) {
              for (let i = 0; i < a.length; i = i + 1) {
                this[j].appendChild(a[i]);
              }
            } else {
              this[j].appendChild(a);
            }
          }
        }
      }
      return this;
    },
    prepend : function(b) {
      const util = $();
      let j;
      let i;
      j = 0;
      for (; j < this.length; j = j + 1) {
        if ("string" == typeof b) {
          const mix = util.createElement("div");
          mix.innerHTML = b;
          i = mix.childNodes.length - 1;
          for (; i >= 0; i = i - 1) {
            this[j].insertBefore(mix.childNodes[i], this[j].childNodes[0]);
          }
        } else {
          if (b instanceof Array) {
            i = 0;
            for (; i < b.length; i = i + 1) {
              this[j].insertBefore(b[i], this[j].childNodes[0]);
            }
          } else {
            this[j].insertBefore(b, this[j].childNodes[0]);
          }
        }
      }
      return this;
    },
    next : function(selector) {
      return this.length > 0 ? selector ? this[0].nextElementSibling && filter(this[0].nextElementSibling).is(selector) ? filter([this[0].nextElementSibling]) : filter([]) : this[0].nextElementSibling ? filter([this[0].nextElementSibling]) : filter([]) : filter([]);
    },
    nextAll : function(selector) {
      const t = [];
      let fileTooLarge = this[0];
      if (!fileTooLarge) {
        return filter([]);
      }
      for (; fileTooLarge.nextElementSibling;) {
        const file = fileTooLarge.nextElementSibling;
        if (selector) {
          if (filter(file).is(selector)) {
            t.push(file);
          }
        } else {
          t.push(file);
        }
        fileTooLarge = file;
      }
      return filter(t);
    },
    prev : function(selector) {
      if (this.length > 0) {
        const target = this[0];
        return selector ? target.previousElementSibling && filter(target.previousElementSibling).is(selector) ? filter([target.previousElementSibling]) : filter([]) : target.previousElementSibling ? filter([target.previousElementSibling]) : filter([]);
      }
      return filter([]);
    },
    prevAll : function(selector) {
      const t = [];
      let input = this[0];
      if (!input) {
        return filter([]);
      }
      for (; input.previousElementSibling;) {
        const file = input.previousElementSibling;
        if (selector) {
          if (filter(file).is(selector)) {
            t.push(file);
          }
        } else {
          t.push(file);
        }
        input = file;
      }
      return filter(t);
    },
    parent : function(selector) {
      const targets = [];
      for (let i = 0; i < this.length; i = i + 1) {
        if (null !== this[i].parentNode) {
          if (selector) {
            if (filter(this[i].parentNode).is(selector)) {
              targets.push(this[i].parentNode);
            }
          } else {
            targets.push(this[i].parentNode);
          }
        }
      }
      return filter(targets);
    },
    parents : function(selector) {
      const t = [];
      for (let i = 0; i < this.length; i = i + 1) {
        let elem = this[i].parentNode;
        for (; elem;) {
          if (selector) {
            if (filter(elem).is(selector)) {
              t.push(elem);
            }
          } else {
            t.push(elem);
          }
          elem = elem.parentNode;
        }
      }
      return filter(t);
    },
    closest : function(target) {
      let t = this;
      return void 0 === target ? filter([]) : (t.is(target) || (t = t.parents(target).eq(0)), t);
    },
    find : function(type) {
      const result = [];
      for (let i = 0; i < this.length; i = i + 1) {
        const cutouts = this[i].querySelectorAll(type);
        for (let i = 0; i < cutouts.length; i = i + 1) {
          result.push(cutouts[i]);
        }
      }
      return filter(result);
    },
    children : function(input) {
      const targets = [];
      for (let i = 0; i < this.length; i = i + 1) {
        const props = this[i].children;
        for (let i = 0; i < props.length; i = i + 1) {
          if (!(input && !filter(props[i]).is(input))) {
            targets.push(props[i]);
          }
        }
      }
      return filter(targets);
    },
    filter : function(x) {
      return filter(keys(this, x));
    },
    remove : function() {
      for (let i = 0; i < this.length; i = i + 1) {
        if (this[i].parentNode) {
          this[i].parentNode.removeChild(this[i]);
        }
      }
      return this;
    }
  };
  let w;
  let b;
  let x;
  Object.keys(c).forEach((property) => {
    Object.defineProperty(filter.fn, property, {
      value : c[property],
      writable : true
    });
  });
  var C = {
    on(fn, data, prepend) {
      const element = this;
      if ("function" != typeof data) {
        return element;
      }
      const name = prepend ? "unshift" : "push";
      return fn.split(" ").forEach((m) => {
        if (!element.eventsListeners[m]) {
          element.eventsListeners[m] = [];
        }
        element.eventsListeners[m][name](data);
      }), element;
    },
    once(type, listener, self) {
      function handler(...largs) {
        object.off(type, handler);
        if (handler.__emitterProxy) {
          delete handler.__emitterProxy;
        }
        listener.apply(object, largs);
      }
      const object = this;
      if ("function" != typeof listener) {
        return object;
      }
      return handler.__emitterProxy = listener, object.on(type, handler, self);
    },
    onAny(fn, capturing) {
      const monthObject = this;
      if ("function" != typeof fn) {
        return monthObject;
      }
      const name = capturing ? "unshift" : "push";
      return monthObject.eventsAnyListeners.indexOf(fn) < 0 && monthObject.eventsAnyListeners[name](fn), monthObject;
    },
    offAny(fn) {
      const $mol_atom = this;
      if (!$mol_atom.eventsAnyListeners) {
        return $mol_atom;
      }
      const existingProxyIndex = $mol_atom.eventsAnyListeners.indexOf(fn);
      return existingProxyIndex >= 0 && $mol_atom.eventsAnyListeners.splice(existingProxyIndex, 1), $mol_atom;
    },
    off(date, name) {
      const widget = this;
      return widget.eventsListeners ? (date.split(" ").forEach((name) => {
        if (void 0 === name) {
          widget.eventsListeners[name] = [];
        } else {
          if (widget.eventsListeners[name]) {
            widget.eventsListeners[name].forEach((item, i) => {
              if (item === name || item.__emitterProxy && item.__emitterProxy === name) {
                widget.eventsListeners[name].splice(i, 1);
              }
            });
          }
        }
      }), widget) : widget;
    },
    emit(...results) {
      const self = this;
      if (!self.eventsListeners) {
        return self;
      }
      let events;
      let d;
      let w;
      if ("string" == typeof results[0] || Array.isArray(results[0])) {
        events = results[0];
        d = results.slice(1, results.length);
        w = self;
      } else {
        events = results[0].events;
        d = results[0].data;
        w = results[0].context || self;
      }
      d.unshift(w);
      return (Array.isArray(events) ? events : events.split(" ")).forEach((name) => {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach((method) => {
            method.apply(w, [name, ...d]);
          });
        }
        if (self.eventsListeners && self.eventsListeners[name]) {
          self.eventsListeners[name].forEach((e) => {
            e.apply(w, d);
          });
        }
      }), self;
    }
  };
  let iterate = false;
  const bindEvent = (s, index) => {
    const target = $();
    const {
      params : params,
      touchEvents : data,
      el : touchEventsTarget,
      wrapperEl : scrollTarget,
      device : device,
      support : forwarder
    } = s;
    const useCapture = !!params.nested;
    const action = "on" === index ? "addEventListener" : "removeEventListener";
    const jsonProp = index;
    if (forwarder.touch) {
      const moveCapture = !("touchstart" !== data.start || !forwarder.passiveListener || !params.passiveListeners) && {
        passive : true,
        capture : false
      };
      touchEventsTarget[action](data.start, s.onTouchStart, moveCapture);
      touchEventsTarget[action](data.move, s.onTouchMove, forwarder.passiveListener ? {
        passive : false,
        capture : useCapture
      } : useCapture);
      touchEventsTarget[action](data.end, s.onTouchEnd, moveCapture);
      if (data.cancel) {
        touchEventsTarget[action](data.cancel, s.onTouchEnd, moveCapture);
      }
    } else {
      touchEventsTarget[action](data.start, s.onTouchStart, false);
      target[action](data.move, s.onTouchMove, useCapture);
      target[action](data.end, s.onTouchEnd, false);
    }
    if (params.preventClicks || params.preventClicksPropagation) {
      touchEventsTarget[action]("click", s.onClick, true);
    }
    if (params.cssMode) {
      scrollTarget[action]("scroll", s.onScroll);
    }
    if (params.updateOnWindowResize) {
      s[jsonProp](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", render, true);
    } else {
      s[jsonProp]("observerUpdate", render, true);
    }
  };
  const select = (me, e) => {
    return me.grid && e.grid && e.grid.rows > 1;
  };
  var defaults = {
    init : true,
    direction : "horizontal",
    touchEventsTarget : "wrapper",
    initialSlide : 0,
    speed : 300,
    cssMode : false,
    updateOnWindowResize : true,
    resizeObserver : true,
    nested : false,
    createElements : false,
    enabled : true,
    focusableElements : "input, select, option, textarea, button, video, label",
    width : null,
    height : null,
    preventInteractionOnTransition : false,
    userAgent : null,
    url : null,
    edgeSwipeDetection : false,
    edgeSwipeThreshold : 20,
    autoHeight : false,
    setWrapperSize : false,
    virtualTranslate : false,
    effect : "slide",
    breakpoints : void 0,
    breakpointsBase : "window",
    spaceBetween : 0,
    slidesPerView : 1,
    slidesPerGroup : 1,
    slidesPerGroupSkip : 0,
    slidesPerGroupAuto : false,
    centeredSlides : false,
    centeredSlidesBounds : false,
    slidesOffsetBefore : 0,
    slidesOffsetAfter : 0,
    normalizeSlideIndex : true,
    centerInsufficientSlides : false,
    watchOverflow : true,
    roundLengths : false,
    touchRatio : 1,
    touchAngle : 45,
    simulateTouch : true,
    shortSwipes : true,
    longSwipes : true,
    longSwipesRatio : .5,
    longSwipesMs : 300,
    followFinger : true,
    allowTouchMove : true,
    threshold : 0,
    touchMoveStopPropagation : false,
    touchStartPreventDefault : true,
    touchStartForcePreventDefault : false,
    touchReleaseOnEdges : false,
    uniqueNavElements : true,
    resistance : true,
    resistanceRatio : .85,
    watchSlidesProgress : false,
    grabCursor : false,
    preventClicks : true,
    preventClicksPropagation : true,
    slideToClickedSlide : false,
    preloadImages : true,
    updateOnImagesReady : true,
    loop : false,
    loopAdditionalSlides : 0,
    loopedSlides : null,
    loopFillGroupWithBlank : false,
    loopPreventsSlide : true,
    allowSlidePrev : true,
    allowSlideNext : true,
    swipeHandler : null,
    noSwiping : true,
    noSwipingClass : "swiper-no-swiping",
    noSwipingSelector : null,
    passiveListeners : true,
    containerModifierClass : "swiper-",
    slideClass : "swiper-slide",
    slideBlankClass : "swiper-slide-invisible-blank",
    slideActiveClass : "swiper-slide-active",
    slideDuplicateActiveClass : "swiper-slide-duplicate-active",
    slideVisibleClass : "swiper-slide-visible",
    slideDuplicateClass : "swiper-slide-duplicate",
    slideNextClass : "swiper-slide-next",
    slideDuplicateNextClass : "swiper-slide-duplicate-next",
    slidePrevClass : "swiper-slide-prev",
    slideDuplicatePrevClass : "swiper-slide-duplicate-prev",
    wrapperClass : "swiper-wrapper",
    runCallbacksOnInit : true,
    _emitClasses : false
  };
  const sections = {
    eventsEmitter : C,
    update : {
      updateSize : function() {
        const me = this;
        let width;
        let height;
        const element = me.$el;
        width = void 0 !== me.params.width && null !== me.params.width ? me.params.width : element[0].clientWidth;
        height = void 0 !== me.params.height && null !== me.params.height ? me.params.height : element[0].clientHeight;
        if (!(0 === width && me.isHorizontal() || 0 === height && me.isVertical())) {
          width = width - parseInt(element.css("padding-left") || 0, 10) - parseInt(element.css("padding-right") || 0, 10);
          height = height - parseInt(element.css("padding-top") || 0, 10) - parseInt(element.css("padding-bottom") || 0, 10);
          if (Number.isNaN(width)) {
            width = 0;
          }
          if (Number.isNaN(height)) {
            height = 0;
          }
          Object.assign(me, {
            width : width,
            height : height,
            size : me.isHorizontal() ? width : height
          });
        }
      },
      updateSlides : function() {
        function getSize(prop) {
          return self.isHorizontal() ? prop : {
            width : "height",
            "margin-top" : "margin-left",
            "margin-bottom " : "margin-right",
            "margin-left" : "margin-top",
            "margin-right" : "margin-bottom",
            "padding-left" : "padding-top",
            "padding-right" : "padding-bottom",
            marginRight : "marginBottom"
          }[prop];
        }
        function getStyle(elem, name) {
          return parseFloat(elem.getPropertyValue(getSize(name)) || 0);
        }
        const self = this;
        const options = self.params;
        const {
          $wrapperEl : element,
          size : val,
          rtlTranslate : reverseIsSingle,
          wrongRTL : reverseValue
        } = self;
        const isVertical = self.virtual && options.virtual.enabled;
        const d = isVertical ? self.virtual.slides.length : self.slides.length;
        const item = element.children(`.${self.params.slideClass}`);
        const delta = isVertical ? self.virtual.slides.length : item.length;
        let set = [];
        const record = [];
        const m = [];
        let query = options.slidesOffsetBefore;
        if ("function" == typeof query) {
          query = options.slidesOffsetBefore.call(self);
        }
        let a = options.slidesOffsetAfter;
        if ("function" == typeof a) {
          a = options.slidesOffsetAfter.call(self);
        }
        const M = self.snapGrid.length;
        const value = self.slidesGrid.length;
        let w = options.spaceBetween;
        let x = -query;
        let textWidth = 0;
        let index = 0;
        if (void 0 === val) {
          return;
        }
        if ("string" == typeof w && w.indexOf("%") >= 0) {
          w = parseFloat(w.replace("%", "")) / 100 * val;
        }
        self.virtualSize = -w;
        if (reverseIsSingle) {
          item.css({
            marginLeft : "",
            marginBottom : "",
            marginTop : ""
          });
        } else {
          item.css({
            marginRight : "",
            marginBottom : "",
            marginTop : ""
          });
        }
        if (options.centeredSlides && options.cssMode) {
          setStyle(self.wrapperEl, "--swiper-centered-offset-before", "");
          setStyle(self.wrapperEl, "--swiper-centered-offset-after", "");
        }
        const args = options.grid && options.grid.rows > 1 && self.grid;
        let width;
        if (args) {
          self.grid.initSlides(delta);
        }
        const S = "auto" === options.slidesPerView && options.breakpoints && Object.keys(options.breakpoints).filter((name) => {
          return void 0 !== options.breakpoints[name].slidesPerView;
        }).length > 0;
        for (let i = 0; i < delta; i = i + 1) {
          width = 0;
          const element = item.eq(i);
          if (args && self.grid.updateSlide(i, element, delta, getSize), "none" !== element.css("display")) {
            if ("auto" === options.slidesPerView) {
              if (S) {
                item[i].style[getSize("width")] = "";
              }
              const style = getComputedStyle(element[0]);
              const t = element[0].style.transform;
              const o = element[0].style.webkitTransform;
              if (t && (element[0].style.transform = "none"), o && (element[0].style.webkitTransform = "none"), options.roundLengths) {
                width = self.isHorizontal() ? element.outerWidth(true) : element.outerHeight(true);
              } else {
                const container = getStyle(style, "width");
                const type = getStyle(style, "padding-left");
                const file = getStyle(style, "padding-right");
                const id = getStyle(style, "margin-left");
                const value = getStyle(style, "margin-right");
                const object = style.getPropertyValue("box-sizing");
                if (object && "border-box" === object) {
                  width = container + id + value;
                } else {
                  const {
                    clientWidth : clientWidth,
                    offsetWidth : clientHeight
                  } = element[0];
                  width = container + type + file + id + value + (clientHeight - clientWidth);
                }
              }
              if (t) {
                element[0].style.transform = t;
              }
              if (o) {
                element[0].style.webkitTransform = o;
              }
              if (options.roundLengths) {
                width = Math.floor(width);
              }
            } else {
              width = (val - (options.slidesPerView - 1) * w) / options.slidesPerView;
              if (options.roundLengths) {
                width = Math.floor(width);
              }
              if (item[i]) {
                item[i].style[getSize("width")] = `${width}px`;
              }
            }
            if (item[i]) {
              item[i].swiperSlideSize = width;
            }
            m.push(width);
            if (options.centeredSlides) {
              x = x + width / 2 + textWidth / 2 + w;
              if (0 === textWidth && 0 !== i) {
                x = x - val / 2 - w;
              }
              if (0 === i) {
                x = x - val / 2 - w;
              }
              if (Math.abs(x) < .001) {
                x = 0;
              }
              if (options.roundLengths) {
                x = Math.floor(x);
              }
              if (index % options.slidesPerGroup == 0) {
                set.push(x);
              }
              record.push(x);
            } else {
              if (options.roundLengths) {
                x = Math.floor(x);
              }
              if ((index - Math.min(self.params.slidesPerGroupSkip, index)) % self.params.slidesPerGroup == 0) {
                set.push(x);
              }
              record.push(x);
              x = x + width + w;
            }
            self.virtualSize += width + w;
            textWidth = width;
            index = index + 1;
          }
        }
        if (self.virtualSize = Math.max(self.virtualSize, val) + a, reverseIsSingle && reverseValue && ("slide" === options.effect || "coverflow" === options.effect) && element.css({
          width : `${self.virtualSize + options.spaceBetween}px`
        }), options.setWrapperSize && element.css({
          [getSize("width")]:`${self.virtualSize + options.spaceBetween}px`
        }), args && self.grid.updateWrapperSize(width, set, getSize), !options.centeredSlides) {
          const C = [];
          for (let i = 0; i < set.length; i = i + 1) {
            let t = set[i];
            if (options.roundLengths) {
              t = Math.floor(t);
            }
            if (set[i] <= self.virtualSize - val) {
              C.push(t);
            }
          }
          set = C;
          if (Math.floor(self.virtualSize - val) - Math.floor(set[set.length - 1]) > 1) {
            set.push(self.virtualSize - val);
          }
        }
        if (0 === set.length && (set = [0]), 0 !== options.spaceBetween) {
          const property = self.isHorizontal() && reverseIsSingle ? "marginLeft" : getSize("marginRight");
          item.filter((canCreateDiscussions, isSlidingUp) => {
            return !options.cssMode || isSlidingUp !== item.length - 1;
          }).css({
            [property]:`${w}px`
          });
        }
        if (options.centeredSlides && options.centeredSlidesBounds) {
          let duration = 0;
          m.forEach((years) => {
            duration = duration + (years + (options.spaceBetween ? options.spaceBetween : 0));
          });
          duration = duration - options.spaceBetween;
          const result = duration - val;
          set = set.map((distanceOther) => {
            return distanceOther < 0 ? -query : distanceOther > result ? result + a : distanceOther;
          });
        }
        if (options.centerInsufficientSlides) {
          let i = 0;
          if (m.forEach((len) => {
            i = i + (len + (options.spaceBetween ? options.spaceBetween : 0));
          }), i = i - options.spaceBetween, i < val) {
            const t = (val - i) / 2;
            set.forEach((q, a) => {
              set[a] = q - t;
            });
            record.forEach((now, s) => {
              record[s] = now + t;
            });
          }
        }
        if (Object.assign(self, {
          slides : item,
          snapGrid : set,
          slidesGrid : record,
          slidesSizesGrid : m
        }), options.centeredSlides && options.cssMode && !options.centeredSlidesBounds) {
          setStyle(self.wrapperEl, "--swiper-centered-offset-before", -set[0] + "px");
          setStyle(self.wrapperEl, "--swiper-centered-offset-after", self.size / 2 - m[m.length - 1] / 2 + "px");
          const siteName = -self.snapGrid[0];
          const easyprivacy = -self.slidesGrid[0];
          self.snapGrid = self.snapGrid.map((buckets) => {
            return buckets + siteName;
          });
          self.slidesGrid = self.slidesGrid.map((easyList) => {
            return easyList + easyprivacy;
          });
        }
        if (delta !== d) {
          self.emit("slidesLengthChange");
        }
        if (set.length !== M) {
          if (self.params.watchOverflow) {
            self.checkOverflow();
          }
          self.emit("snapGridLengthChange");
        }
        if (record.length !== value) {
          self.emit("slidesGridLengthChange");
        }
        if (options.watchSlidesProgress) {
          self.updateSlidesOffset();
        }
      },
      updateAutoHeight : function(callback) {
        const self = this;
        const element = [];
        const a = self.virtual && self.params.virtual.enabled;
        let i;
        let min = 0;
        if ("number" == typeof callback) {
          self.setTransition(callback);
        } else {
          if (true === callback) {
            self.setTransition(self.params.speed);
          }
        }
        const getObject = (i) => {
          return a ? self.slides.filter((slide) => {
            return parseInt(slide.getAttribute("data-swiper-slide-index"), 10) === i;
          })[0] : self.slides.eq(i)[0];
        };
        if ("auto" !== self.params.slidesPerView && self.params.slidesPerView > 1) {
          if (self.params.centeredSlides) {
            self.visibleSlides.each((player) => {
              element.push(player);
            });
          } else {
            i = 0;
            for (; i < Math.ceil(self.params.slidesPerView); i = i + 1) {
              const e = self.activeIndex + i;
              if (e > self.slides.length && !a) {
                break;
              }
              element.push(getObject(e));
            }
          }
        } else {
          element.push(getObject(self.activeIndex));
        }
        i = 0;
        for (; i < element.length; i = i + 1) {
          if (void 0 !== element[i]) {
            const max = element[i].offsetHeight;
            min = max > min ? max : min;
          }
        }
        if (min) {
          self.$wrapperEl.css("height", `${min}px`);
        }
      },
      updateSlidesOffset : function() {
        const me = this;
        const aLi = me.slides;
        for (let i = 0; i < aLi.length; i = i + 1) {
          aLi[i].swiperSlideOffset = me.isHorizontal() ? aLi[i].offsetLeft : aLi[i].offsetTop;
        }
      },
      updateSlidesProgress : function(G__20720 = this && this.translate || 0) {
        const s = this;
        const options = s.params;
        const {
          slides : slides,
          rtlTranslate : releaseIdB,
          snapGrid : r
        } = s;
        if (0 === slides.length) {
          return;
        }
        if (void 0 === slides[0].swiperSlideOffset) {
          s.updateSlidesOffset();
        }
        let n = -G__20720;
        if (releaseIdB) {
          n = G__20720;
        }
        slides.removeClass(options.slideVisibleClass);
        s.visibleSlidesIndexes = [];
        s.visibleSlides = [];
        for (let i = 0; i < slides.length; i = i + 1) {
          const slide = slides[i];
          let len = slide.swiperSlideOffset;
          if (options.cssMode && options.centeredSlides) {
            len = len - slides[0].swiperSlideOffset;
          }
          const slideProgress = (n + (options.centeredSlides ? s.minTranslate() : 0) - len) / (slide.swiperSlideSize + options.spaceBetween);
          const idB = (n - r[0] + (options.centeredSlides ? s.minTranslate() : 0) - len) / (slide.swiperSlideSize + options.spaceBetween);
          const slideBefore = -(n - len);
          const slideAfter = slideBefore + s.slidesSizesGrid[i];
          if (slideBefore >= 0 && slideBefore < s.size - 1 || slideAfter > 1 && slideAfter <= s.size || slideBefore <= 0 && slideAfter >= s.size) {
            s.visibleSlides.push(slide);
            s.visibleSlidesIndexes.push(i);
            slides.eq(i).addClass(options.slideVisibleClass);
          }
          slide.progress = releaseIdB ? -slideProgress : slideProgress;
          slide.originalProgress = releaseIdB ? -idB : idB;
        }
        s.visibleSlides = filter(s.visibleSlides);
      },
      updateProgress : function(value) {
        const s = this;
        if (void 0 === value) {
          const h = s.rtlTranslate ? -1 : 1;
          value = s && s.translate && s.translate * h || 0;
        }
        const options = s.params;
        const step = s.maxTranslate() - s.minTranslate();
        let {
          progress : t,
          isBeginning : otherneg,
          isEnd : _partlyBelow
        } = s;
        const thisneg = otherneg;
        const _partlyAbove = _partlyBelow;
        if (0 === step) {
          t = 0;
          otherneg = true;
          _partlyBelow = true;
        } else {
          t = (value - s.minTranslate()) / step;
          otherneg = t <= 0;
          _partlyBelow = t >= 1;
        }
        Object.assign(s, {
          progress : t,
          isBeginning : otherneg,
          isEnd : _partlyBelow
        });
        if (options.watchSlidesProgress || options.centeredSlides && options.autoHeight) {
          s.updateSlidesProgress(value);
        }
        if (otherneg && !thisneg) {
          s.emit("reachBeginning toEdge");
        }
        if (_partlyBelow && !_partlyAbove) {
          s.emit("reachEnd toEdge");
        }
        if (thisneg && !otherneg || _partlyAbove && !_partlyBelow) {
          s.emit("fromEdge");
        }
        s.emit("progress", t);
      },
      updateSlidesClasses : function() {
        const that = this;
        const {
          slides : response,
          params : opts,
          $wrapperEl : query,
          activeIndex : index,
          realIndex : r
        } = that;
        const indexName = that.virtual && opts.virtual.enabled;
        let $element;
        response.removeClass(`${opts.slideActiveClass} ${opts.slideNextClass} ${opts.slidePrevClass} ${opts.slideDuplicateActiveClass} ${opts.slideDuplicateNextClass} ${opts.slideDuplicatePrevClass}`);
        $element = indexName ? that.$wrapperEl.find(`.${opts.slideClass}[data-swiper-slide-index="${index}"]`) : response.eq(index);
        $element.addClass(opts.slideActiveClass);
        if (opts.loop) {
          if ($element.hasClass(opts.slideDuplicateClass)) {
            query.children(`.${opts.slideClass}:not(.${opts.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(opts.slideDuplicateActiveClass);
          } else {
            query.children(`.${opts.slideClass}.${opts.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(opts.slideDuplicateActiveClass);
          }
        }
        let slide = $element.nextAll(`.${opts.slideClass}`).eq(0).addClass(opts.slideNextClass);
        if (opts.loop && 0 === slide.length) {
          slide = response.eq(0);
          slide.addClass(opts.slideNextClass);
        }
        let d = $element.prevAll(`.${opts.slideClass}`).eq(0).addClass(opts.slidePrevClass);
        if (opts.loop && 0 === d.length) {
          d = response.eq(-1);
          d.addClass(opts.slidePrevClass);
        }
        if (opts.loop) {
          if (slide.hasClass(opts.slideDuplicateClass)) {
            query.children(`.${opts.slideClass}:not(.${opts.slideDuplicateClass})[data-swiper-slide-index="${slide.attr("data-swiper-slide-index")}"]`).addClass(opts.slideDuplicateNextClass);
          } else {
            query.children(`.${opts.slideClass}.${opts.slideDuplicateClass}[data-swiper-slide-index="${slide.attr("data-swiper-slide-index")}"]`).addClass(opts.slideDuplicateNextClass);
          }
          if (d.hasClass(opts.slideDuplicateClass)) {
            query.children(`.${opts.slideClass}:not(.${opts.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(opts.slideDuplicatePrevClass);
          } else {
            query.children(`.${opts.slideClass}.${opts.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(opts.slideDuplicatePrevClass);
          }
        }
        that.emitSlidesClasses();
      },
      updateActiveIndex : function(value) {
        const s = this;
        const date = s.rtlTranslate ? s.translate : -s.translate;
        const {
          slidesGrid : id,
          snapGrid : query,
          params : params,
          activeIndex : index,
          realIndex : keyword,
          snapIndex : reactors
        } = s;
        let snapIndex;
        let activeIndex = value;
        if (void 0 === activeIndex) {
          for (let i = 0; i < id.length; i = i + 1) {
            if (void 0 !== id[i + 1]) {
              if (date >= id[i] && date < id[i + 1] - (id[i + 1] - id[i]) / 2) {
                activeIndex = i;
              } else {
                if (date >= id[i] && date < id[i + 1]) {
                  activeIndex = i + 1;
                }
              }
            } else {
              if (date >= id[i]) {
                activeIndex = i;
              }
            }
          }
          if (params.normalizeSlideIndex && (activeIndex < 0 || void 0 === activeIndex)) {
            activeIndex = 0;
          }
        }
        if (query.indexOf(date) >= 0) {
          snapIndex = query.indexOf(date);
        } else {
          const animationDirection = Math.min(params.slidesPerGroupSkip, activeIndex);
          snapIndex = animationDirection + Math.floor((activeIndex - animationDirection) / params.slidesPerGroup);
        }
        if (snapIndex >= query.length && (snapIndex = query.length - 1), activeIndex === index) {
          return void(snapIndex !== reactors && (s.snapIndex = snapIndex, s.emit("snapIndexChange")));
        }
        const wordOrig = parseInt(s.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
        Object.assign(s, {
          snapIndex : snapIndex,
          realIndex : wordOrig,
          previousIndex : index,
          activeIndex : activeIndex
        });
        s.emit("activeIndexChange");
        s.emit("snapIndexChange");
        if (keyword !== wordOrig) {
          s.emit("realIndexChange");
        }
        if (s.initialized || s.params.runCallbacksOnInit) {
          s.emit("slideChange");
        }
      },
      updateClickedSlide : function(e) {
        const s = this;
        const opts = s.params;
        const element = filter(e.target).closest(`.${opts.slideClass}`)[0];
        let i;
        let cacheItem = false;
        if (element) {
          for (let j = 0; j < s.slides.length; j = j + 1) {
            if (s.slides[j] === element) {
              cacheItem = true;
              i = j;
              break;
            }
          }
        }
        if (!element || !cacheItem) {
          return s.clickedSlide = void 0, void(s.clickedIndex = void 0);
        }
        s.clickedSlide = element;
        if (s.virtual && s.params.virtual.enabled) {
          s.clickedIndex = parseInt(filter(element).attr("data-swiper-slide-index"), 10);
        } else {
          s.clickedIndex = i;
        }
        if (opts.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex) {
          s.slideToClickedSlide();
        }
      }
    },
    translate : {
      getTranslate : function(transformerOptsWithCommonJs = this.isHorizontal() ? "x" : "y") {
        const {
          params : params,
          rtlTranslate : fields,
          translate : users,
          $wrapperEl : max
        } = this;
        if (params.virtualTranslate) {
          return fields ? -users : users;
        }
        if (params.cssMode) {
          return users;
        }
        let field = transform(max[0], transformerOptsWithCommonJs);
        return fields && (field = -field), field || 0;
      },
      setTranslate : function(value, props) {
        const self = this;
        const {
          rtlTranslate : type,
          params : params,
          $wrapperEl : rotation,
          wrapperEl : $win,
          progress : n
        } = self;
        let nOrig;
        let height = 0;
        let y = 0;
        if (self.isHorizontal()) {
          height = type ? -value : value;
        } else {
          y = value;
        }
        if (params.roundLengths) {
          height = Math.floor(height);
          y = Math.floor(y);
        }
        if (params.cssMode) {
          $win[self.isHorizontal() ? "scrollLeft" : "scrollTop"] = self.isHorizontal() ? -height : -y;
        } else {
          if (!params.virtualTranslate) {
            rotation.transform(`translate3d(${height}px, ${y}px, 0px)`);
          }
        }
        self.previousTranslate = self.translate;
        self.translate = self.isHorizontal() ? height : y;
        const max = self.maxTranslate() - self.minTranslate();
        nOrig = 0 === max ? 0 : (value - self.minTranslate()) / max;
        if (nOrig !== n) {
          self.updateProgress(value);
        }
        self.emit("setTranslate", self.translate, props);
      },
      minTranslate : function() {
        return -this.snapGrid[0];
      },
      maxTranslate : function() {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo : function(rowVisualIndex = 0, callback = this.params.speed, s = true, n = true, context) {
        const self = this;
        const {
          params : args,
          wrapperEl : $win
        } = self;
        if (self.animating && args.preventInteractionOnTransition) {
          return false;
        }
        const idx = self.minTranslate();
        const bst = self.maxTranslate();
        let i;
        if (i = n && rowVisualIndex > idx ? idx : n && rowVisualIndex < bst ? bst : rowVisualIndex, self.updateProgress(i), args.cssMode) {
          const hori = self.isHorizontal();
          if (0 === callback) {
            $win[hori ? "scrollLeft" : "scrollTop"] = -i;
          } else {
            if (!self.support.smoothScroll) {
              return animate({
                swiper : self,
                targetPosition : -i,
                side : hori ? "left" : "top"
              }), true;
            }
            $win.scrollTo({
              [hori ? "left" : "top"]:-i,
              behavior : "smooth"
            });
          }
          return true;
        }
        return 0 === callback ? (self.setTransition(0), self.setTranslate(i), s && (self.emit("beforeTransitionStart", callback, context), self.emit("transitionEnd"))) : (self.setTransition(callback), self.setTranslate(i), s && (self.emit("beforeTransitionStart", callback, context), self.emit("transitionStart")), self.animating || (self.animating = true, self.onTranslateToWrapperTransitionEnd || (self.onTranslateToWrapperTransitionEnd = function(mutationEvent) {
          if (self && !self.destroyed && mutationEvent.target === this) {
            self.$wrapperEl[0].removeEventListener("transitionend", self.onTranslateToWrapperTransitionEnd);
            self.$wrapperEl[0].removeEventListener("webkitTransitionEnd", self.onTranslateToWrapperTransitionEnd);
            self.onTranslateToWrapperTransitionEnd = null;
            delete self.onTranslateToWrapperTransitionEnd;
            if (s) {
              self.emit("transitionEnd");
            }
          }
        }), self.$wrapperEl[0].addEventListener("transitionend", self.onTranslateToWrapperTransitionEnd), self.$wrapperEl[0].addEventListener("webkitTransitionEnd", self.onTranslateToWrapperTransitionEnd))), true;
      }
    },
    transition : {
      setTransition : function(context, x) {
        const that = this;
        if (!that.params.cssMode) {
          that.$wrapperEl.transition(context);
        }
        that.emit("setTransition", context, x);
      },
      transitionStart : function(runCallbacks = true, dir) {
        const swiper = this;
        const {
          params : opt
        } = swiper;
        if (!opt.cssMode) {
          if (opt.autoHeight) {
            swiper.updateAutoHeight();
          }
          callback({
            swiper : swiper,
            runCallbacks : runCallbacks,
            direction : dir,
            step : "Start"
          });
        }
      },
      transitionEnd : function(runCallbacks = true, elem) {
        const swiper = this;
        const {
          params : v
        } = swiper;
        swiper.animating = false;
        if (!v.cssMode) {
          swiper.setTransition(0);
          callback({
            swiper : swiper,
            runCallbacks : runCallbacks,
            direction : elem,
            step : "End"
          });
        }
      }
    },
    slide : {
      slideTo : function(token = 0, callback = this.params.speed, e = true, name, options) {
        if ("number" != typeof token && "string" != typeof token) {
          throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof token}] given.`);
        }
        if ("string" == typeof token) {
          const value = parseInt(token, 10);
          if (!isFinite(value)) {
            throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${token}] given.`);
          }
          token = value;
        }
        const self = this;
        let index = token;
        if (index < 0) {
          index = 0;
        }
        const {
          params : params,
          snapGrid : data,
          slidesGrid : headers,
          previousIndex : max,
          activeIndex : activeIndex,
          rtlTranslate : isDirectionNext,
          wrapperEl : $win,
          enabled : enabled
        } = self;
        if (self.animating && params.preventInteractionOnTransition || !enabled && !name && !options) {
          return false;
        }
        const NUM_BUFFER_PAGES = Math.min(self.params.slidesPerGroupSkip, index);
        let off = NUM_BUFFER_PAGES + Math.floor((index - NUM_BUFFER_PAGES) / self.params.slidesPerGroup);
        if (off >= data.length) {
          off = data.length - 1;
        }
        if ((activeIndex || params.initialSlide || 0) === (max || 0) && e) {
          self.emit("beforeSlideChangeStart");
        }
        const width = -data[off];
        if (self.updateProgress(width), params.normalizeSlideIndex) {
          for (let j = 0; j < headers.length; j = j + 1) {
            const i = -Math.floor(100 * width);
            const swirlDone = Math.floor(100 * headers[j]);
            const repeatAt = Math.floor(100 * headers[j + 1]);
            if (void 0 !== headers[j + 1]) {
              if (i >= swirlDone && i < repeatAt - (repeatAt - swirlDone) / 2) {
                index = j;
              } else {
                if (i >= swirlDone && i < repeatAt) {
                  index = j + 1;
                }
              }
            } else {
              if (i >= swirlDone) {
                index = j;
              }
            }
          }
        }
        if (self.initialized && index !== activeIndex) {
          if (!self.allowSlideNext && width < self.translate && width < self.minTranslate()) {
            return false;
          }
          if (!self.allowSlidePrev && width > self.translate && width > self.maxTranslate() && (activeIndex || 0) !== index) {
            return false;
          }
        }
        let base;
        if (base = index > activeIndex ? "next" : index < activeIndex ? "prev" : "reset", isDirectionNext && -width === self.translate || !isDirectionNext && width === self.translate) {
          return self.updateActiveIndex(index), params.autoHeight && self.updateAutoHeight(), self.updateSlidesClasses(), "slide" !== params.effect && self.setTranslate(width), "reset" !== base && (self.transitionStart(e, base), self.transitionEnd(e, base)), false;
        }
        if (params.cssMode) {
          const hori = self.isHorizontal();
          const seekTarget = isDirectionNext ? width : -width;
          if (0 === callback) {
            const t = self.virtual && self.params.virtual.enabled;
            if (t) {
              self.wrapperEl.style.scrollSnapType = "none";
              self._immediateVirtual = true;
            }
            $win[hori ? "scrollLeft" : "scrollTop"] = seekTarget;
            if (t) {
              requestAnimationFrame(() => {
                self.wrapperEl.style.scrollSnapType = "";
                self._swiperImmediateVirtual = false;
              });
            }
          } else {
            if (!self.support.smoothScroll) {
              return animate({
                swiper : self,
                targetPosition : seekTarget,
                side : hori ? "left" : "top"
              }), true;
            }
            $win.scrollTo({
              [hori ? "left" : "top"]:seekTarget,
              behavior : "smooth"
            });
          }
          return true;
        }
        return 0 === callback ? (self.setTransition(0), self.setTranslate(width), self.updateActiveIndex(index), self.updateSlidesClasses(), self.emit("beforeTransitionStart", callback, name), self.transitionStart(e, base), self.transitionEnd(e, base)) : (self.setTransition(callback), self.setTranslate(width), self.updateActiveIndex(index), self.updateSlidesClasses(), self.emit("beforeTransitionStart", callback, name), self.transitionStart(e, base), self.animating || (self.animating = true, self.onSlideToWrapperTransitionEnd || 
        (self.onSlideToWrapperTransitionEnd = function(mutationEvent) {
          if (self && !self.destroyed && mutationEvent.target === this) {
            self.$wrapperEl[0].removeEventListener("transitionend", self.onSlideToWrapperTransitionEnd);
            self.$wrapperEl[0].removeEventListener("webkitTransitionEnd", self.onSlideToWrapperTransitionEnd);
            self.onSlideToWrapperTransitionEnd = null;
            delete self.onSlideToWrapperTransitionEnd;
            self.transitionEnd(e, base);
          }
        }), self.$wrapperEl[0].addEventListener("transitionend", self.onSlideToWrapperTransitionEnd), self.$wrapperEl[0].addEventListener("webkitTransitionEnd", self.onSlideToWrapperTransitionEnd))), true;
      },
      slideToLoop : function(e = 0, speed = this.params.speed, runCallbacks = true, internal) {
        const s = this;
        let newIndex = e;
        return s.params.loop && (newIndex = newIndex + s.loopedSlides), s.slideTo(newIndex, speed, runCallbacks, internal);
      },
      slideNext : function(speed = this.params.speed, runCallbacks = true, internal) {
        const s = this;
        const {
          animating : id,
          enabled : disabled,
          params : params
        } = s;
        if (!disabled) {
          return s;
        }
        let l = params.slidesPerGroup;
        if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) {
          l = Math.max(s.slidesPerViewDynamic("current", true), 1);
        }
        const len = s.activeIndex < params.slidesPerGroupSkip ? 1 : l;
        if (params.loop) {
          if (id && params.loopPreventsSlide) {
            return false;
          }
          s.loopFix();
          s._clientLeft = s.$wrapperEl[0].clientLeft;
        }
        return s.slideTo(s.activeIndex + len, speed, runCallbacks, internal);
      },
      slidePrev : function(speed = this.params.speed, runCallbacks = true, internal) {
        function computeOctave(n) {
          return n < 0 ? -Math.floor(Math.abs(n)) : Math.floor(n);
        }
        const s = this;
        const {
          params : params,
          animating : shouldBreak,
          snapGrid : headers,
          slidesGrid : keys,
          rtlTranslate : initialState,
          enabled : forwarder
        } = s;
        if (!forwarder) {
          return s;
        }
        if (params.loop) {
          if (shouldBreak && params.loopPreventsSlide) {
            return false;
          }
          s.loopFix();
          s._clientLeft = s.$wrapperEl[0].clientLeft;
        }
        const sceneUid = computeOctave(initialState ? s.translate : -s.translate);
        const scenes = headers.map((step) => {
          return computeOctave(step);
        });
        let token = headers[scenes.indexOf(sceneUid) - 1];
        if (void 0 === token && params.cssMode) {
          let e;
          headers.forEach((canCreateDiscussions, tmp) => {
            if (sceneUid >= canCreateDiscussions) {
              e = tmp;
            }
          });
          if (void 0 !== e) {
            token = headers[e > 0 ? e - 1 : e];
          }
        }
        let i = 0;
        return void 0 !== token && (i = keys.indexOf(token), i < 0 && (i = s.activeIndex - 1), "auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto && (i = i - s.slidesPerViewDynamic("previous", true) + 1, i = Math.max(i, 0))), s.slideTo(i, speed, runCallbacks, internal);
      },
      slideReset : function(duration = this.params.speed, easing = true, speed) {
        return this.slideTo(this.activeIndex, duration, easing, speed);
      },
      slideToClosest : function(speed = this.params.speed, runCallbacks = true, internal, amount = .5) {
        const s = this;
        let index = s.activeIndex;
        const POSITION_THRESHOLD = Math.min(s.params.slidesPerGroupSkip, index);
        const i = POSITION_THRESHOLD + Math.floor((index - POSITION_THRESHOLD) / s.params.slidesPerGroup);
        const x = s.rtlTranslate ? s.translate : -s.translate;
        if (x >= s.snapGrid[i]) {
          const a1 = s.snapGrid[i];
          if (x - a1 > (s.snapGrid[i + 1] - a1) * amount) {
            index = index + s.params.slidesPerGroup;
          }
        } else {
          const t = s.snapGrid[i - 1];
          if (x - t <= (s.snapGrid[i] - t) * amount) {
            index = index - s.params.slidesPerGroup;
          }
        }
        return index = Math.max(index, 0), index = Math.min(index, s.slidesGrid.length - 1), s.slideTo(index, speed, runCallbacks, internal);
      },
      slideToClickedSlide : function() {
        const s = this;
        const {
          params : params,
          $wrapperEl : dir
        } = s;
        const boxWidth = "auto" === params.slidesPerView ? s.slidesPerViewDynamic() : params.slidesPerView;
        let nAttempts;
        let newActiveIndex = s.clickedIndex;
        if (params.loop) {
          if (s.animating) {
            return;
          }
          nAttempts = parseInt(filter(s.clickedSlide).attr("data-swiper-slide-index"), 10);
          if (params.centeredSlides) {
            if (newActiveIndex < s.loopedSlides - boxWidth / 2 || newActiveIndex > s.slides.length - s.loopedSlides + boxWidth / 2) {
              s.loopFix();
              newActiveIndex = dir.children(`.${params.slideClass}[data-swiper-slide-index="${nAttempts}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
              setTimeout(() => {
                s.slideTo(newActiveIndex);
              });
            } else {
              s.slideTo(newActiveIndex);
            }
          } else {
            if (newActiveIndex > s.slides.length - boxWidth) {
              s.loopFix();
              newActiveIndex = dir.children(`.${params.slideClass}[data-swiper-slide-index="${nAttempts}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
              setTimeout(() => {
                s.slideTo(newActiveIndex);
              });
            } else {
              s.slideTo(newActiveIndex);
            }
          }
        } else {
          s.slideTo(newActiveIndex);
        }
      }
    },
    loop : {
      loopCreate : function() {
        const s = this;
        const util = $();
        const {
          params : params,
          $wrapperEl : dir
        } = s;
        const r = filter(dir.children()[0].parentNode);
        r.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
        let slides = r.children(`.${params.slideClass}`);
        if (params.loopFillGroupWithBlank) {
          const index = params.slidesPerGroup - slides.length % params.slidesPerGroup;
          if (index !== params.slidesPerGroup) {
            for (let i = 0; i < index; i = i + 1) {
              const e = filter(util.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
              r.append(e);
            }
            slides = r.children(`.${params.slideClass}`);
          }
        }
        if (!("auto" !== params.slidesPerView || params.loopedSlides)) {
          params.loopedSlides = slides.length;
        }
        s.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
        s.loopedSlides += params.loopAdditionalSlides;
        if (s.loopedSlides > slides.length) {
          s.loopedSlides = slides.length;
        }
        const prependSlides = [];
        const appendSlides = [];
        slides.each((el, i) => {
          const slide = filter(el);
          if (i < s.loopedSlides) {
            appendSlides.push(el);
          }
          if (i < slides.length && i >= slides.length - s.loopedSlides) {
            prependSlides.push(el);
          }
          slide.attr("data-swiper-slide-index", i);
        });
        for (let i = 0; i < appendSlides.length; i = i + 1) {
          r.append(filter(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        for (let i = prependSlides.length - 1; i >= 0; i = i - 1) {
          r.prepend(filter(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
      },
      loopFix : function() {
        const self = this;
        self.emit("beforeLoopFix");
        const {
          activeIndex : j,
          slides : ids,
          loopedSlides : i,
          allowSlidePrev : leafsHeaders,
          allowSlideNext : updateSynchronously,
          snapGrid : moveFromGal,
          rtlTranslate : isMobile
        } = self;
        let index;
        self.allowSlidePrev = true;
        self.allowSlideNext = true;
        const x = -moveFromGal[j] - self.getTranslate();
        if (j < i) {
          index = ids.length - 3 * i + j;
          index = index + i;
          if (self.slideTo(index, 0, false, true) && 0 !== x) {
            self.setTranslate((isMobile ? -self.translate : self.translate) - x);
          }
        } else {
          if (j >= ids.length - i) {
            index = -ids.length + j + i;
            index = index + i;
            if (self.slideTo(index, 0, false, true) && 0 !== x) {
              self.setTranslate((isMobile ? -self.translate : self.translate) - x);
            }
          }
        }
        self.allowSlidePrev = leafsHeaders;
        self.allowSlideNext = updateSynchronously;
        self.emit("loopFix");
      },
      loopDestroy : function() {
        const {
          $wrapperEl : action,
          params : params,
          slides : data
        } = this;
        action.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
        data.removeAttr("data-swiper-slide-index");
      }
    },
    grabCursor : {
      setGrabCursor : function(enabled) {
        const s = this;
        if (s.support.touch || !s.params.simulateTouch || s.params.watchOverflow && s.isLocked || s.params.cssMode) {
          return;
        }
        const filepopup = "container" === s.params.touchEventsTarget ? s.el : s.wrapperEl;
        filepopup.style.cursor = "move";
        filepopup.style.cursor = enabled ? "-webkit-grabbing" : "-webkit-grab";
        filepopup.style.cursor = enabled ? "-moz-grabbin" : "-moz-grab";
        filepopup.style.cursor = enabled ? "grabbing" : "grab";
      },
      unsetGrabCursor : function() {
        const that = this;
        if (!(that.support.touch || that.params.watchOverflow && that.isLocked || that.params.cssMode)) {
          that["container" === that.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "";
        }
      }
    },
    events : {
      attachEvents : function() {
        const _this = this;
        const btn = $();
        const {
          params : v,
          support : support
        } = _this;
        _this.onTouchStart = start.bind(_this);
        _this.onTouchMove = update.bind(_this);
        _this.onTouchEnd = onTouchEnd.bind(_this);
        if (v.cssMode) {
          _this.onScroll = done.bind(_this);
        }
        _this.onClick = eventHandler.bind(_this);
        if (support.touch && !iterate) {
          btn.addEventListener("touchstart", onHeadClick);
          iterate = true;
        }
        bindEvent(_this, "on");
      },
      detachEvents : function() {
        bindEvent(this, "off");
      }
    },
    breakpoints : {
      setBreakpoint : function() {
        const self = this;
        const {
          activeIndex : index,
          initialized : mode,
          loopedSlides : items_size = 0,
          params : options,
          $el : $el
        } = self;
        const obj = options.breakpoints;
        if (!obj || obj && 0 === Object.keys(obj).length) {
          return;
        }
        const p = self.getBreakpoint(obj, self.params.breakpointsBase, self.el);
        if (!p || self.currentBreakpoint === p) {
          return;
        }
        const e = (p in obj ? obj[p] : void 0) || self.originalParams;
        const is_document = select(self, options);
        const option = select(self, e);
        const boardBanned = options.enabled;
        if (is_document && !option) {
          $el.removeClass(`${options.containerModifierClass}grid ${options.containerModifierClass}grid-column`);
          self.emitContainerClasses();
        } else {
          if (!is_document && option) {
            $el.addClass(`${options.containerModifierClass}grid`);
            if (e.grid.fill && "column" === e.grid.fill || !e.grid.fill && "column" === options.grid.fill) {
              $el.addClass(`${options.containerModifierClass}grid-column`);
            }
            self.emitContainerClasses();
          }
        }
        const days = e.direction && e.direction !== options.direction;
        const relation = options.loop && (e.slidesPerView !== options.slidesPerView || days);
        if (days && mode) {
          self.changeDirection();
        }
        extend(self.params, e);
        const banExpiration = self.params.enabled;
        Object.assign(self, {
          allowTouchMove : self.params.allowTouchMove,
          allowSlideNext : self.params.allowSlideNext,
          allowSlidePrev : self.params.allowSlidePrev
        });
        if (boardBanned && !banExpiration) {
          self.disable();
        } else {
          if (!boardBanned && banExpiration) {
            self.enable();
          }
        }
        self.currentBreakpoint = p;
        self.emit("_beforeBreakpoint", e);
        if (relation && mode) {
          self.loopDestroy();
          self.loopCreate();
          self.updateSlides();
          self.slideTo(index - items_size + self.loopedSlides, 0, false);
        }
        self.emit("breakpoint", e);
      },
      getBreakpoint : function(date, undefined = "window", parameters) {
        if (!date || "container" === undefined && !parameters) {
          return;
        }
        let min = false;
        const window = indexOf();
        const defaultValue = "window" === undefined ? window.innerHeight : parameters.clientHeight;
        const predicates = Object.keys(date).map((q) => {
          if ("string" == typeof q && 0 === q.indexOf("@")) {
            const scale = parseFloat(q.substr(1));
            return {
              value : defaultValue * scale,
              point : q
            };
          }
          return {
            value : q,
            point : q
          };
        });
        predicates.sort((cur_el, oTextbox) => {
          return parseInt(cur_el.value, 10) - parseInt(oTextbox.value, 10);
        });
        for (let i = 0; i < predicates.length; i = i + 1) {
          const {
            point : v,
            value : x
          } = predicates[i];
          if ("window" === undefined) {
            if (window.matchMedia(`(min-width: ${x}px)`).matches) {
              min = v;
            }
          } else {
            if (x <= parameters.clientWidth) {
              min = v;
            }
          }
        }
        return min || "max";
      }
    },
    checkOverflow : {
      checkOverflow : function() {
        const s = this;
        const {
          isLocked : lastURL,
          params : nominatimQuery
        } = s;
        const {
          slidesOffsetBefore : a
        } = nominatimQuery;
        if (a) {
          const i = s.slides.length - 1;
          const maxSize = s.slidesGrid[i] + s.slidesSizesGrid[i] + 2 * a;
          s.isLocked = s.size > maxSize;
        } else {
          s.isLocked = 1 === s.snapGrid.length;
        }
        if (true === nominatimQuery.allowSlideNext) {
          s.allowSlideNext = !s.isLocked;
        }
        if (true === nominatimQuery.allowSlidePrev) {
          s.allowSlidePrev = !s.isLocked;
        }
        if (lastURL && lastURL !== s.isLocked) {
          s.isEnd = false;
        }
        if (lastURL !== s.isLocked) {
          s.emit(s.isLocked ? "lock" : "unlock");
        }
      }
    },
    classes : {
      addClasses : function() {
        const swiper = this;
        const {
          classNames : url,
          params : options,
          rtl : player,
          $el : $this,
          device : opts,
          support : support
        } = swiper;
        const fleetAircraft = function(wrappersTemplates, name) {
          const fields = [];
          return wrappersTemplates.forEach((value) => {
            if ("object" == typeof value) {
              Object.keys(value).forEach((i) => {
                if (value[i]) {
                  fields.push(name + i);
                }
              });
            } else {
              if ("string" == typeof value) {
                fields.push(name + value);
              }
            }
          }), fields;
        }(["initialized", options.direction, {
          "pointer-events" : !support.touch
        }, {
          "free-mode" : swiper.params.freeMode && options.freeMode.enabled
        }, {
          autoheight : options.autoHeight
        }, {
          rtl : player
        }, {
          grid : options.grid && options.grid.rows > 1
        }, {
          "grid-column" : options.grid && options.grid.rows > 1 && "column" === options.grid.fill
        }, {
          android : opts.android
        }, {
          ios : opts.ios
        }, {
          "css-mode" : options.cssMode
        }, {
          centered : options.cssMode && options.centeredSlides
        }], options.containerModifierClass);
        url.push(...fleetAircraft);
        $this.addClass([...url].join(" "));
        swiper.emitContainerClasses();
      },
      removeClasses : function() {
        const {
          $el : classGroups,
          classNames : classNames
        } = this;
        classGroups.removeClass(classNames.join(" "));
        this.emitContainerClasses();
      }
    },
    images : {
      loadImage : function(options, data, url, width, title, callback) {
        function onReady() {
          if (callback) {
            callback();
          }
        }
        const fieldTypes = indexOf();
        let img;
        if (filter(options).parent("picture")[0] || options.complete && title) {
          onReady();
        } else {
          if (data) {
            img = new fieldTypes.Image;
            img.onload = onReady;
            img.onerror = onReady;
            if (width) {
              img.sizes = width;
            }
            if (url) {
              img.srcset = url;
            }
            if (data) {
              img.src = data;
            }
          } else {
            onReady();
          }
        }
      },
      preloadImages : function() {
        function _onReady() {
          if (null != _this && _this && !_this.destroyed) {
            if (void 0 !== _this.imagesLoaded) {
              _this.imagesLoaded += 1;
            }
            if (_this.imagesLoaded === _this.imagesToLoad.length) {
              if (_this.params.updateOnImagesReady) {
                _this.update();
              }
              _this.emit("imagesReady");
            }
          }
        }
        const _this = this;
        _this.imagesToLoad = _this.$el.find("img");
        for (let i = 0; i < _this.imagesToLoad.length; i = i + 1) {
          const image = _this.imagesToLoad[i];
          _this.loadImage(image, image.currentSrc || image.getAttribute("src"), image.srcset || image.getAttribute("srcset"), image.sizes || image.getAttribute("sizes"), true, _onReady);
        }
      }
    }
  };
  const params = {};
  class self {
    constructor(...args) {
      let target;
      let options;
      if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1) ? options = args[0] : [target, options] = args, options || (options = {}), options = extend({}, options), target && !options.el && (options.el = target), options.el && filter(options.el).length > 1) {
        const instances = [];
        return filter(options.el).each((elem) => {
          const todo = extend({}, options, {
            el : elem
          });
          instances.push(new self(todo));
        }), instances;
      }
      const self = this;
      self.__swiper__ = true;
      self.support = main();
      self.device = init({
        userAgent : options.userAgent
      });
      self.browser = runTests();
      self.eventsListeners = {};
      self.eventsAnyListeners = [];
      self.modules = [...self.__modules__];
      if (options.modules && Array.isArray(options.modules)) {
        self.modules.push(...options.modules);
      }
      const response = {};
      self.modules.forEach((defineProperties) => {
        defineProperties({
          swiper : self,
          extendParams : save(options, response),
          on : self.on.bind(self),
          once : self.once.bind(self),
          off : self.off.bind(self),
          emit : self.emit.bind(self)
        });
      });
      const source = extend({}, defaults, response);
      return self.params = extend({}, source, params, options), self.originalParams = extend({}, self.params), self.passedParams = extend({}, options), self.params && self.params.on && Object.keys(self.params.on).forEach((type) => {
        self.on(type, self.params.on[type]);
      }), self.params && self.params.onAny && self.onAny(self.params.onAny), self.$ = filter, Object.assign(self, {
        enabled : self.params.enabled,
        el : target,
        classNames : [],
        slides : filter(),
        slidesGrid : [],
        snapGrid : [],
        slidesSizesGrid : [],
        isHorizontal : () => {
          return "horizontal" === self.params.direction;
        },
        isVertical : () => {
          return "vertical" === self.params.direction;
        },
        activeIndex : 0,
        realIndex : 0,
        isBeginning : true,
        isEnd : false,
        translate : 0,
        previousTranslate : 0,
        progress : 0,
        velocity : 0,
        animating : false,
        allowSlideNext : self.params.allowSlideNext,
        allowSlidePrev : self.params.allowSlidePrev,
        touchEvents : function() {
          const tabRect = ["touchstart", "touchmove", "touchend", "touchcancel"];
          const selectedRect = ["pointerdown", "pointermove", "pointerup"];
          return self.touchEventsTouch = {
            start : tabRect[0],
            move : tabRect[1],
            end : tabRect[2],
            cancel : tabRect[3]
          }, self.touchEventsDesktop = {
            start : selectedRect[0],
            move : selectedRect[1],
            end : selectedRect[2]
          }, self.support.touch || !self.params.simulateTouch ? self.touchEventsTouch : self.touchEventsDesktop;
        }(),
        touchEventsData : {
          isTouched : void 0,
          isMoved : void 0,
          allowTouchCallbacks : void 0,
          touchStartTime : void 0,
          isScrolling : void 0,
          currentTranslate : void 0,
          startTranslate : void 0,
          allowThresholdMove : void 0,
          focusableElements : self.params.focusableElements,
          lastClickTime : now(),
          clickTimeout : void 0,
          velocities : [],
          allowMomentumBounce : void 0,
          isTouchEvent : void 0,
          startMoving : void 0
        },
        allowClick : true,
        allowTouchMove : self.params.allowTouchMove,
        touches : {
          startX : 0,
          startY : 0,
          currentX : 0,
          currentY : 0,
          diff : 0
        },
        imagesToLoad : [],
        imagesLoaded : 0
      }), self.emit("_swiper"), self.params.init && self.init(), self;
    }
    enable() {
      const element = this;
      if (!element.enabled) {
        element.enabled = true;
        if (element.params.grabCursor) {
          element.setGrabCursor();
        }
        element.emit("enable");
      }
    }
    disable() {
      const s = this;
      if (s.enabled) {
        s.enabled = false;
        if (s.params.grabCursor) {
          s.unsetGrabCursor();
        }
        s.emit("disable");
      }
    }
    setProgress(ratio, callback) {
      const s = this;
      ratio = Math.min(Math.max(ratio, 0), 1);
      const padding2 = s.minTranslate();
      const x = (s.maxTranslate() - padding2) * ratio + padding2;
      s.translateTo(x, void 0 === callback ? 0 : callback);
      s.updateActiveIndex();
      s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) {
        return;
      }
      const drilldownLevelLabels = e.el.className.split(" ").filter((pb) => {
        return 0 === pb.indexOf("swiper") || 0 === pb.indexOf(e.params.containerModifierClass);
      });
      e.emit("_containerClasses", drilldownLevelLabels.join(" "));
    }
    getSlideClasses(validator) {
      const self = this;
      return validator.className.split(" ").filter((slide) => {
        return 0 === slide.indexOf("swiper-slide") || 0 === slide.indexOf(self.params.slideClass);
      }).join(" ");
    }
    emitSlidesClasses() {
      const self = this;
      if (!self.params._emitClasses || !self.el) {
        return;
      }
      const t = [];
      self.slides.each((s) => {
        const numberOfTransactionsAdded = self.getSlideClasses(s);
        t.push({
          slideEl : s,
          classNames : numberOfTransactionsAdded
        });
        self.emit("_slideClass", s, numberOfTransactionsAdded);
      });
      self.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(version = "current", completely = false) {
      const {
        params : params,
        slides : data,
        slidesGrid : pos,
        slidesSizesGrid : keys,
        size : pY,
        activeIndex : k
      } = this;
      let order = 1;
      if (params.centeredSlides) {
        let arg;
        let averageImageArea = data[k].swiperSlideSize;
        for (let i = k + 1; i < data.length; i = i + 1) {
          if (data[i] && !arg) {
            averageImageArea = averageImageArea + data[i].swiperSlideSize;
            order = order + 1;
            if (averageImageArea > pY) {
              arg = true;
            }
          }
        }
        for (let i = k - 1; i >= 0; i = i - 1) {
          if (data[i] && !arg) {
            averageImageArea = averageImageArea + data[i].swiperSlideSize;
            order = order + 1;
            if (averageImageArea > pY) {
              arg = true;
            }
          }
        }
      } else {
        if ("current" === version) {
          for (let i = k + 1; i < data.length; i = i + 1) {
            if (completely ? pos[i] + keys[i] - pos[k] < pY : pos[i] - pos[k] < pY) {
              order = order + 1;
            }
          }
        } else {
          for (let i = k - 1; i >= 0; i = i - 1) {
            if (pos[k] - pos[i] < pY) {
              order = order + 1;
            }
          }
        }
      }
      return order;
    }
    update() {
      function forceSetTranslate() {
        const nearHandlePos = s.rtlTranslate ? -1 * s.translate : s.translate;
        const x = Math.min(Math.max(nearHandlePos, s.maxTranslate()), s.minTranslate());
        s.setTranslate(x);
        s.updateActiveIndex();
        s.updateSlidesClasses();
      }
      const s = this;
      if (!s || s.destroyed) {
        return;
      }
      const {
        snapGrid : type,
        params : config
      } = s;
      let i;
      if (config.breakpoints) {
        s.setBreakpoint();
      }
      s.updateSize();
      s.updateSlides();
      s.updateProgress();
      s.updateSlidesClasses();
      if (s.params.freeMode && s.params.freeMode.enabled) {
        forceSetTranslate();
        if (s.params.autoHeight) {
          s.updateAutoHeight();
        }
      } else {
        i = ("auto" === s.params.slidesPerView || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides ? s.slideTo(s.slides.length - 1, 0, false, true) : s.slideTo(s.activeIndex, 0, false, true);
        if (!i) {
          forceSetTranslate();
        }
      }
      if (config.watchOverflow && type !== s.snapGrid) {
        s.checkOverflow();
      }
      s.emit("update");
    }
    changeDirection(value, t = true) {
      const self = this;
      const undefined = self.params.direction;
      return value || (value = "horizontal" === undefined ? "vertical" : "horizontal"), value === undefined || "horizontal" !== value && "vertical" !== value || (self.$el.removeClass(`${self.params.containerModifierClass}${undefined}`).addClass(`${self.params.containerModifierClass}${value}`), self.emitContainerClasses(), self.params.direction = value, self.slides.each((gameBoardContainer) => {
        if ("vertical" === value) {
          gameBoardContainer.style.width = "";
        } else {
          gameBoardContainer.style.height = "";
        }
      }), self.emit("changeDirection"), t && self.update()), self;
    }
    mount(el) {
      const self = this;
      if (self.mounted) {
        return true;
      }
      const element = filter(el || self.params.el);
      if (!(el = element[0])) {
        return false;
      }
      el.swiper = self;
      const match = () => {
        return `.${(self.params.wrapperClass || "").trim().split(" ").join(".")}`;
      };
      let list = (() => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const oCalen = filter(el.shadowRoot.querySelector(match()));
          return oCalen.children = (name) => {
            return element.children(name);
          }, oCalen;
        }
        return element.children(match());
      })();
      if (0 === list.length && self.params.createElements) {
        const val = $().createElement("div");
        list = filter(val);
        val.className = self.params.wrapperClass;
        element.append(val);
        element.children(`.${self.params.slideClass}`).each((e) => {
          list.append(e);
        });
      }
      return Object.assign(self, {
        $el : element,
        el : el,
        $wrapperEl : list,
        wrapperEl : list[0],
        mounted : true,
        rtl : "rtl" === el.dir.toLowerCase() || "rtl" === element.css("direction"),
        rtlTranslate : "horizontal" === self.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === element.css("direction")),
        wrongRTL : "-webkit-box" === list.css("display")
      }), true;
    }
    init(name) {
      const s = this;
      if (s.initialized) {
        return s;
      }
      return false === s.mount(name) || (s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.params.loop && s.loopCreate(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s.setGrabCursor(), s.params.preloadImages && s.preloadImages(), s.params.loop ? s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit, false, true) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, 
      false, true), s.attachEvents(), s.initialized = true, s.emit("init"), s.emit("afterInit")), s;
    }
    destroy(e = true, t = true) {
      const self = this;
      const {
        params : params,
        $el : input,
        $wrapperEl : route,
        slides : keys
      } = self;
      return void 0 === self.params || self.destroyed || (self.emit("beforeDestroy"), self.initialized = false, self.detachEvents(), params.loop && self.loopDestroy(), t && (self.removeClasses(), input.removeAttr("style"), route.removeAttr("style"), keys && keys.length && keys.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), self.emit("destroy"), Object.keys(self.eventsListeners).forEach((e) => 
      {
        self.off(e);
      }), false !== e && (self.$el[0].swiper = null, function(proplist) {
        const langLocaleMap = proplist;
        Object.keys(langLocaleMap).forEach((lang) => {
          try {
            langLocaleMap[lang] = null;
          } catch (e) {
          }
          try {
            delete langLocaleMap[lang];
          } catch (e) {
          }
        });
      }(self)), self.destroyed = true), null;
    }
    static extendDefaults(defaults) {
      extend(params, defaults);
    }
    static get extendedDefaults() {
      return params;
    }
    static get defaults() {
      return defaults;
    }
    static installModule(callback) {
      if (!self.prototype.__modules__) {
        self.prototype.__modules__ = [];
      }
      const t = self.prototype.__modules__;
      if ("function" == typeof callback && t.indexOf(callback) < 0) {
        t.push(callback);
      }
    }
    static use(path) {
      return Array.isArray(path) ? (path.forEach((app) => {
        return self.installModule(app);
      }), self) : (self.installModule(path), self);
    }
  }
  Object.keys(sections).forEach((sectionName) => {
    Object.keys(sections[sectionName]).forEach((i) => {
      self.prototype[i] = sections[sectionName][i];
    });
  });
  self.use([function({
    swiper : options,
    on : callback,
    emit : _shout
  }) {
    const window = indexOf();
    let obj = null;
    const destroy = () => {
      if (options && !options.destroyed && options.initialized) {
        _shout("beforeResize");
        _shout("resize");
      }
    };
    const onComplete = () => {
      if (options && !options.destroyed && options.initialized) {
        _shout("orientationchange");
      }
    };
    callback("init", () => {
      if (options.params.resizeObserver && void 0 !== window.ResizeObserver) {
        if (options && !options.destroyed && options.initialized) {
          obj = new ResizeObserver((wrappersTemplates) => {
            const {
              width : width,
              height : height
            } = options;
            let lastWidth = width;
            let lastHeight = height;
            wrappersTemplates.forEach(({
              contentBoxSize : distance,
              contentRect : finalBuffer,
              target : el
            }) => {
              if (!(el && el !== options.el)) {
                lastWidth = finalBuffer ? finalBuffer.width : (distance[0] || distance).inlineSize;
                lastHeight = finalBuffer ? finalBuffer.height : (distance[0] || distance).blockSize;
              }
            });
            if (!(lastWidth === width && lastHeight === height)) {
              destroy();
            }
          });
          obj.observe(options.el);
        }
      } else {
        window.addEventListener("resize", destroy);
        window.addEventListener("orientationchange", onComplete);
      }
    });
    callback("destroy", () => {
      if (obj && obj.unobserve && options.el) {
        obj.unobserve(options.el);
        obj = null;
      }
      window.removeEventListener("resize", destroy);
      window.removeEventListener("orientationchange", onComplete);
    });
  }, function({
    swiper : s,
    extendParams : r,
    on : on,
    emit : spy
  }) {
    const result = [];
    const window = indexOf();
    const initObserver = (target, change = {}) => {
      const observer = new (window.MutationObserver || window.WebkitMutationObserver)((args) => {
        if (1 === args.length) {
          return void spy("observerUpdate", args[0]);
        }
        const checkDimensions = function() {
          spy("observerUpdate", args[0]);
        };
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(checkDimensions);
        } else {
          window.setTimeout(checkDimensions, 0);
        }
      });
      observer.observe(target, {
        attributes : void 0 === change.attributes || change.attributes,
        childList : void 0 === change.childList || change.childList,
        characterData : void 0 === change.characterData || change.characterData
      });
      result.push(observer);
    };
    r({
      observer : false,
      observeParents : false,
      observeSlideChildren : false
    });
    on("init", () => {
      if (s.params.observer) {
        if (s.params.observeParents) {
          const containerParents = s.$el.parents();
          for (let i = 0; i < containerParents.length; i = i + 1) {
            initObserver(containerParents[i]);
          }
        }
        initObserver(s.$el[0], {
          childList : s.params.observeSlideChildren
        });
        initObserver(s.$wrapperEl[0], {
          attributes : false
        });
      }
    });
    on("destroy", () => {
      result.forEach((attributesObserver) => {
        attributesObserver.disconnect();
      });
      result.splice(0, result.length);
    });
  }]);
  const closing = [function({
    swiper : self,
    extendParams : users,
    on : lib$rsvp$$on
  }) {
    function render(args, name) {
      const opts = self.params.virtual;
      if (opts.cache && self.virtual.cache[name]) {
        return self.virtual.cache[name];
      }
      const jdiv = opts.renderSlide ? filter(opts.renderSlide.call(self, args, name)) : filter(`<div class="${self.params.slideClass}" data-swiper-slide-index="${name}">${args}</div>`);
      return jdiv.attr("data-swiper-slide-index") || jdiv.attr("data-swiper-slide-index", name), opts.cache && (self.virtual.cache[name] = jdiv), jdiv;
    }
    function init(channelsMax) {
      function update() {
        self.updateSlides();
        self.updateProgress();
        self.updateSlidesClasses();
        if (self.lazy && self.params.lazy.enabled) {
          self.lazy.load();
        }
      }
      const {
        slidesPerView : x,
        slidesPerGroup : width,
        centeredSlides : y0
      } = self.params;
      const {
        addSlidesBefore : offset,
        addSlidesAfter : size
      } = self.params.virtual;
      const {
        from : from,
        to : to,
        slides : node,
        slidesGrid : body,
        offset : html
      } = self.virtual;
      if (!self.params.cssMode) {
        self.updateActiveIndex();
      }
      const target = self.activeIndex || 0;
      let propX;
      let pageSize;
      let value;
      propX = self.rtlTranslate ? "right" : self.isHorizontal() ? "left" : "top";
      if (y0) {
        pageSize = Math.floor(x / 2) + width + size;
        value = Math.floor(x / 2) + width + offset;
      } else {
        pageSize = x + (width - 1) + size;
        value = width + offset;
      }
      const start = Math.max((target || 0) - value, 0);
      const end = Math.min((target || 0) + pageSize, node.length - 1);
      const nodeName = (self.slidesGrid[start] || 0) - (self.slidesGrid[0] || 0);
      if (Object.assign(self.virtual, {
        from : start,
        to : end,
        offset : nodeName,
        slidesGrid : self.slidesGrid
      }), from === start && to === end && !channelsMax) {
        return self.slidesGrid !== body && nodeName !== html && self.slides.css(propX, `${nodeName}px`), void self.updateProgress();
      }
      if (self.params.virtual.renderExternal) {
        return self.params.virtual.renderExternal.call(self, {
          offset : nodeName,
          from : start,
          to : end,
          slides : function() {
            const _results = [];
            for (let i = start; i <= end; i = i + 1) {
              _results.push(node[i]);
            }
            return _results;
          }()
        }), void(self.params.virtual.renderExternalUpdate && update());
      }
      const filesAndInfo = [];
      const removeDataListeners = [];
      if (channelsMax) {
        self.$wrapperEl.find(`.${self.params.slideClass}`).remove();
      } else {
        for (let i = from; i <= to; i = i + 1) {
          if (i < start || i > end) {
            self.$wrapperEl.find(`.${self.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
          }
        }
      }
      for (let i = 0; i < node.length; i = i + 1) {
        if (i >= start && i <= end) {
          if (void 0 === to || channelsMax) {
            removeDataListeners.push(i);
          } else {
            if (i > to) {
              removeDataListeners.push(i);
            }
            if (i < from) {
              filesAndInfo.push(i);
            }
          }
        }
      }
      removeDataListeners.forEach((k) => {
        self.$wrapperEl.append(render(node[k], k));
      });
      filesAndInfo.sort((b, a) => {
        return a - b;
      }).forEach((i) => {
        self.$wrapperEl.prepend(render(node[i], i));
      });
      self.$wrapperEl.children(".swiper-slide").css(propX, `${nodeName}px`);
      update();
    }
    let _takingTooLongTimeout;
    users({
      virtual : {
        enabled : false,
        slides : [],
        cache : true,
        renderSlide : null,
        renderExternal : null,
        renderExternalUpdate : true,
        addSlidesBefore : 0,
        addSlidesAfter : 0
      }
    });
    self.virtual = {
      cache : {},
      from : void 0,
      to : void 0,
      slides : [],
      offset : 0,
      slidesGrid : []
    };
    lib$rsvp$$on("beforeInit", () => {
      if (self.params.virtual.enabled) {
        self.virtual.slides = self.params.virtual.slides;
        self.classNames.push(`${self.params.containerModifierClass}virtual`);
        self.params.watchSlidesProgress = true;
        self.originalParams.watchSlidesProgress = true;
        if (!self.params.initialSlide) {
          init();
        }
      }
    });
    lib$rsvp$$on("setTranslate", () => {
      if (self.params.virtual.enabled) {
        if (self.params.cssMode && !self._immediateVirtual) {
          clearTimeout(_takingTooLongTimeout);
          _takingTooLongTimeout = setTimeout(() => {
            init();
          }, 100);
        } else {
          init();
        }
      }
    });
    lib$rsvp$$on("init update resize", () => {
      if (self.params.virtual.enabled && self.params.cssMode) {
        setStyle(self.wrapperEl, "--swiper-virtual-size", `${self.virtualSize}px`);
      }
    });
    Object.assign(self.virtual, {
      appendSlide : function(data) {
        if ("object" == typeof data && "length" in data) {
          for (let i = 0; i < data.length; i = i + 1) {
            if (data[i]) {
              self.virtual.slides.push(data[i]);
            }
          }
        } else {
          self.virtual.slides.push(data);
        }
        init(true);
      },
      prependSlide : function(arr) {
        const index = self.activeIndex;
        let newIndex = index + 1;
        let i = 1;
        if (Array.isArray(arr)) {
          for (let i = 0; i < arr.length; i = i + 1) {
            if (arr[i]) {
              self.virtual.slides.unshift(arr[i]);
            }
          }
          newIndex = index + arr.length;
          i = arr.length;
        } else {
          self.virtual.slides.unshift(arr);
        }
        if (self.params.virtual.cache) {
          const data = self.virtual.cache;
          const props = {};
          Object.keys(data).forEach((lineIndex) => {
            const t = data[lineIndex];
            const number = t.attr("data-swiper-slide-index");
            if (number) {
              t.attr("data-swiper-slide-index", parseInt(number, 10) + i);
            }
            props[parseInt(lineIndex, 10) + i] = t;
          });
          self.virtual.cache = props;
        }
        init(true);
        self.slideTo(newIndex, 0);
      },
      removeSlide : function(index) {
        if (null == index) {
          return;
        }
        let end = self.activeIndex;
        if (Array.isArray(index)) {
          for (let i = index.length - 1; i >= 0; i = i - 1) {
            self.virtual.slides.splice(index[i], 1);
            if (self.params.virtual.cache) {
              delete self.virtual.cache[index[i]];
            }
            if (index[i] < end) {
              end = end - 1;
            }
            end = Math.max(end, 0);
          }
        } else {
          self.virtual.slides.splice(index, 1);
          if (self.params.virtual.cache) {
            delete self.virtual.cache[index];
          }
          if (index < end) {
            end = end - 1;
          }
          end = Math.max(end, 0);
        }
        init(true);
        self.slideTo(end, 0);
      },
      removeAllSlides : function() {
        self.virtual.slides = [];
        if (self.params.virtual.cache) {
          self.virtual.cache = {};
        }
        init(true);
        self.slideTo(0, 0);
      },
      update : init
    });
  }, function({
    swiper : self,
    extendParams : users,
    on : on,
    emit : isKeyPlain
  }) {
    function handleKeyboard(data) {
      if (!self.enabled) {
        return;
      }
      const {
        rtlTranslate : customerHasCancelledGroupPlan
      } = self;
      let e = data;
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      const curFromNodeKey = e.keyCode || e.charCode;
      const curToNodeChildNextSibling = self.params.keyboard.pageUpDown;
      const apiCheckInstance = curToNodeChildNextSibling && 33 === curFromNodeKey;
      const ignorePaymentPlan = curToNodeChildNextSibling && 34 === curFromNodeKey;
      const overRight = 37 === curFromNodeKey;
      const ignoreCustomerId = 39 === curFromNodeKey;
      const formlyApiCheck = 38 === curFromNodeKey;
      const winRef = 40 === curFromNodeKey;
      if (!self.allowSlideNext && (self.isHorizontal() && ignoreCustomerId || self.isVertical() && winRef || ignorePaymentPlan)) {
        return false;
      }
      if (!self.allowSlidePrev && (self.isHorizontal() && overRight || self.isVertical() && formlyApiCheck || apiCheckInstance)) {
        return false;
      }
      if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || event.activeElement && event.activeElement.nodeName && ("input" === event.activeElement.nodeName.toLowerCase() || "textarea" === event.activeElement.nodeName.toLowerCase()))) {
        if (self.params.keyboard.onlyInViewport && (apiCheckInstance || ignorePaymentPlan || overRight || ignoreCustomerId || formlyApiCheck || winRef)) {
          let t = false;
          if (self.$el.parents(`.${self.params.slideClass}`).length > 0 && 0 === self.$el.parents(`.${self.params.slideActiveClass}`).length) {
            return;
          }
          const groupitems = self.$el;
          const calendarWidth = groupitems[0].clientWidth;
          const helperHeight = groupitems[0].clientHeight;
          const n = $homePlayerContainer.innerWidth;
          const blockSize = $homePlayerContainer.innerHeight;
          const offset = self.$el.offset();
          if (customerHasCancelledGroupPlan) {
            offset.left -= self.$el[0].scrollLeft;
          }
          const keywordResults = [[offset.left, offset.top], [offset.left + calendarWidth, offset.top], [offset.left, offset.top + helperHeight], [offset.left + calendarWidth, offset.top + helperHeight]];
          for (let i = 0; i < keywordResults.length; i = i + 1) {
            const data = keywordResults[i];
            if (data[0] >= 0 && data[0] <= n && data[1] >= 0 && data[1] <= blockSize) {
              if (0 === data[0] && 0 === data[1]) {
                continue;
              }
              t = true;
            }
          }
          if (!t) {
            return;
          }
        }
        if (self.isHorizontal()) {
          if (apiCheckInstance || ignorePaymentPlan || overRight || ignoreCustomerId) {
            if (e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue = false;
            }
          }
          if ((ignorePaymentPlan || ignoreCustomerId) && !customerHasCancelledGroupPlan || (apiCheckInstance || overRight) && customerHasCancelledGroupPlan) {
            self.slideNext();
          }
          if ((apiCheckInstance || overRight) && !customerHasCancelledGroupPlan || (ignorePaymentPlan || ignoreCustomerId) && customerHasCancelledGroupPlan) {
            self.slidePrev();
          }
        } else {
          if (apiCheckInstance || ignorePaymentPlan || formlyApiCheck || winRef) {
            if (e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue = false;
            }
          }
          if (ignorePaymentPlan || winRef) {
            self.slideNext();
          }
          if (apiCheckInstance || formlyApiCheck) {
            self.slidePrev();
          }
        }
        isKeyPlain("keyPress", curFromNodeKey);
      }
    }
    function enable() {
      if (!self.keyboard.enabled) {
        filter(event).on("keydown", handleKeyboard);
        self.keyboard.enabled = true;
      }
    }
    function disable() {
      if (self.keyboard.enabled) {
        filter(event).off("keydown", handleKeyboard);
        self.keyboard.enabled = false;
      }
    }
    const event = $();
    const $homePlayerContainer = indexOf();
    self.keyboard = {
      enabled : false
    };
    users({
      keyboard : {
        enabled : false,
        onlyInViewport : true,
        pageUpDown : true
      }
    });
    on("init", () => {
      if (self.params.keyboard.enabled) {
        enable();
      }
    });
    on("destroy", () => {
      if (self.keyboard.enabled) {
        disable();
      }
    });
    Object.assign(self.keyboard, {
      enable : enable,
      disable : disable
    });
  }, function({
    swiper : self,
    extendParams : users,
    on : on,
    emit : emit
  }) {
    function Tooltip() {
      if (self.enabled) {
        self.mouseEntered = true;
      }
    }
    function resp() {
      if (self.enabled) {
        self.mouseEntered = false;
      }
    }
    function update(options) {
      return !(self.params.mousewheel.thresholdDelta && options.delta < self.params.mousewheel.thresholdDelta) && (!(self.params.mousewheel.thresholdTime && now() - start < self.params.mousewheel.thresholdTime) && (options.delta >= 6 && now() - start < 60 || (options.direction < 0 ? self.isEnd && !self.params.loop || self.animating || (self.slideNext(), emit("scroll", options.raw)) : self.isBeginning && !self.params.loop || self.animating || (self.slidePrev(), emit("scroll", options.raw)), start = 
      (new block_6000000_time.Date).getTime(), false)));
    }
    function init(logger) {
      let e = logger;
      let bucket = true;
      if (!self.enabled) {
        return;
      }
      const attrs = self.params.mousewheel;
      if (self.params.cssMode) {
        e.preventDefault();
      }
      let filters = self.$el;
      if ("container" !== self.params.mousewheel.eventsTarget && (filters = filter(self.params.mousewheel.eventsTarget)), !self.mouseEntered && !filters[0].contains(e.target) && !attrs.releaseOnEdges) {
        return true;
      }
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      let dy = 0;
      const magInv = self.rtlTranslate ? -1 : 1;
      const normalized = function(event) {
        let sX = 0;
        let sY = 0;
        let pX = 0;
        let pY = 0;
        return "detail" in event && (sY = event.detail), "wheelDelta" in event && (sY = -event.wheelDelta / 120), "wheelDeltaY" in event && (sY = -event.wheelDeltaY / 120), "wheelDeltaX" in event && (sX = -event.wheelDeltaX / 120), "axis" in event && event.axis === event.HORIZONTAL_AXIS && (sX = sY, sY = 0), pX = 10 * sX, pY = 10 * sY, "deltaY" in event && (pY = event.deltaY), "deltaX" in event && (pX = event.deltaX), event.shiftKey && !pX && (pX = pY, pY = 0), (pX || pY) && event.deltaMode && (1 === 
        event.deltaMode ? (pX = pX * 40, pY = pY * 40) : (pX = pX * 800, pY = pY * 800)), pX && !sX && (sX = pX < 1 ? -1 : 1), pY && !sY && (sY = pY < 1 ? -1 : 1), {
          spinX : sX,
          spinY : sY,
          pixelX : pX,
          pixelY : pY
        };
      }(e);
      if (attrs.forceToAxis) {
        if (self.isHorizontal()) {
          if (!(Math.abs(normalized.pixelX) > Math.abs(normalized.pixelY))) {
            return true;
          }
          dy = -normalized.pixelX * magInv;
        } else {
          if (!(Math.abs(normalized.pixelY) > Math.abs(normalized.pixelX))) {
            return true;
          }
          dy = -normalized.pixelY;
        }
      } else {
        dy = Math.abs(normalized.pixelX) > Math.abs(normalized.pixelY) ? -normalized.pixelX * magInv : -normalized.pixelY;
      }
      if (0 === dy) {
        return true;
      }
      if (attrs.invert) {
        dy = -dy;
      }
      let m = self.getTranslate() + dy * attrs.sensitivity;
      if (m >= self.minTranslate() && (m = self.minTranslate()), m <= self.maxTranslate() && (m = self.maxTranslate()), bucket = !!self.params.loop || !(m === self.minTranslate() || m === self.maxTranslate()), bucket && self.params.nested && e.stopPropagation(), self.params.freeMode && self.params.freeMode.enabled) {
        const current = {
          time : now(),
          delta : Math.abs(dy),
          direction : Math.sign(dy)
        };
        const i = previous && current.time < previous.time + 500 && current.delta <= previous.delta && current.direction === previous.direction;
        if (!i) {
          previous = void 0;
          if (self.params.loop) {
            self.loopFix();
          }
          let tx = self.getTranslate() + dy * attrs.sensitivity;
          const zoomIn = self.isBeginning;
          const browserSupportsLocalStorage = self.isEnd;
          if (tx >= self.minTranslate() && (tx = self.minTranslate()), tx <= self.maxTranslate() && (tx = self.maxTranslate()), self.setTransition(0), self.setTranslate(tx), self.updateProgress(), self.updateActiveIndex(), self.updateSlidesClasses(), (!zoomIn && self.isBeginning || !browserSupportsLocalStorage && self.isEnd) && self.updateSlidesClasses(), self.params.freeMode.sticky) {
            clearTimeout(_takingTooLongTimeout);
            _takingTooLongTimeout = void 0;
            if (spans.length >= 15) {
              spans.shift();
            }
            const options = spans.length ? spans[spans.length - 1] : void 0;
            const e = spans[0];
            if (spans.push(current), options && (current.delta > options.delta || current.direction !== options.direction)) {
              spans.splice(0);
            } else {
              if (spans.length >= 15 && current.time - e.time < 500 && e.delta - current.delta >= 1 && current.delta <= 6) {
                const importRoutes = dy > 0 ? .8 : .2;
                previous = current;
                spans.splice(0);
                _takingTooLongTimeout = setTimeout(() => {
                  self.slideToClosest(self.params.speed, true, void 0, importRoutes);
                }, 0);
              }
            }
            if (!_takingTooLongTimeout) {
              _takingTooLongTimeout = setTimeout(() => {
                previous = current;
                spans.splice(0);
                self.slideToClosest(self.params.speed, true, void 0, .5);
              }, 500);
            }
          }
          if (i || emit("scroll", e), self.params.autoplay && self.params.autoplayDisableOnInteraction && self.autoplay.stop(), tx === self.minTranslate() || tx === self.maxTranslate()) {
            return true;
          }
        }
      } else {
        const self = {
          time : now(),
          delta : Math.abs(dy),
          direction : Math.sign(dy),
          raw : logger
        };
        if (spans.length >= 2) {
          spans.shift();
        }
        const action = spans.length ? spans[spans.length - 1] : void 0;
        if (spans.push(self), action ? (self.direction !== action.direction || self.delta > action.delta || self.time > action.time + 150) && update(self) : update(self), function(_o) {
          const s = self.params.mousewheel;
          if (_o.direction < 0) {
            if (self.isEnd && !self.params.loop && s.releaseOnEdges) {
              return true;
            }
          } else {
            if (self.isBeginning && !self.params.loop && s.releaseOnEdges) {
              return true;
            }
          }
          return false;
        }(self)) {
          return true;
        }
      }
      return e.preventDefault ? e.preventDefault() : e.returnValue = false, false;
    }
    function render(type) {
      let array = self.$el;
      if ("container" !== self.params.mousewheel.eventsTarget) {
        array = filter(self.params.mousewheel.eventsTarget);
      }
      array[type]("mouseenter", Tooltip);
      array[type]("mouseleave", resp);
      array[type]("wheel", init);
    }
    function add() {
      return self.params.cssMode ? (self.wrapperEl.removeEventListener("wheel", init), true) : !self.mousewheel.enabled && (render("on"), self.mousewheel.enabled = true, true);
    }
    function debug() {
      return self.params.cssMode ? (self.wrapperEl.addEventListener(event, init), true) : !!self.mousewheel.enabled && (render("off"), self.mousewheel.enabled = false, true);
    }
    const block_6000000_time = indexOf();
    let _takingTooLongTimeout;
    users({
      mousewheel : {
        enabled : false,
        releaseOnEdges : false,
        invert : false,
        forceToAxis : false,
        sensitivity : 1,
        eventsTarget : "container",
        thresholdDelta : null,
        thresholdTime : null
      }
    });
    self.mousewheel = {
      enabled : false
    };
    let previous;
    let start = now();
    const spans = [];
    on("init", () => {
      if (!self.params.mousewheel.enabled && self.params.cssMode) {
        debug();
      }
      if (self.params.mousewheel.enabled) {
        add();
      }
    });
    on("destroy", () => {
      if (self.params.cssMode) {
        add();
      }
      if (self.mousewheel.enabled) {
        debug();
      }
    });
    Object.assign(self.mousewheel, {
      enable : add,
      disable : debug
    });
  }, function({
    swiper : self,
    extendParams : combineReducers,
    on : on,
    emit : capture
  }) {
    function _init(target) {
      let blocks;
      return target && (blocks = filter(target), self.params.uniqueNavElements && "string" == typeof target && blocks.length > 1 && 1 === self.$el.find(target).length && (blocks = self.$el.find(target))), blocks;
    }
    function update(elem, val) {
      const opts = self.params.navigation;
      if (elem && elem.length > 0) {
        elem[val ? "addClass" : "removeClass"](opts.disabledClass);
        if (elem[0] && "BUTTON" === elem[0].tagName) {
          elem[0].disabled = val;
        }
        if (self.params.watchOverflow && self.enabled) {
          elem[self.isLocked ? "addClass" : "removeClass"](opts.lockClass);
        }
      }
    }
    function start() {
      if (self.params.loop) {
        return;
      }
      const {
        $nextEl : id,
        $prevEl : value
      } = self.navigation;
      update(value, self.isBeginning);
      update(id, self.isEnd);
    }
    function callback(candidate) {
      candidate.preventDefault();
      if (!(self.isBeginning && !self.params.loop)) {
        self.slidePrev();
      }
    }
    function end(event) {
      event.preventDefault();
      if (!(self.isEnd && !self.params.loop)) {
        self.slideNext();
      }
    }
    function init() {
      const me = self.params.navigation;
      if (self.params.navigation = show(self, self.originalParams.navigation, self.params.navigation, {
        nextEl : "swiper-button-next",
        prevEl : "swiper-button-prev"
      }), !me.nextEl && !me.prevEl) {
        return;
      }
      const e = _init(me.nextEl);
      const ret = _init(me.prevEl);
      if (e && e.length > 0) {
        e.on("click", end);
      }
      if (ret && ret.length > 0) {
        ret.on("click", callback);
      }
      Object.assign(self.navigation, {
        $nextEl : e,
        nextEl : e && e[0],
        $prevEl : ret,
        prevEl : ret && ret[0]
      });
      if (!self.enabled) {
        if (e) {
          e.addClass(me.lockClass);
        }
        if (ret) {
          ret.addClass(me.lockClass);
        }
      }
    }
    function upload() {
      const {
        $nextEl : parent,
        $prevEl : element
      } = self.navigation;
      if (parent && parent.length) {
        parent.off("click", end);
        parent.removeClass(self.params.navigation.disabledClass);
      }
      if (element && element.length) {
        element.off("click", callback);
        element.removeClass(self.params.navigation.disabledClass);
      }
    }
    combineReducers({
      navigation : {
        nextEl : null,
        prevEl : null,
        hideOnClick : false,
        disabledClass : "swiper-button-disabled",
        hiddenClass : "swiper-button-hidden",
        lockClass : "swiper-button-lock"
      }
    });
    self.navigation = {
      nextEl : null,
      $nextEl : null,
      prevEl : null,
      $prevEl : null
    };
    on("init", () => {
      init();
      start();
    });
    on("toEdge fromEdge lock unlock", () => {
      start();
    });
    on("destroy", () => {
      upload();
    });
    on("enable disable", () => {
      const {
        $nextEl : control,
        $prevEl : $header
      } = self.navigation;
      if (control) {
        control[self.enabled ? "removeClass" : "addClass"](self.params.navigation.lockClass);
      }
      if ($header) {
        $header[self.enabled ? "removeClass" : "addClass"](self.params.navigation.lockClass);
      }
    });
    on("click", (canCreateDiscussions, mutationEvent) => {
      const {
        $nextEl : p,
        $prevEl : div
      } = self.navigation;
      const el = mutationEvent.target;
      if (self.params.navigation.hideOnClick && !filter(el).is(div) && !filter(el).is(p)) {
        if (self.pagination && self.params.pagination && self.params.pagination.clickable && (self.pagination.el === el || self.pagination.el.contains(el))) {
          return;
        }
        let t;
        if (p) {
          t = p.hasClass(self.params.navigation.hiddenClass);
        } else {
          if (div) {
            t = div.hasClass(self.params.navigation.hiddenClass);
          }
        }
        capture(true === t ? "navigationShow" : "navigationHide");
        if (p) {
          p.toggleClass(self.params.navigation.hiddenClass);
        }
        if (div) {
          div.toggleClass(self.params.navigation.hiddenClass);
        }
      }
    });
    Object.assign(self.navigation, {
      update : start,
      init : init,
      destroy : upload
    });
  }, function({
    swiper : self,
    extendParams : runErrorTest,
    on : on,
    emit : fire
  }) {
    function pipe() {
      return !self.params.pagination.el || !self.pagination.el || !self.pagination.$el || 0 === self.pagination.$el.length;
    }
    function icon(type, d) {
      const {
        bulletActiveClass : TRAVIS_API_JOBS_URL
      } = self.params.pagination;
      type[d]().addClass(`${TRAVIS_API_JOBS_URL}-${d}`)[d]().addClass(`${TRAVIS_API_JOBS_URL}-${d}-${d}`);
    }
    function render() {
      const goesLeft = self.rtl;
      const c = self.params.pagination;
      if (pipe()) {
        return;
      }
      const elemWidth = self.virtual && self.params.virtual.enabled ? self.virtual.slides.length : self.slides.length;
      const $element = self.pagination.$el;
      let pos;
      const i = self.params.loop ? Math.ceil((elemWidth - 2 * self.loopedSlides) / self.params.slidesPerGroup) : self.snapGrid.length;
      if (self.params.loop ? (pos = Math.ceil((self.activeIndex - self.loopedSlides) / self.params.slidesPerGroup), pos > elemWidth - 1 - 2 * self.loopedSlides && (pos = pos - (elemWidth - 2 * self.loopedSlides)), pos > i - 1 && (pos = pos - i), pos < 0 && "bullets" !== self.params.paginationType && (pos = i + pos)) : pos = void 0 !== self.snapIndex ? self.snapIndex : self.activeIndex || 0, "bullets" === c.type && self.pagination.bullets && self.pagination.bullets.length > 0) {
        const b = self.pagination.bullets;
        let start;
        let end;
        let startKeyIndex;
        if (c.dynamicBullets && (w = b.eq(0)[self.isHorizontal() ? "outerWidth" : "outerHeight"](true), $element.css(self.isHorizontal() ? "width" : "height", w * (c.dynamicMainBullets + 4) + "px"), c.dynamicMainBullets > 1 && void 0 !== self.previousIndex && (length = length + (pos - self.previousIndex), length > c.dynamicMainBullets - 1 ? length = c.dynamicMainBullets - 1 : length < 0 && (length = 0)), start = pos - length, end = start + (Math.min(b.length, c.dynamicMainBullets) - 1), startKeyIndex = 
        (end + start) / 2), b.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((algoCode) => {
          return `${c.bulletActiveClass}${algoCode}`;
        }).join(" ")), $element.length > 1) {
          b.each((item2) => {
            const value = filter(item2);
            const i = value.index();
            if (i === pos) {
              value.addClass(c.bulletActiveClass);
            }
            if (c.dynamicBullets) {
              if (i >= start && i <= end) {
                value.addClass(`${c.bulletActiveClass}-main`);
              }
              if (i === start) {
                icon(value, "prev");
              }
              if (i === end) {
                icon(value, "next");
              }
            }
          });
        } else {
          const dashboard = b.eq(pos);
          const r = dashboard.index();
          if (dashboard.addClass(c.bulletActiveClass), c.dynamicBullets) {
            const selectedTab = b.eq(start);
            const value = b.eq(end);
            for (let i = start; i <= end; i = i + 1) {
              b.eq(i).addClass(`${c.bulletActiveClass}-main`);
            }
            if (self.params.loop) {
              if (r >= b.length - c.dynamicMainBullets) {
                for (let i = c.dynamicMainBullets; i >= 0; i = i - 1) {
                  b.eq(b.length - i).addClass(`${c.bulletActiveClass}-main`);
                }
                b.eq(b.length - c.dynamicMainBullets - 1).addClass(`${c.bulletActiveClass}-prev`);
              } else {
                icon(selectedTab, "prev");
                icon(value, "next");
              }
            } else {
              icon(selectedTab, "prev");
              icon(value, "next");
            }
          }
        }
        if (c.dynamicBullets) {
          const z = Math.min(b.length, c.dynamicMainBullets + 4);
          const TRAVIS_API_JOBS_URL = (w * z - w) / 2 - startKeyIndex * w;
          const allDefTheme = goesLeft ? "right" : "left";
          b.css(self.isHorizontal() ? allDefTheme : "top", `${TRAVIS_API_JOBS_URL}px`);
        }
      }
      if ("fraction" === c.type && ($element.find(bind(c.currentClass)).text(c.formatFractionCurrent(pos + 1)), $element.find(bind(c.totalClass)).text(c.formatFractionTotal(i))), "progressbar" === c.type) {
        let auto;
        auto = c.progressbarOpposite ? self.isHorizontal() ? "vertical" : "horizontal" : self.isHorizontal() ? "horizontal" : "vertical";
        const a = (pos + 1) / i;
        let _x$2 = 1;
        let _x$3 = 1;
        if ("horizontal" === auto) {
          _x$2 = a;
        } else {
          _x$3 = a;
        }
        $element.find(bind(c.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${_x$2}) scaleY(${_x$3})`).transition(self.params.speed);
      }
      if ("custom" === c.type && c.renderCustom) {
        $element.html(c.renderCustom(self, pos + 1, i));
        fire("paginationRender", $element[0]);
      } else {
        fire("paginationUpdate", $element[0]);
      }
      if (self.params.watchOverflow && self.enabled) {
        $element[self.isLocked ? "addClass" : "removeClass"](c.lockClass);
      }
    }
    function update() {
      const options = self.params.pagination;
      if (pipe()) {
        return;
      }
      const d = self.virtual && self.params.virtual.enabled ? self.virtual.slides.length : self.slides.length;
      const callbacks = self.pagination.$el;
      let count = "";
      if ("bullets" === options.type) {
        let l = self.params.loop ? Math.ceil((d - 2 * self.loopedSlides) / self.params.slidesPerGroup) : self.snapGrid.length;
        if (self.params.freeMode && self.params.freeMode.enabled && !self.params.loop && l > d) {
          l = d;
        }
        for (let i = 0; i < l; i = i + 1) {
          if (options.renderBullet) {
            count = count + options.renderBullet.call(self, i, options.bulletClass);
          } else {
            count = count + `<${options.bulletElement} class="${options.bulletClass}"></${options.bulletElement}>`;
          }
        }
        callbacks.html(count);
        self.pagination.bullets = callbacks.find(bind(options.bulletClass));
      }
      if ("fraction" === options.type) {
        count = options.renderFraction ? options.renderFraction.call(self, options.currentClass, options.totalClass) : `<span class="${options.currentClass}"></span> / <span class="${options.totalClass}"></span>`;
        callbacks.html(count);
      }
      if ("progressbar" === options.type) {
        count = options.renderProgressbar ? options.renderProgressbar.call(self, options.progressbarFillClass) : `<span class="${options.progressbarFillClass}"></span>`;
        callbacks.html(count);
      }
      if ("custom" !== options.type) {
        fire("paginationRender", self.pagination.$el[0]);
      }
    }
    function init() {
      self.params.pagination = show(self, self.originalParams.pagination, self.params.pagination, {
        el : "swiper-pagination"
      });
      const options = self.params.pagination;
      if (!options.el) {
        return;
      }
      let el = filter(options.el);
      if (0 !== el.length) {
        if (self.params.uniqueNavElements && "string" == typeof options.el && el.length > 1) {
          el = self.$el.find(options.el);
          if (el.length > 1) {
            el = el.filter((obj) => {
              return filter(obj).parents(".swiper")[0] === self.el;
            });
          }
        }
        if ("bullets" === options.type && options.clickable) {
          el.addClass(options.clickableClass);
        }
        el.addClass(options.modifierClass + options.type);
        el.addClass(options.modifierClass + self.params.direction);
        if ("bullets" === options.type && options.dynamicBullets) {
          el.addClass(`${options.modifierClass}${options.type}-dynamic`);
          length = 0;
          if (options.dynamicMainBullets < 1) {
            options.dynamicMainBullets = 1;
          }
        }
        if ("progressbar" === options.type && options.progressbarOpposite) {
          el.addClass(options.progressbarOppositeClass);
        }
        if (options.clickable) {
          el.on("click", bind(options.bulletClass), function(event) {
            event.preventDefault();
            let newIndex = filter(this).index() * self.params.slidesPerGroup;
            if (self.params.loop) {
              newIndex = newIndex + self.loopedSlides;
            }
            self.slideTo(newIndex);
          });
        }
        Object.assign(self.pagination, {
          $el : el,
          el : el[0]
        });
        if (!self.enabled) {
          el.addClass(options.lockClass);
        }
      }
    }
    function reset() {
      const options = self.params.pagination;
      if (pipe()) {
        return;
      }
      const element = self.pagination.$el;
      element.removeClass(options.hiddenClass);
      element.removeClass(options.modifierClass + options.type);
      element.removeClass(options.modifierClass + self.params.direction);
      if (self.pagination.bullets && self.pagination.bullets.removeClass) {
        self.pagination.bullets.removeClass(options.bulletActiveClass);
      }
      if (options.clickable) {
        element.off("click", bind(options.bulletClass));
      }
    }
    const TRAVIS_API_JOBS_URL = "swiper-pagination";
    let w;
    runErrorTest({
      pagination : {
        el : null,
        bulletElement : "span",
        clickable : false,
        hideOnClick : false,
        renderBullet : null,
        renderProgressbar : null,
        renderFraction : null,
        renderCustom : null,
        progressbarOpposite : false,
        type : "bullets",
        dynamicBullets : false,
        dynamicMainBullets : 1,
        formatFractionCurrent : (canCreateDiscussions) => {
          return canCreateDiscussions;
        },
        formatFractionTotal : (aRoundNumber) => {
          return aRoundNumber;
        },
        bulletClass : `${TRAVIS_API_JOBS_URL}-bullet`,
        bulletActiveClass : `${TRAVIS_API_JOBS_URL}-bullet-active`,
        modifierClass : `${TRAVIS_API_JOBS_URL}-`,
        currentClass : `${TRAVIS_API_JOBS_URL}-current`,
        totalClass : `${TRAVIS_API_JOBS_URL}-total`,
        hiddenClass : `${TRAVIS_API_JOBS_URL}-hidden`,
        progressbarFillClass : `${TRAVIS_API_JOBS_URL}-progressbar-fill`,
        progressbarOppositeClass : `${TRAVIS_API_JOBS_URL}-progressbar-opposite`,
        clickableClass : `${TRAVIS_API_JOBS_URL}-clickable`,
        lockClass : `${TRAVIS_API_JOBS_URL}-lock`,
        horizontalClass : `${TRAVIS_API_JOBS_URL}-horizontal`,
        verticalClass : `${TRAVIS_API_JOBS_URL}-vertical`
      }
    });
    self.pagination = {
      el : null,
      $el : null,
      bullets : []
    };
    let length = 0;
    on("init", () => {
      init();
      update();
      render();
    });
    on("activeIndexChange", () => {
      if (self.params.loop || void 0 === self.snapIndex) {
        render();
      }
    });
    on("snapIndexChange", () => {
      if (!self.params.loop) {
        render();
      }
    });
    on("slidesLengthChange", () => {
      if (self.params.loop) {
        update();
        render();
      }
    });
    on("snapGridLengthChange", () => {
      if (!self.params.loop) {
        update();
        render();
      }
    });
    on("destroy", () => {
      reset();
    });
    on("enable disable", () => {
      const {
        $el : el
      } = self.pagination;
      if (el) {
        el[self.enabled ? "removeClass" : "addClass"](self.params.pagination.lockClass);
      }
    });
    on("lock unlock", () => {
      render();
    });
    on("click", (canCreateDiscussions, mutationEvent) => {
      const tile = mutationEvent.target;
      const {
        $el : $link
      } = self.pagination;
      if (self.params.pagination.el && self.params.pagination.hideOnClick && $link.length > 0 && !filter(tile).hasClass(self.params.pagination.bulletClass)) {
        if (self.navigation && (self.navigation.nextEl && tile === self.navigation.nextEl || self.navigation.prevEl && tile === self.navigation.prevEl)) {
          return;
        }
        const t = $link.hasClass(self.params.pagination.hiddenClass);
        fire(true === t ? "paginationShow" : "paginationHide");
        $link.toggleClass(self.params.pagination.hiddenClass);
      }
    });
    Object.assign(self.pagination, {
      render : update,
      update : render,
      init : init,
      destroy : reset
    });
  }, function({
    swiper : self,
    extendParams : users,
    on : on,
    emit : emit
  }) {
    function init() {
      if (!self.params.scrollbar.el || !self.scrollbar.el) {
        return;
      }
      const {
        scrollbar : resp,
        rtlTranslate : targetPath,
        progress : progress
      } = self;
      const {
        $dragEl : $,
        $el : $el
      } = resp;
      const $trashTreeContextMenu = self.params.scrollbar;
      let x = width;
      let padding = (r - width) * progress;
      if (targetPath) {
        padding = -padding;
        if (padding > 0) {
          x = width - padding;
          padding = 0;
        } else {
          if (-padding + width > r) {
            x = r + padding;
          }
        }
      } else {
        if (padding < 0) {
          x = width + padding;
          padding = 0;
        } else {
          if (padding + width > r) {
            x = r - padding;
          }
        }
      }
      if (self.isHorizontal()) {
        $.transform(`translate3d(${padding}px, 0, 0)`);
        $[0].style.width = `${x}px`;
      } else {
        $.transform(`translate3d(0px, ${padding}px, 0)`);
        $[0].style.height = `${x}px`;
      }
      if ($trashTreeContextMenu.hide) {
        clearTimeout(_takingTooLongTimeout);
        $el[0].style.opacity = 1;
        _takingTooLongTimeout = setTimeout(() => {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1E3);
      }
    }
    function render() {
      if (!self.params.scrollbar.el || !self.scrollbar.el) {
        return;
      }
      const {
        scrollbar : statusbar
      } = self;
      const {
        $dragEl : $,
        $el : $el
      } = statusbar;
      $[0].style.width = "";
      $[0].style.height = "";
      r = self.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
      j = self.size / (self.virtualSize + self.params.slidesOffsetBefore - (self.params.centeredSlides ? self.snapGrid[0] : 0));
      width = "auto" === self.params.scrollbar.dragSize ? r * j : parseInt(self.params.scrollbar.dragSize, 10);
      if (self.isHorizontal()) {
        $[0].style.width = `${width}px`;
      } else {
        $[0].style.height = `${width}px`;
      }
      $el[0].style.display = j >= 1 ? "none" : "";
      if (self.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }
      if (self.params.watchOverflow && self.enabled) {
        statusbar.$el[self.isLocked ? "addClass" : "removeClass"](self.params.scrollbar.lockClass);
      }
    }
    function normalizeEvent(event) {
      return self.isHorizontal() ? "touchstart" === event.type || "touchmove" === event.type ? event.targetTouches[0].clientX : event.clientX : "touchstart" === event.type || "touchmove" === event.type ? event.targetTouches[0].clientY : event.clientY;
    }
    function draw(event) {
      const {
        scrollbar : appManagement,
        rtlTranslate : auth
      } = self;
      const {
        $el : $this
      } = appManagement;
      let num;
      num = (normalizeEvent(event) - $this.offset()[self.isHorizontal() ? "left" : "top"] - (null !== n ? n : width / 2)) / (r - width);
      num = Math.max(Math.min(num, 1), 0);
      if (auth) {
        num = 1 - num;
      }
      const newPosition = self.minTranslate() + (self.maxTranslate() - self.minTranslate()) * num;
      self.updateProgress(newPosition);
      self.setTranslate(newPosition);
      self.updateActiveIndex();
      self.updateSlidesClasses();
    }
    function callback(e) {
      const $trashTreeContextMenu = self.params.scrollbar;
      const {
        scrollbar : scrollbar,
        $wrapperEl : middleChild
      } = self;
      const {
        $el : element,
        $dragEl : node
      } = scrollbar;
      u = true;
      n = e.target === node[0] || e.target === node ? normalizeEvent(e) - e.target.getBoundingClientRect()[self.isHorizontal() ? "left" : "top"] : null;
      e.preventDefault();
      e.stopPropagation();
      middleChild.transition(100);
      node.transition(100);
      draw(e);
      clearTimeout(paintNodesTimeout);
      element.transition(0);
      if ($trashTreeContextMenu.hide) {
        element.css("opacity", 1);
      }
      if (self.params.cssMode) {
        self.$wrapperEl.css("scroll-snap-type", "none");
      }
      emit("scrollbarDragStart", e);
    }
    function handler(e) {
      const {
        scrollbar : scrollbar,
        $wrapperEl : middleChild
      } = self;
      const {
        $el : el,
        $dragEl : config
      } = scrollbar;
      if (u) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
        draw(e);
        middleChild.transition(0);
        el.transition(0);
        config.transition(0);
        emit("scrollbarDragMove", e);
      }
    }
    function update(event) {
      const params = self.params.scrollbar;
      const {
        scrollbar : classGroups,
        $wrapperEl : classNames
      } = self;
      const {
        $el : el
      } = classGroups;
      if (u) {
        u = false;
        if (self.params.cssMode) {
          self.$wrapperEl.css("scroll-snap-type", "");
          classNames.transition("");
        }
        if (params.hide) {
          clearTimeout(paintNodesTimeout);
          paintNodesTimeout = setTimeout(() => {
            el.css("opacity", 0);
            el.transition(400);
          }, 1E3);
        }
        emit("scrollbarDragEnd", event);
        if (params.snapOnRelease) {
          self.slideToClosest();
        }
      }
    }
    function debug(on) {
      const {
        scrollbar : filter,
        touchEventsTouch : config,
        touchEventsDesktop : data,
        params : params,
        support : support
      } = self;
      const element = filter.$el[0];
      const useCapture = !(!support.passiveListener || !params.passiveListeners) && {
        passive : false,
        capture : false
      };
      const conditionalAssignment = !(!support.passiveListener || !params.passiveListeners) && {
        passive : true,
        capture : false
      };
      if (!element) {
        return;
      }
      const method = "on" === on ? "addEventListener" : "removeEventListener";
      if (support.touch) {
        element[method](config.start, callback, useCapture);
        element[method](config.move, handler, useCapture);
        element[method](config.end, update, conditionalAssignment);
      } else {
        element[method](data.start, callback, useCapture);
        target[method](data.move, handler, useCapture);
        target[method](data.end, update, conditionalAssignment);
      }
    }
    function _init() {
      const {
        scrollbar : $,
        $el : $el
      } = self;
      self.params.scrollbar = show(self, self.originalParams.scrollbar, self.params.scrollbar, {
        el : "swiper-scrollbar"
      });
      const me = self.params.scrollbar;
      if (!me.el) {
        return;
      }
      let $element = filter(me.el);
      if (self.params.uniqueNavElements && "string" == typeof me.el && $element.length > 1 && 1 === $el.find(me.el).length) {
        $element = $el.find(me.el);
      }
      let date = $element.find(`.${self.params.scrollbar.dragClass}`);
      if (0 === date.length) {
        date = filter(`<div class="${self.params.scrollbar.dragClass}"></div>`);
        $element.append(date);
      }
      Object.assign($, {
        $el : $element,
        el : $element[0],
        $dragEl : date,
        dragEl : date[0]
      });
      if (me.draggable && self.params.scrollbar.el) {
        debug("on");
      }
      if ($element) {
        $element[self.enabled ? "removeClass" : "addClass"](self.params.scrollbar.lockClass);
      }
    }
    function run() {
      if (self.params.scrollbar.el) {
        debug("off");
      }
    }
    const target = $();
    let n;
    let width;
    let r;
    let j;
    let u = false;
    let _takingTooLongTimeout = null;
    let paintNodesTimeout = null;
    users({
      scrollbar : {
        el : null,
        dragSize : "auto",
        hide : false,
        draggable : false,
        snapOnRelease : true,
        lockClass : "swiper-scrollbar-lock",
        dragClass : "swiper-scrollbar-drag"
      }
    });
    self.scrollbar = {
      el : null,
      dragEl : null,
      $el : null,
      $dragEl : null
    };
    on("init", () => {
      _init();
      render();
      init();
    });
    on("update resize observerUpdate lock unlock", () => {
      render();
    });
    on("setTranslate", () => {
      init();
    });
    on("setTransition", (canCreateDiscussions, tResult) => {
      !function(t) {
        if (self.params.scrollbar.el && self.scrollbar.el) {
          self.scrollbar.$dragEl.transition(t);
        }
      }(tResult);
    });
    on("enable disable", () => {
      const {
        $el : el
      } = self.scrollbar;
      if (el) {
        el[self.enabled ? "removeClass" : "addClass"](self.params.scrollbar.lockClass);
      }
    });
    on("destroy", () => {
      run();
    });
    Object.assign(self.scrollbar, {
      updateSize : render,
      setTranslate : init,
      init : _init,
      destroy : run
    });
  }, function({
    swiper : s,
    extendParams : r,
    on : on
  }) {
    r({
      parallax : {
        enabled : false
      }
    });
    const animate = (frame, scale) => {
      const {
        rtl : rtl
      } = s;
      const el = filter(frame);
      const rowHeight = rtl ? -1 : 1;
      const plot_or_index = el.attr("data-swiper-parallax") || "0";
      let i = el.attr("data-swiper-parallax-x");
      let p = el.attr("data-swiper-parallax-y");
      const c = el.attr("data-swiper-parallax-scale");
      const j = el.attr("data-swiper-parallax-opacity");
      if (i || p ? (i = i || "0", p = p || "0") : s.isHorizontal() ? (i = plot_or_index, p = "0") : (p = plot_or_index, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * scale * rowHeight + "%" : i * scale * rowHeight + "px", p = p.indexOf("%") >= 0 ? parseInt(p, 10) * scale + "%" : p * scale + "px", null != j) {
        const notAvailableOpacity = j - (j - 1) * (1 - Math.abs(scale));
        el[0].style.opacity = notAvailableOpacity;
      }
      if (null == c) {
        el.transform(`translate3d(${i}, ${p}, 0px)`);
      } else {
        const e = c - (c - 1) * (1 - Math.abs(scale));
        el.transform(`translate3d(${i}, ${p}, 0px) scale(${e})`);
      }
    };
    const init = () => {
      const {
        $el : include,
        slides : slides,
        progress : progress,
        snapGrid : sort
      } = s;
      include.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((begin) => {
        animate(begin, progress);
      });
      slides.each((frame, totalDeps) => {
        let red = frame.progress;
        if (s.params.slidesPerGroup > 1 && "auto" !== s.params.slidesPerView) {
          red = red + (Math.ceil(totalDeps / 2) - progress * (sort.length - 1));
        }
        red = Math.min(Math.max(red, -1), 1);
        filter(frame).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((begin) => {
          animate(begin, red);
        });
      });
    };
    on("beforeInit", () => {
      if (s.params.parallax.enabled) {
        s.params.watchSlidesProgress = true;
        s.originalParams.watchSlidesProgress = true;
      }
    });
    on("init", () => {
      if (s.params.parallax.enabled) {
        init();
      }
    });
    on("setTranslate", () => {
      if (s.params.parallax.enabled) {
        init();
      }
    });
    on("setTransition", (canCreateDiscussions, s) => {
      if (s.params.parallax.enabled) {
        ((MENU_SCALE_PART = s.params.speed) => {
          const {
            $el : $this
          } = s;
          $this.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((item2) => {
            const el = filter(item2);
            let transition = parseInt(el.attr("data-swiper-parallax-duration"), 10) || MENU_SCALE_PART;
            if (0 === MENU_SCALE_PART) {
              transition = 0;
            }
            el.transition(transition);
          });
        })(s);
      }
    });
  }, function({
    swiper : _this,
    extendParams : getStaticImageURL,
    on : getHandler,
    emit : emit
  }) {
    function getTouch(e) {
      if (e.targetTouches.length < 2) {
        return 1;
      }
      const t = e.targetTouches[0].pageX;
      const s = e.targetTouches[0].pageY;
      const q = e.targetTouches[1].pageX;
      const time1 = e.targetTouches[1].pageY;
      return Math.sqrt((q - t) ** 2 + (time1 - s) ** 2);
    }
    function callback(e) {
      const importJSON = _this.support;
      const opts = _this.params.zoom;
      if (l = false, m = false, !importJSON.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) {
          return;
        }
        l = true;
        self.scaleStart = getTouch(e);
      }
      if (self.$slideEl && self.$slideEl.length || (self.$slideEl = filter(e.target).closest(`.${_this.params.slideClass}`), 0 === self.$slideEl.length && (self.$slideEl = _this.slides.eq(_this.activeIndex)), self.$imageEl = self.$slideEl.find(`.${opts.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), self.$imageWrapEl = self.$imageEl.parent(`.${opts.containerClass}`), self.maxRatio = self.$imageWrapEl.attr("data-swiper-zoom") || opts.maxRatio, 0 !== self.$imageWrapEl.length)) {
        if (self.$imageEl) {
          self.$imageEl.transition(0);
        }
        data = true;
      } else {
        self.$imageEl = void 0;
      }
    }
    function onMouseMove(e) {
      const importJSON = _this.support;
      const event = _this.params.zoom;
      const data = _this.zoom;
      if (!importJSON.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) {
          return;
        }
        m = true;
        self.scaleMove = getTouch(e);
      }
      if (self.$imageEl && 0 !== self.$imageEl.length) {
        if (importJSON.gestures) {
          data.scale = e.scale * scale;
        } else {
          data.scale = self.scaleMove / self.scaleStart * scale;
        }
        if (data.scale > self.maxRatio) {
          data.scale = self.maxRatio - 1 + (data.scale - self.maxRatio + 1) ** .5;
        }
        if (data.scale < event.minRatio) {
          data.scale = event.minRatio + 1 - (event.minRatio - data.scale + 1) ** .5;
        }
        self.$imageEl.transform(`translate3d(0,0,0) scale(${data.scale})`);
      } else {
        if ("gesturechange" === e.type) {
          callback(e);
        }
      }
    }
    function handleTouchEnd(event) {
      const realForegroundColor = _this.device;
      const importJSON = _this.support;
      const arg = _this.params.zoom;
      const sprite = _this.zoom;
      if (!importJSON.gestures) {
        if (!l || !m) {
          return;
        }
        if ("touchend" !== event.type || "touchend" === event.type && event.changedTouches.length < 2 && !realForegroundColor.android) {
          return;
        }
        l = false;
        m = false;
      }
      if (self.$imageEl && 0 !== self.$imageEl.length) {
        sprite.scale = Math.max(Math.min(sprite.scale, self.maxRatio), arg.minRatio);
        self.$imageEl.transition(_this.params.speed).transform(`translate3d(0,0,0) scale(${sprite.scale})`);
        scale = sprite.scale;
        data = false;
        if (1 === sprite.scale) {
          self.$slideEl = void 0;
        }
      }
    }
    function drag(event) {
      const w = _this.zoom;
      if (!self.$imageEl || 0 === self.$imageEl.length) {
        return;
      }
      if (_this.allowClick = false, !p.isTouched || !self.$slideEl) {
        return;
      }
      if (!p.isMoved) {
        p.width = self.$imageEl[0].offsetWidth;
        p.height = self.$imageEl[0].offsetHeight;
        p.startX = transform(self.$imageWrapEl[0], "x") || 0;
        p.startY = transform(self.$imageWrapEl[0], "y") || 0;
        self.slideWidth = self.$slideEl[0].offsetWidth;
        self.slideHeight = self.$slideEl[0].offsetHeight;
        self.$imageWrapEl.transition(0);
      }
      const capwords = p.width * w.scale;
      const seenRefereshCount = p.height * w.scale;
      if (!(capwords < self.slideWidth && seenRefereshCount < self.slideHeight)) {
        if (p.minX = Math.min(self.slideWidth / 2 - capwords / 2, 0), p.maxX = -p.minX, p.minY = Math.min(self.slideHeight / 2 - seenRefereshCount / 2, 0), p.maxY = -p.minY, p.touchesCurrent.x = "touchmove" === event.type ? event.targetTouches[0].pageX : event.pageX, p.touchesCurrent.y = "touchmove" === event.type ? event.targetTouches[0].pageY : event.pageY, !p.isMoved && !data) {
          if (_this.isHorizontal() && (Math.floor(p.minX) === Math.floor(p.startX) && p.touchesCurrent.x < p.touchesStart.x || Math.floor(p.maxX) === Math.floor(p.startX) && p.touchesCurrent.x > p.touchesStart.x)) {
            return void(p.isTouched = false);
          }
          if (!_this.isHorizontal() && (Math.floor(p.minY) === Math.floor(p.startY) && p.touchesCurrent.y < p.touchesStart.y || Math.floor(p.maxY) === Math.floor(p.startY) && p.touchesCurrent.y > p.touchesStart.y)) {
            return void(p.isTouched = false);
          }
        }
        if (event.cancelable) {
          event.preventDefault();
        }
        event.stopPropagation();
        p.isMoved = true;
        p.currentX = p.touchesCurrent.x - p.touchesStart.x + p.startX;
        p.currentY = p.touchesCurrent.y - p.touchesStart.y + p.startY;
        if (p.currentX < p.minX) {
          p.currentX = p.minX + 1 - (p.minX - p.currentX + 1) ** .8;
        }
        if (p.currentX > p.maxX) {
          p.currentX = p.maxX - 1 + (p.currentX - p.maxX + 1) ** .8;
        }
        if (p.currentY < p.minY) {
          p.currentY = p.minY + 1 - (p.minY - p.currentY + 1) ** .8;
        }
        if (p.currentY > p.maxY) {
          p.currentY = p.maxY - 1 + (p.currentY - p.maxY + 1) ** .8;
        }
        if (!me.prevPositionX) {
          me.prevPositionX = p.touchesCurrent.x;
        }
        if (!me.prevPositionY) {
          me.prevPositionY = p.touchesCurrent.y;
        }
        if (!me.prevTime) {
          me.prevTime = Date.now();
        }
        me.x = (p.touchesCurrent.x - me.prevPositionX) / (Date.now() - me.prevTime) / 2;
        me.y = (p.touchesCurrent.y - me.prevPositionY) / (Date.now() - me.prevTime) / 2;
        if (Math.abs(p.touchesCurrent.x - me.prevPositionX) < 2) {
          me.x = 0;
        }
        if (Math.abs(p.touchesCurrent.y - me.prevPositionY) < 2) {
          me.y = 0;
        }
        me.prevPositionX = p.touchesCurrent.x;
        me.prevPositionY = p.touchesCurrent.y;
        me.prevTime = Date.now();
        self.$imageWrapEl.transform(`translate3d(${p.currentX}px, ${p.currentY}px,0)`);
      }
    }
    function onload() {
      const thGraphConfig = _this.zoom;
      if (self.$slideEl && _this.previousIndex !== _this.activeIndex) {
        if (self.$imageEl) {
          self.$imageEl.transform("translate3d(0,0,0) scale(1)");
        }
        if (self.$imageWrapEl) {
          self.$imageWrapEl.transform("translate3d(0,0,0)");
        }
        thGraphConfig.scale = 1;
        scale = 1;
        self.$slideEl = void 0;
        self.$imageEl = void 0;
        self.$imageWrapEl = void 0;
      }
    }
    function render(e) {
      const scope = _this.zoom;
      const opts = _this.params.zoom;
      if (self.$slideEl || (e && e.target && (self.$slideEl = filter(e.target).closest(`.${_this.params.slideClass}`)), self.$slideEl || (_this.params.virtual && _this.params.virtual.enabled && _this.virtual ? self.$slideEl = _this.$wrapperEl.children(`.${_this.params.slideActiveClass}`) : self.$slideEl = _this.slides.eq(_this.activeIndex)), self.$imageEl = self.$slideEl.find(`.${opts.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), self.$imageWrapEl = self.$imageEl.parent(`.${opts.containerClass}`)), 
      !self.$imageEl || 0 === self.$imageEl.length || !self.$imageWrapEl || 0 === self.$imageWrapEl.length) {
        return;
      }
      let v;
      let start;
      let elX;
      let offset;
      let curCamHeight;
      let l;
      let j;
      let g;
      let v2;
      let s;
      let nextGaussian;
      let itemHeight;
      let height;
      let G;
      let y;
      let maxG;
      let elW;
      let colHeight;
      if (_this.params.cssMode) {
        _this.wrapperEl.style.overflow = "hidden";
        _this.wrapperEl.style.touchAction = "none";
      }
      self.$slideEl.addClass(`${opts.zoomedSlideClass}`);
      if (void 0 === p.touchesStart.x && e) {
        v = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX;
        start = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY;
      } else {
        v = p.touchesStart.x;
        start = p.touchesStart.y;
      }
      scope.scale = self.$imageWrapEl.attr("data-swiper-zoom") || opts.maxRatio;
      scale = self.$imageWrapEl.attr("data-swiper-zoom") || opts.maxRatio;
      if (e) {
        elW = self.$slideEl[0].offsetWidth;
        colHeight = self.$slideEl[0].offsetHeight;
        elX = self.$slideEl.offset().left + ps.scrollX;
        offset = self.$slideEl.offset().top + ps.scrollY;
        curCamHeight = elX + elW / 2 - v;
        l = offset + colHeight / 2 - start;
        v2 = self.$imageEl[0].offsetWidth;
        s = self.$imageEl[0].offsetHeight;
        nextGaussian = v2 * scope.scale;
        itemHeight = s * scope.scale;
        height = Math.min(elW / 2 - nextGaussian / 2, 0);
        G = Math.min(colHeight / 2 - itemHeight / 2, 0);
        y = -height;
        maxG = -G;
        j = curCamHeight * scope.scale;
        g = l * scope.scale;
        if (j < height) {
          j = height;
        }
        if (j > y) {
          j = y;
        }
        if (g < G) {
          g = G;
        }
        if (g > maxG) {
          g = maxG;
        }
      } else {
        j = 0;
        g = 0;
      }
      self.$imageWrapEl.transition(300).transform(`translate3d(${j}px, ${g}px,0)`);
      self.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${scope.scale})`);
    }
    function init() {
      const thGraphConfig = _this.zoom;
      const o = _this.params.zoom;
      if (!self.$slideEl) {
        if (_this.params.virtual && _this.params.virtual.enabled && _this.virtual) {
          self.$slideEl = _this.$wrapperEl.children(`.${_this.params.slideActiveClass}`);
        } else {
          self.$slideEl = _this.slides.eq(_this.activeIndex);
        }
        self.$imageEl = self.$slideEl.find(`.${o.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target");
        self.$imageWrapEl = self.$imageEl.parent(`.${o.containerClass}`);
      }
      if (self.$imageEl && 0 !== self.$imageEl.length && self.$imageWrapEl && 0 !== self.$imageWrapEl.length) {
        if (_this.params.cssMode) {
          _this.wrapperEl.style.overflow = "";
          _this.wrapperEl.style.touchAction = "";
        }
        thGraphConfig.scale = 1;
        scale = 1;
        self.$imageWrapEl.transition(300).transform("translate3d(0,0,0)");
        self.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)");
        self.$slideEl.removeClass(`${o.zoomedSlideClass}`);
        self.$slideEl = void 0;
      }
    }
    function handler(name) {
      const thGraphConfig = _this.zoom;
      if (thGraphConfig.scale && 1 !== thGraphConfig.scale) {
        init();
      } else {
        render(name);
      }
    }
    function attach() {
      const t = _this.support;
      return {
        passiveListener : !("touchstart" !== _this.touchEvents.start || !t.passiveListener || !_this.params.passiveListeners) && {
          passive : true,
          capture : false
        },
        activeListenerWithCapture : !t.passiveListener || {
          passive : false,
          capture : true
        }
      };
    }
    function _init() {
      return `.${_this.params.slideClass}`;
    }
    function toggle(action) {
      const {
        passiveListener : i
      } = attach();
      const fn = _init();
      _this.$wrapperEl[action]("gesturestart", fn, callback, i);
      _this.$wrapperEl[action]("gesturechange", fn, onMouseMove, i);
      _this.$wrapperEl[action]("gestureend", fn, handleTouchEnd, i);
    }
    function add() {
      if (!n) {
        n = true;
        toggle("on");
      }
    }
    function debouncedUpdateResize() {
      if (n) {
        n = false;
        toggle("off");
      }
    }
    function initialize() {
      const streamSize2 = _this.zoom;
      if (streamSize2.enabled) {
        return;
      }
      streamSize2.enabled = true;
      const importJSON = _this.support;
      const {
        passiveListener : mixfn,
        activeListenerWithCapture : onResizeWindow
      } = attach();
      const reconnectingCallback = _init();
      if (importJSON.gestures) {
        _this.$wrapperEl.on(_this.touchEvents.start, add, mixfn);
        _this.$wrapperEl.on(_this.touchEvents.end, debouncedUpdateResize, mixfn);
      } else {
        if ("touchstart" === _this.touchEvents.start) {
          _this.$wrapperEl.on(_this.touchEvents.start, reconnectingCallback, callback, mixfn);
          _this.$wrapperEl.on(_this.touchEvents.move, reconnectingCallback, onMouseMove, onResizeWindow);
          _this.$wrapperEl.on(_this.touchEvents.end, reconnectingCallback, handleTouchEnd, mixfn);
          if (_this.touchEvents.cancel) {
            _this.$wrapperEl.on(_this.touchEvents.cancel, reconnectingCallback, handleTouchEnd, mixfn);
          }
        }
      }
      _this.$wrapperEl.on(_this.touchEvents.move, `.${_this.params.zoom.containerClass}`, drag, onResizeWindow);
    }
    function setup() {
      const streamSize2 = _this.zoom;
      if (!streamSize2.enabled) {
        return;
      }
      const importJSON = _this.support;
      streamSize2.enabled = false;
      const {
        passiveListener : click,
        activeListenerWithCapture : useCapture
      } = attach();
      const debouncedUpdateResize = _init();
      if (importJSON.gestures) {
        _this.$wrapperEl.off(_this.touchEvents.start, add, click);
        _this.$wrapperEl.off(_this.touchEvents.end, debouncedUpdateResize, click);
      } else {
        if ("touchstart" === _this.touchEvents.start) {
          _this.$wrapperEl.off(_this.touchEvents.start, debouncedUpdateResize, callback, click);
          _this.$wrapperEl.off(_this.touchEvents.move, debouncedUpdateResize, onMouseMove, useCapture);
          _this.$wrapperEl.off(_this.touchEvents.end, debouncedUpdateResize, handleTouchEnd, click);
          if (_this.touchEvents.cancel) {
            _this.$wrapperEl.off(_this.touchEvents.cancel, debouncedUpdateResize, handleTouchEnd, click);
          }
        }
      }
      _this.$wrapperEl.off(_this.touchEvents.move, `.${_this.params.zoom.containerClass}`, drag, useCapture);
    }
    const ps = indexOf();
    getStaticImageURL({
      zoom : {
        enabled : false,
        maxRatio : 3,
        minRatio : 1,
        toggle : true,
        containerClass : "swiper-zoom-container",
        zoomedSlideClass : "swiper-slide-zoomed"
      }
    });
    _this.zoom = {
      enabled : false
    };
    let n;
    let l;
    let m;
    let scale = 1;
    let data = false;
    const self = {
      $slideEl : void 0,
      slideWidth : void 0,
      slideHeight : void 0,
      $imageEl : void 0,
      $imageWrapEl : void 0,
      maxRatio : 3
    };
    const p = {
      isTouched : void 0,
      isMoved : void 0,
      currentX : void 0,
      currentY : void 0,
      minX : void 0,
      minY : void 0,
      maxX : void 0,
      maxY : void 0,
      width : void 0,
      height : void 0,
      startX : void 0,
      startY : void 0,
      touchesStart : {},
      touchesCurrent : {}
    };
    const me = {
      x : void 0,
      y : void 0,
      prevPositionX : void 0,
      prevPositionY : void 0,
      prevTime : void 0
    };
    let v = 1;
    Object.defineProperty(_this.zoom, "scale", {
      get : () => {
        return v;
      },
      set(e) {
        if (v !== e) {
          const data = self.$imageEl ? self.$imageEl[0] : void 0;
          const fields = self.$slideEl ? self.$slideEl[0] : void 0;
          emit("zoomChange", e, data, fields);
        }
        v = e;
      }
    });
    getHandler("init", () => {
      if (_this.params.zoom.enabled) {
        initialize();
      }
    });
    getHandler("destroy", () => {
      setup();
    });
    getHandler("touchStart", (canCreateDiscussions, webcal) => {
      if (_this.zoom.enabled) {
        (function(event) {
          const options = _this.device;
          if (self.$imageEl && 0 !== self.$imageEl.length) {
            if (!p.isTouched) {
              if (options.android && event.cancelable) {
                event.preventDefault();
              }
              p.isTouched = true;
              p.touchesStart.x = "touchstart" === event.type ? event.targetTouches[0].pageX : event.pageX;
              p.touchesStart.y = "touchstart" === event.type ? event.targetTouches[0].pageY : event.pageY;
            }
          }
        })(webcal);
      }
    });
    getHandler("touchEnd", (canCreateDiscussions, s) => {
      if (_this.zoom.enabled) {
        (function() {
          const w = _this.zoom;
          if (!self.$imageEl || 0 === self.$imageEl.length) {
            return;
          }
          if (!p.isTouched || !p.isMoved) {
            return p.isTouched = false, void(p.isMoved = false);
          }
          p.isTouched = false;
          p.isMoved = false;
          let i = 300;
          let percent = 300;
          const distX = me.x * i;
          const x = p.currentX + distX;
          const _btnPrint = me.y * percent;
          const y = p.currentY + _btnPrint;
          if (0 !== me.x) {
            i = Math.abs((x - p.currentX) / me.x);
          }
          if (0 !== me.y) {
            percent = Math.abs((y - p.currentY) / me.y);
          }
          const transition = Math.max(i, percent);
          p.currentX = x;
          p.currentY = y;
          const d = p.width * w.scale;
          const c = p.height * w.scale;
          p.minX = Math.min(self.slideWidth / 2 - d / 2, 0);
          p.maxX = -p.minX;
          p.minY = Math.min(self.slideHeight / 2 - c / 2, 0);
          p.maxY = -p.minY;
          p.currentX = Math.max(Math.min(p.currentX, p.maxX), p.minX);
          p.currentY = Math.max(Math.min(p.currentY, p.maxY), p.minY);
          self.$imageWrapEl.transition(transition).transform(`translate3d(${p.currentX}px, ${p.currentY}px,0)`);
        })();
      }
    });
    getHandler("doubleTap", (canCreateDiscussions, key) => {
      if (!_this.animating && _this.params.zoom.enabled && _this.zoom.enabled && _this.params.zoom.toggle) {
        handler(key);
      }
    });
    getHandler("transitionEnd", () => {
      if (_this.zoom.enabled && _this.params.zoom.enabled) {
        onload();
      }
    });
    getHandler("slideChange", () => {
      if (_this.zoom.enabled && _this.params.zoom.enabled && _this.params.cssMode) {
        onload();
      }
    });
    Object.assign(_this.zoom, {
      enable : initialize,
      disable : setup,
      in : render,
      out : init,
      toggle : handler
    });
  }, function({
    swiper : self,
    extendParams : createPlugin,
    on : on,
    emit : capture
  }) {
    function init(key, s = true) {
      const config = self.params.lazy;
      if (void 0 === key) {
        return;
      }
      if (0 === self.slides.length) {
        return;
      }
      const o = self.virtual && self.params.virtual.enabled ? self.$wrapperEl.children(`.${self.params.slideClass}[data-swiper-slide-index="${key}"]`) : self.slides.eq(key);
      const fragments = o.find(`.${config.elementClass}:not(.${config.loadedClass}):not(.${config.loadingClass})`);
      if (!(!o.hasClass(config.elementClass) || o.hasClass(config.loadedClass) || o.hasClass(config.loadingClass))) {
        fragments.push(o[0]);
      }
      if (0 !== fragments.length) {
        fragments.each((item2) => {
          const el = filter(item2);
          el.addClass(config.loadingClass);
          const noop = el.attr("data-background");
          const error = el.attr("data-src");
          const id = el.attr("data-srcset");
          const callback = el.attr("data-sizes");
          const khover = el.parent("picture");
          self.loadImage(el[0], error || noop, id, callback, false, () => {
            if (null != self && self && (!self || self.params) && !self.destroyed) {
              if (noop ? (el.css("background-image", `url("${noop}")`), el.removeAttr("data-background")) : (id && (el.attr("srcset", id), el.removeAttr("data-srcset")), callback && (el.attr("sizes", callback), el.removeAttr("data-sizes")), khover.length && khover.children("source").each((item2) => {
                const element = filter(item2);
                if (element.attr("data-srcset")) {
                  element.attr("srcset", element.attr("data-srcset"));
                  element.removeAttr("data-srcset");
                }
              }), error && (el.attr("src", error), el.removeAttr("data-src"))), el.addClass(config.loadedClass).removeClass(config.loadingClass), o.find(`.${config.preloaderClass}`).remove(), self.params.loop && s) {
                const t = o.attr("data-swiper-slide-index");
                if (o.hasClass(self.params.slideDuplicateClass)) {
                  init(self.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${self.params.slideDuplicateClass})`).index(), false);
                } else {
                  init(self.$wrapperEl.children(`.${self.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(), false);
                }
              }
              capture("lazyImageReady", o[0], el[0]);
              if (self.params.autoHeight) {
                self.updateAutoHeight();
              }
            }
          });
          capture("lazyImageLoad", o[0], el[0]);
        });
      }
    }
    function update() {
      function _init(index) {
        if (r) {
          if (route.children(`.${params.slideClass}[data-swiper-slide-index="${index}"]`).length) {
            return true;
          }
        } else {
          if (slides[index]) {
            return true;
          }
        }
        return false;
      }
      function resolve(obj) {
        return r ? filter(obj).attr("data-swiper-slide-index") : filter(obj).index();
      }
      const {
        $wrapperEl : route,
        params : params,
        slides : slides,
        activeIndex : i
      } = self;
      const r = self.virtual && params.virtual.enabled;
      const o = params.lazy;
      let devicesInListAlready = params.slidesPerView;
      if ("auto" === devicesInListAlready && (devicesInListAlready = 0), n || (n = true), self.params.watchSlidesProgress) {
        route.children(`.${params.slideVisibleClass}`).each((root) => {
          init(r ? filter(root).attr("data-swiper-slide-index") : filter(root).index());
        });
      } else {
        if (devicesInListAlready > 1) {
          for (let m = i; m < i + devicesInListAlready; m = m + 1) {
            if (_init(m)) {
              init(m);
            }
          }
        } else {
          init(i);
        }
      }
      if (o.loadPrevNext) {
        if (devicesInListAlready > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
          const end = o.loadPrevNextAmount;
          const indent = devicesInListAlready;
          const newRowCount = Math.min(i + indent + Math.max(end, indent), slides.length);
          const r = Math.max(i - Math.max(indent, end), 0);
          for (let r = i + devicesInListAlready; r < newRowCount; r = r + 1) {
            if (_init(r)) {
              init(r);
            }
          }
          for (let j = r; j < i; j = j + 1) {
            if (_init(j)) {
              init(j);
            }
          }
        } else {
          const options = route.children(`.${params.slideNextClass}`);
          if (options.length > 0) {
            init(resolve(options));
          }
          const proxy = route.children(`.${params.slidePrevClass}`);
          if (proxy.length > 0) {
            init(resolve(proxy));
          }
        }
      }
    }
    function render() {
      const root = indexOf();
      if (!self || self.destroyed) {
        return;
      }
      const element = self.params.lazy.scrollingElement ? filter(self.params.lazy.scrollingElement) : filter(root);
      const isWin = element[0] === root;
      const n = isWin ? root.innerWidth : element[0].offsetWidth;
      const blockSize = isWin ? root.innerHeight : element[0].offsetHeight;
      const box = self.$el.offset();
      const {
        rtlTranslate : u
      } = self;
      let h = false;
      if (u) {
        box.left -= self.$el[0].scrollLeft;
      }
      const keywordResults = [[box.left, box.top], [box.left + self.width, box.top], [box.left, box.top + self.height], [box.left + self.width, box.top + self.height]];
      for (let i = 0; i < keywordResults.length; i = i + 1) {
        const data = keywordResults[i];
        if (data[0] >= 0 && data[0] <= n && data[1] >= 0 && data[1] <= blockSize) {
          if (0 === data[0] && 0 === data[1]) {
            continue;
          }
          h = true;
        }
      }
      const capture = !("touchstart" !== self.touchEvents.start || !self.support.passiveListener || !self.params.passiveListeners) && {
        passive : true,
        capture : false
      };
      if (h) {
        update();
        element.off("scroll", render, capture);
      } else {
        if (!i) {
          i = true;
          element.on("scroll", render, capture);
        }
      }
    }
    createPlugin({
      lazy : {
        checkInView : false,
        enabled : false,
        loadPrevNext : false,
        loadPrevNextAmount : 1,
        loadOnTransitionStart : false,
        scrollingElement : "",
        elementClass : "swiper-lazy",
        loadingClass : "swiper-lazy-loading",
        loadedClass : "swiper-lazy-loaded",
        preloaderClass : "swiper-lazy-preloader"
      }
    });
    self.lazy = {};
    let i = false;
    let n = false;
    on("beforeInit", () => {
      if (self.params.lazy.enabled && self.params.preloadImages) {
        self.params.preloadImages = false;
      }
    });
    on("init", () => {
      if (self.params.lazy.enabled) {
        if (self.params.lazy.checkInView) {
          render();
        } else {
          update();
        }
      }
    });
    on("scroll", () => {
      if (self.params.freeMode && self.params.freeMode.enabled && !self.params.freeMode.sticky) {
        update();
      }
    });
    on("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
      if (self.params.lazy.enabled) {
        if (self.params.lazy.checkInView) {
          render();
        } else {
          update();
        }
      }
    });
    on("transitionStart", () => {
      if (self.params.lazy.enabled && (self.params.lazy.loadOnTransitionStart || !self.params.lazy.loadOnTransitionStart && !n)) {
        if (self.params.lazy.checkInView) {
          render();
        } else {
          update();
        }
      }
    });
    on("transitionEnd", () => {
      if (self.params.lazy.enabled && !self.params.lazy.loadOnTransitionStart) {
        if (self.params.lazy.checkInView) {
          render();
        } else {
          update();
        }
      }
    });
    on("slideChange", () => {
      const {
        lazy : config,
        cssMode : env,
        watchSlidesProgress : issue,
        touchReleaseOnEdges : strictEquality,
        resistanceRatio : name
      } = self.params;
      if (config.enabled && (env || issue && (strictEquality || 0 === name))) {
        update();
      }
    });
    Object.assign(self.lazy, {
      load : update,
      loadInSlide : init
    });
  }, function({
    swiper : self,
    extendParams : createContainer,
    on : on
  }) {
    function set(f, d) {
      const transform = function() {
        let n;
        let h;
        let s;
        return (selectionColumns, cellRightEdge) => {
          h = -1;
          n = selectionColumns.length;
          for (; n - h > 1;) {
            s = n + h >> 1;
            if (selectionColumns[s] <= cellRightEdge) {
              h = s;
            } else {
              n = s;
            }
          }
          return n;
        };
      }();
      let j;
      let i;
      return this.x = f, this.y = d, this.lastIndex = f.length - 1, this.interpolate = function(x) {
        return x ? (i = transform(this.x, x), j = i - 1, (x - this.x[j]) * (this.y[i] - this.y[j]) / (this.x[i] - this.x[j]) + this.y[j]) : 0;
      }, this;
    }
    function getControlClasses() {
      if (self.controller.control && self.controller.spline) {
        self.controller.spline = void 0;
        delete self.controller.spline;
      }
    }
    createContainer({
      controller : {
        control : void 0,
        inverse : false,
        by : "slide"
      }
    });
    self.controller = {
      control : void 0
    };
    on("beforeInit", () => {
      self.controller.control = self.params.controller.control;
    });
    on("update", () => {
      getControlClasses();
    });
    on("resize", () => {
      getControlClasses();
    });
    on("observerUpdate", () => {
      getControlClasses();
    });
    on("setTranslate", (canCreateDiscussions, position, curr) => {
      if (self.controller.control) {
        self.controller.setTranslate(position, curr);
      }
    });
    on("setTransition", (canCreateDiscussions, callback, trans) => {
      if (self.controller.control) {
        self.controller.setTransition(callback, trans);
      }
    });
    Object.assign(self.controller, {
      setTranslate : function(value, byController) {
        function update(s) {
          const resizedTileHeight = self.rtlTranslate ? -self.translate : self.translate;
          if ("slide" === self.params.controller.by) {
            !function(s) {
              if (!self.controller.spline) {
                self.controller.spline = self.params.loop ? new set(self.slidesGrid, s.slidesGrid) : new set(self.snapGrid, s.snapGrid);
              }
            }(s);
            i = -self.controller.spline.interpolate(-resizedTileHeight);
          }
          if (!(i && "container" !== self.params.controller.by)) {
            curZoom = (s.maxTranslate() - s.minTranslate()) / (self.maxTranslate() - self.minTranslate());
            i = (resizedTileHeight - self.minTranslate()) * curZoom + s.minTranslate();
          }
          if (self.params.controller.inverse) {
            i = s.maxTranslate() - i;
          }
          s.updateProgress(i);
          s.setTranslate(i, self);
          s.updateActiveIndex();
          s.updateSlidesClasses();
        }
        const controlled = self.controller.control;
        let curZoom;
        let i;
        const Swiper = self.constructor;
        if (Array.isArray(controlled)) {
          for (let i = 0; i < controlled.length; i = i + 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              update(controlled[i]);
            }
          }
        } else {
          if (controlled instanceof Swiper && byController !== controlled) {
            update(controlled);
          }
        }
      },
      setTransition : function(transition, byController) {
        function init(that) {
          that.setTransition(transition, self);
          if (0 !== transition) {
            that.transitionStart();
            if (that.params.autoHeight) {
              setTimeout(() => {
                that.updateAutoHeight();
              });
            }
            that.$wrapperEl.transitionEnd(() => {
              if (controlled) {
                if (that.params.loop && "slide" === self.params.controller.by) {
                  that.loopFix();
                }
                that.transitionEnd();
              }
            });
          }
        }
        const Swiper = self.constructor;
        const controlled = self.controller.control;
        let i;
        if (Array.isArray(controlled)) {
          i = 0;
          for (; i < controlled.length; i = i + 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              init(controlled[i]);
            }
          }
        } else {
          if (controlled instanceof Swiper && byController !== controlled) {
            init(controlled);
          }
        }
      }
    });
  }, function({
    swiper : self,
    extendParams : users,
    on : expect
  }) {
    function e(n) {
      const t = controls;
      if (0 !== t.length) {
        t.html("");
        t.html(n);
      }
    }
    function render(html) {
      html.attr("tabIndex", "0");
    }
    function setup(target) {
      target.attr("tabIndex", "-1");
    }
    function each(c, i) {
      c.attr("role", i);
    }
    function func(b, mode) {
      b.attr("aria-roledescription", mode);
    }
    function $(el, state) {
      el.attr("aria-label", state);
    }
    function off(input) {
      input.attr("aria-disabled", true);
    }
    function on(input) {
      input.attr("aria-disabled", false);
    }
    function callback(evt) {
      if (13 !== evt.keyCode && 32 !== evt.keyCode) {
        return;
      }
      const i = self.params.a11y;
      const a = filter(evt.target);
      if (self.navigation && self.navigation.$nextEl && a.is(self.navigation.$nextEl)) {
        if (!(self.isEnd && !self.params.loop)) {
          self.slideNext();
        }
        if (self.isEnd) {
          e(i.lastSlideMessage);
        } else {
          e(i.nextSlideMessage);
        }
      }
      if (self.navigation && self.navigation.$prevEl && a.is(self.navigation.$prevEl)) {
        if (!(self.isBeginning && !self.params.loop)) {
          self.slidePrev();
        }
        if (self.isBeginning) {
          e(i.firstSlideMessage);
        } else {
          e(i.prevSlideMessage);
        }
      }
      if (self.pagination && a.is(bind(self.params.pagination.bulletClass))) {
        a[0].click();
      }
    }
    function start() {
      if (self.params.loop || !self.navigation) {
        return;
      }
      const {
        $nextEl : target,
        $prevEl : name
      } = self.navigation;
      if (name && name.length > 0) {
        if (self.isBeginning) {
          off(name);
          setup(name);
        } else {
          on(name);
          render(name);
        }
      }
      if (target && target.length > 0) {
        if (self.isEnd) {
          off(target);
          setup(target);
        } else {
          on(target);
          render(target);
        }
      }
    }
    function paginate() {
      return self.pagination && self.params.pagination.clickable && self.pagination.bullets && self.pagination.bullets.length;
    }
    function init() {
      const _ = self.params.a11y;
      self.$el.append(controls);
      const s = self.$el;
      if (_.containerRoleDescriptionMessage) {
        func(s, _.containerRoleDescriptionMessage);
      }
      if (_.containerMessage) {
        $(s, _.containerMessage);
      }
      const i = self.$wrapperEl;
      const element = i.attr("id") || `swiper-wrapper-${(function(ele = 16) {
        return "x".repeat(ele).replace(/x/g, () => {
          return Math.round(16 * Math.random()).toString(16);
        });
      })(16)}`;
      const seleniumServerUrl = self.params.autoplay && self.params.autoplay.enabled ? "off" : "polite";
      var type;
      type = element;
      i.attr("id", type);
      (function(element, url) {
        element.attr("aria-live", url);
      })(i, seleniumServerUrl);
      if (_.itemRoleDescriptionMessage) {
        func(filter(self.slides), _.itemRoleDescriptionMessage);
      }
      each(filter(self.slides), _.slideRole);
      const parent = self.params.loop ? self.slides.filter((divChatButton) => {
        return !divChatButton.classList.contains(self.params.slideDuplicateClass);
      }).length : self.slides.length;
      let $menu;
      let selector;
      self.slides.each((item2, i) => {
        const slide = filter(item2);
        const new_protocol = self.params.loop ? parseInt(slide.attr("data-swiper-slide-index"), 10) : i;
        $(slide, _.slideLabelMessage.replace(/\{\{index\}\}/, new_protocol + 1).replace(/\{\{slidesLength\}\}/, parent));
      });
      if (self.navigation && self.navigation.$nextEl) {
        $menu = self.navigation.$nextEl;
      }
      if (self.navigation && self.navigation.$prevEl) {
        selector = self.navigation.$prevEl;
      }
      if ($menu && $menu.length) {
        click($menu, element, _.nextSlideMessage);
      }
      if (selector && selector.length) {
        click(selector, element, _.prevSlideMessage);
      }
      if (paginate()) {
        self.pagination.$el.on("keydown", bind(self.params.pagination.bulletClass), callback);
      }
    }
    users({
      a11y : {
        enabled : true,
        notificationClass : "swiper-notification",
        prevSlideMessage : "Previous slide",
        nextSlideMessage : "Next slide",
        firstSlideMessage : "This is the first slide",
        lastSlideMessage : "This is the last slide",
        paginationBulletMessage : "Go to slide {{index}}",
        slideLabelMessage : "{{index}} / {{slidesLength}}",
        containerMessage : null,
        containerRoleDescriptionMessage : null,
        itemRoleDescriptionMessage : null,
        slideRole : "group"
      }
    });
    let controls = null;
    const click = (self, selector, template) => {
      render(self);
      if ("BUTTON" !== self[0].tagName) {
        each(self, "button");
        self.on("keydown", callback);
      }
      $(self, template);
      (function(container, text) {
        container.attr("aria-controls", text);
      })(self, selector);
    };
    expect("beforeInit", () => {
      controls = filter(`<span class="${self.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
    });
    expect("afterInit", () => {
      if (self.params.a11y.enabled) {
        init();
        start();
      }
    });
    expect("toEdge", () => {
      if (self.params.a11y.enabled) {
        start();
      }
    });
    expect("fromEdge", () => {
      if (self.params.a11y.enabled) {
        start();
      }
    });
    expect("paginationUpdate", () => {
      if (self.params.a11y.enabled) {
        (function() {
          const pkgEl = self.params.a11y;
          if (paginate()) {
            self.pagination.bullets.each((item2) => {
              const a = filter(item2);
              render(a);
              if (!self.params.pagination.renderBullet) {
                each(a, "button");
                $(a, pkgEl.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1));
              }
            });
          }
        })();
      }
    });
    expect("destroy", () => {
      if (self.params.a11y.enabled) {
        (function() {
          let t;
          let tab_link;
          if (controls && controls.length > 0) {
            controls.remove();
          }
          if (self.navigation && self.navigation.$nextEl) {
            t = self.navigation.$nextEl;
          }
          if (self.navigation && self.navigation.$prevEl) {
            tab_link = self.navigation.$prevEl;
          }
          if (t) {
            t.off("keydown", callback);
          }
          if (tab_link) {
            tab_link.off("keydown", callback);
          }
          if (paginate()) {
            self.pagination.$el.off("keydown", bind(self.params.pagination.bulletClass), callback);
          }
        })();
      }
    });
  }, function({
    swiper : self,
    extendParams : AppStream,
    on : on
  }) {
    AppStream({
      history : {
        enabled : false,
        root : "",
        replaceState : false,
        key : "slides"
      }
    });
    let a = false;
    let doc = {};
    const process = (rawChunk) => {
      return rawChunk.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    };
    const select = (value) => {
      const node = indexOf();
      let record;
      record = value ? new URL(value) : node.location;
      const parts = record.pathname.slice(1).split("/").filter((value) => {
        return "" !== value;
      });
      const i = parts.length;
      return {
        key : parts[i - 2],
        value : parts[i - 1]
      };
    };
    const init = (type, s) => {
      const window = indexOf();
      if (!a || !self.params.history.enabled) {
        return;
      }
      let resource;
      resource = self.params.url ? new URL(self.params.url) : window.location;
      const eleOrObj = self.slides.eq(s);
      let url = process(eleOrObj.attr("data-history"));
      if (self.params.history.root.length > 0) {
        let args = self.params.history.root;
        if ("/" === args[args.length - 1]) {
          args = args.slice(0, args.length - 1);
        }
        url = `${args}/${type}/${url}`;
      } else {
        if (!resource.pathname.includes(type)) {
          url = `${type}/${url}`;
        }
      }
      const params = window.history.state;
      if (!(params && params.value === url)) {
        if (self.params.history.replaceState) {
          window.history.replaceState({
            value : url
          }, null, url);
        } else {
          window.history.pushState({
            value : url
          }, null, url);
        }
      }
    };
    const callback = (duration, delay, easing) => {
      if (delay) {
        for (let i = 0, l = self.slides.length; i < l; i = i + 1) {
          const slide = self.slides.eq(i);
          if (process(slide.attr("data-history")) === delay && !slide.hasClass(self.params.slideDuplicateClass)) {
            const newIndex = slide.index();
            self.slideTo(newIndex, duration, easing);
          }
        }
      } else {
        self.slideTo(0, duration, easing);
      }
    };
    const load = () => {
      doc = select(self.params.url);
      callback(self.params.speed, self.paths.value, false);
    };
    on("init", () => {
      if (self.params.history.enabled) {
        (() => {
          const window = indexOf();
          if (self.params.history) {
            if (!window.history || !window.history.pushState) {
              return self.params.history.enabled = false, void(self.params.hashNavigation.enabled = true);
            }
            a = true;
            doc = select(self.params.url);
            if (doc.key || doc.value) {
              callback(0, doc.value, self.params.runCallbacksOnInit);
              if (!self.params.history.replaceState) {
                window.addEventListener("popstate", load);
              }
            }
          }
        })();
      }
    });
    on("destroy", () => {
      if (self.params.history.enabled) {
        (() => {
          const window = indexOf();
          if (!self.params.history.replaceState) {
            window.removeEventListener("popstate", load);
          }
        })();
      }
    });
    on("transitionEnd _freeModeNoMomentumRelease", () => {
      if (a) {
        init(self.params.history.key, self.activeIndex);
      }
    });
    on("slideChange", () => {
      if (a && self.params.cssMode) {
        init(self.params.history.key, self.activeIndex);
      }
    });
  }, function({
    swiper : s,
    extendParams : r,
    emit : fire,
    on : on
  }) {
    let stackLabels = false;
    const doc = $();
    const root = indexOf();
    r({
      hashNavigation : {
        enabled : false,
        replaceState : false,
        watchState : false
      }
    });
    const close = () => {
      fire("hashChange");
      const t = doc.location.hash.replace("#", "");
      if (t !== s.slides.eq(s.activeIndex).attr("data-hash")) {
        const slideIndex = s.$wrapperEl.children(`.${s.params.slideClass}[data-hash="${t}"]`).index();
        if (void 0 === slideIndex) {
          return;
        }
        s.slideTo(slideIndex);
      }
    };
    const init = () => {
      if (stackLabels && s.params.hashNavigation.enabled) {
        if (s.params.hashNavigation.replaceState && root.history && root.history.replaceState) {
          root.history.replaceState(null, null, `#${s.slides.eq(s.activeIndex).attr("data-hash")}` || "");
          fire("hashSet");
        } else {
          const newButton = s.slides.eq(s.activeIndex);
          const password = newButton.attr("data-hash") || newButton.attr("data-history");
          doc.location.hash = password || "";
          fire("hashSet");
        }
      }
    };
    on("init", () => {
      if (s.params.hashNavigation.enabled) {
        (() => {
          if (!s.params.hashNavigation.enabled || s.params.history && s.params.history.enabled) {
            return;
          }
          stackLabels = true;
          const t = doc.location.hash.replace("#", "");
          if (t) {
            const speed = 0;
            for (let i = 0, l = s.slides.length; i < l; i = i + 1) {
              const slide = s.slides.eq(i);
              if ((slide.attr("data-hash") || slide.attr("data-history")) === t && !slide.hasClass(s.params.slideDuplicateClass)) {
                const slideIndex = slide.index();
                s.slideTo(slideIndex, speed, s.params.runCallbacksOnInit, true);
              }
            }
          }
          if (s.params.hashNavigation.watchState) {
            filter(root).on("hashchange", close);
          }
        })();
      }
    });
    on("destroy", () => {
      if (s.params.hashNavigation.enabled && s.params.hashNavigation.watchState) {
        filter(root).off("hashchange", close);
      }
    });
    on("transitionEnd _freeModeNoMomentumRelease", () => {
      if (stackLabels) {
        init();
      }
    });
    on("slideChange", () => {
      if (stackLabels && s.params.cssMode) {
        init();
      }
    });
  }, function({
    swiper : self,
    extendParams : newChain,
    on : on,
    emit : emit
  }) {
    function init() {
      const layerG = self.slides.eq(self.activeIndex);
      let msPerFrame = self.params.autoplay.delay;
      if (layerG.attr("data-swiper-autoplay")) {
        msPerFrame = layerG.attr("data-swiper-autoplay") || self.params.autoplay.delay;
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        let t;
        if (self.params.autoplay.reverseDirection) {
          if (self.params.loop) {
            self.loopFix();
            t = self.slidePrev(self.params.speed, true, true);
            emit("autoplay");
          } else {
            if (self.isBeginning) {
              if (self.params.autoplay.stopOnLastSlide) {
                end();
              } else {
                t = self.slideTo(self.slides.length - 1, self.params.speed, true, true);
                emit("autoplay");
              }
            } else {
              t = self.slidePrev(self.params.speed, true, true);
              emit("autoplay");
            }
          }
        } else {
          if (self.params.loop) {
            self.loopFix();
            t = self.slideNext(self.params.speed, true, true);
            emit("autoplay");
          } else {
            if (self.isEnd) {
              if (self.params.autoplay.stopOnLastSlide) {
                end();
              } else {
                t = self.slideTo(0, self.params.speed, true, true);
                emit("autoplay");
              }
            } else {
              t = self.slideNext(self.params.speed, true, true);
              emit("autoplay");
            }
          }
        }
        if (self.params.cssMode && self.autoplay.running || false === t) {
          init();
        }
      }, msPerFrame);
    }
    function cancel() {
      return void 0 === timeoutId && (!self.autoplay.running && (self.autoplay.running = true, emit("autoplayStart"), init(), true));
    }
    function end() {
      return !!self.autoplay.running && (void 0 !== timeoutId && (timeoutId && (clearTimeout(timeoutId), timeoutId = void 0), self.autoplay.running = false, emit("autoplayStop"), true));
    }
    function callback(body) {
      if (self.autoplay.running) {
        if (!self.autoplay.paused) {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          self.autoplay.paused = true;
          if (0 !== body && self.params.autoplay.waitForTransition) {
            ["transitionend", "webkitTransitionEnd"].forEach((stdEvent) => {
              self.$wrapperEl[0].addEventListener(stdEvent, cb);
            });
          } else {
            self.autoplay.paused = false;
            init();
          }
        }
      }
    }
    function move() {
      const visibly = $();
      if ("hidden" === visibly.visibilityState && self.autoplay.running) {
        callback();
      }
      if ("visible" === visibly.visibilityState && self.autoplay.paused) {
        init();
        self.autoplay.paused = false;
      }
    }
    function cb(er) {
      if (self && !self.destroyed && self.$wrapperEl && er.target === self.$wrapperEl[0]) {
        ["transitionend", "webkitTransitionEnd"].forEach((type) => {
          self.$wrapperEl[0].removeEventListener(type, cb);
        });
        self.autoplay.paused = false;
        if (self.autoplay.running) {
          init();
        } else {
          end();
        }
      }
    }
    function close() {
      if (self.params.autoplay.disableOnInteraction) {
        end();
      } else {
        callback();
      }
      ["transitionend", "webkitTransitionEnd"].forEach((type) => {
        self.$wrapperEl[0].removeEventListener(type, cb);
      });
    }
    function handleMousewheel() {
      if (!self.params.autoplay.disableOnInteraction) {
        self.autoplay.paused = false;
        init();
      }
    }
    let timeoutId;
    self.autoplay = {
      running : false,
      paused : false
    };
    newChain({
      autoplay : {
        enabled : false,
        delay : 3E3,
        waitForTransition : true,
        disableOnInteraction : true,
        stopOnLastSlide : false,
        reverseDirection : false,
        pauseOnMouseEnter : false
      }
    });
    on("init", () => {
      if (self.params.autoplay.enabled) {
        cancel();
        $().addEventListener("visibilitychange", move);
        if (self.params.autoplay.pauseOnMouseEnter) {
          self.$el.on("mouseenter", close);
          self.$el.on("mouseleave", handleMousewheel);
        }
      }
    });
    on("beforeTransitionStart", (canCreateDiscussions, force, a) => {
      if (self.autoplay.running) {
        if (a || !self.params.autoplay.disableOnInteraction) {
          self.autoplay.pause(force);
        } else {
          end();
        }
      }
    });
    on("sliderFirstMove", () => {
      if (self.autoplay.running) {
        if (self.params.autoplay.disableOnInteraction) {
          end();
        } else {
          callback();
        }
      }
    });
    on("touchEnd", () => {
      if (self.params.cssMode && self.autoplay.paused && !self.params.autoplay.disableOnInteraction) {
        init();
      }
    });
    on("destroy", () => {
      self.$el.off("mouseenter", close);
      self.$el.off("mouseleave", handleMousewheel);
      if (self.autoplay.running) {
        end();
      }
      $().removeEventListener("visibilitychange", move);
    });
    Object.assign(self.autoplay, {
      pause : callback,
      run : init,
      start : cancel,
      stop : end
    });
  }, function({
    swiper : data,
    extendParams : idKey,
    on : lib$rsvp$$on
  }) {
    function init() {
      const s = data.thumbs.swiper;
      if (!s) {
        return;
      }
      const i = s.clickedIndex;
      const tile = s.clickedSlide;
      if (tile && filter(tile).hasClass(data.params.thumbs.slideThumbActiveClass)) {
        return;
      }
      if (null == i) {
        return;
      }
      let idx;
      if (idx = s.params.loop ? parseInt(filter(s.clickedSlide).attr("data-swiper-slide-index"), 10) : i, data.params.loop) {
        let index = data.activeIndex;
        if (data.slides.eq(index).hasClass(data.params.slideDuplicateClass)) {
          data.loopFix();
          data._clientLeft = data.$wrapperEl[0].clientLeft;
          index = data.activeIndex;
        }
        const n = data.slides.eq(index).prevAll(`[data-swiper-slide-index="${idx}"]`).eq(0).index();
        const i = data.slides.eq(index).nextAll(`[data-swiper-slide-index="${idx}"]`).eq(0).index();
        idx = void 0 === n ? i : void 0 === i ? n : i - index < index - n ? i : n;
      }
      data.slideTo(idx);
    }
    function _init() {
      const {
        thumbs : options
      } = data.params;
      if (a) {
        return false;
      }
      a = true;
      const RegExp = data.constructor;
      if (options.swiper instanceof RegExp) {
        data.thumbs.swiper = options.swiper;
        Object.assign(data.thumbs.swiper.originalParams, {
          watchSlidesProgress : true,
          slideToClickedSlide : false
        });
        Object.assign(data.thumbs.swiper.params, {
          watchSlidesProgress : true,
          slideToClickedSlide : false
        });
      } else {
        if (isObject(options.swiper)) {
          const value = Object.assign({}, options.swiper);
          Object.assign(value, {
            watchSlidesProgress : true,
            slideToClickedSlide : false
          });
          data.thumbs.swiper = new RegExp(value);
          rootNodeDetected = true;
        }
      }
      return data.thumbs.swiper.$el.addClass(data.params.thumbs.thumbsContainerClass), data.thumbs.swiper.on("tap", init), true;
    }
    function render(options) {
      const s = data.thumbs.swiper;
      if (!s) {
        return;
      }
      const candidatesWidth = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
      const COLON = data.params.thumbs.autoScrollOffset;
      const r = COLON && !s.params.loop;
      if (data.realIndex !== s.realIndex || r) {
        let value;
        let dir;
        let index = s.activeIndex;
        if (s.params.loop) {
          if (s.slides.eq(index).hasClass(s.params.slideDuplicateClass)) {
            s.loopFix();
            s._clientLeft = s.$wrapperEl[0].clientLeft;
            index = s.activeIndex;
          }
          const val = s.slides.eq(index).prevAll(`[data-swiper-slide-index="${data.realIndex}"]`).eq(0).index();
          const undefined = s.slides.eq(index).nextAll(`[data-swiper-slide-index="${data.realIndex}"]`).eq(0).index();
          value = void 0 === val ? undefined : void 0 === undefined ? val : undefined - index == index - val ? s.params.slidesPerGroup > 1 ? undefined : index : undefined - index < index - val ? undefined : val;
          dir = data.activeIndex > data.previousIndex ? "next" : "prev";
        } else {
          value = data.realIndex;
          dir = value > data.previousIndex ? "next" : "prev";
        }
        if (r) {
          value = value + ("next" === dir ? COLON : -1 * COLON);
        }
        if (s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(value) < 0) {
          if (s.params.centeredSlides) {
            value = value > index ? value - Math.floor(candidatesWidth / 2) + 1 : value + Math.floor(candidatesWidth / 2) - 1;
          } else {
            if (value > index) {
              s.params.slidesPerGroup;
            }
          }
          s.slideTo(value, options ? 0 : void 0);
        }
      }
      let max = 1;
      const READONLY_CLS = data.params.thumbs.slideThumbActiveClass;
      if (data.params.slidesPerView > 1 && !data.params.centeredSlides && (max = data.params.slidesPerView), data.params.thumbs.multipleActiveThumbs || (max = 1), max = Math.floor(max), s.slides.removeClass(READONLY_CLS), s.params.loop || s.params.virtual && s.params.virtual.enabled) {
        for (let i = 0; i < max; i = i + 1) {
          s.$wrapperEl.children(`[data-swiper-slide-index="${data.realIndex + i}"]`).addClass(READONLY_CLS);
        }
      } else {
        for (let i = 0; i < max; i = i + 1) {
          s.slides.eq(data.realIndex + i).addClass(READONLY_CLS);
        }
      }
    }
    idKey({
      thumbs : {
        swiper : null,
        multipleActiveThumbs : true,
        autoScrollOffset : 0,
        slideThumbActiveClass : "swiper-slide-thumb-active",
        thumbsContainerClass : "swiper-thumbs"
      }
    });
    let a = false;
    let rootNodeDetected = false;
    data.thumbs = {
      swiper : null
    };
    lib$rsvp$$on("beforeInit", () => {
      const {
        thumbs : appConfig
      } = data.params;
      if (appConfig && appConfig.swiper) {
        _init();
        render(true);
      }
    });
    lib$rsvp$$on("slideChange update resize observerUpdate", () => {
      if (data.thumbs.swiper) {
        render();
      }
    });
    lib$rsvp$$on("setTransition", (canCreateDiscussions, transition) => {
      const el = data.thumbs.swiper;
      if (el) {
        el.setTransition(transition);
      }
    });
    lib$rsvp$$on("beforeDestroy", () => {
      const bodyNodeDetected = data.thumbs.swiper;
      if (bodyNodeDetected && rootNodeDetected && bodyNodeDetected) {
        bodyNodeDetected.destroy();
      }
    });
    Object.assign(data.thumbs, {
      init : _init,
      update : render
    });
  }, function({
    swiper : s,
    extendParams : r,
    emit : fire,
    once : setTimeout
  }) {
    r({
      freeMode : {
        enabled : false,
        momentum : true,
        momentumRatio : 1,
        momentumBounce : true,
        momentumBounceRatio : 1,
        momentumVelocityRatio : 1,
        sticky : false,
        minimumVelocity : .02
      }
    });
    Object.assign(s, {
      freeMode : {
        onTouchMove : function() {
          const {
            touchEventsData : data,
            touches : event
          } = s;
          if (0 === data.velocities.length) {
            data.velocities.push({
              position : event[s.isHorizontal() ? "startX" : "startY"],
              time : data.touchStartTime
            });
          }
          data.velocities.push({
            position : event[s.isHorizontal() ? "currentX" : "currentY"],
            time : now()
          });
        },
        onTouchEnd : function({
          currentPos : currentPos
        }) {
          const {
            params : params,
            $wrapperEl : component,
            rtlTranslate : users,
            snapGrid : keys,
            touchEventsData : data
          } = s;
          const timeDiff = now() - data.touchStartTime;
          if (currentPos < -s.minTranslate()) {
            s.slideTo(s.activeIndex);
          } else {
            if (currentPos > -s.maxTranslate()) {
              if (s.slides.length < keys.length) {
                s.slideTo(keys.length - 1);
              } else {
                s.slideTo(s.slides.length - 1);
              }
            } else {
              if (params.freeMode.momentum) {
                if (data.velocities.length > 1) {
                  const b = data.velocities.pop();
                  const a = data.velocities.pop();
                  const distance = b.position - a.position;
                  const time = b.time - a.time;
                  s.velocity = distance / time;
                  s.velocity /= 2;
                  if (Math.abs(s.velocity) < params.freeMode.minimumVelocity) {
                    s.velocity = 0;
                  }
                  if (time > 150 || now() - b.time > 300) {
                    s.velocity = 0;
                  }
                } else {
                  s.velocity = 0;
                }
                s.velocity *= params.freeMode.momentumVelocityRatio;
                data.velocities.length = 0;
                let callback = 1E3 * params.freeMode.momentumRatio;
                const momentumDistance = s.velocity * callback;
                let newPosition = s.translate + momentumDistance;
                if (users) {
                  newPosition = -newPosition;
                }
                let i;
                let doBounce = false;
                const bounceAmount = 20 * Math.abs(s.velocity) * params.freeMode.momentumBounceRatio;
                let timeout;
                if (newPosition < s.maxTranslate()) {
                  if (params.freeMode.momentumBounce) {
                    if (newPosition + s.maxTranslate() < -bounceAmount) {
                      newPosition = s.maxTranslate() - bounceAmount;
                    }
                    i = s.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                  } else {
                    newPosition = s.maxTranslate();
                  }
                  if (params.loop && params.centeredSlides) {
                    timeout = true;
                  }
                } else {
                  if (newPosition > s.minTranslate()) {
                    if (params.freeMode.momentumBounce) {
                      if (newPosition - s.minTranslate() > bounceAmount) {
                        newPosition = s.minTranslate() + bounceAmount;
                      }
                      i = s.minTranslate();
                      doBounce = true;
                      data.allowMomentumBounce = true;
                    } else {
                      newPosition = s.minTranslate();
                    }
                    if (params.loop && params.centeredSlides) {
                      timeout = true;
                    }
                  } else {
                    if (params.freeMode.sticky) {
                      let index;
                      for (let i = 0; i < keys.length; i = i + 1) {
                        if (keys[i] > -newPosition) {
                          index = i;
                          break;
                        }
                      }
                      newPosition = Math.abs(keys[index] - newPosition) < Math.abs(keys[index - 1] - newPosition) || "next" === s.swipeDirection ? keys[index] : keys[index - 1];
                      newPosition = -newPosition;
                    }
                  }
                }
                if (timeout && setTimeout("transitionEnd", () => {
                  s.loopFix();
                }), 0 !== s.velocity) {
                  if (callback = users ? Math.abs((-newPosition - s.translate) / s.velocity) : Math.abs((newPosition - s.translate) / s.velocity), params.freeMode.sticky) {
                    const distanceProbed = Math.abs((users ? -newPosition : newPosition) - s.translate);
                    const doff = s.slidesSizesGrid[s.activeIndex];
                    callback = distanceProbed < doff ? params.speed : distanceProbed < 2 * doff ? 1.5 * params.speed : 2.5 * params.speed;
                  }
                } else {
                  if (params.freeMode.sticky) {
                    return void s.slideToClosest();
                  }
                }
                if (params.freeMode.momentumBounce && doBounce) {
                  s.updateProgress(i);
                  s.setTransition(callback);
                  s.setTranslate(newPosition);
                  s.transitionStart(true, s.swipeDirection);
                  s.animating = true;
                  component.transitionEnd(() => {
                    if (s && !s.destroyed && data.allowMomentumBounce) {
                      fire("momentumBounce");
                      s.setTransition(params.speed);
                      setTimeout(() => {
                        s.setTranslate(i);
                        component.transitionEnd(() => {
                          if (s && !s.destroyed) {
                            s.transitionEnd();
                          }
                        });
                      }, 0);
                    }
                  });
                } else {
                  if (s.velocity) {
                    fire("_freeModeNoMomentumRelease");
                    s.updateProgress(newPosition);
                    s.setTransition(callback);
                    s.setTranslate(newPosition);
                    s.transitionStart(true, s.swipeDirection);
                    if (!s.animating) {
                      s.animating = true;
                      component.transitionEnd(() => {
                        if (s && !s.destroyed) {
                          s.transitionEnd();
                        }
                      });
                    }
                  } else {
                    s.updateProgress(newPosition);
                  }
                }
                s.updateActiveIndex();
                s.updateSlidesClasses();
              } else {
                if (params.freeMode.sticky) {
                  return void s.slideToClosest();
                }
                if (params.freeMode) {
                  fire("_freeModeNoMomentumRelease");
                }
              }
              if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
                s.updateProgress();
                s.updateActiveIndex();
                s.updateSlidesClasses();
              }
            }
          }
        }
      }
    });
  }, function({
    swiper : e,
    extendParams : uuid
  }) {
    let x;
    let ratio;
    let indexh;
    uuid({
      grid : {
        rows : 1,
        fill : "column"
      }
    });
    e.grid = {
      initSlides : (y) => {
        const {
          slidesPerView : i
        } = e.params;
        const {
          rows : scale,
          fill : undefined
        } = e.params.grid;
        ratio = x / scale;
        indexh = Math.floor(y / scale);
        x = Math.floor(y / scale) === y / scale ? y : Math.ceil(y / scale) * scale;
        if ("auto" !== i && "row" === undefined) {
          x = Math.max(x, i * scale);
        }
      },
      updateSlide : (y, data, params, $) => {
        const {
          slidesPerGroup : r,
          spaceBetween : currentPluginPath
        } = e.params;
        const {
          rows : a,
          fill : undefined
        } = e.params.grid;
        let newSlideOrderIndex;
        let h;
        let t;
        if ("row" === undefined && r > 1) {
          const c = Math.floor(y / (r * a));
          const d = y - a * r * c;
          const scale = 0 === c ? r : Math.min(Math.ceil((params - c * a * r) / a), r);
          t = Math.floor(d / scale);
          h = d - t * scale + c * r;
          newSlideOrderIndex = h + t * x / a;
          data.css({
            "-webkit-order" : newSlideOrderIndex,
            order : newSlideOrderIndex
          });
        } else {
          if ("column" === undefined) {
            h = Math.floor(y / a);
            t = y - h * a;
            if (h > indexh || h === indexh && t === a - 1) {
              t = t + 1;
              if (t >= a) {
                t = 0;
                h = h + 1;
              }
            }
          } else {
            t = Math.floor(y / ratio);
            h = y - t * ratio;
          }
        }
        data.css($("margin-top"), 0 !== t ? currentPluginPath && `${currentPluginPath}px` : "");
      },
      updateWrapperSize : (a, p, getSize) => {
        const {
          spaceBetween : k,
          centeredSlides : idf,
          roundLengths : l
        } = e.params;
        const {
          rows : height
        } = e.params.grid;
        if (e.virtualSize = (a + k) * x, e.virtualSize = Math.ceil(e.virtualSize / height) - k, e.$wrapperEl.css({
          [getSize("width")]:`${e.virtualSize + k}px`
        }), idf) {
          p.splice(0, p.length);
          const cleaned = [];
          for (let i = 0; i < p.length; i = i + 1) {
            let value = p[i];
            if (l) {
              value = Math.floor(value);
            }
            if (p[i] < e.virtualSize + p[0]) {
              cleaned.push(value);
            }
          }
          p.push(...cleaned);
        }
      }
    };
  }, function({
    swiper : context
  }) {
    Object.assign(context, {
      appendSlide : emit.bind(context),
      prependSlide : parse.bind(context),
      addSlide : _init.bind(context),
      removeSlide : load.bind(context),
      removeAllSlides : setData.bind(context)
    });
  }, function({
    swiper : that,
    extendParams : gotoNewOfflinePage,
    on : fake_process_on
  }) {
    gotoNewOfflinePage({
      fadeEffect : {
        crossFade : false,
        transformEl : null
      }
    });
    initialize({
      effect : "fade",
      swiper : that,
      on : fake_process_on,
      setTranslate : () => {
        const {
          slides : slides
        } = that;
        const instrumented = that.params.fadeEffect;
        for (let i = 0; i < slides.length; i = i + 1) {
          const slide = that.slides.eq(i);
          let pos = -slide[0].swiperSlideOffset;
          if (!that.params.virtualTranslate) {
            pos = pos - that.translate;
          }
          let lastTransfer = 0;
          if (!that.isHorizontal()) {
            lastTransfer = pos;
            pos = 0;
          }
          const completeTitleOpacity = that.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slide[0].progress), 0) : 1 + Math.min(Math.max(slide[0].progress, -1), 0);
          next(instrumented, slide).css({
            opacity : completeTitleOpacity
          }).transform(`translate3d(${pos}px, ${lastTransfer}px, 0px)`);
        }
      },
      setTransition : (transition) => {
        const {
          transformEl : article
        } = that.params.fadeEffect;
        (article ? that.slides.find(article) : that.slides).transition(transition);
        hide({
          swiper : that,
          duration : transition,
          transformEl : article,
          allSlides : true
        });
      },
      overwriteParams : () => {
        return {
          slidesPerView : 1,
          slidesPerGroup : 1,
          watchSlidesProgress : true,
          spaceBetween : 0,
          virtualTranslate : !that.params.cssMode
        };
      }
    });
  }, function({
    swiper : self,
    extendParams : users,
    on : container
  }) {
    users({
      cubeEffect : {
        slideShadows : true,
        shadow : true,
        shadowOffset : 20,
        shadowScale : .94
      }
    });
    initialize({
      effect : "cube",
      swiper : self,
      on : container,
      setTranslate : () => {
        const {
          $el : data,
          $wrapperEl : node,
          slides : events,
          width : width,
          height : height,
          rtlTranslate : processPercent,
          size : x,
          browser : browser
        } = self;
        const config = self.params.cubeEffect;
        const isHorizontal = self.isHorizontal();
        const u = self.virtual && self.params.virtual.enabled;
        let v;
        let n = 0;
        if (config.shadow) {
          if (isHorizontal) {
            v = node.find(".swiper-cube-shadow");
            if (0 === v.length) {
              v = filter('<div class="swiper-cube-shadow"></div>');
              node.append(v);
            }
            v.css({
              height : `${width}px`
            });
          } else {
            v = data.find(".swiper-cube-shadow");
            if (0 === v.length) {
              v = filter('<div class="swiper-cube-shadow"></div>');
              data.append(v);
            }
          }
        }
        for (let i = 0; i < events.length; i = i + 1) {
          const data = events.eq(i);
          let offsetX = i;
          if (u) {
            offsetX = parseInt(data.attr("data-swiper-slide-index"), 10);
          }
          let offset = 90 * offsetX;
          let y = Math.floor(offset / 360);
          if (processPercent) {
            offset = -offset;
            y = Math.floor(-offset / 360);
          }
          const offsetY = Math.max(Math.min(data[0].progress, 1), -1);
          let z = 0;
          let dominateDirection = 0;
          let newX = 0;
          if (offsetX % 4 == 0) {
            z = 4 * -y * x;
            newX = 0;
          } else {
            if ((offsetX - 1) % 4 == 0) {
              z = 0;
              newX = 4 * -y * x;
            } else {
              if ((offsetX - 2) % 4 == 0) {
                z = x + 4 * y * x;
                newX = x;
              } else {
                if ((offsetX - 3) % 4 == 0) {
                  z = -x;
                  newX = 3 * x + 4 * x * y;
                }
              }
            }
          }
          if (processPercent) {
            z = -z;
          }
          if (!isHorizontal) {
            dominateDirection = z;
            z = 0;
          }
          const v = `rotateX(${isHorizontal ? 0 : -offset}deg) rotateY(${isHorizontal ? offset : 0}deg) translate3d(${z}px, ${dominateDirection}px, ${newX}px)`;
          if (offsetY <= 1 && offsetY > -1 && (n = 90 * offsetX + 90 * offsetY, processPercent && (n = 90 * -offsetX - 90 * offsetY)), data.transform(v), config.slideShadows) {
            let lines = isHorizontal ? data.find(".swiper-slide-shadow-left") : data.find(".swiper-slide-shadow-top");
            let controls = isHorizontal ? data.find(".swiper-slide-shadow-right") : data.find(".swiper-slide-shadow-bottom");
            if (0 === lines.length) {
              lines = filter(`<div class="swiper-slide-shadow-${isHorizontal ? "left" : "top"}"></div>`);
              data.append(lines);
            }
            if (0 === controls.length) {
              controls = filter(`<div class="swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}"></div>`);
              data.append(controls);
            }
            if (lines.length) {
              lines[0].style.opacity = Math.max(-offsetY, 0);
            }
            if (controls.length) {
              controls[0].style.opacity = Math.max(offsetY, 0);
            }
          }
        }
        if (node.css({
          "-webkit-transform-origin" : `50% 50% -${x / 2}px`,
          "transform-origin" : `50% 50% -${x / 2}px`
        }), config.shadow) {
          if (isHorizontal) {
            v.transform(`translate3d(0px, ${width / 2 + config.shadowOffset}px, ${-width / 2}px) rotateX(90deg) rotateZ(0deg) scale(${config.shadowScale})`);
          } else {
            const size = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90);
            const multiplier = 1.5 - (Math.sin(2 * size * Math.PI / 360) / 2 + Math.cos(2 * size * Math.PI / 360) / 2);
            const s = config.shadowScale;
            const a = config.shadowScale / multiplier;
            const padding = config.shadowOffset;
            v.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${height / 2 + padding}px, ${-height / 2 / a}px) rotateX(-90deg)`);
          }
        }
        const f = browser.isSafari || browser.isWebView ? -x / 2 : 0;
        node.transform(`translate3d(0px,0,${f}px) rotateX(${self.isHorizontal() ? 0 : n}deg) rotateY(${self.isHorizontal() ? -n : 0}deg)`);
      },
      setTransition : (transition) => {
        const {
          $el : $this,
          slides : middleChild
        } = self;
        middleChild.transition(transition).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(transition);
        if (self.params.cubeEffect.shadow && !self.isHorizontal()) {
          $this.find(".swiper-cube-shadow").transition(transition);
        }
      },
      perspective : () => {
        return true;
      },
      overwriteParams : () => {
        return {
          slidesPerView : 1,
          slidesPerGroup : 1,
          watchSlidesProgress : true,
          resistanceRatio : 0,
          spaceBetween : 0,
          centeredSlides : false,
          virtualTranslate : true
        };
      }
    });
  }, function({
    swiper : that,
    extendParams : gotoNewOfflinePage,
    on : fake_process_on
  }) {
    gotoNewOfflinePage({
      flipEffect : {
        slideShadows : true,
        limitRotation : true,
        transformEl : null
      }
    });
    initialize({
      effect : "flip",
      swiper : that,
      on : fake_process_on,
      setTranslate : () => {
        const {
          slides : slides,
          rtlTranslate : slideIndex
        } = that;
        const element = that.params.flipEffect;
        for (let i = 0; i < slides.length; i = i + 1) {
          const data = slides.eq(i);
          let v = data[0].progress;
          if (that.params.flipEffect.limitRotation) {
            v = Math.max(Math.min(data[0].progress, 1), -1);
          }
          const newPosition = data[0].swiperSlideOffset;
          let offset = -180 * v;
          let o = 0;
          let hotCurrentParents = that.params.cssMode ? -newPosition - that.translate : -newPosition;
          let hotCurrentParentsTemp = 0;
          if (that.isHorizontal() ? slideIndex && (offset = -offset) : (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = 0, o = -offset, offset = 0), data[0].style.zIndex = -Math.abs(Math.round(v)) + slides.length, element.slideShadows) {
            let res = that.isHorizontal() ? data.find(".swiper-slide-shadow-left") : data.find(".swiper-slide-shadow-top");
            let state = that.isHorizontal() ? data.find(".swiper-slide-shadow-right") : data.find(".swiper-slide-shadow-bottom");
            if (0 === res.length) {
              res = set(element, data, that.isHorizontal() ? "left" : "top");
            }
            if (0 === state.length) {
              state = set(element, data, that.isHorizontal() ? "right" : "bottom");
            }
            if (res.length) {
              res[0].style.opacity = Math.max(-v, 0);
            }
            if (state.length) {
              state[0].style.opacity = Math.max(v, 0);
            }
          }
          const endColorCoords = `translate3d(${hotCurrentParents}px, ${hotCurrentParentsTemp}px, 0px) rotateX(${o}deg) rotateY(${offset}deg)`;
          next(element, data).transform(endColorCoords);
        }
      },
      setTransition : (value) => {
        const {
          transformEl : article
        } = that.params.flipEffect;
        (article ? that.slides.find(article) : that.slides).transition(value).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(value);
        hide({
          swiper : that,
          duration : value,
          transformEl : article
        });
      },
      perspective : () => {
        return true;
      },
      overwriteParams : () => {
        return {
          slidesPerView : 1,
          slidesPerGroup : 1,
          watchSlidesProgress : true,
          spaceBetween : 0,
          virtualTranslate : !that.params.cssMode
        };
      }
    });
  }, function({
    swiper : options,
    extendParams : uri,
    on : movementLocked
  }) {
    uri({
      coverflowEffect : {
        rotate : 50,
        stretch : 0,
        depth : 100,
        scale : 1,
        modifier : 1,
        slideShadows : true,
        transformEl : null
      }
    });
    initialize({
      effect : "coverflow",
      swiper : options,
      on : movementLocked,
      setTranslate : () => {
        const {
          width : width,
          height : height,
          slides : data,
          slidesSizesGrid : columns
        } = options;
        const item = options.params.coverflowEffect;
        const isVertical = options.isHorizontal();
        const offset = options.translate;
        const center = isVertical ? width / 2 - offset : height / 2 - offset;
        const sign = isVertical ? item.rotate : -item.rotate;
        const translate = item.depth;
        for (let i = 0, l = data.length; i < l; i = i + 1) {
          const node = data.eq(i);
          const slideSize = columns[i];
          const offsetMultiplier = (center - node[0].swiperSlideOffset - slideSize / 2) / slideSize * item.modifier;
          let utcDayCalib = isVertical ? sign * offsetMultiplier : 0;
          let jumpsize = isVertical ? 0 : sign * offsetMultiplier;
          let oldAverage = -translate * Math.abs(offsetMultiplier);
          let license_uri = item.stretch;
          if ("string" == typeof license_uri && -1 !== license_uri.indexOf("%")) {
            license_uri = parseFloat(item.stretch) / 100 * slideSize;
          }
          let aDt = isVertical ? 0 : license_uri * offsetMultiplier;
          let bDt = isVertical ? license_uri * offsetMultiplier : 0;
          let maxLightDistanceY = 1 - (1 - item.scale) * Math.abs(offsetMultiplier);
          if (Math.abs(bDt) < .001) {
            bDt = 0;
          }
          if (Math.abs(aDt) < .001) {
            aDt = 0;
          }
          if (Math.abs(oldAverage) < .001) {
            oldAverage = 0;
          }
          if (Math.abs(utcDayCalib) < .001) {
            utcDayCalib = 0;
          }
          if (Math.abs(jumpsize) < .001) {
            jumpsize = 0;
          }
          if (Math.abs(maxLightDistanceY) < .001) {
            maxLightDistanceY = 0;
          }
          const endColorCoords = `translate3d(${bDt}px,${aDt}px,${oldAverage}px)  rotateX(${jumpsize}deg) rotateY(${utcDayCalib}deg) scale(${maxLightDistanceY})`;
          if (next(item, node).transform(endColorCoords), node[0].style.zIndex = 1 - Math.abs(Math.round(offsetMultiplier)), item.slideShadows) {
            let result = isVertical ? node.find(".swiper-slide-shadow-left") : node.find(".swiper-slide-shadow-top");
            let res = isVertical ? node.find(".swiper-slide-shadow-right") : node.find(".swiper-slide-shadow-bottom");
            if (0 === result.length) {
              result = set(item, node, isVertical ? "left" : "top");
            }
            if (0 === res.length) {
              res = set(item, node, isVertical ? "right" : "bottom");
            }
            if (result.length) {
              result[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
            }
            if (res.length) {
              res[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
            }
          }
        }
      },
      setTransition : (context) => {
        const {
          transformEl : json
        } = options.params.coverflowEffect;
        (json ? options.slides.find(json) : options.slides).transition(context).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(context);
      },
      perspective : () => {
        return true;
      },
      overwriteParams : () => {
        return {
          watchSlidesProgress : true
        };
      }
    });
  }, function({
    swiper : s,
    extendParams : r,
    on : fake_process_on
  }) {
    r({
      creativeEffect : {
        transformEl : null,
        limitProgress : 1,
        shadowPerProgress : false,
        progressMultiplier : 1,
        perspective : true,
        prev : {
          translate : [0, 0, 0],
          rotate : [0, 0, 0],
          opacity : 1,
          scale : 1
        },
        next : {
          translate : [0, 0, 0],
          rotate : [0, 0, 0],
          opacity : 1,
          scale : 1
        }
      }
    });
    const callback = (index) => {
      return "string" == typeof index ? index : `${index}px`;
    };
    initialize({
      effect : "creative",
      swiper : s,
      on : fake_process_on,
      setTranslate : () => {
        const {
          slides : slides,
          $wrapperEl : slideIndex,
          slidesSizesGrid : i
        } = s;
        const scope = s.params.creativeEffect;
        const {
          progressMultiplier : a
        } = scope;
        const l = s.params.centeredSlides;
        if (l) {
          const t = i[0] / 2 - s.params.slidesOffsetBefore || 0;
          slideIndex.transform(`translateX(calc(50% - ${t}px))`);
        }
        for (let i = 0; i < slides.length; i = i + 1) {
          const slide = slides.eq(i);
          const overallOverlapValue = slide[0].progress;
          const d = Math.min(Math.max(slide[0].progress, -scope.limitProgress), scope.limitProgress);
          let c = d;
          if (!l) {
            c = Math.min(Math.max(slide[0].originalProgress, -scope.limitProgress), scope.limitProgress);
          }
          const newPosition = slide[0].swiperSlideOffset;
          const parameters = [s.params.cssMode ? -newPosition - s.translate : -newPosition, 0, 0];
          const vclocks = [0, 0, 0];
          let from = false;
          if (!s.isHorizontal()) {
            parameters[1] = parameters[0];
            parameters[0] = 0;
          }
          let node = {
            translate : [0, 0, 0],
            rotate : [0, 0, 0],
            scale : 1,
            opacity : 1
          };
          if (d < 0) {
            node = scope.next;
            from = true;
          } else {
            if (d > 0) {
              node = scope.prev;
              from = true;
            }
          }
          parameters.forEach((canCreateDiscussions, value) => {
            parameters[value] = `calc(${canCreateDiscussions}px + (${callback(node.translate[value])} * ${Math.abs(d * a)}))`;
          });
          vclocks.forEach((canCreateDiscussions, i) => {
            vclocks[i] = node.rotate[i] * Math.abs(d * a);
          });
          slide[0].style.zIndex = -Math.abs(Math.round(overallOverlapValue)) + slides.length;
          const g = parameters.join(", ");
          const v = `rotateX(${vclocks[0]}deg) rotateY(${vclocks[1]}deg) rotateZ(${vclocks[2]}deg)`;
          const w = c < 0 ? `scale(${1 + (1 - node.scale) * c * a})` : `scale(${1 - (1 - node.scale) * c * a})`;
          const completeTitleOpacity = c < 0 ? 1 + (1 - node.opacity) * c * a : 1 - (1 - node.opacity) * c * a;
          const x = `translate3d(${g}) ${v} ${w}`;
          if (from && node.shadow || !from) {
            let res = slide.children(".swiper-slide-shadow");
            if (0 === res.length && node.shadow && (res = set(scope, slide)), res.length) {
              const rMaxPx = scope.shadowPerProgress ? d * (1 / scope.limitProgress) : d;
              res[0].style.opacity = Math.min(Math.max(Math.abs(rMaxPx), 0), 1);
            }
          }
          const widget = next(scope, slide);
          widget.transform(x).css({
            opacity : completeTitleOpacity
          });
          if (node.origin) {
            widget.css("transform-origin", node.origin);
          }
        }
      },
      setTransition : (value) => {
        const {
          transformEl : type
        } = s.params.creativeEffect;
        (type ? s.slides.find(type) : s.slides).transition(value).find(".swiper-slide-shadow").transition(value);
        hide({
          swiper : s,
          duration : value,
          transformEl : type,
          allSlides : true
        });
      },
      perspective : () => {
        return s.params.creativeEffect.perspective;
      },
      overwriteParams : () => {
        return {
          watchSlidesProgress : true,
          virtualTranslate : !s.params.cssMode
        };
      }
    });
  }, function({
    swiper : s,
    extendParams : r,
    on : fake_process_on
  }) {
    r({
      cardsEffect : {
        slideShadows : true,
        transformEl : null
      }
    });
    initialize({
      effect : "cards",
      swiper : s,
      on : fake_process_on,
      setTranslate : () => {
        const {
          slides : slides,
          activeIndex : selectedIndex
        } = s;
        const element = s.params.cardsEffect;
        const {
          startTranslate : progressNew,
          isTouched : isTouched
        } = s.touchEventsData;
        const progressOld = s.translate;
        for (let index = 0; index < slides.length; index = index + 1) {
          const slide = slides.eq(index);
          const num = slide[0].progress;
          const d = Math.min(Math.max(num, -4), 4);
          let newPosition = slide[0].swiperSlideOffset;
          if (s.params.centeredSlides && !s.params.cssMode) {
            s.$wrapperEl.transform(`translateX(${s.minTranslate()}px)`);
          }
          if (s.params.centeredSlides && s.params.cssMode) {
            newPosition = newPosition - slides[0].swiperSlideOffset;
          }
          let width = s.params.cssMode ? -newPosition - s.translate : -newPosition;
          let whatToScale = 0;
          const m = -100 * Math.abs(d);
          let offset = 1;
          let BucketBase = -2 * d;
          let a = 8 - .75 * Math.abs(d);
          const inputWin = (index === selectedIndex || index === selectedIndex - 1) && d > 0 && d < 1 && (isTouched || s.params.cssMode) && progressOld < progressNew;
          const winRef = (index === selectedIndex || index === selectedIndex + 1) && d < 0 && d > -1 && (isTouched || s.params.cssMode) && progressOld > progressNew;
          if (inputWin || winRef) {
            const i = (1 - Math.abs((Math.abs(d) - .5) / .5)) ** .5;
            BucketBase = BucketBase + -28 * d * i;
            offset = offset + -.5 * i;
            a = a + 96 * i;
            whatToScale = -25 * i * Math.abs(d) + "%";
          }
          if (width = d < 0 ? `calc(${width}px + (${a * Math.abs(d)}%))` : d > 0 ? `calc(${width}px + (-${a * Math.abs(d)}%))` : `${width}px`, !s.isHorizontal()) {
            const MAX_COL_WIDTH = whatToScale;
            whatToScale = width;
            width = MAX_COL_WIDTH;
          }
          const x = `\n        translate3d(${width}, ${whatToScale}, ${m}px)\n        rotateZ(${BucketBase}deg)\n        scale(${d < 0 ? "" + (1 + (1 - offset) * d) : "" + (1 - (1 - offset) * d)})\n      `;
          if (element.slideShadows) {
            let res = slide.find(".swiper-slide-shadow");
            if (0 === res.length) {
              res = set(element, slide);
            }
            if (res.length) {
              res[0].style.opacity = Math.min(Math.max((Math.abs(d) - .5) / .5, 0), 1);
            }
          }
          slide[0].style.zIndex = -Math.abs(Math.round(num)) + slides.length;
          next(element, slide).transform(x);
        }
      },
      setTransition : (value) => {
        const {
          transformEl : type
        } = s.params.cardsEffect;
        (type ? s.slides.find(type) : s.slides).transition(value).find(".swiper-slide-shadow").transition(value);
        hide({
          swiper : s,
          duration : value,
          transformEl : type
        });
      },
      perspective : () => {
        return true;
      },
      overwriteParams : () => {
        return {
          watchSlidesProgress : true,
          virtualTranslate : !s.params.cssMode
        };
      }
    });
  }];
  return self.use(closing), self;
});
