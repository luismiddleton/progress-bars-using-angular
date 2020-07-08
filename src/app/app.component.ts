import { Bars, Buttons, Index, Limit, Response, Shapes } from './../types';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import config from '../config/config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public bars: Bars = [];
  public buttons: Buttons = [];
  public limit: Limit = 0;
  public currentIndex: Index = 0;
  public loading = true;
  public hasError = false;

  public title: string = config.title;

  ngOnInit(): void {
    this.http.get(config.endpoint).subscribe(
      (res: Response) => {
        this.bars = res[Shapes.BARS];
        this.buttons = res[Shapes.BUTTONS];
        this.limit = res[Shapes.LIMIT];
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        this.hasError = true;
      }
    );
  }

  selectIndex(index): void {
    return (this.currentIndex = index);
  }


  changeValue(index, value): number {
    let result = this.bars[index] + value;

    if (result < 0) {
      result = 0;
    }

    return (this.bars[index] = result);
  }
}
