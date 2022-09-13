import { render, screen } from '@testing-library/react';
import { Home } from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../components/context/CartContext';

describe('Home Page', () => {
  let homepage;
  beforeEach(() => {
    homepage = (
      <BrowserRouter>
        <CartProvider>
          <Home />
        </CartProvider>
      </BrowserRouter>
    );
  });
  it('renders Hero Heading', () => {
    render(homepage);
    const heroHeading = screen.getByText(/Toss a coin to your Switcher!/);
    expect(heroHeading).toBeInTheDocument();
  });
  it('renders a Hero Image', () => {
    render(homepage);
    screen.getByAltText('guy playing games on tv');
  });
  it('renders Featured Heading', () => {
    render(homepage);
    const featuredHeading = screen.getByText(/Games/);
    expect(featuredHeading).toBeInTheDocument();
  });
  it('renders Footer Heading', () => {
    render(homepage);
    const footerHeading = screen.getByText(/Gaming/);
    expect(footerHeading).toBeInTheDocument();
  });
});
