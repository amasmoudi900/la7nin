import { generateId } from 'src/app/shared/generateId';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {

  stadiumForm: FormGroup;
  stadium: any = {};
  constructor(private router: Router) { }

  ngOnInit() {
  }

  addStadium() {
    let stadiums = JSON.parse(localStorage.getItem("stadiums") || "[]");
    this.stadium.id = generateId(stadiums);
    stadiums.push(this.stadium);
    localStorage.setItem("stadiums", JSON.stringify(stadiums));
    this.router.navigate(["admin"]);
  }

}
