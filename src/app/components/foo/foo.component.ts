import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooComponent {
  // user$ = of({ name: 'Rita', surname: 'Stun' }).pipe(delay(1000))
  user$?: Observable<any>

  updateUser() {
    this.user$ = of({name: 'Natally', surname: 'Osset'}).pipe(delay(1000))
  }
}
