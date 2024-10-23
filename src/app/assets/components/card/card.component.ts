import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import moment from 'moment';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title!: string
  @Input() date!: string;

  screenDate: string = ''

  constructor() {
    this.setCountDown(this.date)
  }

  setCountDown(date: string) {
    var today = moment()
    var dateCard = moment(date, 'YYYY-MM-DD HH:mm')

    console.log(today.diff(dateCard, 'seconds'))
    while (today.diff(dateCard, 'seconds') >= 0) {
      this.screenDate = today.diff(dateCard, 'seconds').toString()
    }

  }
}
