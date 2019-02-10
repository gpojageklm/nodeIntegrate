import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "nodeAngApp";
  const x=10;
  // This initialize component
  onInit(){
    console.log("Initializing component")
  }
}
