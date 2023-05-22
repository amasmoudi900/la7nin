import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matchesTab: any = [];
  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatchesWithComments().subscribe(
      (data) => {
        console.log("Here data", data.matches);
        this.matchesTab = data.matches;
      }
    );
  }

  updateMatches(tab: any) {
    this.matchesTab = tab;
  }

}
