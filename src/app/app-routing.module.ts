import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InfoComponent} from './info/info.component';
import {HomeComponent} from './home/home.component';
import {PosterComponent} from './poster/poster.component';
import {RollerComponent} from './roller/roller.component';
import {UsermanagementComponent} from './usermanagement/usermanagement.component';
import {TokentesterComponent} from './tokentester/tokentester.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {DatatabletestComponent} from './datatabletest/datatabletest.component';
import {BoardsComponent} from './boards/boards.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
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
		path: 'datatabletest',
		component: DatatabletestComponent
	},
	{
		path: 'boards',
		component: BoardsComponent
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
