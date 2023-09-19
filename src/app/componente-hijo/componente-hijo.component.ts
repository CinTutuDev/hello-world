import { Component, Input } from '@angular/core';

@Component({
  selector: 'componente-hijo',
  template: '<div>Hola {{name}}</div>',
  styleUrls: ['./componente-hijo.component.scss'],
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
export class ComponenteHijoComponent {
  @Input()
  name!: string;
}
