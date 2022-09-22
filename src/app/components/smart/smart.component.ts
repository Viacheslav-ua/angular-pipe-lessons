import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { delay, map, of } from 'rxjs'

export interface User {
  name: string
  surname: string
}

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartComponent {

  value = Promise.resolve(12)
  value$ = of(42)

  name$ = of('Lora').pipe(delay(2000))
  user$ = of({ name: 'Kara', surname: 'Soul' }).pipe(delay(1500))

  newUser$ = this.user$.pipe(
    map(user => ({...user, name: '__' + user.name}))
  )

  array$ = of([1,2,3,4,5])

  onDelete(user: User) {
    alert('User will be removed. User name is ' + user.name)
  }

  onItemClick(item: number, items: number[]) {
    console.log('itemClick', item, items);

  }
}
