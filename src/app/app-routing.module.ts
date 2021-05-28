import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InfoComponent} from './info/info.component';
import {GETtestComponent} from './GETtest/GETtest.component';
import {PosterComponent} from './poster/poster.component';
import {RollerComponent} from './roller/roller.component';
import {UsermanagementComponent} from './usermanagement/usermanagement.component';
import {TokentesterComponent} from './tokentester/tokentester.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {EntriesComponent} from './entries/entries.component';
import {BoardsComponent} from './boards/boards.component';
import {ResetComponent} from './reset/reset.component';
import {ForgotComponent} from './forgot/forgot.component';
import {MainComponent} from './main/main.component';
import {LegacyComponent} from './legacy/legacy.component';

const routes: Routes = [
	{
		path: '',
		component: MainComponent
	},
	{
		path: 'gettester',
		component: GETtestComponent
	},
	{
		path: 'info',
		component: InfoComponent
	},
	{
		path: 'poster',
		component: PosterComponent
	},
	{
		path: 'roller',
		component: RollerComponent
	},
	{
		path: 'tokentester',
		component: TokentesterComponent
	},
	{
		path: 'usermanagement',
		component: UsermanagementComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'profile',
		component: ProfileComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'entries',
		component: EntriesComponent
	},
	{
		path: 'boards',
		component: BoardsComponent
	},
	{
		path: 'reset',
		component: ResetComponent
	},
	{
		path: 'forgot',
		component: ForgotComponent
	},
	{
		path: 'legacy',
		component: LegacyComponent
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
