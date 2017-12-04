import { MainService } from './main.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MaterializeModule } from 'angular2-materialize';
import { LoginComponent } from './login/login.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    FlashMessagesModule,
    NgxCarouselModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
