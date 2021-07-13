import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.css']
})
export class AdddetailsComponent implements OnInit {

  data={
    internFirstName:"",
    internLastName:"",
    internMobileNo:"",
    internDOB:"",
    internProfile:""
  }
  
  constructor(private backend:BackendService,private snack:MatSnackBar ) { }

  ngOnInit(): void {
  }

  doSubmitForm(){
    console.log("Intern Added...");
    console.log("DATA",this.data);

    if(this.data.internFirstName==''||this.data.internLastName=='' 
     || this.data.internProfile==''|| this.data.internMobileNo=='' || this.data.internDOB=='' )
    {
      this.snack.open("fields cannot be empty","Cancel");
      return;
    }


    this.backend.sendData(this.data).subscribe(
      response=>{
          console.log(response);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
