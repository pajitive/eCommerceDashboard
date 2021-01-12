import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-newbanner',
  templateUrl: './newbanner.component.html',
  styleUrls: ['./newbanner.component.css']
})
export class NewbannerComponent implements OnInit {
  contactFrom: FormGroup;
  Email:string='';
  Password:string='';
  Address: string='';
  Address2: string='';
  City: string='';
  State: string='';
  Zip: string='';

  constructor(private frmbuider:FormBuilder) {
    this.contactFrom=frmbuider.group({

      email: ['',Validators.required, Validators.email],
      password:  ['',Validators.required, Validators.maxLength(10)],
      inputAddress: ['', Validators.required],
      inputAddress2:  ['', Validators.required],
      inputCity:  ['', Validators.required],
      inputState: ['', Validators.required],
      inputZip: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  PostForm(contactFrom:any){
    
     console.log(this.contactFrom.value);
   }
}
