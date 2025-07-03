import { Component } from '@angular/core';
import { Header } from './components/header/header.component';
import { UserList } from './components/users-list/user-list.component';

@Component({
  selector: 'app-root',
  imports: [Header, UserList],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Ukrposhta';
}
