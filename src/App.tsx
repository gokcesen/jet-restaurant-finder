import { useState } from 'react';
import Navbar from './components/Navbar';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer';
import { fetchRestaurantsByPostcode } from './api/restaurantsApi';
import type { Restaurant } from './types/restaurant';

function App() {
  const [postcode, setPostcode] = useState('');
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState('');
  
  const handleSearch = async () => {
    try {
      setError('');
      const fetchedRestaurants = await fetchRestaurantsByPostcode(postcode);
      setRestaurants(fetchedRestaurants);
    } catch (error) {
      setError('Failed to fetch restaurants. Please try again.');
      console.error(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <Navbar
          postcode={postcode}
          onPostcodeChange={setPostcode}
          onSubmit={handleSearch}
        />

        <div>
          {error && (
            <p className="mb-4 text-sm font-medium text-red-600">{error}</p>
          )}

          <RestaurantList restaurants={restaurants} />
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default App;
