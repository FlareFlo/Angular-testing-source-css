import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {InfoComponent} from './info/info.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {PosterComponent} from './poster/poster.component';
import {RollerComponent} from './roller/roller.component';
import {UsermanagementComponent} from './usermanagement/usermanagement.component';
import {TokentesterComponent} from './tokentester/tokentester.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {CookieModule, CookieService} from 'ngx-cookie';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InfoComponent,
    HomeComponent,
    PosterComponent,
    RollerComponent,
    UsermanagementComponent,
    TokentesterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    CookieModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

