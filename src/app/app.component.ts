import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piping';

  day = new Date()

  name = 'Vivek'

  num = 25.05

  Currency = 100

  percentage = 25

  obj ={name:'vivek', age :25}

  arr = [25, 36, 89, 74]
}
