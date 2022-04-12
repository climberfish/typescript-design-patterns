import { ComputerBuilder } from '@/builder/computer/ComputerBuilder';

describe('TestBuilderPattern ', () => {
  test('Build Computer', () => {
    const HDD = '1 TB';
    const RAM = '16 GB';
    const computer = new ComputerBuilder(HDD, RAM)
      .setBluetoothEnabled(true)
      .setGraphicsCardEnabled(true)
      .build()
    
    expect(computer.HDD).toBe(HDD)
    expect(computer.RAM).toBe(RAM)
    expect(computer.isGraphicsCardEnabled).toBe(true)
    expect(computer.isBluetoothEnabled).toBe(true)
  });
});
