import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/User';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-user-details.component.html',
  styleUrls: ['./modal-user-details.component.scss'],
})
export class ModalDetail {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private dialogRef: MatDialogRef<ModalDetail>
  ) {}

  onClose() {
    this.dialogRef.close();
  }
}
