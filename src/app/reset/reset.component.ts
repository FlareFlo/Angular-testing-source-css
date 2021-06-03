import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
	selector: 'app-reset',
	templateUrl: './reset.component.html',
	styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

	constructor(private http: HttpClient) {
	}

	readonly ROOT_URL_SECURITY_RESETPASSWORD = 'https://backend.yap.dragoncave.dev/security/resetPassword';

	resetBody = {
		emailAddress: '',
		newPassword: '',
		resetCode: ''
	};

	checkReset(emailAddress: string, newPassword: string, newPasswordRepeat: string, resetCode: string) {

		if (newPasswordRepeat !== '' && newPassword !== '' && emailAddress !== '') {
			if (newPassword.length >= 10) {
				if (newPassword === newPassword) {
					this.resetBody.emailAddress = emailAddress;
					this.resetBody.newPassword = newPassword;
					this.resetBody.resetCode = resetCode;
					this.postReset();
				} else {
					console.log('The passwords do not match');
				}
			} else {
				console.log('Password too short');
			}
		} else {
			console.log('One or more Input fields were left empty');
		}

	}

	postReset() {
		this.http.post(this.ROOT_URL_SECURITY_RESETPASSWORD, this.resetBody)
			.subscribe(
				response => {
					console.log(response);
					window.location.href = '/login';
				},
				(error) => {
					console.error(error);
				}
			);
	}

	getURLCode() {
		const URL = window.location.href;
		return URL.split('=')[1];
	}


	ngOnInit(): void {
		this.getURLCode();
	}

}
