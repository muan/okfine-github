document.addEventListener('pjax:end', init)
document.addEventListener('DOMContentLoaded', init)

function init() {
  for (const el of document.querySelectorAll('[data-hovercard-url]')) {
    el.removeAttribute('data-hovercard-url')
  }
}
