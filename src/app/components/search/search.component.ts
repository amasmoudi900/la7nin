import { MatchService } from './../../services/match.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  match: any = {};
  findedMatches: any;
  constructor(private matchService: MatchService) { }

  ngOnInit() {
  }

  search() {
    this.matchService.searchMatchesByScores(this.match).subscribe(
      (data) => {
        this.findedMatches = data.searchTab;
      }
    );
  }

}
