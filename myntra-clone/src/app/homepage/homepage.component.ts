import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { AdStructure } from '../adbanner/ad.model';
import { ProductsService } from '../sharedServices/products.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  pdb: Product[] = [];
  adArr: AdStructure[] = [
    new AdStructure('https://www.isabelmarant.com/cloud/marantwp/uploads/2020/01/Etoile-desktop.jpg', 'Flat 50% off', 'On Everything you Purchase you will get a chashback of 100rs', 'watches'),
    new AdStructure('https://www.isabelmarant.com/cloud/marantwp/uploads/2020/01/Men-desktop.jpg', '50% flat discount on Jeans', 'Get Black Levies jeans for 10000rs, DOnt Miss Out', 'men-jeans'),
    new AdStructure('https://bit.ly/2HpKxFw', '50% flat discount on Jeans', 'Get Black Levies jeans for 10000rs, DOnt Miss Out', 'jeans')
  ];
  constructor(private prodServObj: ProductsService) { }

  ngOnInit(): void {
    this.prodServObj.getProductForHomePage().subscribe( response => {
      this.pdb = response;
      console.log(response);
    })
  }
}
