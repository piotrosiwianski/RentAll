export class Item {
  constructor(
    public name: string,
    public catagory?: string,
    public id?: number,
    public available?: boolean,
    public rented?: boolean,
    public owner?: string
  ) {}
}
