import { useState } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import RestaurantList from './components/restaurant/RestaurantList/RestaurantList';
import Footer from './components/layout/Footer/Footer';
import { fetchRestaurantsByPostcode } from './api/restaurantsApi';
import type { Restaurant } from './types/restaurant';
import RestaurantListSkeleton from './components/restaurant/RestaurantListSkeleton/RestaurantListSkeleton';
import { isValidUkPostcode } from './utils/validation';
import WelcomePanel from './components/layout/WelcomePanel/WelcomePanel';
import ValidationPanel from './components/layout/ValidationPanel/ValidationPanel';
import SearchResultPanel from './components/layout/SearchResultPanel/SearchResultPanel';

function App() {
  const [postcode, setPostcode] = useState('');
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcomePanel, setShowWelcomePanel] = useState(true);
  const [validationTitle, setValidationTitle] = useState('');
  const [validationMessage, setValidationMessage] = useState(''); 
  const [searchResultTitle, setSearchResultTitle] = useState('');
  const [searchResultMessage, setSearchResultMessage] = useState('');
  
  const handleSearch = async () => {
    setShowWelcomePanel(false);
  
    const trimmedPostcode = postcode.trim();
  
    if (!trimmedPostcode) {
      setValidationTitle('Postcode required');
      setValidationMessage('Enter a UK postcode in the search bar to continue.');
      setSearchResultTitle('');
      setSearchResultMessage('');
      setRestaurants([]);
      return;
    }
  
    if (!isValidUkPostcode(trimmedPostcode)) {
      setValidationTitle("We couldn't find that postcode");
      setValidationMessage(
        `We couldn't find results for "${trimmedPostcode}". Please check the spelling and try again with a valid UK postcode.`,
      );
      setSearchResultTitle('');
      setSearchResultMessage('');
      setRestaurants([]);
      return;
    }
  
    try {
      setValidationTitle('');
      setValidationMessage('');
      setSearchResultTitle('');
      setSearchResultMessage('');
      setIsLoading(true);
  
      const fetchedRestaurants = await fetchRestaurantsByPostcode(trimmedPostcode);
  
      if (fetchedRestaurants.length === 0) {
        setSearchResultTitle('No restaurants found');
        setSearchResultMessage(
          'We could not find any restaurants for this postcode. Try another nearby UK postcode and search again.',
        );
        setRestaurants([]);
        return;
      }
  
      setRestaurants(fetchedRestaurants);
    } catch (error) {
      setSearchResultTitle('Something went wrong');
      setSearchResultMessage(
        'We could not load restaurant data right now. Please try again.',
      );
      setRestaurants([]);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <Navbar
          postcode={postcode}
          onPostcodeChange={setPostcode}
          onSubmit={handleSearch}
          onHomeClick={() => setShowWelcomePanel(true)}
        />

        <div className="flex-1">
          {showWelcomePanel ? (
            <WelcomePanel />
          ) : validationMessage ? (
            <ValidationPanel
              title={validationTitle}
              message={validationMessage}
            />
          ) : searchResultMessage ? (
            <SearchResultPanel
              title={searchResultTitle}
              message={searchResultMessage}
            />
          ) : isLoading ? (
            <RestaurantListSkeleton />
          ) : (
            <RestaurantList restaurants={restaurants} />
          )}
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default App;
