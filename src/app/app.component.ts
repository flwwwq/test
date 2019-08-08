import { Component, OnInit } from '@angular/core';
import { ITodo } from './models/todo';
import { Title, TextS } from './models/add';
import { User } from './models/user';
import { FormControl, Validators } from '@angular/forms';
import { TodoService } from './sevices/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Todo_list';
  todosArray: ITodo[] = [];
  useername: User[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getData().then((res) => {
      this.todosArray = res;
    });
  }
}
