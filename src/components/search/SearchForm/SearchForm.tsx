import { searchFormStyles as styles } from './SearchForm.styles';

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
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <input
        className={styles.input}
        type="text"
        value={postcode}
        onChange={(event) => onPostcodeChange(event.target.value)}
        placeholder="Enter UK postcode"
      />

      <button
        className={styles.button}
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
