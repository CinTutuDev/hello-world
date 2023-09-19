import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `<div>
    <h1 class="hello">
      {{ hello | uppercase }}
    </h1>
  </div>`,
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
  public hello: string = 'Holita Mundo Majareta';
}
