import { useState } from 'react';
import Navbar from './components/Navbar';
import RestaurantList from './components/RestaurantList';
import { mockRestaurants } from './data/mockRestaurants';

function App() {
  const [postcode, setPostcode] = useState('EC4M7RF');

  const handleSearch = () => {
    console.log('Search postcode:', postcode);
  };
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Navbar
          postcode={postcode}
          onPostcodeChange={setPostcode}
          onSubmit={handleSearch}
        />

        <RestaurantList restaurants={mockRestaurants} />
      </div>
    </main>
  );
}

export default App;
