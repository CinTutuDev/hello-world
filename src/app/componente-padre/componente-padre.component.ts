import { Component } from '@angular/core';

import { ComponenteHijoComponent } from '../componente-hijo/componente-hijo.component';

@Component({
  selector: 'componente-padre',
  template:
    '<br><div><h1>{{ title }}</h1></div><componente-hijo [name]="userName"></componente-hijo>',
  styleUrls: ['./componente-padre.component.scss'],
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
export class ComponentePadreComponent {
  userName: string = 'David';
  title: string = 'Comunicación entre Componentes mediante Property Binding';
}
