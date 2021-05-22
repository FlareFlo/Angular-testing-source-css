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
import {RegisterComponent} from './register/register.component';
import {DatatabletestComponent} from './datatabletest/datatabletest.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DialogEditEntryComponent} from './dialog-edit-entry/dialog-edit-entry.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BoardsComponent} from './boards/boards.component';

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
		ProfileComponent,
		RegisterComponent,
		DatatabletestComponent,
		DialogEditEntryComponent,
		BoardsComponent
	],
	entryComponents: [DialogEditEntryComponent],
	imports: [
		BrowserModule,
		CookieModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		DragDropModule,
		MatDialogModule,
		BrowserAnimationsModule
	],
	providers: [CookieService, DatatabletestComponent],
	bootstrap: [AppComponent]
})
export class AppModule {
}

