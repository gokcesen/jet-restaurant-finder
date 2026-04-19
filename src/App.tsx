import Navbar from './components/layout/Navbar/Navbar';
import RestaurantList from './components/restaurant/RestaurantList/RestaurantList';
import Footer from './components/layout/Footer/Footer';
import RestaurantListSkeleton from './components/restaurant/RestaurantListSkeleton/RestaurantListSkeleton';
import WelcomePanel from './components/layout/WelcomePanel/WelcomePanel';
import ValidationPanel from './components/layout/ValidationPanel/ValidationPanel';
import SearchResultPanel from './components/layout/SearchResultPanel/SearchResultPanel';
import { useRestaurantSearch } from './hooks/useRestaurantSearch';

function App() {
  const {
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
  } = useRestaurantSearch();

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
