import type { Restaurant } from '../types/restaurant';
import RestaurantCard from './RestaurantCard';

type RestaurantListProps = {
  restaurants: Restaurant[];
}

function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </section>
  )
}

export default RestaurantList;
