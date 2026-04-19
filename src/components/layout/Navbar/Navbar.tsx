import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import AppLogo from '../../../assets/AppLogo.png';
import SearchForm from '../../search/SearchForm/SearchForm';
import { navbarStyles as styles } from './Navbar.styles';

type NavbarProps = {
  postcode: string;
  onPostcodeChange: (postcode: string) => void;
  onSubmit: () => void;
};

function Navbar({ postcode, onPostcodeChange, onSubmit }: NavbarProps) {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <div className={styles.logoWrapper}>
            <img
              src={AppLogo}
              alt="Restaurant Finder logo"
              className={styles.logoImage}
            />
            <span className={styles.logoText}>
              Restaurant Finder
            </span>
          </div>

          <a
            href="#"
            className={styles.homeLink}
          >
            Home
          </a>
        </div>

        <div className={styles.desktopSearch}>
          <SearchForm
            postcode={postcode}
            onPostcodeChange={onPostcodeChange}
            onSubmit={onSubmit}
          />
        </div>

        <button
          className={styles.mobileSearchButton}
          type="button"
          aria-label="Toggle search"
          onClick={() => setIsMobileSearchOpen((isOpen) => !isOpen)}
        >
          <FiSearch size={20} />
        </button>
      </div>

      {isMobileSearchOpen && (
        <div className={styles.mobileSearchWrapper}>
          <SearchForm
            postcode={postcode}
            onPostcodeChange={onPostcodeChange}
            onSubmit={onSubmit}
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
