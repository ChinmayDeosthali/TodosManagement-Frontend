import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = ''
  password = ''
  loginFailed = false
  errorMessage = 'Login failed'

  constructor(private router : Router, 
    //private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService){

  }

  // OnLoginClick(){

  //   if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
  //     this.loginFailed = false
  //     this.router.navigate(['welcome', this.username])
  //     //console.log('Login Success')
  //   }
  //   else{
  //     this.loginFailed = true
  //     //console.log('Login Failed')
  //   }
  // }

  handleBasicAuthLogin(){
    console.log('in handleBasicAuthLogin');
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
      
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.loginFailed = false
      },

      error => {
        this.loginFailed = true
        console.log(error)
      }
    )
  }

  handleJWTAuthLogin(){

    console.log('in handleJWTAuthLogin');

    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password).subscribe(

      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.loginFailed = false
      },

      error => {
        this.loginFailed = true
        console.log(error)
      }
    )
  }
}
