import { Component } from '@angular/core';

@Component({
    templateUrl: './word.component.html',
    selector: 'app-word',
    styleUrls: ['./word.component.css']
})
export class WordComponent {
      toogle = true;
      toogleForgot() {
        this.toogle = !this.toogle;
      }
}

