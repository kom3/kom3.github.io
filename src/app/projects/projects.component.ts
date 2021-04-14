import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() projectCategory = 'Test Category';
  @Input() loading = true;
  @Input() projects = []
}
