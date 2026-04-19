import { useState } from 'react';
import { fetchRestaurantsByPostcode } from '../api/restaurantsApi';
import type { Restaurant } from '../types/restaurant';
import { isValidUkPostcode } from '../utils/validation';

export function useRestaurantSearch() {
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

  return {
    postcode,
    setPostcode,
    restaurants,
    isLoading,
    showWelcomePanel,
    setShowWelcomePanel,
    validationTitle,
    validationMessage,
    searchResultTitle,
    searchResultMessage,
    handleSearch,
  };
}
