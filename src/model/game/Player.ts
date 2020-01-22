import { Int, roundToInt } from "../Int";
import { BankNote } from "../BankNote";

export class Player {

  private name: string;
  private notes: Array<BankNote>;

  constructor(
    name: string,
    notes: Array<BankNote>
  ) {
    this.name = name;
    this.notes = notes;
  }

  public getName(): string {
    return this.name;
  }

  public getCurrentNotes(): Array<BankNote> {
    return this.notes;
  }

  public getCurrentTotalAmount(): Int {
    const sum: number = this.notes.reduce((sum, current) => sum + current.getValue(), 0);
    return roundToInt(sum);
  }

}
