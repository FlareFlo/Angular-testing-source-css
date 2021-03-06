import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {InfoComponent} from './info/info.component';
import {GETtestComponent} from './GETtest/GETtest.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {PosterComponent} from './poster/poster.component';
import {RollerComponent} from './roller/roller.component';
import {UsermanagementComponent} from './usermanagement/usermanagement.component';
import {TokentesterComponent} from './tokentester/tokentester.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {CookieModule, CookieService} from 'ngx-cookie';
import {RegisterComponent} from './register/register.component';
import {EntriesComponent} from './entries/entries.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BoardsComponent} from './boards/boards.component';
import {ResetComponent} from './reset/reset.component';
import {ForgotComponent} from './forgot/forgot.component';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {MainComponent} from './main/main.component';
import {LegacyComponent} from './legacy/legacy.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		InfoComponent,
		GETtestComponent,
		PosterComponent,
		RollerComponent,
		UsermanagementComponent,
		TokentesterComponent,
		LoginComponent,
		ProfileComponent,
		RegisterComponent,
		EntriesComponent,
		BoardsComponent,
		ResetComponent,
		ForgotComponent,
		MainComponent,
		LegacyComponent
	],
	imports: [
		BrowserModule,
		CookieModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		DragDropModule,
		MatDialogModule,
		BrowserAnimationsModule,
		ProgressbarModule
	],
	providers: [CookieService, EntriesComponent, BoardsComponent],
	bootstrap: [AppComponent]
})
export class AppModule {
}

