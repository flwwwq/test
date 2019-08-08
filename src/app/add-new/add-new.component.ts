import { Component, OnInit } from '@angular/core';
import { ITodo } from './../models/todo';
import { User } from './../models/user';

import { FormControl, Validators } from '@angular/forms';
import { TodoService } from './../sevices/todo.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  emailFormControl = new FormControl('');
  title = 'Todo_list';
  todosArray: ITodo[] = [];
  useername: User[] = [];
  // newTitle = '';
  // newText = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getData().then((res) => {
      this.todosArray = res;
    });
  }

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

  deleteTodo(text) {
    const index = this.todosArray.findIndex(el => el.text === text);
    this.todosArray.splice(index, 1);
  }
}
