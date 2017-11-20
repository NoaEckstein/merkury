import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  something: boolean;

  displaySidebar() {
    console.log('Hi');
    (this.something === true) ? this.something = false : this.something = true;
  };
}

