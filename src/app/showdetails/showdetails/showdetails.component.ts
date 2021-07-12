import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';
@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  dataa:any=[];
  constructor(private backend:BackendService) {}

  ngOnInit(): void { 
    this.backend.getData().subscribe(
      data=>{
        this.dataa=data;
      }
    )
   }
 
  
}
