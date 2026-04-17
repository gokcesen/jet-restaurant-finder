import RestaurantList from './components/RestaurantList';
import { mockRestaurants } from './data/mockRestaurants';

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-3xl font-bold text-orange-600">
          Restaurant Finder
        </h1>

        <RestaurantList restaurants={mockRestaurants} />
      </div>
    </main>
  );
}

export default App;
