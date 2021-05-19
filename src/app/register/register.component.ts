import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  readonly ROOT_URL_USR = 'https://backend.yap.dragoncave.dev/user';
  readonly ROOT_URL_SEC_TKN = 'https://backend.yap.dragoncave.dev/security/token';

  packageobject = {
    username: '',
    emailAddress: '',
    password: '',
  };

  token!: string;

  doPost(username: string, email: string, password: string, password2: string) {
    this.packageobject.username = username;
    this.packageobject.emailAddress = email;
    this.packageobject.password = password;

    if (
      this.packageobject.username !== ''
      && this.packageobject.emailAddress !== ''
      && this.packageobject.password !== ''
    ) {
      if (this.packageobject.password === password2) {
        this.post();
      } else {
        console.error('Passwords do not match');
      }
    } else {
      console.error('Input field(s) were left empty');
    }
  }

  post() {
    this.cookieService.removeAll();
    const headerS = new HttpHeaders().set('Content-Type', 'application/json'); // define the sent content to being a Json object
    this.http.post<any>(this.ROOT_URL_USR, this.packageobject, {headers: headerS}) // send the POST to create the user account
      .subscribe(() => {
          this.gettoken();
        },
        (error) => {
          console.error(error);
        });
  }

  gettoken() {
    const headerS1 = new HttpHeaders().set('Content-Type', 'application/json'); // define the sent content to being a Json object
    // tslint:disable-next-line:max-line-length
    this.http.post(this.ROOT_URL_SEC_TKN, this.packageobject, {
      headers: headerS1,
      responseType: 'text'
    }) // send user data to generate token
      .subscribe(
        res1 => {
          this.cookieService.put('token', res1);
          this.getUdata();
        },
        (error) => {
          console.error(error);
        }
      );
  }

  getUdata() {
    // tslint:disable-next-line:prefer-const
    let header1 = new HttpHeaders();
    header1 = header1.append('Token', this.cookieService.get('token'));

    this.http.get(this.ROOT_URL_USR, {headers: header1})
      .subscribe(
        response => {
          this.cookieService.putObject('Udata', response);
          window.location.href = '/profile';
        },
        (error) => {
          console.error(error);
        }
      );
  }

  ngOnInit(): void {
  }

}
