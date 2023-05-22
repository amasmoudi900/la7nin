import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

  teams: any = [];
  stadiums: any = [];
  findedStadium: any = {};
  constructor(private router: Router) { }

  ngOnInit() {
    this.teams = JSON.parse(localStorage.getItem("teams") || "[]");
    this.stadiums = JSON.parse(localStorage.getItem("stadiums") || "[]");
  }

  goToDisplay(id: any) {
    this.router.navigate([`teamInfo/${id}`]);
  }

  searchStadium(x) {
    // for (let i = 0; i < this.stadiums.length; i++) {
    //   if (this.stadiums[i].id == id) {
    //     this.findedStadium = this.stadiums[i];
    //     break;
    //   }
    // }
    // return this.findedStadium;
    return this.stadiums.find((elt) => { return elt.id == x });
  }

  deleteTeam(x) {
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].id == x) {
        this.teams.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("teams", JSON.stringify(this.teams));
  }

}
