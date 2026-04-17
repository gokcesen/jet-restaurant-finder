import { mapRestaurants } from '../utils/mapRestaurants';

const BASE_URL = '/api/discovery/uk/restaurants/enriched/bypostcode';

export const fetchRestaurantsByPostcode = async (postcode: string) => {
  const formattedPostcode = postcode.replace(/\s/g, '');

  const response = await fetch(`${BASE_URL}/${formattedPostcode}`);

  if (!response.ok) {
    throw new Error('Failed to fetch restaurants');
  }

  const data = await response.json();

  return mapRestaurants(data);
};
