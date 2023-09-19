import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  template: ``,
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
export class HelloWorldComponent {
  hello: string = 'Holita Mundo Majareta';
  userName: string = 'CinTutuDev';
  title: string = 'Property Binding - El binding de entrada';
  changed: boolean = false;
}
