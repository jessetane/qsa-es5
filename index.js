module.exports = function (selector, el) {
  el = el || document
  return Array.prototype.slice.call(el.querySelectorAll(selector))
}
