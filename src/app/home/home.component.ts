import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  readonly ROOT_URL = 'https://backend.yap.dragoncave.dev';

  returnvalue: any;

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  token!: string;


  getStuff(input: string) {
    this.token = this.cookieService.get('token');

    let headerS = new HttpHeaders().set('Content-Type', 'application/json');
    headerS = headerS.append('Token', this.token);

    this.returnvalue = this.http.get(this.ROOT_URL + input, {headers: headerS})
      .toPromise()
      .then(data => {
        this.returnvalue = JSON.parse(JSON.stringify(data));
      });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
  }

}
