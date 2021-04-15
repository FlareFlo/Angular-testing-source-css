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

  readonly ROOT_URL = 'https://backend.yap.dragoncave.dev/user';
  readonly URLgettoken = 'https://backend.yap.dragoncave.dev/security/token';

  packageobject = {
    username: '',
    emailAddress: '',
    password: ''
  };

  token!: string;

  doPost() {
    if (
      this.packageobject.username !== ''
      && this.packageobject.emailAddress !== ''
      && this.packageobject.password !== ''
    ) {
      this.token = this.cookieService.get('token');
      let headerS = new HttpHeaders().set('Content-Type', 'application/json');
      headerS = headerS.append('Token', this.token);
      this.http.post<any>(this.ROOT_URL, this.packageobject, {headers: headerS})
        .subscribe(res => {
          console.log('User successfully created under UID:' + res);
          if (res !== '') {
            const headerS1 = new HttpHeaders().set('Content-Type', 'application/json');
            this.http.post(this.URLgettoken, this.packageobject, {headers: headerS1, responseType: 'text'})
              .subscribe(
                res1 => {
                  this.token = res1;
                  this.cookieService.put('token', this.token);
                }
              );
          }
        });
    } else {
      console.error('Input field(s) were left empty');
    }
  }

  doUsername(input: string) {
    this.packageobject.username = input;
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
