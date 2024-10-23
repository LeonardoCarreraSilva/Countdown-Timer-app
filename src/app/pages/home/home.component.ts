import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import moment from 'moment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title: string = ''
  date: string = ''
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
    }

  }


}
