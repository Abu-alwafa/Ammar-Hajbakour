import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu() {
    this.show = !this.show
    if (this.show) {
      document.body.style.overflowY = 'hidden'
      // document.querySelector('header').style.overflow = 'visible'

    } else {
      // document.querySelector('header').style.overflow = 'hidden'
      document.body.style.overflowY = 'visible'
    }
  }
  handleListClick() {
    this.show = false
    if (this.show) {
      document.body.style.overflowY = 'hidden'
    } else document.body.style.overflowY = 'scroll'
  }
}
