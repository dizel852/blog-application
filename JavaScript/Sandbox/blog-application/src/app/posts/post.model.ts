export class Post {
  public title: string;
  public body: string;
  public date: string;

  constructor(title: string, body: string, date: string) {
    this.title = title;
    this.body = body;
    this.date = date;
  }
}
