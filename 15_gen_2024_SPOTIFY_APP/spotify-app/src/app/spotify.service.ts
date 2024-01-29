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
        ' Bearer BQDCBS8wvvJIaPegRlKzww3XTzaJVKVS6A28AtQyVqRhZCBgrtE-24wsSy3zZFd98jSzBLMoKbJy3mMmpqJgFmTBP84LbDxm3Xw7jEG4ZnNGUaW_ONUjCY1-reosK6tTuJ1hY87PtlVgNOunmp8P5RVm1tSDAEuZR6ic68yPNbV7V9Sd0JZAxZwoLqYCMYSLg_tbmNwTijVGCl8'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
