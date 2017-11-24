import { Component, OnInit } from '@angular/core';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  clicked: boolean;
  tasks = TASKS;

  displaySidebar() {
    (this.clicked === true) ? this.clicked = false : this.clicked = true;
  };
}

