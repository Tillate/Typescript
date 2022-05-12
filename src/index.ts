import "./style/style.css";
import { Todo } from './interfaces/todo.interface';

const ul = HTMLUlListElement = document.querySelector("ul")!;
const form = HTMLFormListElement = document.querySelector("form")!;
const input = HTMLInputListElement =document.querySelector<HTMLInputElement>("form > input")!;

form.addEventListener("submit", (event: Event): void => {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addTodo(value);
});

const todos = Todo[] = [
  {
    text: "je suis une todo",
    done: false,
    editMode: true
  },
  {
    text: "faire du JavaScript",
    done: true,
    editMode: false
  }
];

const displayTodo = () => {
  const todosNode: HTMLLiElement[] = todos.map((todo: Todo, index: number) => {
    if (todo.editMode) {
      return createTodoEditElement(todo, index);
    } else {
      return createTodoElement(todo, index);
    }
  });
  ul.innerHTML = "";
  ul.append(...todosNode);
};

const createTodoElement = (todo: Todo, index: number): HTMLLiElement => {
  const li: HTMLLiElement = document.createElement("li");
  const buttonDelete: HTMLButtonElement = document.createElement("button");
  buttonDelete.innerHTML = "Supprimer";
  const buttonEdit: HTMLButtonElement = document.createElement("button");
  buttonEdit.innerHTML = "Edit";
  buttonDelete.addEventListener("click", (event: MouseEvent) => {
    event.stopPropagation();
    deleteTodo(index);
  });
  buttonEdit.addEventListener("click", (event: MouseEvent) => {
    event.stopPropagation();
    toggleEditMode(index);
  });
  li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}"></span>
    <p>${todo.text}</p>
  `;
  li.addEventListener("click", (event: : MouseEvent) => {
    toggleTodo(index);
  });
  li.append(buttonEdit, buttonDelete);
  return li;
};

const createTodoEditElement = (todo: Todo, index: number): HTMLLiElement => {
  const li: HTMLLiElement = document.createElement("li");
  const input: HTMLInputElement = document.createElement("input");
  input.type = "text";
  input.value = todo.text;
  input.setAttribute('index', index + '');
  const buttonSave: HTMLButtonElement = document.createElement("button");
  buttonSave.innerHTML = "Save";
  const buttonCancel: HTMLButtonElement = document.createElement("button");
  buttonCancel.innerHTML = "Cancel";
  buttonCancel.addEventListener("click", (event: : MouseEvent) => {
    event.stopPropagation();
    toggleEditMode(index);
  });
  buttonSave.addEventListener("click", (event: : MouseEvent) => {
    editTodo(index, input);
  });
  li.append(input, buttonCancel, buttonSave);
  return li;
};

const addTodo = (text: string) => {
  todos.push({
    text,
    done: false,
    editMode: false,
  });
  displayTodo();
};

const deleteTodo = (index: number) => {
  todos.splice(index, 1);
  displayTodo();
};

const toggleTodo = (index: number) => {
  todos[index].done = !todos[index].done;
  displayTodo();
};

const toggleEditMode = (index: number) => {
  todos[index].editMode = !todos[index].editMode;
  displayTodo();
};

const editTodo = (index: number, input: HTMLInputElement) => {
  const value = input.value;
  todos[index].text = value;
  todos[index].editMode = false;
  displayTodo();
};

displayTodo();
