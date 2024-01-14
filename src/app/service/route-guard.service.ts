import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService{

  constructor(
    //private harcodedAuthenticationService: HardcodedAuthenticationService,
    //private basicAuthenticationService: BasicAuthenticationService
    ) { }
}

export function authenticationGuard(): CanActivateFn {
  return () => {
    const service: BasicAuthenticationService = inject(BasicAuthenticationService);

    if(service.isUserLoggedIn())
      return true;
    
    const router: Router = inject(Router);
    router.navigate(['login']);
      
    return false;
  };
}

