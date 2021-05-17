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

  readonly ROOT_URL = 'https://backend.yap.dragoncave.dev/security/changePassword';

  Udata!: any;
  // token!: any;
  placeholder: any;

  packageobject = {
    emailAddress: '',
    newPassword: '',
    oldPassword: ''
  };

  pwdchange() {
    if (
      this.packageobject.newPassword !== null && this.packageobject.emailAddress !== null && this.packageobject.oldPassword !== null) {
      // this.token = this.cookieService.get('token');
      const headerS = new HttpHeaders().set('Content-Type', 'application/json');
      // headerS = headerS.append('Token', this.token);
      this.http.put<any>(this.ROOT_URL, this.packageobject, {headers: headerS})
        .subscribe();
    } else {
      console.error('One or more input fields were left empty!');
    }
  }

  doEmail(emailinput: string) {
    this.packageobject.emailAddress = emailinput;
  }

  dooldPassword(passwordinput: string) {
    this.packageobject.oldPassword = passwordinput;
  }

  doNewPassword(passwordinput: string) {
    this.packageobject.newPassword = passwordinput;
  }

  ngOnInit(): void {
    if (this.cookieService.getObject('Udata') !== null) {
      this.Udata = this.cookieService.getObject('Udata');
    } else {
      window.location.href = '/login';
    }
    this.placeholder = this.cookieService.get('token');
    this.packageobject.emailAddress = this.placeholder.emailAddress;
  }

}
