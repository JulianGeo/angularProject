import { Component } from '@angular/core';
import { ITask, Levels } from '../models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent {
  //TODO code as an actual tasklist

  task1: ITask = {
    title: 'Task 1',
    description: 'Description 1',
    completed: false,
    level: Levels.Info
  };

  task2: ITask = {
    title: 'Task 2',
    description: 'Description 2',
    completed: false,
    level: Levels.Urgent
  };

  task3: ITask = {
    title: 'Task 3',
    description: 'Description 3',
    completed: false,
    level: Levels.Blocking
  };

  taskDeleteReceiver(event: ITask){
    //TODO add an splice to delete from the tasklist
    alert (`${event?.title} has been deleted`)
  }

}
