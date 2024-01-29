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
      'Bearer BQC-wf1A1Pz0pDf_R82zqn_zG1xC8UGF1sQvPjGWnLv8zkWUzybd4JgE83UrkKoKvnNKNl2Ge8tlaIQdVOugS7gkXHrU9YIbXHdLcD6c3sxfj8TQ6d2JGnTfyTBIdz8CUjqREBdpiNep1Ta3eAwIpB71tEH3SG3kr4KBGCvDWBPINQFYbCtthiMX-JgnTBN75srwX7LZVZpq6iQ'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

  searchAuthor(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=artist`;
    const headers = new HttpHeaders({
      Authorization:
      'Bearer BQC-wf1A1Pz0pDf_R82zqn_zG1xC8UGF1sQvPjGWnLv8zkWUzybd4JgE83UrkKoKvnNKNl2Ge8tlaIQdVOugS7gkXHrU9YIbXHdLcD6c3sxfj8TQ6d2JGnTfyTBIdz8CUjqREBdpiNep1Ta3eAwIpB71tEH3SG3kr4KBGCvDWBPINQFYbCtthiMX-JgnTBN75srwX7LZVZpq6iQ'
});

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

  searchAlbum(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=album`;
    const headers = new HttpHeaders({
      Authorization:
      'Bearer BQC-wf1A1Pz0pDf_R82zqn_zG1xC8UGF1sQvPjGWnLv8zkWUzybd4JgE83UrkKoKvnNKNl2Ge8tlaIQdVOugS7gkXHrU9YIbXHdLcD6c3sxfj8TQ6d2JGnTfyTBIdz8CUjqREBdpiNep1Ta3eAwIpB71tEH3SG3kr4KBGCvDWBPINQFYbCtthiMX-JgnTBN75srwX7LZVZpq6iQ'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
