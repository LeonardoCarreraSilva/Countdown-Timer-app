import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import moment from 'moment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CardComponent } from '../../assets/components/card/card.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, CardComponent, NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title: string = ''
  date: string = ''
  cardList: CardComponent[] = []
  fg: FormGroup

  constructor(private _fg: FormBuilder) {
    this.fg = _fg.group({
      title: '',
      date: ''
    })
  }

  setCard() {
    if(this.fg.valid){
      this.title = this.fg.value.title
      this.date = moment(this.fg.value.date).format('DD/MM/YYYY HH:mm')
      const card = new CardComponent();
      card.title = this.title;
      card.date = this.date;
      this.cardList.push(card);
    }

  }


}
