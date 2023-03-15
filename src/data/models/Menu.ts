interface MenuData {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export default class Menu {
  title: string;
  description: string;
  icon: string;
  link: string;

  constructor(data: MenuData) {
    this.title = data.title;
    this.description = data.description;
    this.icon = data.icon;
    this.link = data.link;
  }
} // ConnectedMenuItem
