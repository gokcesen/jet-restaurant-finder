import RestaurantCardSkeleton from './RestaurantCardSkeleton';

function RestaurantListSkeleton() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <RestaurantCardSkeleton key={index} />
      ))}
    </section>
  );
}

export default RestaurantListSkeleton;
