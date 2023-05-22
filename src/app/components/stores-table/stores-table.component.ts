import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores-table',
  templateUrl: './stores-table.component.html',
  styleUrls: ['./stores-table.component.css']
})
export class StoresTableComponent implements OnInit {

  stores: any = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.stores = JSON.parse(localStorage.getItem("stores") || "[]");
  }

  goToEdit(x) {
    this.router.navigate([`editStore/${x}`]);
  }

}
