import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfilService }from './services/profil.service';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GitComponent } from './git/git.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './components/profil/profil.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GitComponent,
    NavbarComponent,
    ProfilComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
