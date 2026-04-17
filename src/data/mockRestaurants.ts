import type { Restaurant } from '../types/restaurant'

export const mockRestaurants: Restaurant[] = [
  {
    id: '196590',
    name: 'Bagelbuzz',
    cuisines: ['Bagels', 'Lunch', 'Sandwiches'],
    rating: 5,
    address: '195 Shoreditch High Street, Hackney, London, E1 6LG',
  },
  {
    id: '298845',
    name: 'Nonna Bakery',
    cuisines: ['Italian', 'Bakery', 'Breakfast'],
    rating: 4.5,
    address: '75 High Holborn, London, WC1V 6LS',
  },
  {
    id: '3',
    name: 'Pizza Palace',
    cuisines: ['Pizza', 'Italian'],
    rating: 4.3,
    address: '12 High Street, London, EC4M 7RF',
  },
]
