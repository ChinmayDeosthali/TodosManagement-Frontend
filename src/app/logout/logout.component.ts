import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent implements OnInit {
  constructor(private basicAuthenticationService: BasicAuthenticationService) {}
  ngOnInit(): void {
    this.basicAuthenticationService.logOut();
  }
}
