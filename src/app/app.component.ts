import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular-pipe-lessons'

  transform(value: string, prefix: string, operator: 'uppercase' | 'lowercase' = 'uppercase'): string {
    console.log('AppComponent', value)
    value = !value ? prefix : prefix + ' ' + value

    switch (operator) {
      case 'uppercase':
        return value.toUpperCase()

      default:
        return value.toLowerCase()
    }
  }
}
