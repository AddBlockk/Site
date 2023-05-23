import "./Main";
import styles from "./Main.module.css";
import Farcry from "../Main/popular_recommended/Farcry.jpg";
import Dayz from "../Main/popular_recommended/Dayz.jpg";
import Pubg from "../Main/popular_recommended/Pubg.jpg";
import Rust from "../Main/popular_recommended/Rust.jpg";
import VoidTrain from "../Main/popular_recommended/VoidTrain.jpg";
import Anno from "../Main/special_offers/Anno.jpg";
import DragonBall2 from "../Main/special_offers/DragonBall2.jpg";
import FarCry6 from "../Main/special_offers/FarCry6.jpg";
import Taction from "../Main/special_offers/Taction.jpg";
import Team17 from "../Main/special_offers/Team17.jpg";
import action from "../Main/categories/action.png";
import adventure from "../Main/categories/adventure.png";
import anime from "../Main/categories/anime.png";
import cooperatives from "../Main/categories/cooperatives.png";
import exploration_open_world from "../Main/categories/exploration_open_world.png";
import fighting_martial_arts from "../Main/categories/fighting_martial_arts.png";
import freetoplay from "../Main/categories/freetoplay.png";
import horror from "../Main/categories/horror.png";
const Main = () => {
  return (
    <div className={styles.Main}>
      {/* Популярное и рекомендуемое */}
      <div className={styles.title}>Популярное и рекомендуемое</div>
      <div className={styles.popular_recommended_games}>
        <a
          href="https://store.steampowered.com/agecheck/app/2369390/"
          target="blank"
          alt="Farcry"
        >
          <img src={Farcry} alt="Farcry" />
          <div className={styles.info_about_game}>
            <p className={styles.game_name}>Far Cry® 6</p>
            <span className={styles.game_cost}>1500 руб.</span>
          </div>
        </a>

        <a
          href="https://store.steampowered.com/agecheck/app/221100/"
          target="blank"
          alt="Dayz"
        >
          <img src={Dayz} alt="Dayz" />
          <div className={styles.info_about_game}>
            <p className={styles.game_name}>DayZ</p>
            <span className={styles.game_cost}>2300 руб.</span>
          </div>
        </a>
        <a
          href="https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/"
          target="blank"
          alt="Pubg"
        >
          <img src={Pubg} alt="Pubg" />
          <div className={styles.info_about_game}>
            <p className={styles.game_name}>PUBG: BATTLEGROUNDS</p>
            <span className={styles.game_cost}>Бесплатно</span>
          </div>
        </a>
        <a
          href="https://store.steampowered.com/agecheck/app/252490/"
          target="blank"
          alt="Rust"
        >
          <img src={Rust} alt="Rust" />
          <div className={styles.info_about_game}>
            <p className={styles.game_name}>Rust</p>
            <span className={styles.game_cost}>3000 руб.</span>
          </div>
        </a>
        <a
          href="https://store.steampowered.com/app/1159690/Voidtrain/"
          target="blank"
          alt="VoidTrain"
        >
          <img src={VoidTrain} alt="VoidTrain" />
          <div className={styles.info_about_game}>
            <p className={styles.game_name}>VoidTrain</p>
            <span className={styles.game_cost}>300 руб.</span>
          </div>
        </a>
      </div>

      {/* Специальные предложения */}

      <div className={styles.title}>Специальные предложения</div>
      <div className={styles.special_offers_games}>
        <a href="https://store.steampowered.com/sale/anno/">
          <img
            src={Anno}
            className={styles.img_games}
            alt="Anno"
            target="blank"
          />
          <div className={styles.info_table_games_special_offers}>
            <p>Акция на выходных</p>
            <span className={styles.end_of_sale}>Заканчивается в 21:00.</span>
            <div className={styles.background_price_table}>
              <span className={styles.info_table_games_special_offers_price}>
                257 руб.
              </span>
            </div>
          </div>
        </a>
        <a href="https://store.steampowered.com/app/454650/DRAGON_BALL_XENOVERSE_2/">
          <img
            src={DragonBall2}
            className={styles.img_games}
            alt="DragonBall2"
            target="blank"
          />
          <div className={styles.info_table_games_special_offers}>
            <p>Акция на выходных</p>
            <span className={styles.end_of_sale}>Заканчивается в 21:00.</span>
            <div className={styles.background_price_table}>
              <span className={styles.info_table_games_special_offers_price}>
                320 руб.
              </span>
            </div>
          </div>
        </a>
        <a href="https://store.steampowered.com/agecheck/app/2369390/">
          <img
            src={FarCry6}
            className={styles.img_games}
            alt="FarCry6"
            target="blank"
          />
          <div className={styles.info_table_games_special_offers}>
            <p>Акция на выходных</p>
            <span className={styles.end_of_sale}>Заканчивается в 21:00.</span>
            <div className={styles.background_price_table}>
              <span className={styles.info_table_games_special_offers_price}>
                480 руб.
              </span>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=aZWWlqDy8nE">
          <img
            src={Taction}
            className={styles.img_games}
            alt="Taction"
            target="blank"
          />
          <div className={styles.info_table_games_special_offers}>
            <p>Акция на выходных</p>
            <span className={styles.end_of_sale}>Заканчивается в 21:00.</span>
            <div className={styles.background_price_table}>
              <span className={styles.info_table_games_special_offers_price}>
                560 руб.
              </span>
            </div>
          </div>
        </a>
        <a href="https://store.steampowered.com/sale/anno/">
          <img
            src={Team17}
            className={styles.img_games}
            alt="Team17"
            target="blank"
          />
          <div className={styles.info_table_games_special_offers}>
            <p>Акция на выходных</p>
            <span className={styles.end_of_sale}>Заканчивается в 21:00.</span>
            <div className={styles.background_price_table}>
              <span className={styles.info_table_games_special_offers_price}>
                700 руб.
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* Категории */}

      <div className={styles.title}>Категории</div>
      <div className={styles.categories_games}>
        <div className={styles.img_games_categories}>
          <a
            href="https://store.steampowered.com/category/action"
            className={styles.content_hub_capsule_ctn}
            alt="action"
            target="blank"
          >
            <div
              className={`${styles.color_for_categories_games} ${styles.color_for_categories_games_red}`}
            ></div>
            <img src={action} className={styles.categories_img} alt="action" />
            <div className={styles.categories_games_section}>
              <p className={styles.categories_games_link}>Ролевые игры</p>
            </div>
          </a>
          <a
            href="https://store.steampowered.com/category/adventure"
            className={styles.content_hub_capsule_ctn}
            alt="adventure"
            target="blank"
          >
            <div
              className={`${styles.color_for_categories_games} ${styles.color_for_categories_games_yellow}`}
            ></div>
            <img
              src={adventure}
              className={styles.categories_img}
              alt="adventure"
            />
            <div className={styles.categories_games_section}>
              <p className={styles.categories_games_link}>Приключения</p>
            </div>
          </a>
          <a
            href="https://store.steampowered.com/category/anime"
            className={styles.content_hub_capsule_ctn}
            alt="anime"
            target="blank"
          >
            <div
              className={`${styles.color_for_categories_games} ${styles.color_for_categories_games_purple}`}
            ></div>
            <img src={anime} className={styles.categories_img} alt="anime" />
            <div className={styles.categories_games_section}>
              <p className={styles.categories_games_link}>Аниме</p>
            </div>
          </a>
          <a
            href="https://store.steampowered.com/cooperatives/"
            className={styles.content_hub_capsule_ctn}
            alt="cooperatives"
            target="blank"
          >
            <div
              className={`${styles.color_for_categories_games} ${styles.color_for_categories_games_green}`}
            ></div>
            <img
              src={cooperatives}
              className={styles.categories_img}
              alt="cooperatives"
            />
            <div className={styles.categories_games_section}>
              <p className={styles.categories_games_link}>Кооперативы</p>
            </div>
          </a>
          <a
            href="https://store.steampowered.com/exploration_open_world/"
            className={styles.content_hub_capsule_ctn}
            alt="exploration_open_world"
            target="blank"
          >
            <div
              className={`${styles.color_for_categories_games} ${styles.color_for_categories_games_cyan}`}
            ></div>
            <img
              src={exploration_open_world}
              className={styles.categories_img}
              alt="exploration_open_world"
            />
            <div className={styles.categories_games_section}>
              <p className={styles.categories_games_link}>Открытый мир</p>
            </div>
          </a>
          <a
            href="https://store.steampowered.com/fighting_martial_arts/"
            className={styles.content_hub_capsule_ctn}
            alt="fighting_martial_arts"
            target="blank"
          >
            <div
              className={`${styles.color_for_categories_games} ${styles.color_for_categories_games_purple}`}
            ></div>
            <img
              src={fighting_martial_arts}
              className={styles.categories_img}
              alt="fighting_martial_arts"
            />
            <div className={styles.categories_games_section}>
              <p className={styles.categories_games_link}>Открытый мир</p>
            </div>
          </a>
          <a
            href="https://store.steampowered.com/freetoplay/"
            className={styles.content_hub_capsule_ctn}
            alt="freetoplay"
            target="blank"
          >
            <div
              className={`${styles.color_for_categories_games} ${styles.color_for_categories_games_orange}`}
            ></div>
            <img
              src={freetoplay}
              className={styles.categories_img}
              alt="freetoplay"
            />
            <div className={styles.categories_games_section}>
              <p className={styles.categories_games_link}>Открытый мир</p>
            </div>
          </a>
          <a
            href="https://store.steampowered.com/horror/"
            className={styles.content_hub_capsule_ctn}
            alt="horror"
            target="blank"
          >
            <div
              className={`${styles.color_for_categories_games} ${styles.color_for_categories_games_red}`}
            ></div>
            <img src={horror} className={styles.categories_img} alt="horror" />
            <div className={styles.categories_games_section}>
              <p className={styles.categories_games_link}>Открытый мир</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Main;
