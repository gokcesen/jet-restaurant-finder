import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import SearchForm from './SearchForm';

type NavbarProps = {
  postcode: string;
  onPostcodeChange: (postcode: string) => void;
  onSubmit: () => void;
};

function Navbar({ postcode, onPostcodeChange, onSubmit }: NavbarProps) {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <nav className="mb-8 rounded-3xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="text-xl font-bold text-orange-600">
            Logo
          </div>

          <a
            href="#"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Home
          </a>
        </div>

        <div className="hidden md:block">
          <SearchForm
            postcode={postcode}
            onPostcodeChange={onPostcodeChange}
            onSubmit={onSubmit}
          />
        </div>

        <button
          className="flex size-10 items-center justify-center rounded-full bg-orange-50 text-orange-700 transition hover:bg-orange-100 md:hidden"
          type="button"
          aria-label="Toggle search"
          onClick={() => setIsMobileSearchOpen((isOpen) => !isOpen)}
        >
          <FiSearch size={20} />
        </button>
      </div>

      {isMobileSearchOpen && (
        <div className="mt-4 md:hidden">
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
