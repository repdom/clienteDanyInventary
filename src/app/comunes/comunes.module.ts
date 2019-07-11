import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppErrorHandler } from './app-error-handler';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  declarations: [],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  entryComponents: [
  ]
})
export class ComunesModule { }
