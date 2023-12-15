import { Component } from '@angular/core';
import { Goty } from '../models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent {
  goty: Goty[];

  constructor(private router:Router){
    this.goty = this.router.getCurrentNavigation().extras.state as Goty[];
  }

}
