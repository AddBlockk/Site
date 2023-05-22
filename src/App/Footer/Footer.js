import "./Footer";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div class="popular_sections_columns">
        <a
          href="https://store.steampowered.com/search/?filter=popularcomingsoon&os=win"
          target="blank"
        >
          <div class="popular_sections_background">
            <p class="popular_sections_link">НОВИНКИ</p>
          </div>
        </a>
        <a
          href="https://store.steampowered.com/search/?specials=1"
          target="blank"
        >
          <div class="popular_sections_background">
            <p class="popular_sections_link">СКИДКИ</p>
          </div>
        </a>
        <a href="https://store.steampowered.com/specials" target="blank">
          <div class="popular_sections_background">
            <p class="popular_sections_link">БЕСПЛАТНЫЕ ИГРЫ</p>
          </div>
        </a>
        <a href="https://store.steampowered.com/tag" target="blank">
          <div class="popular_sections_background">
            <p class="popular_sections_link">ПОИСК ПО МЕТКАМ</p>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Footer;
