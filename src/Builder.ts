export class Computer {
	public HDD: string;
	public RAM: string;

	public isGraphicsCardEnabled: boolean;
	public isBluetoothEnabled: boolean;

	constructor(builder: ComputerBuilder) {
		this.HDD=builder.HDD;
		this.RAM=builder.RAM;
		this.isGraphicsCardEnabled = builder.isGraphicsCardEnabled || false;
		this.isBluetoothEnabled = builder.isBluetoothEnabled || false;
	}
}

// Builder Class
export class ComputerBuilder{
	public HDD: string;
	public RAM: string;

	public isGraphicsCardEnabled?: boolean;
	public isBluetoothEnabled?: boolean;

  constructor(hdd: string, ram: string){
    this.HDD=hdd;
    this.RAM=ram;
  }

  public setGraphicsCardEnabled(isGraphicsCardEnabled: boolean) {
    this.isGraphicsCardEnabled = isGraphicsCardEnabled;
    return this;
  }

  public setBluetoothEnabled(isBluetoothEnabled: boolean) {
    this.isBluetoothEnabled = isBluetoothEnabled;
    return this;
  }

  public build(){
    return new Computer(this);
  }
}
