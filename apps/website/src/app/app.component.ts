import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'la-liste-root',
  template: `
    <div class="container">
      <header>
        <a class="bold" [routerLink]="['/']">
          🏔️⛰️ La liste
          <span class="thin back" *ngIf="isNotHome()">🔙 retour</span>
        </a>
        <span class="thin">Edouard Bozon</span>
      </header>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 0;
      }

      .container {
        max-width: 520px;
        margin: 0 auto;
      }

      .back {
        margin-left: 10px;
      }

      a {
        text-decoration: none;
      }
    `,
  ],
})
export class AppComponent {
  constructor(public router: Router) {}

  isNotHome() {
    return this.router.url !== '/summits';
  }
}
