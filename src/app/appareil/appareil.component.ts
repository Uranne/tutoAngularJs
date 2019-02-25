import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string = 'Machine à laver';
  @Input() appareilStatus: string = 'éteint';
  @Input() index: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus;
  }

  onSwitch(){
    if(this.appareilStatus === "éteint"){
      this.appareilService.switchOneOn(this.index);
    }else{
      this.appareilService.SwitchOneOff(this.index);
    }
  }
}
