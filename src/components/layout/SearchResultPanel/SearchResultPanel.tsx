import { FiSearch } from 'react-icons/fi';
import { searchResultPanelStyles as styles } from './SearchResultPanel.styles';

type SearchResultPanelProps = {
  title: string;
  message: string;
};

function SearchResultPanel({ title, message }: SearchResultPanelProps) {
  return (
    <div className={styles.container}>
      <section className={styles.panel}>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <FiSearch size={28} />
          </div>

          <h1 className={styles.title}>{title}</h1>
          <p className={styles.message}>{message}</p>
        </div>
      </section>
    </div>
  );
}

export default SearchResultPanel;
