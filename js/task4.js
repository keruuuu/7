let counterValue = document.querySelector('span')
let incButt = document.querySelector('button[data-action="increment"]')
let decButt = document.querySelector('button[data-action="decrement"]');
let decrement = (c => c = Number(c) - 1)
let increment = (c => c = Number(c) + 1)
decButt.addEventListener('click', () => {
    counterValue.textContent = decrement(counterValue.textContent);
  });
  incButt.addEventListener('click', () => {
    counterValue.textContent = increment(counterValue.textContent);
  });

