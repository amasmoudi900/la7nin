import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title: string = "Latest News";
  nbr: number = 10;
  news: any = [
    { image: "assets/images/img_1.jpg", title: "Title 1", userName: "userName 1", avatar: "assets/images/person_1.jpg", date: "06/04/2023" },
    { image: "assets/images/img_2.jpg", title: "Title 2", userName: "userName 2", avatar: "assets/images/person_2.jpg", date: "12/04/2023" },
    { image: "assets/images/img_3.jpg", title: "Title 3", userName: "userName 3", avatar: "assets/images/person_3.jpg", date: "10/04/2023" },
    { image: "assets/images/img_2.jpg", title: "Title 4", userName: "userName 4", avatar: "assets/images/person_4.jpg", date: "30/04/2023" }
  ]
  constructor() { }

  ngOnInit() {
  }

  calcul(a: number, b: number, c: number) {
    return a + b + c;
  }


}
