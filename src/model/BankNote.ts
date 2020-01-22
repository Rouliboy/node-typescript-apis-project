import { Int } from "./Int";

export class BankNote {
  constructor(
    private _value: Int
  ) {
  }

  public getValue(): Int {
    return this._value;
  }

}
