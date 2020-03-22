import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/modules/account/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private $matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  loginHandler(): void{

    this.$matDialog.open(LoginComponent,{
    })

  }


}
