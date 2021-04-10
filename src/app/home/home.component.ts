import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

    this.stopLoading()
  }

  Python = "Python";
  Javascript = "Javascript";
  loading = true;
  stopLoading = ()=>{
    setTimeout(() => {
      this.loading = false
    }, 3000);
  }

}
