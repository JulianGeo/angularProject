import { Component, Input } from '@angular/core';
import { iTask } from '../models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  /* Here angular strict mode make to initialized the avriables,
  so instead of that, it is placed |undefined so it can be used*/
  @Input() task: iTask | undefined;

  deleteTask(){
    // ? must be implemented if not it throws an error
    console.log("Delete task", this.task?.title)
  }

}
