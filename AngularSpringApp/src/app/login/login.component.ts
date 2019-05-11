import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='bhaskar';
  password='';
  isinvalid = false;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  Login(){

    // console.log(this.username); 
    if(this.username === 'bhaskar' && this.password === '123'){
        this.isinvalid = false;
        this.router.navigate(['welcome/'+this.username]);
    }else{
      this.isinvalid = true;
    }
  }

}
