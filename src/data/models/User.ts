interface UserData {
  id: number;
  ci: {}; // carte identité
  firstName: string;
  lastName: string;
  pseudonym?: string;
  birthday?: Date;
  description: string;
  email: string;
  address: string;
  phone: number;
  level: {
    admin: string;
    greatUser: string;
    user: string;
  };
  coordinates: {
    x: number;
    y: number;
    z: number; // zoom
  };
  contacts: [];
}

export default class User {
  id: number;
  ci: {}; // carte identité
  firstName: string;
  lastName: string;
  pseudonym?: string;
  birthday?: Date;
  description: string;
  email: string;
  address: string;
  phone: number;
  level: {
    admin: string;
    greatUser: string;
    user: string;
  };
  coordinates: {
    x: number;
    y: number;
    z: number; // zoom
  };
  contacts: [];

  constructor(data: UserData) {
    this.id = data.id;
    this.ci = data.ci;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.pseudonym = data.pseudonym;
    this.birthday = data.birthday;
    this.description = data.description;
    this.email = data.email;
    this.address = data.address;
    this.phone = data.phone;
    this.level = data.level;
    this.coordinates = data.coordinates;
    this.contacts = data.contacts;
  }
}
