import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  playersTab: any = [
    { image: "assets/images/img_3.jpg", name: "Messi", nbr: 10 },
    { image: "assets/images/img_2.jpg", name: "CR7", nbr: 7 },
    { image: "assets/images/img_1.jpg", name: "Xavi", nbr: 6 }
  ]
  constructor() { }

  ngOnInit() {
  }

}
