import type { Restaurant } from '../../../types/restaurant';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import { restaurantListStyles as styles } from './RestaurantList.styles';

type RestaurantListProps = {
  restaurants: Restaurant[];
};

function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <section className={styles.container}>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </section>
  );
}

export default RestaurantList;
