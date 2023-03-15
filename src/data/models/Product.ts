import Product from "./Product";

interface StarterData {
  id: number;
  name: string;
  price: number;
  image: string;
  isDisponible: Boolean;
  detail: String;
  order: number;
}

export default class Starter implements Product {
  quantity = 0;

  constructor(
    public id: number,
    public name: string,
    public price: number,
    public image: string,
    public isDisponible: Boolean,
    public detail: String,
    public order: number
  ) {}
}
