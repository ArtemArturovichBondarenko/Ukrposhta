import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ModalDetail } from '../modal-user-details/modal-user-details.component';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  imports: [FormsModule, CommonModule],
})
export class UserList {
  dialog = inject(MatDialog);
  dialogConfig = new MatDialogConfig();
  users: User[] = [];
  filteredUsers: User[] = [];
  search: string = '';
  // це якщо робити через Rxjs
  // destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // це якщо робити через Rxjs
    // this.getUsers();
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => ((this.users = data), (this.filteredUsers = data)))
      .catch((err) => console.error(err));
  }

  // це якщо робити через Rxjs
  // ngOnDestroy(): void {
  //   this.destroy$.next(true);
  //   this.destroy$.unsubscribe();
  // }

  // getUsers() {
  //   this.userService
  //     .getUsers()
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe({
  //       next: (data) => {
  //         this.users = data;
  //         this.filteredUsers = data;
  //       },
  //       error: (error) => {
  //         console.log(error);
  //       },
  //     });
  // }

  onDetails(user: User) {
    this.dialogConfig.data = user;
    this.dialogConfig.panelClass = 'custom-wrap-dialog-container';
    const dialogRef = this.dialog.open(ModalDetail, this.dialogConfig);
  }

  onSearch() {
    let serchString = this.search.toLowerCase().trim();
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(serchString)
    );
  }
}
