export class Product {
  public name: string;
  public price: number;
  public imgPath: string;
  public description: string;
  public id: number;

  constructor(id: number , name, price: number, img, desc) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imgPath = img;
    this.description = desc;
  }
}
