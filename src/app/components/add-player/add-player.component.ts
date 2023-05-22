import { Router } from '@angular/router';
import { generateId } from 'src/app/shared/generateId';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  playerForm: FormGroup;
  player: any = {};
  teams: any = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.teams = JSON.parse(localStorage.getItem("teams") || "[]");
  }
  addPlayer() {
    let players = JSON.parse(localStorage.getItem("players") || "[]");
    this.player.id = generateId(players);
    players.push(this.player);
    localStorage.setItem("players", JSON.stringify(players));
    this.router.navigate(["admin"]);
  }

}
