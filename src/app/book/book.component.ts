import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  name = '';
  ngmodels = '';
  color = 'black';
  isShow = true;
  constructor() { }

  ngOnInit() {
  }
  inputRealtime(event) {
    this.name = event.target.value;
  }
  sukien(e) {
    let a: string = e.target.value;
    let s = a.length;
    if (s % 2 === 0) {
        this.color = 'red';
    } else {
      this.color = 'black';
    }
  }
}
