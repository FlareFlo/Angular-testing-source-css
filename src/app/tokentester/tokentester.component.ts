import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-tokentester',
  templateUrl: './tokentester.component.html',
  styleUrls: ['./tokentester.component.css']
})
export class TokentesterComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService) {

  }


  readonly URLgettoken = 'https://backend.yap.dragoncave.dev/security/token';
  readonly URLvalidatetoken = 'https://backend.yap.dragoncave.dev/security/token/checkValid ';

  packageobject = {
    emailAddress: 'test@mail.com',
    password: 'testpassword'
  };

  token!: string;


  doPost() {
    const headerS = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(this.packageobject);
    this.http.post(this.URLgettoken, this.packageobject, {headers: headerS, responseType: 'text'})
      .subscribe(
        res => {
          this.token = res;
          console.log(this.token);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  doCookiewrite() {
    this.cookieService.put('token', this.token);
  }

  doCheck() {
    let headerS = new HttpHeaders();
    headerS = headerS.append('Token', this.token);
    console.log(headerS);
    this.http.get(this.URLvalidatetoken, {headers: headerS})
      .subscribe(data => {
            console.log(data);
          },
        (error) => {
          console.error(error);
        }
      );
  }


  doPassword(passwordinput: string) {
    this.packageobject.password = passwordinput;
  }

  doEmail(emailinput: string) {
    this.packageobject.emailAddress = emailinput;
  }

  ngOnInit(): void {
  }

}
