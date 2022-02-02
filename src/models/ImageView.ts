export interface IImageView {
  id: number;
  imageUrl: string;
  productList: IProduct[];
}
export interface IProduct {
  productId: number;
  productName: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: number;
  imageUrl: string;
}
