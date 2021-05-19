import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  readonly ROOT_URL_USR = 'https://backend.yap.dragoncave.dev/user';

  packageobject = {
    username: '',
    emailAddress: '',
    password: ''
  };

  token!: string;

  doPOST() {
    this.token = this.cookieService.get('token');
    let headerS = new HttpHeaders().set('Content-Type', 'application/json');
    headerS = headerS.append('Token', this.token);
    this.http.post(this.ROOT_URL_USR, this.packageobject, {headers: headerS})
      .subscribe(
        (error) => {
          console.error(error);
        });
  }

  doUsername(userinput: string) {
    console.log('Writing: ' + userinput + ' over ' + this.packageobject.username);
    this.packageobject.username = userinput;
    console.log(this.packageobject);
  }

  doEmail(emailinput: string) {
    console.log('Writing: ' + emailinput + ' over ' + this.packageobject.emailAddress);
    this.packageobject.emailAddress = emailinput;
    console.log(this.packageobject);
  }

  doPassword(passwordinput: string) {
    console.log('Writing: ' + passwordinput + ' over ' + this.packageobject.password);
    this.packageobject.password = passwordinput;
    console.log(this.packageobject);
  }

  ngOnInit(): void {
  }

}
