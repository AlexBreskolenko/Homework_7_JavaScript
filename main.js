// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const dropdownEll = document.querySelectorAll(".dropdown-item");
dropdownEll.forEach((element) => {
  element.classList.add("super-dropdown");
});
console.log(dropdownEll);
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const btnEll = document.querySelector(".btn");
btnEll.classList.toggle("btn-secondary");
console.log(btnEll);
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const divEll = document.querySelector(".menu");
divEll.classList.remove("dropdown-menu");
console.log(divEll);
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const divAEllAdd = document.querySelector(".dropdown-toggle"); //тут непонятно есть класс dropdown и у тега p и у тега div
divAEllAdd.insertAdjacentHTML("beforebegin", `<a href="#">link</a>`);
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const btnDropdown = document.querySelector("#dropdownMenuButton");
btnDropdown.id = "superDropdown";
console.log(btnDropdown);
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const addData = document.querySelector("#superDropdown");
addData.setAttribute("data-dd", "3"); //Причем тут dataset я так и не понял
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

