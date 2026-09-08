(() => {
  'use strict';

  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const isDark = () => root.dataset.theme === 'dark' || (!root.dataset.theme && systemTheme.matches);
  const updateThemeButton = () => {
    const dark = isDark();
    root.classList.toggle('is-dark', dark);
    themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  };
  if (themeButton) {
    themeButton.hidden = false;
    updateThemeButton();
    themeButton.addEventListener('click', () => {
      root.dataset.theme = isDark() ? 'light' : 'dark';
      try { localStorage.setItem('xin-theme', root.dataset.theme); } catch (error) { /* Theme still works without storage. */ }
      updateThemeButton();
    });
    systemTheme.addEventListener('change', updateThemeButton);
  }

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');
  if (menuButton && navigation) {
    root.classList.add('nav-enhanced');
    menuButton.hidden = false;
    const setMenu = (open) => {
      navigation.classList.toggle('is-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', `${open ? 'Close' : 'Open'} navigation`);
    };
    menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
    navigation.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuButton.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);
    });
    window.matchMedia('(min-width: 521px)').addEventListener('change', () => setMenu(false));
  }

  const tools = document.querySelector('[data-publication-tools]');
  if (!tools) return;

  const search = document.querySelector('#publication-search');
  const buttons = [...document.querySelectorAll('[data-filter-year]')];
  const sections = [...document.querySelectorAll('[data-year-section]')];
  const papers = [...document.querySelectorAll('[data-paper]')];
  const empty = document.querySelector('[data-empty-state]');
  const resultCount = document.querySelector('[data-result-count]');
  let selectedYear = 'all';
  const normalize = (text) => text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
  const searchable = new Map(papers.map(paper => [paper, normalize(paper.textContent)]));

  const filter = () => {
    const query = normalize(search.value);
    let visible = 0;
    papers.forEach(paper => {
      const matches = (selectedYear === 'all' || paper.dataset.year === selectedYear) && searchable.get(paper).includes(query);
      paper.hidden = !matches;
      if (matches) visible++;
    });
    sections.forEach(section => {
      const count = [...section.querySelectorAll('[data-paper]')].filter(paper => !paper.hidden).length;
      section.hidden = count === 0;
      section.querySelector('.year-heading span').textContent = `${count} ${count === 1 ? 'publication' : 'publications'}`;
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filterYear === selectedYear)));
    resultCount.textContent = `${visible} ${visible === 1 ? 'publication' : 'publications'}`;
    empty.hidden = visible !== 0;
  };

  tools.hidden = false;
  search.addEventListener('input', filter);
  buttons.forEach(button => button.addEventListener('click', () => { selectedYear = button.dataset.filterYear; filter(); }));
  document.querySelector('[data-clear-filters]').addEventListener('click', () => {
    search.value = '';
    selectedYear = 'all';
    filter();
    search.focus();
  });
})();
