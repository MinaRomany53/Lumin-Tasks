import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToggleBtnComponent } from './header/toggle-btn/toggle-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToggleBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
