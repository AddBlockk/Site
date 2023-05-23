import "./Sidebar";
import "./Sidebar.css";
import Search_Icon from "./Search_Icon.png";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul className="Navigation">
        <li className="navigation-links navigation-links-active">
          <a href="index.html">Главная</a>
        </li>
        <li className="navigation-links">
          <a href="notable.html">Новое и примечательное</a>
        </li>
        <li className="navigation-links">
          <a href="categories.html">Категории</a>
        </li>
        <li className="navigation-links">
          <a href="laboratory.html">Лаборатория</a>
        </li>
        <li className="navigation-links">
          <a href="news.html">Новости</a>
        </li>
      </ul>
      <div className="input_search">
        <input
          className="search-form-txt"
          type="text"
          name="e-mail"
          id="email"
        />
        <button className="search_form_btn" />
        <img src={Search_Icon} className="search-form-image" alt="search_btn" />
      </div>
    </div>
  );
};
export default Sidebar;
