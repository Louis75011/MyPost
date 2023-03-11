export default class Menu {
  title: string;
  description: string;
  icon: string;
  link: string;

  constructor(data: any) {
    this.title = data.title;
    this.description = data.description;
    this.icon = data.icon;
    this.link = data.link;
  }
} // ConnectedMenuItem
