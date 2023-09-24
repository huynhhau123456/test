import { Component, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthorDetail } from 'src/app/model/author-detail';


@Component({
  selector: 'app-author-details-modal',
  templateUrl: './author-details-modal.component.html',
  styleUrls: ['./author-details-modal.component.css']
})
export class AuthorDetailsModalComponent {
  constructor(
    public dialogRef: MatDialogRef<AuthorDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public authorInfo: AuthorDetail,
    
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
  
}
