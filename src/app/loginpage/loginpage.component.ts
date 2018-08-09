import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
	
	username:string = '';
	password:string = '';
	errormessage:string = '';

  constructor(private r:Router, private form:FormsModule) { }

  ngOnInit() {
  }

  attemptLogin(event){
	event.preventDefault();
	if (this.username == "admin" && this.password == "password"){
		sessionStorage.setItem("userid", "1");
		sessionStorage.setItem("username", this.username);
		sessionStorage.setItem("birthdate", "01 Jan 1970");
		sessionStorage.setItem("age", "19");
		window.location.href = "/userpage";
	}else{
		this.errormessage = "Invalid username/password";
	}
  }
}
