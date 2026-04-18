import type { Restaurant } from '../types/restaurant';
import RestaurantCard from './RestaurantCard';

type RestaurantListProps = {
  restaurants: Restaurant[];
};

function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </section>
  );
}

export default RestaurantList;
