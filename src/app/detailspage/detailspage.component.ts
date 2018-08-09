import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {

  userid:string    = sessionStorage.getItem("userid");
  username:string  = sessionStorage.getItem("username");
  birthdate:string = sessionStorage.getItem("birthdate");
  age:string       = sessionStorage.getItem("age");

  constructor() { }

  ngOnInit() {
  }

}
