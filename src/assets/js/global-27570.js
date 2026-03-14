(function() {
  const init = () => {
    const root = document.documentElement;
    const themeToggle = document.querySelector('.theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    const lightTheme = {
      '--bg': '#fbf1c7',
      '--bg-soft': '#f2e5bc',
      '--fg': '#3c3836',
      '--fg-muted': '#7c6f64',
      '--border': '#d5c4a1',
      '--accent': '#d65d0e',
      '--red': '#cc241d',
      '--green': '#98971a',
      '--yellow': '#d79921',
      '--blue': '#458588',
      '--purple': '#b16286',
      '--aqua': '#689d6a',
      '--orange': '#d65d0e'
    };
    
    const darkTheme = {
      '--bg': '#282828',
      '--bg-soft': '#3c3836',
      '--fg': '#ebdbb2',
      '--fg-muted': '#a89984',
      '--border': '#504945',
      '--accent': '#fe8019',
      '--red': '#fb4934',
      '--green': '#b8bb26',
      '--yellow': '#fabd2f',
      '--blue': '#83a598',
      '--purple': '#d3869b',
      '--aqua': '#8ec07c',
      '--orange': '#fe8019'
    };
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
    
    function applyTheme(theme) {
      const colors = theme === 'dark' ? darkTheme : lightTheme;
      Object.entries(colors).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        } else {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        }
      }
      localStorage.setItem('theme', theme);
    }
    
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const current = localStorage.getItem('theme') || 'dark';
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
    
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
    
    const cmdKModal = document.querySelector('.cmd-k-modal');
    const cmdKBackdrop = document.querySelector('.cmd-k-backdrop');
    const cmdKInput = document.querySelector('.cmd-k-input');
    const cmdKTriggers = document.querySelectorAll('.cmd-k-trigger, .cmd-k-trigger-mobile');
    const cmdKItems = document.querySelectorAll('.cmd-k-item');
    
    function openCmdK() {
      if (cmdKModal) {
        cmdKModal.classList.remove('hidden');
        if (cmdKInput) cmdKInput.focus();
      }
    }
    
    function closeCmdK() {
      if (cmdKModal) {
        cmdKModal.classList.add('hidden');
        if (cmdKInput) cmdKInput.value = '';
      }
    }
    
    cmdKTriggers.forEach(trigger => {
      trigger.addEventListener('click', openCmdK);
    });
    
    if (cmdKBackdrop) {
      cmdKBackdrop.addEventListener('click', closeCmdK);
    }
    
    cmdKItems.forEach(item => {
      item.addEventListener('click', closeCmdK);
    });
    
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (cmdKModal && cmdKModal.classList.contains('hidden')) {
          openCmdK();
        } else {
          closeCmdK();
        }
      }
      if (e.key === 'Escape') {
        closeCmdK();
      }
    });
    
    root.style.setProperty('--bg', '#282828');
    root.style.setProperty('--bg-soft', '#3c3836');
    root.style.setProperty('--fg', '#ebdbb2');
    root.style.setProperty('--fg-muted', '#a89984');
    root.style.setProperty('--border', '#504945');
    root.style.setProperty('--accent', '#fe8019');
    root.style.setProperty('--red', '#fb4934');
    root.style.setProperty('--green', '#b8bb26');
    root.style.setProperty('--yellow', '#fabd2f');
    root.style.setProperty('--blue', '#83a598');
    root.style.setProperty('--purple', '#d3869b');
    root.style.setProperty('--aqua', '#8ec07c');
    root.style.setProperty('--orange', '#fe8019');
  };
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();