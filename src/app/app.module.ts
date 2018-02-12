import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from "@angular/http";
// Do the loading
import { LoadingModule } from 'ngx-loading';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { JsonUrlService } from './json-url.service';

export const routes: Routes = [{ path: 'home', component: HomeComponent }]; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }),
    BrowserModule,
    MaterializeModule,
    FormsModule,
    HttpModule,
    LoadingModule
  ],
  providers: [JsonUrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
