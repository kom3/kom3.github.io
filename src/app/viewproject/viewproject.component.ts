import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.scss'],
})
export class ViewprojectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isVisibleMiddle = false;

  project_title = '';
  project_more_desc = [];
  roles_resps = []

  showModalMiddle(title, moredesc, rrs): void {
    this.project_more_desc = moredesc
    this.project_title = title;
    this.roles_resps = rrs
    console.log(this.project_title);
    this.isVisibleMiddle = true;
  }

  // handleOkMiddle(): void {
  //   console.log('click ok');
  //   this.isVisibleMiddle = false;
  // }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
