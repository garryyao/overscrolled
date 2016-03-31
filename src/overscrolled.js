/**
 * @name overscrolled
 * @function
 * @param {Object} options Accepts following configurations:
 * @param {Boolean} options.prevent_pullToRefresh Prevent the "pull-to-refresh" behaviour 
 * @param {Boolean} options.prevent_overscrollGlow Prevent the elastic bouncing/glow effect when page is over-scrolled  
 */

export default function(window, options) {
  const {prevent_pullToRefresh = true, prevent_overscrollGlow = true} = options || {};
  const document = window.document;
  let is_pullToRefresh_begin = false;
  let is_window_scrolled;
  let lastTouchY = 0;

  function touchstartHandler(e) {
    if (e.touches.length != 1) {
      return;
    }

    // If "overflow:hidden" already presents on body, there will be no fancy behaviour.
    is_window_scrolled = window.getComputedStyle(document.body).getPropertyValue('overflow-y') !== 'hidden';

    lastTouchY = e.touches[0].clientY;
    // Pull-to-refresh will only trigger if the scroll begins when the
    // document's Y offset is zero.
    is_pullToRefresh_begin = prevent_pullToRefresh && window.pageYOffset == 0;
  }

  function touchmoveHandler(e) {

    if (!is_window_scrolled) {
      return;
    }

    const touchY = e.touches[0].clientY;
    const touchYDelta = touchY - lastTouchY;
    lastTouchY = touchY;

    if (is_pullToRefresh_begin) {
      // To suppress pull-to-refresh it is sufficient to preventDefault the
      // first overscrolling touchmove.
      is_pullToRefresh_begin = false;
      if (touchYDelta > 0) {
        e.preventDefault();
        return;
      }
    }

    if (prevent_overscrollGlow) {
      if (window.pageYOffset == 0 && touchYDelta > 0) {
        e.preventDefault();
        return;
      }
    }
  }

  document.addEventListener('touchstart', touchstartHandler, false);
  document.addEventListener('touchmove', touchmoveHandler, false);
  return {
    destroy() {
      document.removeEventListener('touchstart', touchstartHandler);
      document.removeEventListener('touchmove', touchmoveHandler);
    }
  };
}
