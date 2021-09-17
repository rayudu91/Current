import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessComponent } from './Successalert/success.component';
import { WarningalertComponent } from './warningalert/warningalert.component';
import { A2Component } from './a2/a2.component';
import { FormsModule } from '@angular/forms';
import { DirComponent } from './dir/dir.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningalertComponent,
    SuccessComponent,
    A2Component,
    DirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
