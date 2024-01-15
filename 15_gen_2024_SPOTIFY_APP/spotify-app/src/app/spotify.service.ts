import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAKvQFsD5kHWxuUf4Meqick1qQtcUOwbhRRw-SdvCZkLCpjZWgk_LtRin3kc0U0mmZAtByIMIe2edDqHTFju1slVOW0RGiyK3AEwc7CMX7SfT5ZBDsf8ZXtvghKCjFbtkDceNI05Ob8jFvsRvu7H4oORVFMLyiFXUGS2bDABDcStxKJx2DCsiaR-bURMEWF0zQH8x1OjmHsETA'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
