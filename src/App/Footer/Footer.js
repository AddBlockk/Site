import "./Footer";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div class={styles.popular_sections_columns}>
        <a
          href="https://store.steampowered.com/search/?filter=popularcomingsoon&os=win"
          target="blank"
        >
          <div class={styles.popular_sections_background}>
            <p class={styles.popular_sections_link}>Новинки</p>
          </div>
        </a>
        <a
          href="https://store.steampowered.com/search/?specials=1"
          target="blank"
        >
          <div class={styles.popular_sections_background}>
            <p class={styles.popular_sections_link}>Скидки</p>
          </div>
        </a>
        <a href="https://store.steampowered.com/specials" target="blank">
          <div class={styles.popular_sections_background}>
            <p class={styles.popular_sections_link}>Бесплатные игры</p>
          </div>
        </a>
        <a href="https://store.steampowered.com/tag" target="blank">
          <div class={styles.popular_sections_background}>
            <p class={styles.popular_sections_link}>Поиск по меткам</p>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Footer;
