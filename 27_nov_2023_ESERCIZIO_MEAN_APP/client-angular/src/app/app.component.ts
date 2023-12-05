import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: string[];
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
  // Make the HTTP request:
    this.http.get('https://3000-lorenzovill-14tecnologi-s6nov9wqdr2.ws-eu106.gitpod.io/api').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
    });
  }
}
