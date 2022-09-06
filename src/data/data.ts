import acnh from '../assets/acnh.png';
import feh from '../assets/fe3h.png';
import mhrise from '../assets/mhrise.png';
import octopath from '../assets/octopath.png';
import pkmnswsh from '../assets/pkmnswsh.png';
import stardew from '../assets/stardew.png';

export interface ShopItem {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export const data: ShopItem[] = [
  { name: 'Animal Crossing', image: acnh, price: 59.99, quantity: 1 },
  { name: 'Fire Emblem Three Houses', image: feh, price: 59.99, quantity: 1 },
  { name: 'Monster Hunter Rise', image: mhrise, price: 59.99, quantity: 1 },
  { name: 'Octopath Traveler', image: octopath, price: 49.99, quantity: 1 },
  {
    name: 'Pokemon Sword + Shield Double Pack',
    image: pkmnswsh,
    price: 119.99,
    quantity: 1,
  },
  { name: 'Stardew Valley', image: stardew, price: 14.99, quantity: 1 },
];
