import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  matches: any = [];
  constructor(private router: Router, private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      (data) => {
        this.matches = data.matchesArray;
      }
    )
  }

  displayMatch(x: any) {
    localStorage.setItem("matchId", x);
    this.router.navigate(["matchInfo"]);
  }

  goToEdit(id: any) {
    // alert("Edit " + id);
    this.router.navigate([`editMatch/${id}`]);
  }

  deleteMatch(id) {
    this.matchService.deleteMatch(id).subscribe(
      (data) => {
        console.log("Here response from BE", data.isDeleted);
        this.matchService.getAllMatches().subscribe(
          (data) => {
            this.matches = data.matchesArray;
          }
        )
      }
    )
  }

}
