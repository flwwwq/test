import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameAreaComponent } from './game-area/game-area.component';

<<<<<<< HEAD
const routes: Routes = [];
=======

const routes: Routes = [
  { path: 'game-area', component: GameAreaComponent }
];
>>>>>>> c37e3c3ae1064a214a6526b24fe67bf5dfb82850

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
