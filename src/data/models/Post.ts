export default class Post {
  id: string;
  name: string;
  address: string;
  description: string;
  phone: string;
  contact: string;
  email?: string;
  position: number[];

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.address = data.address;
    this.description = data.description;
    this.phone = data.phone;
    this.contact = data.contact;
    this.email = data.email;
    this.position = data.position;
  }
} // postOffice
