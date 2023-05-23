import "./Sidebar";
import styles from "./Sidebar.module.css";
import Search_Icon from "./Search_Icon.png";
const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <ul className={styles.Navigation}>
        <li className={styles.navigation_links_active}>
          <a href="index.html">Главная</a>
        </li>
        <li className={styles.navigation_links}>
          <a href="notable.html">Новое и примечательное</a>
        </li>
        <li className={styles.navigation_links}>
          <a href="categories.html">Категории</a>
        </li>
        <li className={styles.navigation_links}>
          <a href="laboratory.html">Лаборатория</a>
        </li>
        <li className={styles.navigation_links}>
          <a href="news.html">Новости</a>
        </li>
      </ul>
      <div className={styles.input_search}>
        <input
          className={styles.search_form_txt}
          type="text"
          name="e-mail"
          id="email"
        />
        <a href="index.js" className={styles.search_form_btn}>
          <img
            src={Search_Icon}
            className={styles.search_form_image}
            alt="search_btn"
          />
        </a>
      </div>
    </div>
  );
};
export default Sidebar;
