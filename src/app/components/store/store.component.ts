import { ActivatedRoute } from '@angular/router';
import { generateId } from 'src/app/shared/generateId';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  storeForm: FormGroup;
  id: any;
  title: string = "Add Store";
  stores: any = [];
  findedStore: any = {};
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.stores = JSON.parse(localStorage.getItem("stores") || "[]");
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    // ID Exist (Editing)
    if (this.id) {
      this.title = "Edit Store";
      this.findedStore = this.stores.find((obj) => { return obj.id == this.id });
    }
    this.storeForm = this.fb.group({
      name: [""],
      address: [""]
    })
  }

  validate() {
    if (this.id) {
      // Editing
      for (let i = 0; i < this.stores.length; i++) {
        if (this.stores[i].id == this.id) {
          this.stores[i] = this.findedStore;
          break;
        }
      }
    } else {
      // Adding
      this.storeForm.value.id = generateId(this.stores);
      this.stores.push(this.storeForm.value);
    }
    localStorage.setItem("stores", JSON.stringify(this.stores));

  }

}
