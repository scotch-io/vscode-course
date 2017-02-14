import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  styles: [`
    body {
      background: red;
    }
  `],
  template: `
    <div class="jumbotron">
    
    </div>
  `
})
export class AppComponent implements OnInit {
  person = 'chris'
  
  constructor() { }

  ngOnInit() { }
}