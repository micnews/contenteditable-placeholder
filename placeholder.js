var dom = require('dom-events')
  , MutationObserver = require('mutation-observer')

  , isEmpty = function (element) {
      return element.textContent.trim() === '' && element.children.length === 0
    }
  , update = function (element) {
      if (isEmpty(element) && document.activeElement !== element) {
        element.classList.add('placeholder')
      } else {
        element.classList.remove('placeholder')
      }
    }
  , placeholder = function (element) {
      new MutationObserver(function () {
        update(element)
      }).observe(element, { childList: true })

      update(element)
      dom.on(element, 'focus', function () {
        update(element)
      })

      dom.on(element, 'blur', function () {
        update(element)
      })
    }

require('insert-css')(require('fs').readFileSync(__dirname + '/placeholder.css', 'utf8'))

module.exports = placeholder