import { welcomePanelStyles as styles } from './WelcomePanel.styles';

function WelcomePanel() {
  return (
    <div className={styles.container}>
      <section className={styles.panel}>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome to Restaurant Finder</h1>

          <p className={styles.description}>
            Search restaurants by UK postcode using the provided Just Eat API.
            After searching, the app displays the first 10 restaurants returned
            and shows only the required information for each one: name,
            cuisines, rating, and address.
          </p>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>Search by postcode</h2>
              <p className={styles.infoText}>
                Enter a valid UK postcode in the search bar to request live restaurant data.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>Focused results</h2>
              <p className={styles.infoText}>
                The app keeps the interface simple and shows only the first 10 restaurants returned.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>Clear restaurant details</h2>
              <p className={styles.infoText}>
                Each restaurant displays its name, cuisines, rating as a number, and address.
              </p>
            </div>
          </div>

          <div className={styles.helperBox}>
            <p className={styles.helperText}>
              Use the search bar above and press Enter or click Search to continue.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WelcomePanel;
