document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');

  // Ensure there is an initial active button (if none, make "all" active)
  if (![...buttons].some(b => b.classList.contains('bg-blue-500'))) {
    const allBtn = [...buttons].find(b => b.dataset.category === 'all') || buttons[0];
    if (allBtn) {
      allBtn.classList.remove('bg-gray-700', 'text-gray-200', 'hover:bg-gray-600');
      allBtn.classList.add('bg-blue-500', 'text-white', 'hover:bg-blue-600');
      allBtn.setAttribute('aria-pressed', 'true');
    }
  } else {
    buttons.forEach(b => {
      b.setAttribute('aria-pressed', b.classList.contains('bg-blue-500') ? 'true' : 'false');
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      // Reset all buttons to gray (dark theme)
      buttons.forEach(b => {
        b.classList.remove('bg-blue-500', 'text-white', 'hover:bg-blue-600');
        b.classList.add('bg-gray-700', 'text-gray-200', 'hover:bg-gray-600');
        b.setAttribute('aria-pressed', 'false');
      });

      // Set clicked button to blue
      btn.classList.remove('bg-gray-700', 'text-gray-200', 'hover:bg-gray-600');
      btn.classList.add('bg-blue-500', 'text-white', 'hover:bg-blue-600');
      btn.setAttribute('aria-pressed', 'true');

      // Filter projects
      projects.forEach(proj => {
        proj.style.display =
          category === 'all' || proj.classList.contains(category) ? '' : 'none';
      });
    });
  });
});
