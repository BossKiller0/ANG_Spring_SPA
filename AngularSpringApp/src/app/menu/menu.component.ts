import { Component, OnInit } from '@angular/core';
import { HardcodeauthService } from '../service/hardcodeauth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private hardauth: HardcodeauthService) { }
//isUserLogin: boolean;
  ngOnInit() {
  // this.isUserLogin = this.hardauth.isLogin();
  }

}
