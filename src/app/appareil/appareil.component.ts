import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string = 'Machine à laver';
  @Input() appareilStatus: string = 'éteint';

  constructor() { }

  ngOnInit() {
  }

  getStatus(){
    alert("plop");
    return this.appareilStatus;
  }

}
