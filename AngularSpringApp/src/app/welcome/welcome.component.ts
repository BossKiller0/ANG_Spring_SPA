import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private aroute: ActivatedRoute,
    private welService: WelcomeDataService) { }
  username;
  recmessage;
  ngOnInit() {
    this.aroute.snapshot.params['name'];
    console.log(this.aroute.snapshot.params['name']);
    this.username=this.aroute.snapshot.params['name'];
  }

  getData(){
    console.log(this.welService.getWelcomeData());
    this.welService.getWelcomeData().subscribe(
      (response: any) => this.recmessage = response.message,
      error => this.recmessage = error.error.message
    );
  }

  getDataWithParm(){
    console.log(this.welService.getWelcomeDataWithParm(this.username));
    this.welService.getWelcomeDataWithParm(this.username).subscribe(
      (response: any) => this.recmessage = response.message,
      error => this.recmessage = error.error.message
    );
  }

}
