type SearchFormProps = {
  postcode: string;
  onPostcodeChange: (postcode: string) => void;
  onSubmit: () => void;
};

function SearchForm({
  postcode,
  onPostcodeChange,
  onSubmit,
}: SearchFormProps) {
  return (
    <form
      className="flex w-full flex-col gap-3 sm:max-w-md sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <input
        className="w-full rounded-full border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        type="text"
        value={postcode}
        onChange={(event) => onPostcodeChange(event.target.value)}
        placeholder="Enter UK postcode"
      />

      <button
        className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
