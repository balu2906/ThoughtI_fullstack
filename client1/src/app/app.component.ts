import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GlobalServicesService } from './services/global-services.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';
  userData: any = '';
  tasksData: any;

  displayedColumns = [
    'S.no',
    'Task',
    'Expiry_at',
    'User',
    'important',
    'Created_at',
    'actions',
  ];
  @ViewChild('taskTablePagination', { static: true })
  taskTablePagination: MatPaginator | undefined;
  dataSource: any;
  pageLength: any;
  taskInputLength: any = 0;
  taskForm: FormGroup = this.fb.group({
    Task: [''],
    Expiry_date: [''],
    userId: [''],
    Important: [''],
  });
  toDay: any;
  constructor(
    private fb: FormBuilder,
    private cmnhttp: GlobalServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.getTasks();
    this.toDay = this.makeDate(new Date());
  }

  getLength() {
    const value = this.taskForm.controls['Task'].value;
    this.taskInputLength = value.length;
  }

  getUsers() {
    this.cmnhttp.getInfo('users').subscribe(
      (res) => {
        this.userData = res.data;
        console.log(this.userData, 'UsersData');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getTasks() {
    this.cmnhttp.getInfo('tasks').subscribe(
      (res) => {
        this.tasksData = res.data;

        this.tasksData.map((ele, i) => {
          ele.order = i + 1;
        });
        console.log(this.tasksData, 'tasks Data');
        this.dataSource = new MatTableDataSource(this.tasksData);
        this.dataSource.paginator = this.taskTablePagination;
        this.pageLength = this.tasksData.length;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  submitForm() {
    let taskData = {};
    Object.keys(this.taskForm.controls).forEach((key) => {
      taskData[`${key}`] = this.taskForm.controls[key].value;
    });
    console.log(taskData, 'taskForm data');

    this.cmnhttp.post('task', taskData).subscribe(
      (res) => {
        this.taskForm.reset();
        this.taskInputLength = 0;
        this.getTasks();
      },
      (err) => {
        console.log(err, 'error in adding Task');
      }
    );
  }

  makeDate(d) {
    d = new Date(d);
    console.log(d, 'dateee');
    return (
      d.getFullYear() +
      '-' +
      this.addZero(d.getMonth() + 1) +
      '-' +
      this.addZero(d.getDate())
    );
  }

  // wil return 09, 05, 10
  addZero(n = 0) {
    return (n < 10 ? '0' : '') + n;
  }
}
