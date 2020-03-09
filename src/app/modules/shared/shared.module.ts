import { RouterModule } from '@angular/router';
import { InputSearchModule } from './../../reusable-components/inputs/pages/input-search/input-search.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    InputSearchModule,
    RouterModule
  ], exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }