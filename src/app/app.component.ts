import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a [routerLink]="['/home']" *ngIf="showAuthorSearchLink" (click)="hideAuthorSearchLink()">Tìm kiếm tác giả</a>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  showAuthorSearchLink = true;
  
  hideAuthorSearchLink() {
    this.showAuthorSearchLink = false;
  }
}
