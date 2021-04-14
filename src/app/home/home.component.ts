import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  readonly ROOT_URL = 'https://backend.yap.dragoncave.dev';

  posts: any;

  constructor(private  http: HttpClient) {
  }

  token!: string;

setToken(tokeninput: string) {
this.token = tokeninput;
console.log(this.token);
}

  getStuff(input: string) {
    let headerS = new HttpHeaders().set('Content-Type', 'application/json');
    headerS = headerS.append('Token', this.token);
    this.posts = this.http.get(this.ROOT_URL + input, {headers: headerS})
      .toPromise()
      .then(data => {this.posts = data;
                     console.log(data);
    });
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
  }

}
