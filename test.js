var x = require('element')
  , test = require('prova')

  , placeholder = require('./placeholder')

test('empty element', function (t) {
  var empty = x('<p contenteditable data-placeholder="beep"></p>')
  document.body.appendChild(empty)

  placeholder(empty)

  t.ok(empty.classList.contains('placeholder'))

  t.end()
})

test('element with text', function (t) {
  var text = x('<p contenteditable data-placeholder="boop">foo</p>')
  document.body.appendChild(text)

  placeholder(text)

  t.notOk(text.classList.contains('placeholder'))

  t.end()
})

test('element with child', function (t) {
  var withChild = x('<p contenteditable data-placeholder="bong"></p>')
  withChild.appendChild(x('<img src="http://placekitten.com/g/90/90"/>'))
  document.body.appendChild(withChild)

  placeholder(withChild)

  t.notOk(withChild.classList.contains('placeholder'))

  t.end()
})
