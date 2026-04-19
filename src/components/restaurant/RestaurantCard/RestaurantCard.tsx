import type { Restaurant } from '../../../types/restaurant';
import { restaurantCardStyles as styles } from './RestaurantCard.styles';

type RestaurantCardProps = {
  restaurant: Restaurant;
};

function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <span className={styles.label}>
          Restaurant
        </span>
      </div>

      <div className={styles.content}>
        <div className={styles.headerRow}>
          <h2 className={styles.title}>
            {restaurant.name}
          </h2>

          <span className={styles.ratingBadge}>
            {restaurant.rating !== null ? `★ ${restaurant.rating}` : '★ N/A'}
          </span>
        </div>

        <p className={styles.cuisines}>
          {restaurant.cuisines.join(' · ')}
        </p>

        <p className={styles.address}>
          {restaurant.address}
        </p>
      </div>
    </div>
  );
}

export default RestaurantCard;
