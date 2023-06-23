import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { DelButtonmComponent } from './del-buttonm/del-buttonm.component';
import { ConstHeadingComponent } from './const-heading/const-heading.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DaysComponent } from './days/days.component';

import {MatTabsModule} from '@angular/material/tabs';
import { TaskComponent } from './task/task.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { TickButtonComponent } from './tick-button/tick-button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { TaskListComponent } from './task-list/task-list.component';

import { FormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import { MoveButtonComponent } from './move-button/move-button.component';
import { CheckboxButtonComponent } from './checkbox-button/checkbox-button.component';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DelButtonmComponent,
    ConstHeadingComponent,
    DaysComponent,
    TaskComponent,
    TickButtonComponent,
    EditButtonComponent,
    TaskListComponent,
    MoveButtonComponent,
    CheckboxButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    HttpClientModule
    
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent],


})
export class AppModule { }
