import type { Restaurant } from '../types/restaurant';

type RestaurantCardProps = {
  restaurant: Restaurant;
};

function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="h-16 bg-gradient-to-r from-orange-100 to-orange-300 px-5 py-3">
        <span className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-900 shadow-sm">
          Restaurant
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="line-clamp-2 min-h-[56px] text-xl font-bold leading-7 text-slate-900">
            {restaurant.name}
          </h2>

          <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-700">
            ★ {restaurant.rating}
          </span>
        </div>

        <p className="mt-3 min-h-[48px] text-sm font-medium leading-6 text-slate-700">
          {restaurant.cuisines.join(' · ')}
        </p>

        <p className="mt-auto pt-4 min-h-[72px] text-xs leading-6 text-slate-600">
          {restaurant.address}
        </p>
      </div>
    </div>
  );
}

export default RestaurantCard;
