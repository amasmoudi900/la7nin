import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  path: string = "assets/images/logo.png";
  home: string = "Home";
  matches: string = "Matches";
  players: string = "Players";
  userRole: string;
  userId: string;
  constructor() { }

  ngOnInit() {
    this.userRole = localStorage.getItem("role");
    this.userId = localStorage.getItem("connectedUserId");
  }

}
