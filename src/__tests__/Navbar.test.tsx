import { render, screen } from '@testing-library/react';
import { Navbar } from '../components/Navbar/Navbar';
import { CartProvider } from '../components/context/CartContext';
import { BrowserRouter } from 'react-router-dom';

function renderWithContext() {
  return render(
    <BrowserRouter>
      <CartProvider>
        <Navbar />
      </CartProvider>
    </BrowserRouter>
  );
}

describe('Navbar Component', () => {
  it('renders navbar heading', () => {
    renderWithContext();
    const divHeading = screen.getByText(/SWITCHER/);
    expect(divHeading).toBeInTheDocument();
  });
});
