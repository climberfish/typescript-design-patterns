import { Computer } from '@/creational-patterns/builder/computer/Computer';

export class ComputerBuilder {
  private computer: Computer;

  constructor(hdd: string, ram: string) {
    this.computer = new Computer(hdd, ram);
  }

  public setGraphicsCardEnabled(isGraphicsCardEnabled: boolean) {
    this.computer.isGraphicsCardEnabled = isGraphicsCardEnabled;
    return this;
  }

  public setBluetoothEnabled(isBluetoothEnabled: boolean) {
    this.computer.isBluetoothEnabled = isBluetoothEnabled;
    return this;
  }

  public build() {
    return this.computer;
  }
}
