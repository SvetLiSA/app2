import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notauth',
  templateUrl: './notauth.component.html',
  styleUrls: ['./notauth.component.css']
})
export class NotauthComponent implements OnInit {
  login: string;
  passwd: string;  

  constructor() { }

  ngOnInit(): void {    
  }

  loginUser(){
    console.log(this.login)
    console.log(this.passwd)
  }
}
