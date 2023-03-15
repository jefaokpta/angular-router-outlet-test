import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  activate(event: any) {
    console.log('HomeComponent.activate()')
    console.log(event)
  }

  deactivate(event: any) {
    console.log('HomeComponent.deactivate()')
    console.log(event)
  }

  attach(event: any) {
    console.log('HomeComponent.attach()')
    console.log(event)
  }

  detach(event: any) {
    console.log('HomeComponent.detach()')
    console.log(event)
  }
}
