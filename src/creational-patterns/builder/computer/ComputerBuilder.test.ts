import { ComputerBuilder } from '@/creational-patterns/builder/computer/ComputerBuilder';
import { Computer } from '@/creational-patterns/builder/computer/ComputerJavascriptStyle';

describe('Test ComputerBuilder ', () => {
  const HDD = '1 TB';
  const RAM = '16 GB';

  test('Computer Builder', () => {
    const computer = new ComputerBuilder(HDD, RAM)
      .setBluetoothEnabled(true)
      .setGraphicsCardEnabled(true)
      .build();

    expect(computer.HDD).toBe(HDD);
    expect(computer.RAM).toBe(RAM);
    expect(computer.isGraphicsCardEnabled).toBe(true);
    expect(computer.isBluetoothEnabled).toBe(true);
  });

  test('Computer JS Style', () => {
    const computer = new Computer(HDD, RAM, { isGraphicsCardEnabled: true, isBluetoothEnabled: true });

    expect(computer.HDD).toBe(HDD);
    expect(computer.RAM).toBe(RAM);
    expect(computer.isGraphicsCardEnabled).toBe(true);
    expect(computer.isBluetoothEnabled).toBe(true);
  });
});
