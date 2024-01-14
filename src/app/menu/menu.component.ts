import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { AUTHENTICATED_USER, BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  //isUserLoggedIn : boolean = false;

  username : string = '';

  constructor(public hardcodedAuthenticationService : HardcodedAuthenticationService,
    public basicAuthenticationService: BasicAuthenticationService){

  }

  ngOnInit(){
    this.username = JSON.parse(sessionStorage.getItem(AUTHENTICATED_USER) || '{}');
    //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

  // onClickLogout(){
  //   this.hardcodedAuthenticationService.logOut();
    
  // }
}
