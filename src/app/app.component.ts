import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  clicked: boolean;

  displaySidebar() {
    (this.clicked === true) ? this.clicked = false : this.clicked = true;
  };
}

