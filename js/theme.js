/* ==========================================================================
   ROSEDSIGNS - THEME MANAGER (DARK / LIGHT MODE)
   ========================================================================== */

(function initTheme() {
  const THEME_KEY = 'rosedsigns_theme';
  const htmlEl = document.documentElement;
  
  // Retrieve saved preference or default to dark (signature luxury aesthetic)
  const savedTheme = localStorage.getItem(THEME_KEY);
  const preferredTheme = savedTheme || 'dark';

  htmlEl.setAttribute('data-theme', preferredTheme);

  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');

    function updateIcons(theme) {
      toggleBtns.forEach(btn => {
        btn.innerHTML = theme === 'dark' 
          ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
          : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
        btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
      });
    }

    updateIcons(preferredTheme);

    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlEl.setAttribute('data-theme', nextTheme);
        localStorage.setItem(THEME_KEY, nextTheme);
        updateIcons(nextTheme);
      });
    });
  });
})();
