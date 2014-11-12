var dom = require('dom-events')
  , isEmpty = function (element) {
      return element.textContent.trim() === '' && element.children.length === 0
    }
  , update = function (element) {
      if (isEmpty(element)) {
        element.classList.add('placeholder')
      } else {
        element.classList.remove('placeholder')
      }
    }
  , placeholder = function (element) {
      update(element)
      dom.on(element, 'focus', function () {
        element.classList.remove('placeholder')
      })

      dom.on(element, 'blur', function () {
        update(element)
      })
    }

require('insert-css')(require('fs').readFileSync(__dirname + '/placeholder.css', 'utf8'))

module.exports = placeholder