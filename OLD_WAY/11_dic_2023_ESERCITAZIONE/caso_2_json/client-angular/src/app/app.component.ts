import { Component, OnInit } from '@angular/core';
import { Goty, Top10 } from './models/model';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  goty: Goty[];
  top: Top10[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://3000-lorenzovill-14tecnologi-sx52nlj99fu.ws-eu110.gitpod.io/api').subscribe(data => {
      this.goty = data["Goty"]  
      this.top = data["Top10"]  
  });
  }
}
