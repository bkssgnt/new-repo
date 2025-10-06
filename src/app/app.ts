import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-app');
  age: number = 0;
  pwd: boolean = false;
  name: string = '';
  gender: any;
  defaultHolder: string = 'My name is: ';
  person: any;
  constructor(){

  }

  ngOnChanges() {

  }
  ngOnInit(){
    this.age = 5;
    this.name = 'Bienn';
    this.person = {
      age: 28,
      name: 'Kurt',
      gender: 'Male'
    }
  }
}
