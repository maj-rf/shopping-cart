import { render, screen } from '@testing-library/react';
import { Shop } from '../pages/Shop';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../components/context/CartContext';

describe('Shop Page', () => {
  let shoppage;
  beforeEach(() => {
    shoppage = (
      <BrowserRouter>
        <CartProvider>
          <Shop />
        </CartProvider>
      </BrowserRouter>
    );
  });
  it('renders Shop Heading', () => {
    render(shoppage);
    const shopHeading = screen.getByText(/Shop/);
    expect(shopHeading).toBeInTheDocument();
  });
});
