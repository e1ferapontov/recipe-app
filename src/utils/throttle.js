const throttleWithDelay = (fn, ms) => {
  let throttled = false;
  let savedContext = null;
  let savedArgs = null;

  let firstRun = true;

  return function _innerThrottle(...args) {
    if (throttled) {
      savedContext = this;
      savedArgs = args;

      return null;
    }

    throttled = true;

    savedContext = null;
    savedArgs = null;

    setTimeout(() => {
      throttled = false;

      if (savedArgs) {
        return _innerThrottle.apply(savedContext, savedArgs);
      }
      return null;
    }, ms);

    if (firstRun) {
      firstRun = false;
      savedContext = this;
      savedArgs = args;

      return null;
    }

    return fn.apply(this, args);
  };
};

export default throttleWithDelay;
