import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset(10)">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

//Esta clase se va a transformar en un componente cuando utilice el decorador component
//Component es un decorador que transforma mi clase en un componente
export class CounterComponent{
  public counter: number = 10;

  //Método para incrementar el valor del contador
  increaseBy(value: number):void {
    this.counter = this.counter + value;
  }

  reset(value: number):void{
    this.counter = value
  }
}
