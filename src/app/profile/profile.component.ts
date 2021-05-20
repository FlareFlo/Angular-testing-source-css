import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient, public cookieService: CookieService) {
  }

  readonly ROOT_URL_USR = 'https://backend.yap.dragoncave.dev/user';
  readonly ROOT_URL_PWD = 'https://backend.yap.dragoncave.dev/security/changePassword';

  Udata!: any;
  token!: any;
  placeholder: any;

  packageobject = {
    username: '',
    emailAddress: '',
    newPassword: '',
    oldPassword: ''
  };

  pwdchange(oldpassword: string, newpassword: string) {
    this.packageobject.oldPassword = oldpassword;
    this.packageobject.newPassword = newpassword;

    if (
      this.packageobject.newPassword !== null
      && this.packageobject.emailAddress !== null
      && this.packageobject.oldPassword !== null
    ) {
      if (this.packageobject.newPassword.length <= 10) {
        this.cookieService.removeAll();
        this.putPwd();
      } else {
        console.error('Password too short, 10 characters minimum!');
      }
    } else {
      console.error('One or more input fields were left empty!');
    }
  }

  putPwd() {
    // this.token = this.cookieService.get('token');
    const headerS = new HttpHeaders().set('Content-Type', 'application/json');
    // headerS = headerS.append('Token', this.token);
    this.http.put<any>(this.ROOT_URL_PWD, this.packageobject, {headers: headerS})
      .subscribe(
        res => {
          console.log(res);
        },
        (error) => {
          console.error(error);
        });
  }

  usrchange(username: string, email: string, password: string) {
    if (username === '') {
      let holder: any;
      holder = this.cookieService.getObject('Udata');
      this.packageobject.username = holder.username;
    } else {
      this.packageobject.username = username;
    }
    if (email === '') {
      let holder: any;
      holder = this.cookieService.getObject('Udata');
      this.packageobject.emailAddress = holder.emailAddress;
    } else {
      this.packageobject.emailAddress = email;
    }
    this.packageobject.oldPassword = password;

    if (
      // tslint:disable-next-line:max-line-length
      this.packageobject.newPassword !== null
      && this.packageobject.emailAddress !== null
      && this.packageobject.oldPassword !== null
      && this.packageobject.username !== null
    ) {
      this.putUsr();
    } else {
      console.error('One or more input fields were left empty!');
    }
  }

  putUsr() {
    this.token = this.cookieService.get('token');
    let headerS = new HttpHeaders().set('Content-Type', 'application/json');
    headerS = headerS.append('Token', this.token);
    this.http.put<any>(this.ROOT_URL_USR, this.packageobject, {headers: headerS})
      .subscribe(() => {
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
        },
        (error) => {
          console.error(error);
        }
      );
  }

  ngOnInit(): void {
    if (this.cookieService.getObject('Udata') == null) {
      window.location.href = '/login';
    }

    this.placeholder = this.cookieService.getObject('Udata');
    this.packageobject.emailAddress = this.placeholder.emailAddress;
    this.packageobject.username = this.placeholder.username;
  }
}
