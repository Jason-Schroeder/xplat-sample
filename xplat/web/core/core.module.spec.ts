import { ExampleCoreModule } from './core.module';

describe('ExampleCoreModule', () => {
  it('should work', () => {
    expect(new ExampleCoreModule(null)).toBeDefined();
  });
});
