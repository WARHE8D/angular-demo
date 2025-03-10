import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root', //this is the tag name that will be used in index.html
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
  `,
  // this is the css that will be applied to the component only (not globally)
  styles: [
    `
      main {
        padding: 16px;
      }
    `,
  ],
})
export class AppComponent {
  html = 'index.html';
}
