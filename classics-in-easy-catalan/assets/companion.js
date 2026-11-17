(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const fold = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase().replace(/[’']/g, "'");
  const audios = [...document.querySelectorAll('audio')];
  $('speed').addEventListener('change', () => audios.forEach(a => { a.playbackRate = Number($('speed').value); }));
  audios.forEach(a => {
    a.addEventListener('play', () => {
      audios.forEach(other => { if (other !== a) other.pause(); });
      a.playbackRate = Number($('speed').value);
      $('now-playing').textContent = 'Playing: ' + a.getAttribute('aria-label');
    });
    a.addEventListener('error', () => { a.closest('.track').querySelector('.audio-error').hidden = false; });
  });
  const articles = [...document.querySelectorAll('.entry')];
  // Read the static glossary so study tools also work offline and without a JSON fetch.
  const entries = articles.map(el => ({
    el,
    word: el.querySelector('h3').textContent,
    meaning: el.querySelector('strong').textContent,
    pos: el.querySelector('.pos').textContent,
    form: el.querySelector('p span[lang="ca"]').textContent,
    context: el.querySelectorAll('p')[3].textContent,
    example: el.querySelector('.example').textContent,
    chapters: el.dataset.chapters.split(','),
    search: fold(el.textContent)
  }));
  let cards = entries.slice(), index = 0;
  function para(text, lang, className) {
    const p = document.createElement('p'); p.textContent = text;
    if (lang) p.lang = lang;
    if (className) p.className = className;
    return p;
  }
  function renderCard() {
    $('flash-answer').hidden = true; $('flash-answer').replaceChildren();
    $('reveal').setAttribute('aria-expanded', 'false');
    $('reveal').textContent = 'Reveal answer';
    ['reveal','previous','next','shuffle'].forEach(id => { $(id).disabled = !cards.length; });
    if (!cards.length) {
      $('flash-word').textContent = 'No cards match your filters.';
      $('flash-progress').textContent = '0 cards'; return;
    }
    const v = cards[index];
    const reverse = $('direction').value === 'en-ca';
    $('flash-word').textContent = reverse ? v.meaning : v.word;
    $('flash-word').lang = reverse ? 'en' : 'ca';
    $('flash-progress').textContent = `Card ${index + 1} of ${cards.length}`;
    $('flash-answer').append(para(reverse ? v.word : v.meaning, reverse ? 'ca' : 'en'), para(v.pos), para('Story form: ' + v.form, 'ca'), para(v.context), para(v.example, 'ca', 'example'), para('Chapter(s): ' + v.chapters.join(', ')));
  }
  function filter() {
    const query = fold($('search').value.trim()), chapter = $('chapter-filter').value;
    cards = entries.filter(v => (!chapter || v.chapters.includes(chapter)) && (!query || v.search.includes(query)));
    const selected = new Set(cards);
    entries.forEach(v => { v.el.hidden = !selected.has(v); });
    $('results').textContent = `Showing ${cards.length} of ${entries.length} entries`;
    $('no-results').hidden = cards.length > 0;
    index = 0; renderCard();
  }
  $('search').addEventListener('input', filter);
  $('chapter-filter').addEventListener('change', filter);
  $('clear-filters').addEventListener('click', () => { $('search').value = ''; $('chapter-filter').value = ''; filter(); });
  document.querySelectorAll('[data-select-chapter]').forEach(a => a.addEventListener('click', () => { $('search').value=''; $('chapter-filter').value = a.dataset.selectChapter; filter(); }));
  $('direction').addEventListener('change', renderCard);
  $('reveal').addEventListener('click', () => {
    const show = $('flash-answer').hidden; $('flash-answer').hidden = !show;
    $('reveal').setAttribute('aria-expanded', String(show));
    $('reveal').textContent = show ? 'Hide answer' : 'Reveal answer';
  });
  $('next').addEventListener('click', () => { index = (index + 1) % cards.length; renderCard(); });
  $('previous').addEventListener('click', () => { index = (index - 1 + cards.length) % cards.length; renderCard(); });
  $('shuffle').addEventListener('click', () => {
    for (let i = cards.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [cards[i], cards[j]] = [cards[j], cards[i]]; }
    index = 0; renderCard();
  });
  renderCard();
})();
