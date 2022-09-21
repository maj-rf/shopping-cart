import { getSubtotal } from '../components/utils/getSubtotal';

describe('Get Total Cost', () => {
  let total: number;
  it('return total = 0 if nothing is in cart', () => {
    total = getSubtotal([]);
    expect(total).toBe(0);
  });
  it('return computed total cart for a single item in cart', () => {
    total = getSubtotal([{ id: '1', quantity: 2 }]);
    expect(total).toBe(119.98);
  });
  it('return computed total cart for multiple items in cart', () => {
    total = getSubtotal([
      { id: '1', quantity: 2 },
      { id: '2', quantity: 3 },
    ]);
    expect(total).toBe(299.95);
  });
});
