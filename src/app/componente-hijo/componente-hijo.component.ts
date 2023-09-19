import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'componente-hijo',
  template: '<!-- <div>Hola {{name}}</div> --><button (click)="sayHello()">Di hola</button>',
  styleUrls: ['./componente-hijo.component.scss'],
  styles: [
    `
      div, button {
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
export class ComponenteHijoComponent {
  /* @Input()
  name!: string; */
  @Output() eventoHijo = new EventEmitter();

  sayHello() {
    this.eventoHijo.emit("Hola!");
}
}
