import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './components/textbox/textbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    TextboxComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    TextboxComponent,
    FontAwesomeModule ,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
