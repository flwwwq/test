import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';
import { AddNewComponent } from './add-new/add-new.component';

@NgModule({
  declarations: [AppComponent, UserComponent, TodoComponent, AddNewComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule],
=======
import { GameAreaComponent } from './game-area/game-area.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    GameAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
>>>>>>> c37e3c3ae1064a214a6526b24fe67bf5dfb82850
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
