import acnh from '../assets/acnh.png';
import feh from '../assets/fe3h.png';
import mhrise from '../assets/mhrise.png';
import octopath from '../assets/octopath.png';
import pkmnswsh from '../assets/pkmnswsh.png';
import stardew from '../assets/stardew.png';
import { ShopItem } from '../components/types/type';

export const data: ShopItem[] = [
  { name: 'Animal Crossing', id: '1', image: acnh, price: 59.99, quantity: 1 },
  {
    name: 'Fire Emblem Three Houses',
    id: '2',
    image: feh,
    price: 59.99,
    quantity: 1,
  },
  {
    name: 'Monster Hunter Rise',
    id: '3',
    image: mhrise,
    price: 59.99,
    quantity: 1,
  },
  {
    name: 'Octopath Traveler',
    id: '4',
    image: octopath,
    price: 49.99,
    quantity: 1,
  },
  {
    name: 'Pokemon SWSH Double Pack',
    id: '5',
    image: pkmnswsh,
    price: 119.99,
    quantity: 1,
  },
  {
    name: 'Stardew Valley',
    id: '6',
    image: stardew,
    price: 14.99,
    quantity: 1,
  },
];
