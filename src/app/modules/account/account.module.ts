import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [AccountComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
