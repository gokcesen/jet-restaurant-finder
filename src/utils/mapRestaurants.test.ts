import { describe, expect, it } from 'vitest';
import { mapRestaurants } from './mapRestaurants';

describe('mapRestaurants', () => {
  it('returns only the first 10 restaurants', () => {
    const response = {
      restaurants: Array.from({ length: 12 }, (_, index) => ({
        id: `restaurant-${index + 1}`,
        name: `Restaurant ${index + 1}`,
        cuisines: [{ name: 'Pizza' }],
        rating: { starRating: 4.5, count: 10 },
        address: {
          firstLine: `${index + 1} High Street`,
          city: 'London',
          postalCode: 'EC4M 7RF',
        },
      })),
    };

    const result = mapRestaurants(response);

    expect(result).toHaveLength(10);
    expect(result[0].name).toBe('Restaurant 1');
    expect(result[9].name).toBe('Restaurant 10');
  });

  it('maps the required restaurant fields correctly', () => {
    const response = {
      restaurants: [
        {
          id: '123',
          name: 'Bagelbuzz',
          cuisines: [{ name: 'Bagels' }, { name: 'Lunch' }],
          rating: { starRating: 5, count: 12 },
          address: {
            firstLine: '195 Shoreditch High Street,\nHackney',
            city: 'London',
            postalCode: 'E1 6LG',
          },
        },
      ],
    };

    const result = mapRestaurants(response);

    expect(result).toEqual([
      {
        id: '123',
        name: 'Bagelbuzz',
        cuisines: ['Bagels', 'Lunch'],
        rating: 5,
        address: '195 Shoreditch High Street, Hackney, London, E1 6LG',
      },
    ]);
  });

  it('returns fallback values when fields are missing', () => {
    const response = {
      restaurants: [
        {
          cuisines: [],
          rating: { count: 0 },
        },
      ],
    };

    const result = mapRestaurants(response);

    expect(result).toEqual([
      {
        id: 'restaurant-0',
        name: 'Name unavailable',
        cuisines: [],
        rating: null,
        address: 'Address unavailable',
      },
    ]);
  });

  it('returns an empty array when restaurants is missing', () => {
    const result = mapRestaurants({});

    expect(result).toEqual([]);
  });

  it('returns null for unrated restaurants', () => {
    const response = {
      restaurants: [
        {
          id: '1',
          name: 'Test Restaurant',
          cuisines: [{ name: 'Pizza' }],
          rating: { starRating: 4.5, count: 0 },
          address: {
            firstLine: '1 Test Street',
            city: 'London',
            postalCode: 'EC4M 7RF',
          },
        },
      ],
    };

    const result = mapRestaurants(response);

    expect(result[0].rating).toBe(null);
  });
});
