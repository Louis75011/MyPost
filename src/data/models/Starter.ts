import Product from "./Product";

interface StarterData {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  isDisponible: Boolean;
  detail: String;
  order: number;
}

export default class Starter implements Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  isDisponible: Boolean;
  detail: String;
  order: number;

  constructor(data: StarterData) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.quantity = 0;
    this.image = data.image;
    this.isDisponible = data.isDisponible;
    this.detail = data.detail;
    this.order = data.order;
  }
}
