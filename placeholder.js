var isEmpty = function (element) {
      return element.textContent.trim() === '' && element.children.length === 0
    } 
  , placeholder = function (element) {
      if (isEmpty(element)) {
        element.classList.add('placeholder')
      } else {
        element.classList.remove('placeholder')
      }
    }

require('insert-css')(require('fs').readFileSync(__dirname + '/placeholder.css', 'utf8'))

module.exports = placeholder