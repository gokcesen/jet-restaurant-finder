function RestaurantCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="h-6 w-2/3 rounded bg-slate-200" />
        <div className="h-7 w-20 rounded-full bg-slate-200" />
      </div>

      <div className="mb-4 h-4 w-1/2 rounded bg-slate-200" />
      <div className="h-4 w-full rounded bg-slate-200" />
    </div>
  );
}

export default RestaurantCardSkeleton;
