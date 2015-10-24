var dom = require('dom-events');
var MutationObserver = require('mutation-observer');

// insert the little css needed, since you can't inline set ':before'
require('insert-css')(
  require('fs').readFileSync(__dirname + '/placeholder.css', 'utf8')
);

module.exports = placeholder;

function isEmpty (element) {
  return element.textContent === '' && element.children.length === 0;
}

function placeholder (element) {
  var update = function () {
    if (isEmpty(element) && document.activeElement !== element) {
      element.classList.add('placeholder');
    } else {
      element.classList.remove('placeholder');
    }
  };

  new MutationObserver(update).observe(element, { childList: true });

  update();
  dom.on(element, 'focus', update);
  dom.on(element, 'blur', update);
}
