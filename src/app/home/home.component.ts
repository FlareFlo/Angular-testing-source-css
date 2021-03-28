import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  readonly ROOT_URL = "https://backend.yap.dragoncave.dev"

  posts: any;

  constructor(private  http: HttpClient) {
  }

  get() {
    let input: string = "/user/2";
    this.posts = this.http.get(this.ROOT_URL + input).toPromise().then(data => {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
