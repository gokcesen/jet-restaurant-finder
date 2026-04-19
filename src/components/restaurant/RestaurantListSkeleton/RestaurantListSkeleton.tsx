import RestaurantCardSkeleton from '../RestaurantCardsSkeleton/RestaurantCardSkeleton';
import { restaurantListSkeletonStyles as styles } from './RestaurantListSkeleton.styles';

function RestaurantListSkeleton() {
  return (
    <section className={styles.container}>
      {Array.from({ length: 6 }).map((_, index) => (
        <RestaurantCardSkeleton key={index} />
      ))}
    </section>
  );
}

export default RestaurantListSkeleton;
