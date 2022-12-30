import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  /* Here angular strict mode make to initialized the avriables,
  so instead of that, it is placed |undefined so it can be used*/
  @Input() task: ITask | undefined;

  @Output() deleteTaskEmitter: EventEmitter<ITask> = new EventEmitter<ITask>();

  deleteTask(){
    // ? must be implemented if not it throws an error
    console.log("Delete task", this.task?.title);
    this.deleteTaskEmitter.emit(this.task);
  }

}
