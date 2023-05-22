import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.css']
})
export class SearchTeamComponent implements OnInit {

  searchForm: FormGroup;
  team: any = {};
  teams: any = [];
  stadiums: any = [];
  players: any = [];
  findedTeam: any = {};
  findedPlayers: any = [];
  constructor() { }

  ngOnInit() {
    this.teams = JSON.parse(localStorage.getItem("teams") || "[]");
    this.stadiums = JSON.parse(localStorage.getItem("stadiums") || "[]");
    this.players = JSON.parse(localStorage.getItem("players") || "[]");
  }
  search() {
    this.findedTeam = {};
    let teamName = this.team.name;
    for (let i = 0; i < this.teams.length; i++) {
      if ((this.teams[i].name).toLowerCase() == teamName.toLowerCase()) {
        this.findedTeam = this.teams[i];
        break;
      }
    }
  }

  searchTeamStadium(sId) {
    return this.stadiums.find((obj) => { return obj.id == sId });
  }

  searchTeamPlayers(tId) {
    this.findedPlayers = [];
    this.findedPlayers = this.players.filter((obj) => { return obj.teamId == tId });
    return this.findedPlayers;
  }

}
