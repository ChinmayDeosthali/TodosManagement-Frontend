import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(
      'http://localhost:8080/hello-world-bean'
    );
  }

  executeHelloWorldBeanServiceWithPathVariable(name: string) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString,
    // });

    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/${name}`
      //{headers}
    );
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'Tommy';
  //   let password = 'dummy';
  //   let basicAuthHeaderString =
  //     'Basic ' + window.btoa(`${username}:${password}`);

  //   return basicAuthHeaderString;
  // }
}
