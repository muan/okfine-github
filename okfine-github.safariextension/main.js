document.addEventListener('pjax:end', init)
document.addEventListener('DOMContentLoaded', init)

function init() {
  for (const el of document.querySelectorAll('[data-hovercard-url]')) {
    el.removeAttribute('data-hovercard-url')
  }

  for (const el of document.querySelectorAll('.js-sticky')) {
    el.classList.remove('js-sticky')
  }

  const prHeader = document.querySelector('.js-pull-header-details')
  if (prHeader) {
    for (const el of prHeader.querySelectorAll('.commit-ref > a, .head-ref > a, .base-ref > a')) {
      unwrap(el)
    }

    for (const el of prHeader.querySelectorAll('clipboard-copy')) {
      remove(el)
    }
  }
}

function unwrap(el) {
  const parent = el.parentNode
  while (el.firstChild) parent.insertBefore(el.firstChild, el)
  parent.removeChild(el)
}

function remove(el) {
  el.remove()
}
