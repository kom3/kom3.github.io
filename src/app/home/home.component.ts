import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.stopLoading();
  }

  Python = 'Python';
  Javascript = 'Javascript';
  cpnyprojects = [1, 2];
  perslprojects = [1];
  opensrcprojects = [1,2,3];

  loading = 'true';
  changeLoading(val: boolean) {
    this.loading = 'false';
  }
  stopLoading = () => {
    setTimeout(() => {
      this.loading = 'false';
    }, 3000);
  };
}
