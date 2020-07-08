import { Component, Input, OnInit } from '@angular/core';
import { Bar, Limit, Colors } from 'src/types';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  constructor() {}

  @Input() public bar: Bar;
  @Input() public limit: Limit;
  public value: number;
  public color: Colors = Colors.GREEN;

  ngOnInit(): void {
    this.getValue();
  }
  public getValue(): any {

    if (this.bar > this.limit) {
      this.color = Colors.INDIAN_RED;
    }
    return (this.value = Math.floor(
      (this.value = (this.bar / this.limit) * 100)
    ));
  }
}
