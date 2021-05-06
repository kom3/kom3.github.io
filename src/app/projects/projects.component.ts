import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from 'events';
import { ViewprojectComponent } from '../viewproject/viewproject.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  _projects = {};
  @Input() projectCategory: string;
  @Input() loading: string;
  @Input() set projects(value: string) {
    this._projects = value;
  }

  // calling parent component function from child is easy, we can just pass the fucntion reference as props and that can be
  // called in child using evenEmitter

  // but calling child component function from parent need to import
  // child component and need use @ViewChild(childcmpname)....like below. More details at https://angular.io/guide/component-interaction

  // @ViewChild(ViewprojectComponent)
  // private variableToAccessChildFuncs: ViewprojectComponent

  // showModalMiddle = () => {
  //     console.log("Show modal middle in in projects components...")
  //     this.variableToAccessChildFuncs.showModalMiddle()
  // }

  // or

  // can use hash-tag...#somename, while including the child html component in parent html component like...<app-childselector #somevariable> </app-childselector>
  // and this variable can be used to acces the child function...  this.somevariable.child_fun() in parents HTML component only
}
