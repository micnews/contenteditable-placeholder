var dom = require('dom-events')
  , MutationObserver = require('mutation-observer')

  , isEmpty = function (element) {
      return element.textContent.trim() === '' && element.children.length === 0
    }
  , placeholder = function (element) {
      var update = function () {
        if (isEmpty(element) && document.activeElement !== element) {
          element.classList.add('placeholder')
        } else {
          element.classList.remove('placeholder')
        }
      }

      new MutationObserver(update).observe(element, { childList: true })

      update()
      dom.on(element, 'focus', update)
      dom.on(element, 'blur', update)
    }

require('insert-css')(require('fs').readFileSync(__dirname + '/placeholder.css', 'utf8'))

module.exports = placeholder