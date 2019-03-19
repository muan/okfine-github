document.addEventListener('pjax:end', init)
document.addEventListener('DOMContentLoaded', init)

function init() {
  for (const el of document.querySelectorAll('[data-hovercard-url]')) {
    el.removeAttribute('data-hovercard-url')
  }

  unwrap(document.querySelector('.js-pull-header-details .head-ref > a'))
  unwrap(document.querySelector('.js-pull-header-details .base-ref > a'))
  remove(document.querySelector('.js-pull-header-details clipboard-copy'))
}

function unwrap(el) {
  if (!el) return
  const parent = el.parentNode
  while (el.firstChild) parent.insertBefore(el.firstChild, el)
  parent.removeChild(el)
}

function remove(el) {
  if (!el) return
  el.remove()
}
