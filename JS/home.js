const elTodos = document.querySelector('.cards');
const elTemplate = document.querySelector('#todo-template');

let todos = []

function renderTodos(array, parent = elTodos) {
    parent.textContent = '';

    array.forEach(todo => {
        const template = elTemplate.content.cloneNode(true);

        const title = template.querySelector('.card__title');
        const id = template.querySelector('.card__text');



        title.textContent = todo.title
        id.textContent = todo.userId

        parent.appendChild(template)
    });
}





fetch("https://jsonplaceholder.typicode.com/todos ").then((res) => res.json()).then((data) => {
    todos = data;
    renderTodos(todos);
    // console.log(todos);

}).catch((err) => {
    console.log(err);
});
// console.log(todos);