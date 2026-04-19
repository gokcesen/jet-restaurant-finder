export const restaurantCardStyles = {
  container:
    'flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg',
  topBar:
    'h-16 bg-gradient-to-r from-orange-100 to-orange-300 px-5 py-3',
  label:
    'inline-flex rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-900 shadow-sm',
  content:
    'flex flex-1 flex-col p-6',
  headerRow:
    'flex items-start justify-between gap-4',
  title:
    'line-clamp-2 min-h-[56px] text-xl font-bold leading-7 text-slate-900',
  ratingBadge:
    'shrink-0 rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-700',
  cuisines:
    'mt-3 min-h-[48px] text-sm font-medium leading-6 text-slate-700',
  address:
    'mt-auto pt-4 min-h-[72px] text-xs leading-6 text-slate-600',
};
