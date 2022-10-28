import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tarea1: ITask = {
    title: "Tarea 1",
    description: "Descripción de la primera tarea",
    completed: false,
    level: Levels.Info
  }

  tarea2: ITask = {
    title: "Tarea 2",
    description: "Descripción de la segunda tarea",
    completed: true,
    level: Levels.Urgent
  }

  constructor() { }

  ngOnInit(): void {
  }

}
