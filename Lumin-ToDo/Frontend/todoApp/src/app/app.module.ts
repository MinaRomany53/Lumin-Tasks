import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './tasks/task.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToggleBtnComponent } from './header/toggle-btn/toggle-btn.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksFormComponent } from './tasks/tasks-form/tasks-form.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToggleBtnComponent,
    TasksComponent,
    TasksFormComponent,
    TasksListComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],

  providers: [TaskService],

  bootstrap: [AppComponent],
})
export class AppModule {}
