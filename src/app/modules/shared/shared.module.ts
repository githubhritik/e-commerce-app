import { RouterModule } from '@angular/router';
import { InputSearchModule } from './../../reusable-components/inputs/pages/input-search/input-search.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoginModule } from '../account/login/login.module';
import { FirebaseService } from 'src/app/service/firebase/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    InputSearchModule,
    RouterModule,
    LoginModule
  ], exports: [HeaderComponent, FooterComponent]
  ,providers: [FirebaseService]
})
export class SharedModule { }
