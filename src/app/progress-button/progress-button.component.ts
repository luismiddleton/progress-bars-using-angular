import { Component, Input } from '@angular/core';
import { Button } from 'src/types/shapes';

@Component({
  selector: 'app-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.scss']
})
export class ProgressButtonComponent {

  constructor() { }

  @Input() button: Button;

}
