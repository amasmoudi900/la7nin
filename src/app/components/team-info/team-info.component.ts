import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  teams: any;
  id: any;
  team: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.teams = JSON.parse(localStorage.getItem("teams") || "[]");
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].id == this.id) {
        this.team = this.teams[i];
        break;
      }
    }
  }

}
