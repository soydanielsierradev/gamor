import SearchGame from "./ui/search-game";
import ImgPanel from "./ui/img-panel";
import HomeInfo from "./ui/home-info";
import { useTheme } from "../context/ThemeContext"; 
import { useEffect } from "react";
import{useGameStore} from "../store/api";

function Home() {
  const { theme } = useTheme(); 
  const { setSelectedGame } = useGameStore();

  useEffect(() => {
    setSelectedGame(1);
  }, []);

  const avatarSrc =
    theme === "dark"
      ? "/img/avatar-dark.png" 
      : "/img/avatar-light.png"; 

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <HomeInfo />
        </div>

        <div className="home__img">
          <ImgPanel avatar={avatarSrc} />
        </div>

        <div className="home__form">
          <SearchGame />
        </div>
      </div>
    </section>
  );
}

export default Home;
