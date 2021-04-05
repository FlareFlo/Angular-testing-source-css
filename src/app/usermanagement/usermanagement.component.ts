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

  getStuff(idinput: any) {
    idinput = parseInt(idinput);
    this.posts = this.http.get(this.ROOT_URL + idinput)
    .toPromise()
    .then();
  }

  doUID(idinput: string) {
    console.log('Writing: ' + idinput + ' over ' + this.object.userid);
    (this.object.userid) = parseInt(idinput);
    console.log(this.object);
    this.getStuff(idinput);
  }

  doUsername(userinput: string) {
    console.log('Writing: ' + userinput + ' over ' + this.object.username);
    this.object.username = userinput;
    console.log(this.object);
  }

  doEmail(emailinput: string) {
    console.log('Writing: ' + emailinput + ' over ' + this.object.emailAddress);
    this.object.emailAddress = emailinput;
    console.log(this.object);
  }

  doPassword(passwordinput: string) {
    console.log('Writing: ' + passwordinput + ' over ' + this.object.password);
    this.object.password = passwordinput;
    console.log(this.object);
  }

  ngOnInit(): void {
  }
}
