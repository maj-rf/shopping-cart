import { render, screen } from '@testing-library/react';
import { Shop } from '../pages/Shop';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../components/context/CartContext';

describe('Shop Page', () => {
  let shopPage: JSX.Element;
  beforeEach(() => {
    shopPage = (
      <BrowserRouter>
        <CartProvider>
          <Shop />
        </CartProvider>
      </BrowserRouter>
    );
  });
  it('renders Shop Heading', () => {
    render(shopPage);
    const shopHeading = screen.getByText(/Shop/);
    expect(shopHeading).toBeInTheDocument();
  });
});
