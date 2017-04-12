export class Post {
  public title: string;
  public body: string;
  public date: Date;

  constructor(title: string, body: string, date: Date) {
    this.title = title;
    this.body = body;
    this.date = date;
  }
}
