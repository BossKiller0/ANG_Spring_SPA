import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private aroute: ActivatedRoute) { }
  username;
  ngOnInit() {
    this.aroute.snapshot.params['name'];
    console.log(this.aroute.snapshot.params['name']);
    this.username=this.aroute.snapshot.params['name'];
  }

}
