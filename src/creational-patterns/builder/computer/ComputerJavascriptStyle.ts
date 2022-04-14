interface IComputer extends IComputerOptionals {
  HDD: string;
  RAM: string;
}

interface IComputerOptionals {
  isGraphicsCardEnabled: boolean;
  isBluetoothEnabled: boolean;
}

export class Computer implements IComputer {
  public isGraphicsCardEnabled!: boolean;

  public isBluetoothEnabled!: boolean;

  constructor(
    public HDD: string,
    public RAM: string,
    optionals: IComputerOptionals = { isBluetoothEnabled: false, isGraphicsCardEnabled: false },
  ) {
    Object.assign(this, optionals);
  }
}
