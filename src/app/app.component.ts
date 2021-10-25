import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cardData = [];

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.getPostsData();
  }

  getPostsData() {
    return this.http
      .get<any[]>(`assets/dummyJsonData/posts.json`, {
        observe: 'response',
      })
      .pipe(map((res: HttpResponse<any>) => res.body))
      .subscribe(
        (data) => {
          console.log(data);
          this.cardData = data.posts;
          console.log(this.cardData);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
