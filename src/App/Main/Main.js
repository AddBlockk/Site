import "./Main";
import "./Main.css";
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
    <div className="Main">
      {/* Популярное и рекомендуемое */}
      <div className="section_title">Популярное и рекомендуемое</div>
      <div className="popular_recommended_games">
        <a
          href="https://store.steampowered.com/agecheck/app/2369390/"
          target="blank"
          alt="Farcry"
        >
          <img src={Farcry} alt="Farcry" />
          <div className="info_table_games_popular_recommended">
            <p>Far Cry® 6</p>
            <span>1500 руб.</span>
          </div>
        </a>

        <a
          href="https://store.steampowered.com/agecheck/app/221100/"
          target="blank"
          alt="Dayz"
        >
          <img src={Dayz} alt="Dayz" />
          <div className="info_table_games_popular_recommended">
            <p>DayZ</p>
            <span>2300 руб.</span>
          </div>
        </a>
        <a
          href="https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/"
          target="blank"
          alt="Pubg"
        >
          <img src={Pubg} alt="Pubg" />
          <div className="info_table_games_popular_recommended">
            <p>PUBG: BATTLEGROUNDS</p>
            <span>Бесплатно</span>
          </div>
        </a>
        <a
          href="https://store.steampowered.com/agecheck/app/252490/"
          target="blank"
          alt="Rust"
        >
          <img src={Rust} alt="Rust" />
          <div className="info_table_games_popular_recommended">
            <p>Rust</p>
            <span>3000 руб.</span>
          </div>
        </a>
        <a
          href="https://store.steampowered.com/app/1159690/Voidtrain/"
          target="blank"
          alt="VoidTrain"
        >
          <img src={VoidTrain} alt="VoidTrain" />
          <div className="info_table_games_popular_recommended">
            <p>VoidTrain</p>
            <span>300 руб.</span>
          </div>
        </a>
      </div>

      {/* Специальные предложения */}

      <div className="section_title">Специальные предложения</div>
      <div className="special_offers_games">
        <a href="https://store.steampowered.com/sale/anno/">
          <img src={Anno} className="img_games" alt="Anno" target="blank" />
          <div className="info_table_games_special_offers">
            <p>Акция на выходных</p>
            <span className="end_of_sale">Заканчивается в 21:00.</span>
            <div className="background_price_table">
              <span className=" info_table_games_special_offers_price">
                257 руб.
              </span>
            </div>
          </div>
        </a>
        <a href="https://store.steampowered.com/app/454650/DRAGON_BALL_XENOVERSE_2/">
          <img
            src={DragonBall2}
            className="img_games"
            alt="DragonBall2"
            target="blank"
          />
          <div className="info_table_games_special_offers">
            <p>Акция на выходных</p>
            <span className="end_of_sale">Заканчивается в 21:00.</span>
            <div className="background_price_table">
              <span className=" info_table_games_special_offers_price">
                320 руб.
              </span>
            </div>
          </div>
        </a>
        <a href="https://store.steampowered.com/agecheck/app/2369390/">
          <img
            src={FarCry6}
            className="img_games"
            alt="FarCry6"
            target="blank"
          />
          <div className="info_table_games_special_offers">
            <p>Акция на выходных</p>
            <span className="end_of_sale">Заканчивается в 21:00.</span>
            <div className="background_price_table">
              <span className=" info_table_games_special_offers_price">
                480 руб.
              </span>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=aZWWlqDy8nE">
          <img
            src={Taction}
            className="img_games"
            alt="Taction"
            target="blank"
          />
          <div className="info_table_games_special_offers">
            <p>Акция на выходных</p>
            <span className="end_of_sale">Заканчивается в 21:00.</span>
            <div className="background_price_table">
              <span className=" info_table_games_special_offers_price">
                560 руб.
              </span>
            </div>
          </div>
        </a>
        <a href="https://store.steampowered.com/sale/anno/">
          <img src={Team17} className="img_games" alt="Team17" target="blank" />
          <div className="info_table_games_special_offers">
            <p>Акция на выходных</p>
            <span className="end_of_sale">Заканчивается в 21:00.</span>
            <div className="background_price_table">
              <span className=" info_table_games_special_offers_price">
                700 руб.
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* Категории */}

      <div className="section_title">Категории</div>
      <div className="categories_games">
        <div className="img_games_categories">
          <a
            href="https://store.steampowered.com/category/action"
            className="content_hub_capsule_ctn"
            alt="action"
            target="blank"
          >
            <div className="color_for_categories_games color_for_categories_games-red"></div>
            <img src={action} className="categories_img" alt="action" />
            <div className="game_name">
              <p className="categories_games_link">Ролевые игры</p>
            </div>
          </a>
          <a
            href="https://store.steampowered.com/category/adventure"
            className="content_hub_capsule_ctn"
            alt="adventure"
            target="blank"
          >
            <div className="color_for_categories_games color_for_categories_games-yellow"></div>
            <img src={adventure} className="categories_img" alt="adventure" />
            <div className="game_name">
              <p className="categories_games_link">Приключения</p>
            </div>
          </a>
          <a
            href="https://store.steampowered.com/category/anime"
            className="content_hub_capsule_ctn"
            alt="anime"
            target="blank"
          >
            <div className="color_for_categories_games color_for_categories_games-blue"></div>
            <img src={anime} className="categories_img" alt="anime" />
            <div className="game_name">
              <p className="categories_games_link">Аниме</p>
            </div>
          </a>
          <a
            href="https://store.steampowered.com/cooperatives/"
            className="content_hub_capsule_ctn"
            alt="cooperatives"
            target="blank"
          >
            <div className="color_for_categories_games color_for_categories_games-green"></div>
            <img
              src={cooperatives}
              className="categories_img"
              alt="cooperatives"
            />
            <div className="game_name">
              <p className="categories_games_link">Кооперативы</p>
            </div>
          </a>
          <a
            href="https://store.steampowered.com/exploration_open_world/"
            className="content_hub_capsule_ctn"
            alt="exploration_open_world"
            target="blank"
          >
            <div className="color_for_categories_games color_for_categories_games-cyan"></div>
            <img
              src={exploration_open_world}
              className="categories_img"
              alt="exploration_open_world"
            />
            <div className="game_name">
              <p className="categories_games_link">Открытый мир</p>
            </div>
          </a>
          <a
            href="https://store.steampowered.com/fighting_martial_arts/"
            className="content_hub_capsule_ctn"
            alt="fighting_martial_arts"
            target="blank"
          >
            <div className="color_for_categories_games color_for_categories_games-purple"></div>
            <img
              src={fighting_martial_arts}
              className="categories_img"
              alt="fighting_martial_arts"
            />
            <div className="game_name">
              <p className="categories_games_link">Открытый мир</p>
            </div>
          </a>
          <a
            href="https://store.steampowered.com/freetoplay/"
            className="content_hub_capsule_ctn"
            alt="freetoplay"
            target="blank"
          >
            <div className="color_for_categories_games color_for_categories_games-orange"></div>
            <img src={freetoplay} className="categories_img" alt="freetoplay" />
            <div className="game_name">
              <p className="categories_games_link">Открытый мир</p>
            </div>
          </a>
          <a
            href="https://store.steampowered.com/horror/"
            className="content_hub_capsule_ctn"
            alt="horror"
            target="blank"
          >
            <div className="color_for_categories_games color_for_categories_games-red"></div>
            <img src={horror} className="categories_img" alt="horror" />
            <div className="game_name">
              <p className="categories_games_link">Открытый мир</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Main;
