import { Injectable } from '@angular/core';
// import { Title } from './../models/add';
// import { TextS } from './../models/add';

@Injectable({
  providedIn: 'root'
})
export class AddNewService {

  // constructor() { }
  // async getData(): Promise<Title[]> {
  //   return fetch ('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //   .then(r => r.json())
  //   .then(todos =>
  //     todos.map(todo => {
  //       return {
  //         id: todo.id,
  //         status: todo.complete,
  //         text: todo.title,
  //         title: todo.req ? todo.req : `Untitled ${todo.id}`
  //       };
  //     }));
  // }
  // addTodo() {
  //   if (!this.newText) {
  //     return false;
  //   }
  //   const newItem: ITodo = {
  //     id: Math.random(),
  //     status: false,
  //     text: this.newText,
  //     title: this.newTitle
  //   };
  //   this.todosArray.unshift(newItem);
  //   this.newText = '';
  //   this.newTitle = '';
  // }

  // deleteTodo(text) {
  //   const index = this.todosArray.findIndex(el => el.text === text);
  //   this.todosArray.splice(index, 1);
  // }

}
