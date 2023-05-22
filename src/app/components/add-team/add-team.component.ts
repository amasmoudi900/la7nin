import { Router } from '@angular/router';
import { generateId } from 'src/app/shared/generateId';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  teamForm: FormGroup;
  team: any = {};
  stadiums: any = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.stadiums = JSON.parse(localStorage.getItem("stadiums") || "[]");
  }

  addTeam() {
    // let teams = JSON.parse(localStorage.getItem("teams") || "[]");
    // this.team.id = generateId(teams);
    // teams.push(this.team);
    // localStorage.setItem("teams", JSON.stringify(teams));
    // this.router.navigate(["admin"]);
  }

}
