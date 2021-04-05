import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  constructor(private  http: HttpClient) {
  }

  readonly ROOT_URL = 'https://backend.yap.dragoncave.dev/user/';

  getresponse = {};

  object = {
    userid: 0,
    username: '',
    emailAddress: '',
    password: ''
  };

  doPUT(idinput: any) {
    idinput = parseInt(idinput, 10);
    console.log('Putting data...');
    console.log(this.object);
    this.http.put<any>(this.ROOT_URL + idinput, this.object).subscribe();
    this.getStuff(idinput);
  }

  getStuff(idinput: any) {
    idinput = parseInt(idinput, 10);
    this.getresponse = this.http.get(this.ROOT_URL + idinput)
      .toPromise()
      .then();
  }

  doUID(idinput: string) {
    (this.object.userid) = parseInt(idinput, 10);
    this.getStuff(idinput);
  }

  doUsername(userinput: string) {
    this.object.username = userinput;
  }

  doEmail(emailinput: string) {
    this.object.emailAddress = emailinput;
  }

  doPassword(passwordinput: string) {
    this.object.password = passwordinput;
  }

  ngOnInit(): void {
  }
}
