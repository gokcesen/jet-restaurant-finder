import { restaurantCardSkeletonStyles as styles } from './RestaurantCardSkeleton.styles';

function RestaurantCardSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.label} />
      </div>

      <div className={styles.content}>
        <div className={styles.headerRow}>
          <div className="flex w-full flex-col">
            <div className={styles.titlePlaceholder} />
            <div className={styles.titlePlaceholderSecond} />
          </div>

          <div className={styles.badgePlaceholder} />
        </div>

        <div className={styles.cuisinesPlaceholder} />
        <div className={styles.cuisinesPlaceholderSecond} />

        <div className={styles.addressPlaceholder}>
          <div className={styles.addressLine} />
          <div className={styles.addressLineShort} />
        </div>
      </div>
    </div>
  );
}

export default RestaurantCardSkeleton;
