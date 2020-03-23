import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from '../product/product.model';
import { UserAuthService } from './user.auth.service';

@Injectable({providedIn:'root'})
export class ProductsService {
    constructor(private http: HttpClient, private userObj: UserAuthService){}
    getProductForHomePage(){
        return this.http.get<Product[]>('http://localhost/v1/mixprod.php');
    }
    getSearchedProduct(searchedItem){
        return this.http.get<Product[]>('http://localhost/v1/search.php',{
            params: new HttpParams().set('q',searchedItem)
        });
    }
    addNewProduct(pob: Product){
        return this.http.post('http://localhost/v1/add.products.php', pob, {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            params: new HttpParams().set('jwt',this.userObj._token)
          });
    }
}