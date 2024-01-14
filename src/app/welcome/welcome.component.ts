import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessageFromService = ''

  constructor(private route : ActivatedRoute,
    private service: WelcomeDataService,){

  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    //console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)    
      //response => console.log(response.message)
      );

    console.log('last line of getWelcomeMessage')
  }

  getWelcomeMessageWithPathVariable(){
    //console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response)    
      //response => console.log(response.message)
      );

    console.log('last line of getWelcomeMessage')
  }

  handleSuccessfulResponse(response: HelloWorldBean){
    //console.log(response);
    this.welcomeMessageFromService = response.message;
  }

  
}
