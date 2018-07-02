import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

//Reference URL: https://blog.thoughtram.io/angular/2017/11/13/easy-dialogs-with-angular-material.html

@Injectable()
export class DialogServiceService {
  public dialogRef: any;

  constructor(public dialog: MatDialog) { }

  createDialog(component: any, options: any): any {
    this.dialogRef = this.dialog.open(component, options);

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    return this.dialogRef;
  }

  destroyDialog(dialogRef?: any) {
    if (dialogRef) {
      dialogRef.close();
    }
    else {
      this.dialogRef.close();
    }
  }

}
