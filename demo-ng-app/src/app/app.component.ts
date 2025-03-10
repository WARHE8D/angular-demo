import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', //this is the tag name that will be used in index.html
  imports: [RouterOutlet],
  template: `
    <h1>This is the component attached to app-root of {{ html }}!</h1>

    <router-outlet />
  `,
  // this is the css that will be applied to the component only (not globally)
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class AppComponent {
  html = 'index.html';
}
