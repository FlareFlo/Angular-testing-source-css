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

  readonly ROOT_URL_TKN = 'https://backend.yap.dragoncave.dev/security/token';
  readonly ROOT_URL_USR = 'https://backend.yap.dragoncave.dev/user';

  packageobject = {
    emailAddress: '',
    password: ''
  };

  token!: string;
  message = 'Welcome';
  loginmessage = 'Login';


  doPost(email: string, password: string) {
    this.packageobject.emailAddress = email;
    this.packageobject.password = password;

    if (this.packageobject.emailAddress !== '' && this.packageobject.password !== '') {
      const header0 = new HttpHeaders().set('Content-Type', 'application/json'); // define sent data to be JSON object
      this.http.post(this.ROOT_URL_TKN, this.packageobject, {headers: header0, responseType: 'text'}) // getting login token
        .subscribe(
          res => {
            this.cookieService.removeAll();
            this.cookieService.put('token', res);
            this.getUdata();
          },
          (error) => {
            console.error(error);
          }
        );
    } else {
      console.error('One or more input fields were left empty');
    }
  }

  getUdata() {
    // tslint:disable-next-line:prefer-const
    let header1 = new HttpHeaders();
    header1 = header1.append('Token', this.cookieService.get('token'));

    this.http.get(this.ROOT_URL_USR, {headers: header1})
      .subscribe(
        response => {
          this.cookieService.putObject('Udata', response);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  welcomebackmessage() {
    if (this.cookieService.getObject('Udata') !== undefined) {
      let tempmsg: any;
      tempmsg = this.cookieService.getObject('Udata');
      this.message = 'Welcome back ' + tempmsg.username;
    }
    if (this.cookieService.getObject('Udata') !== undefined) {
      this.loginmessage = 'Logout and Change user';
    }
  }


  ngOnInit(): void {
    this.welcomebackmessage();
  }

}
