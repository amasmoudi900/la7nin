import { ReclamationService } from './../../services/reclamation.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  reclamationForm: FormGroup;
  userReclamations: any = [];
  id: any;
  constructor(
    private formBuilder: FormBuilder,
    private reclamationService: ReclamationService) { }

  ngOnInit() {
    this.id = localStorage.getItem("userId");

    this.reclamationService.getAllUserReclamations(this.id).subscribe(
      (data) => {
        this.userReclamations = data.reclamations;
      }
    )
    this.reclamationForm = this.formBuilder.group({
      subject: ["", [Validators.required]],
      description: ["", [Validators.required]]
    })
  }

  addReclamation() {
    this.reclamationForm.value.userId = this.id;
    this.reclamationService.addReclamation(this.reclamationForm.value).subscribe(
      (data) => {
        console.log("Here data after save", data.isAdded);
      }
    );
  }

}
