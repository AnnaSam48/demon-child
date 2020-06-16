import { Component,ViewChild, AfterViewInit} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
userLoggedIn = true;
@ViewChild(ChildComponent, {static:false}) childComponentRef : ChildComponent;

ngAfterViewInit(){
  this.childComponentRef.message ='Message from parent component...';
}
}
