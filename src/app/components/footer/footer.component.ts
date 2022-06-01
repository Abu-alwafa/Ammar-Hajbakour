import { Component, OnInit } from '@angular/core';
import { faMailBulk, faMobile } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  mobileIcon = faMobile
  messageIcon = faMailBulk
  constructor() { }

  ngOnInit(): void {
  }

}
