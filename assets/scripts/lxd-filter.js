/**
 * lxd-filter.js
 * Filters the LXD card grid by data-tags attribute.
 * No dependencies — vanilla JS only.
 *
 * Expects:
 *   - Filter buttons with data-filter="<tag>" (or data-filter="all")
 *   - Card wrapper divs with data-tags="tag1 tag2 ..."
 *   - CSS class .card-col--hidden to hide non-matching cards
 */
(function () {
  'use strict';

  const filterBar = document.getElementById('lxd-filter-bar');
  if (!filterBar) return;

  const cardCols = document.querySelectorAll('[data-tags]');
  const buttons  = filterBar.querySelectorAll('[data-filter]');

  function applyFilter(activeTag) {
    cardCols.forEach(function (col) {
      if (activeTag === 'all') {
        col.classList.remove('card-col--hidden');
      } else {
        const tags = col.dataset.tags ? col.dataset.tags.split(' ') : [];
        if (tags.includes(activeTag)) {
          col.classList.remove('card-col--hidden');
        } else {
          col.classList.add('card-col--hidden');
        }
      }
    });
  }

  function setActiveButton(clickedBtn) {
    buttons.forEach(function (btn) {
      const isActive = btn === clickedBtn;
      btn.classList.toggle('btn-primary', isActive);
      btn.classList.toggle('btn-outline-secondary', !isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  filterBar.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    const tag = btn.dataset.filter;
    setActiveButton(btn);
    applyFilter(tag);
  });

  // Initialise with "All" active
  const allBtn = filterBar.querySelector('[data-filter="all"]');
  if (allBtn) {
    setActiveButton(allBtn);
    applyFilter('all');
  }
})();
