import { FiSearch } from 'react-icons/fi';
import { validationPanelStyles as styles } from './ValidationPanel.styles';

type ValidationPanelProps = {
  title: string;
  message: string;
};

function ValidationPanel({ title, message }: ValidationPanelProps) {
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

export default ValidationPanel;
