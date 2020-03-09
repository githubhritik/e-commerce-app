import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './input-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [InputSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ], exports: [InputSearchComponent]
})
export class InputSearchModule { }
