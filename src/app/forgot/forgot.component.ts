import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
	selector: 'app-forgot',
	templateUrl: './forgot.component.html',
	styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

	constructor(private http: HttpClient) {
	}


	readonly ROOT_URL_SECURITY_RESETPASSWORDREQUEST = 'https://backend.yap.dragoncave.dev/security/resetPasswordRequest';

	resetBody = {
		emailAddress: ''
	};

	checkReset(emailAddress: string) {
		if (emailAddress !== undefined && emailAddress !== '') {
			this.postReset();
		} else {
			console.log('The input field was left empty');
		}
	}

	postReset() {
		this.http.post(this.ROOT_URL_SECURITY_RESETPASSWORDREQUEST, this.resetBody)
			.subscribe(
				response => {
					console.log(response);
					window.location.href = '/reset';
				},
				(error) => {
					console.error(error);
				}
			);
	}

	ngOnInit(): void {
	}

}
