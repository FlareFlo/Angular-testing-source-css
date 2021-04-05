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

  posts: any;

  object = {
    userid: 0,
    username: '',
    emailAddress: '',
    password: ''
  };

  doPOST() {
    console.log('Posting data...');
    const url = 'https://backend.yap.dragoncave.dev/user';
    this.http.post(url, this.object).subscribe();
  }

  doPUT(idinput: any) {
    idinput = parseInt(idinput);
    console.log('Putting data...');
    console.log(this.object);
    this.http.put(this.ROOT_URL + idinput, this.object).subscribe();
    this.getStuff(idinput);
  }

  getStuff(idinput: any) {
    idinput = parseInt(idinput);
    this.posts = this.http.get(this.ROOT_URL + idinput)
      .toPromise()
      .then();
  }

  doUID(idinput: string) {
    (this.object.userid) = parseInt(idinput);
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
