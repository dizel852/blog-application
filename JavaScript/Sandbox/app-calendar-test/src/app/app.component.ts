import { Component } from '@angular/core';
import { DatepickerModule } from 'angular2-material-datepicker';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
   date = '';

  getCurrenDate() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d;
  }

  showDate() {
    console.log(this.getCurrenDate());
  }

}
