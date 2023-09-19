import { Component } from '@angular/core';

@Component({
  selector: 'app-di-hola',
  templateUrl: './di-hola.component.html',
  styleUrls: ['./di-hola.component.scss'],
  styles: [
    `
      div {
        background-color: lightblue;
        padding: 10px;
        text-align: center;
      }
      h1 {
        color: blue;
      }
    `,
  ],
})
export class DiHolaComponent {
  title: string = 'Event Binding - El binding de salida';
  sayHello(event: any): void {
    alert(event.target.value);
  }
}
