import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
