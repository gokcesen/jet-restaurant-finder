import { restaurantCardSkeletonStyles as styles } from './RestaurantCardSkeleton.styles';

function RestaurantCardSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div className={styles.titlePlaceholder} />
        <div className={styles.badgePlaceholder} />
      </div>

      <div className={styles.cuisinesPlaceholder} />
      <div className={styles.addressPlaceholder} />
    </div>
  );
}

export default RestaurantCardSkeleton;
