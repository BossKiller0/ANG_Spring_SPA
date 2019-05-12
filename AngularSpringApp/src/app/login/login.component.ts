import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeauthService } from '../service/hardcodeauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='bhaskar';
  password='';
  isinvalid = false;
  constructor(public router: Router,private hardauth: HardcodeauthService) { 
    this.isinvalid = false;
  }

  ngOnInit() {
  }

  Login(){

    // console.log(this.username); 
    if(this.hardauth.auth(this.username,this.password)){
        this.isinvalid = false;
        this.router.navigate(['welcome/'+this.username]);
    }else{
      this.isinvalid = true;
    }
  }

}
