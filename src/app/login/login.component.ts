import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email1:string;
password:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addmin(){
    if(this.email1=="tallatammar@gmail.com" && this.password=="1234")
    {
    this.router.navigate(['admin']);
    }
   }

}
