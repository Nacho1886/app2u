import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Result } from 'src/app/api/interfaces';

@Component({
  selector: 'app-photographer-card',
  templateUrl: './photographer-card.component.html',
  styleUrls: ['./photographer-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhotographerCardComponent {
  @Input() photographer!: Result;

  constructor() { }
}
