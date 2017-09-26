import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class TaskListPage {
  tasks: Array<any> = [];
  constructor(public navCtrl: NavController) {
    this.tasks = [
      {title: 'Milk', status: 'open'},
      {title: 'Eggs', status: 'open'},
      {title: 'Syrup', status: 'open'},
      {title: 'Pancake Mix', status: 'open'}
    ];
  }
  addItem(){
    let theNewTask: string = prompt("New Task");
    if (theNewTask !== ''){
      this.tasks.push({ title: theNewTask, status: 'open'});
    }
  }

}
