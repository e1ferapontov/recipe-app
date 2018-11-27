/* eslint-disable consistent-return */

const throttle = (fn, ms, preThrottled = false) => {
  let throttled = preThrottled;

  let runOnce = true;

  let savedContext = null;
  let savedArgs = null;

  return function _innerThrottle(...args) {
    // TODO: rewrite runOnce
    if (preThrottled && runOnce) {
      runOnce = false;
      setTimeout(() => {
        throttled = false;
        console.log("### RUNONCE RUNNING");

        if (savedArgs) {
          return _innerThrottle.apply(savedContext, savedArgs);
        }
      }, ms);
      return;
    }

    if (throttled) {
      console.log("### REQ THROTTLED");
      savedContext = this;
      savedArgs = args;

      return;
    }

    throttled = true;
    savedContext = null;
    savedArgs = null;

    setTimeout(() => {
      throttled = false;

      if (savedArgs) {
        console.log("### REQ RUN FROM TIMEOUT");
        return _innerThrottle.apply(savedContext, savedArgs);
      }
    }, ms);

    console.log("### REQ NOT THROTTLED");
    return fn.apply(this, args);
  };
};

export default throttle;
