import { Component, OnInit, Input } from '@angular/core';
import { AdStructure } from './ad.model';

@Component({
  selector: 'app-adbanner',
  templateUrl: './adbanner.component.html',
  styleUrls: ['./adbanner.component.css']
})
export class AdbannerComponent implements OnInit {
  // pass AD: {'imgPath','OfferName', 'Offer Details'}
  // @Input to accept ad 
  @Input() adArray : AdStructure[];
  constructor() { }

  ngOnInit(): void {
    
  }

}
