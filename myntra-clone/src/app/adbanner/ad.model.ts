export class AdStructure {
    public imgPath: string;
    public adOfferName: string;
    public adOfferDetail:string;
    public prodLink: string;
  
    constructor( img, name, desc, prodLink) {
      this.imgPath = img;
      this.adOfferName = name;
      this.adOfferDetail = desc;
      this.prodLink = prodLink;
    }
  }