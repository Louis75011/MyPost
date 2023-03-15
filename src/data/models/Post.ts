export default class Post {
  constructor(
    public id: string,
    public name: string,
    public address: string,
    public description: string,
    public phone: string,
    public contact: string,
    public email: string | undefined,
    public position: number[]
  ) {}
} // postOffice
