import type { Restaurant } from '../types/restaurant'

type RestaurantCardProps = {
  restaurant: Restaurant
}

function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-900">
          {restaurant.name}
        </h2>

        <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700">
          Rating {restaurant.rating}
        </span>
      </div>

      <p className="mt-3 text-sm font-medium text-slate-700">
        {restaurant.cuisines.join(' · ')}
      </p>

      <p className="mt-4 text-sm leading-6 text-slate-600">
        {restaurant.address}
      </p>
    </div>
  )
}

export default RestaurantCard
