export class ProductClass {
  // tslint:disable-next-line:variable-name
  public _id: number;
  // tslint:disable-next-line:variable-name
  public _name: string;
  // tslint:disable-next-line:variable-name
  public _price: number;
  // tslint:disable-next-line:variable-name
  public _status: boolean;

  constructor(id: number, name: string, price: number, status: boolean) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._status = status;
  }

  // get id(): number {
  //   return this._id;
  // }
  //
  // set id(value: number) {
  //   this._id = value;
  // }

  // get name(): string {
  //   return this._name;
  // }
  //
  // set name(value: string) {
  //   this._name = value;
  // }
  //
  // get price(): number {
  //   return this._price;
  // }
  //
  // set price(value: number) {
  //   this._price = value;
  // }
  //
  // get status(): boolean {
  //   return this._status;
  // }
  //
  // set status(value: boolean) {
  //   this._status = value;
  // }
}
