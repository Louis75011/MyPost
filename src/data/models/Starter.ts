import Product from "./Product";

export default class Starter implements Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  isDisponible: Boolean;
  detail: String;
  order: number;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.nom;
    this.price = data.prix;
    this.quantity = 0;
    this.image = data.image.id;
    this.isDisponible = data.isDisponible;
    this.detail = data.detail;
    this.order = data.number;
  }
}
