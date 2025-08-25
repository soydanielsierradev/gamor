import { useGameStore } from "../../store/api";

interface ImgPanelProps {
  avatar: string;
}

function ImgPanel(props: ImgPanelProps) {
  const { selectedGame } = useGameStore();

  return (
    <>
      <div className="home__img-info">
        <h2 className="home-main__title">{selectedGame.name}</h2>
        <p className="home-main__description">Genre: {selectedGame.genres}</p>
        <div className="home-main__hour">
          <p className="home-main__description" style={{ color: "var(--first-color)",letterSpacing:"0.1rem" }}>
            Released on:
          </p>
          {selectedGame.description}
        </div>
      </div>

      <img src={props.avatar} alt="avatar" />
    </>
  );
}

export default ImgPanel;
