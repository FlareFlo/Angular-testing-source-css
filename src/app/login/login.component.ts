import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  readonly URLgettoken = 'https://backend.yap.dragoncave.dev/security/token';
  readonly ROOT_URL = 'https://backend.yap.dragoncave.dev/user';

  packageobject = {
    emailAddress: '',
    password: ''
  };

  token!: string;

  returnvalue: any;

  doPost() {
    if (this.packageobject.emailAddress !== '' && this.packageobject.password !== '') {
      const header0 = new HttpHeaders().set('Content-Type', 'application/json'); // define sent data to be JSON object
      this.http.post(this.URLgettoken, this.packageobject, {headers: header0, responseType: 'text'}) // getting login token
        .subscribe(
          res => {
            this.token = res;
            this.cookieService.put('token', this.token);
          }
        );

      this.cookieService.remove('guest');

      this.getUID();

    } else {
      console.error('One or more input fields were left empty');
    }
  }

  getUID()  {
    // tslint:disable-next-line:prefer-const
    let header1 = new HttpHeaders();
    header1 = header1.append('Token', this.cookieService.get('token'));

    this.http.get(this.ROOT_URL, {headers: header1})
      .subscribe(
        response => {
          this.returnvalue = response;
          this.cookieService.put('uid', this.returnvalue.userid);
        }
      );
  }

  doEmail(input: string) {
    this.packageobject.emailAddress = input;
  }

  doPassword(input: string) {
    this.packageobject.password = input;
  }

  ngOnInit(): void {
  }

}
