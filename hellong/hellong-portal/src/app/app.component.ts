import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <a routerLink="/test-popup" routerLinkActive="active">Popup</a>
      <a routerLink="/test-table" routerLinkActive="active">Table</a>
    </div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  public showRequestCard: Subject<boolean> = new Subject<boolean>();

  showMethod(): void {}
}
