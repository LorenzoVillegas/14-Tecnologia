import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackComponent } from './track/track.component';
import { AlbumComponent } from './album/album.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  { path: '', redirectTo: '/track', pathMatch: 'full' },
  { path: 'track', component:TrackComponent },
  { path: 'album', component:AlbumComponent },
  { path: 'author', component:AuthorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
