import type { Restaurant } from '../types/restaurant';

type ApiCuisine = {
  name?: string;
};

type ApiAddress = {
  firstLine?: string;
  city?: string;
  postalCode?: string;
};

type ApiRating = {
  starRating?: number;
  count?: number;
};

type ApiRestaurant = {
  id?: string;
  name?: string;
  cuisines?: ApiCuisine[];
  rating?: ApiRating;
  address?: ApiAddress;
};

type RestaurantsApiResponse = {
  restaurants?: ApiRestaurant[];
};

const formatAddress = (address?: ApiAddress): string => {
  if (!address) {
    return 'Address unavailable';
  }

  const firstLine = address.firstLine
  ?.replace(/,\s*\n/g, ', ')
  .replace(/\n/g, ', ')
  .trim();
  const addressParts = [firstLine, address.city, address.postalCode].filter(Boolean);

  return addressParts.length > 0 ? addressParts.join(', ') : 'Address unavailable';
};

export const mapRestaurants = (
  apiResponse: RestaurantsApiResponse,
): Restaurant[] => {
  return (apiResponse.restaurants ?? []).slice(0, 10).map((restaurant, index) => ({
    id: restaurant.id ?? `restaurant-${index}`,
    name: restaurant.name ?? 'Name unavailable',
    cuisines:
      restaurant.cuisines
        ?.map((cuisine) => cuisine.name)
        .filter((cuisine): cuisine is string => Boolean(cuisine)) ?? [],
    rating:
      restaurant.rating?.count && restaurant.rating.count > 0
        ? restaurant.rating.starRating ?? null
        : null,
    address: formatAddress(restaurant.address),
  }));
};
