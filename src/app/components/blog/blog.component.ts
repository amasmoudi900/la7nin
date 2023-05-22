import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articlesTab: any = [
    { image: "assets/images/img_1.jpg", date: "05/04/2023", title: "Title 1", description: "Description 1" },
    { image: "assets/images/img_2.jpg", date: "10/04/2023", title: "Title 2", description: "Description 2" },
    { image: "assets/images/img_3.jpg", date: "25/04/2023", title: "Title 3", description: "Description 3" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
