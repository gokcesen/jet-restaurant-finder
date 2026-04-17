import { useState } from 'react';
import Navbar from './components/Navbar';
import RestaurantList from './components/RestaurantList';
import { mockRestaurants } from './data/mockRestaurants';
import Footer from './components/Footer';

function App() {
  const [postcode, setPostcode] = useState('EC4M7RF');

  const handleSearch = () => {
    console.log('Search postcode:', postcode);
  };
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <Navbar
          postcode={postcode}
          onPostcodeChange={setPostcode}
          onSubmit={handleSearch}
        />

        <div className="flex-1">
          <RestaurantList restaurants={mockRestaurants} />
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default App;
