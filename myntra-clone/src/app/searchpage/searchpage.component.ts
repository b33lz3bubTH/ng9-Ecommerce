import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../sharedServices/products.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  searchTerm = 'nothing';
  pdb: Product[] = [];
  constructor(private route: ActivatedRoute, private prodServObj: ProductsService ) { }

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.params['q'];
    this.prodServObj.getSearchedProduct(this.searchTerm).subscribe(response => {
      console.log(response);
      this.pdb = response;
    });
    this.route.params.subscribe(
      (params : Params) => {
        this.searchTerm = params['q'];
        this.prodServObj.getSearchedProduct(this.searchTerm).subscribe(response => {
          console.log(response);
          this.pdb = response;
        });
      }
    );
  }
  

}
