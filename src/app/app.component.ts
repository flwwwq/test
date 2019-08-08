import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ITodo } from './models/todo';
import { Title, TextS } from './models/add';
import { User } from './models/user';
import { FormControl, Validators } from '@angular/forms';
import { TodoService } from './sevices/todo.service';
=======
>>>>>>> c37e3c3ae1064a214a6526b24fe67bf5dfb82850

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

<<<<<<< HEAD
  title = 'Todo_list';
  todosArray: ITodo[] = [];
  useername: User[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getData().then((res) => {
      this.todosArray = res;
    });
=======
  name = '';
  isAuth = false;
  ngOnInit() {

  }

  auth() {
    this.isAuth = true;
>>>>>>> c37e3c3ae1064a214a6526b24fe67bf5dfb82850
  }
}
