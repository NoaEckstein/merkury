import { Component, OnInit } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { MESSAGES } from '../mock-messages';
import { ACTIVITIES } from '../mock-activities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  clicked: boolean;
  tasks = TASKS;
  messages = MESSAGES;
  activities = ACTIVITIES;
  id: number;

  displaySidebar(){
    this.clicked = !this.clicked
  };

  select(id){
    this.id = id;
  };
}

