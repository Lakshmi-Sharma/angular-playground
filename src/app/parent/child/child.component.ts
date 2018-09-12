import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  username :string = '';

  clearInput = function() {
    this.username = ''
  }
}
