import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';
import { Task } from "./task";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Dialogs } from '@ionic-native/dialogs';
@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class TaskListPage {
  tasks: FirebaseListObservable<any[]>;;
  constructor(public navCtrl: NavController, public af: AngularFireDatabase, public dialogs: Dialogs) {
      this.tasks = af.list('/tasks');
  }
  addItem(){
    this.dialogs.prompt('Add a task', 'Ionic2Do', ['Ok', 'Cancel'], '').then(
    theResult => {
      if((theResult.buttonIndex == 1)
      && (theResult.input1 !== '')){
      this.tasks.push({ title: theResult.input1, status: 'open'});
      }
    }
    )
  }
  markAsDone(slidingItem: ItemSliding, task: any){
    this.tasks.update(task.$key, { status: 'done'});
    slidingItem.close();
  }
  removeTask(slidingItem: ItemSliding, task: any){
    this.tasks.remove(task.$key);
    slidingItem.close();
  }

}