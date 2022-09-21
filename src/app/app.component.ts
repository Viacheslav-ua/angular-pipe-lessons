import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-pipe-lessons'
  dateObject: Date = new Date()
  timestamp: number = Date.now()
  dateString: string = '2022-09-21'
}
