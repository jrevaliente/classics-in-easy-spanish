(() => {
  document.querySelectorAll('.print-action').forEach(button => button.addEventListener('click', () => window.print()));
  const toggle = document.getElementById('toggle-answers');
  if (toggle) toggle.addEventListener('click', () => {
    const answers = [...document.querySelectorAll('details.answer')];
    const show = answers.some(d => !d.open);
    answers.forEach(d => { d.open = show; });
    toggle.textContent = show ? 'Hide all answers' : 'Show all answers';
  });
})();
