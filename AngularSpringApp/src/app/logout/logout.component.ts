import { Component, OnInit } from '@angular/core';
import { HardcodeauthService } from '../service/hardcodeauth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardauth: HardcodeauthService) { }

  ngOnInit() {
    this.hardauth.logout();
  }

}
