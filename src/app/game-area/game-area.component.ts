import { Component, OnInit, Input } from '@angular/core';
import { IWeapon } from './game.interface';
import { Weapon } from './weapon.enum';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.scss']
})
export class GameAreaComponent implements OnInit {
  @Input() name: string;
  isGame = false;
  timer = 5;
  userChoice: Weapon;
  computerChoice: Weapon;
  currentCompWeapon: IWeapon;
  resultText: string;
  button: string;
  weapons: IWeapon[] = [
    {
      name: Weapon.ROCK,
      path: '../../assets/Bitmap.png',
      // text: 'safdsaf'
    },
    {
      name: Weapon.PAPER,
      path: '../../assets/Bitmap_3.png'
    },
    {
      name: Weapon.SCISSORS,
      path: '../../assets/Bitmap_2.png'
    }
  ];
  constructor() {
    this.currentCompWeapon = this.weapons[0];
  }

  ngOnInit() {

    this.button = 'start';
  }

  game() {
    this.timer = 5;
    this.isGame = true;
    this.userChoice = null;
    this.computerChoice = null;
    this.resultText = '';
    this.currentCompWeapon = this.weapons[0];
    this.countDown();
  }

  countDown() {
    const interval = setInterval(() => {
      this.getRandomWeapon();
      this.timer--;
      if (this.timer <= 0) {
        clearInterval(interval);
        this.calcResult();
      }
    }, 1000);
  }

  getRandomWeapon() {
    const key = Math.floor(Math.random() * 3);
    this.currentCompWeapon = this.weapons[key];
    this.computerChoice = key;
  }

  calcResult() {
    console.log(this.userChoice);
    console.log(this.computerChoice);
    if (this.userChoice === this.computerChoice) {
      this.resultText = 'draw';
      this.button = 'try again';
    } else if (!this.userChoice) {
      this.resultText = 'there will be no game without a choice(';
      this.button = 'try again';
    } else if ((this.userChoice - this.computerChoice + 3) % 3 === 1) {
      this.resultText = 'You won';
      this.button = 'try again';
    } else {
      this.resultText = 'You lost, try again';
      this.button = 'try again';
    }
    this.isGame = false;
  }

  makeChoice(index) {
    this.userChoice = index;
  }
}
