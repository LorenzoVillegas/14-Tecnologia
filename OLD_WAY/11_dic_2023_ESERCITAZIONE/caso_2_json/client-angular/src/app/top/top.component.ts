import { Component } from '@angular/core';
import { Top10 } from '../models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {
  top: Top10[];
  constructor(private router:Router){
    this.top = this.router.getCurrentNavigation().extras.state as Top10[];
  }
}
