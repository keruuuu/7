
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let list = document.querySelector("#ingredients");
const createLi =  elem => {
  let li = document.createElement("li");
  li.textContent = elem;
  return li
};

let menu = ingredients.map((li)=>  createLi(li));

list.append(...menu);