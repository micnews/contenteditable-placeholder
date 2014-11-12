var x = require('element')
  , test = require('prova')

  , placeholder = require('./placeholder')

test('empty element, focus & blur', function (t) {
  var empty = x('<p contenteditable data-placeholder="beep"></p>')
  document.body.appendChild(empty)

  placeholder(empty)

  t.ok(empty.classList.contains('placeholder'))

  empty.focus()

  t.notOk(empty.classList.contains('placeholder'))

  empty.blur()

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

test('element appending child', function (t) {
  var element = x('<p contenteditable data-placeholder="blip"></p>')
    , child = x('<img src="http://placekitten/g/90/90"/>')

  document.body.appendChild(element)

  placeholder(element)

  element.appendChild(child)

  // run in next tick so that the observer can run
  process.nextTick(function () {
    t.notOk(element.classList.contains('placeholder'))
    t.end()
  })
})

test('element setting innerHTML', function (t) {
  var element = x('<p contenteditable data-placeholder="blip"></p>')

  document.body.appendChild(element)

  placeholder(element)

  element.innerHTML = 'oh yeah'

  // run in next tick so that the observer can run
  process.nextTick(function () {
    t.notOk(element.classList.contains('placeholder'))
    t.end()
  })
})

test('element changing in focus', function (t) {
  var element = x('<p contenteditable data-placeholder="foo">content</p>')

  document.body.appendChild(element)

  placeholder(element)

  element.focus()

  element.innerHTML = ''

  process.nextTick(function () {
    t.notOk(element.classList.contains('placeholder'))
    t.end()
  })
})
