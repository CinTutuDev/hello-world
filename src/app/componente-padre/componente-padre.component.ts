import { Component } from '@angular/core';

import { ComponenteHijoComponent } from '../componente-hijo/componente-hijo.component';

@Component({
  selector: 'componente-padre',
  templateUrl: './componente-padre.component.html',
  template: '',
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
  frase: string = '';
  userName: string = 'David';
  title: string = 'Comunicación entre Componentes mediante Property Binding';

  listenerPadre(event: string): void {
    this.frase = event;
}
}
