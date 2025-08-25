import { useGameStore } from "../../store/api";
import { useForm } from "react-hook-form";
import { useState } from "react";

function SearchGame() {
  const [platform, setPlatform] = useState("");
  const { getGame, games, initial, loading, empty, setLoading, setInitial, setEmpty, selectGame } =
    useGameStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    getGame(data.search, platform);
    setInitial();
    setLoading();
    setEmpty();
  };

  return (
    <>
      <div className="home-main__left">
        <div className="home-main__left-content">
          <div className="home-main__left-data">
            <h1 className="home-main__left-number">01.</h1>
            <div className="home-main__left-title">Choose Platforms</div>
          </div>
          <div className="home-main__left-box">
            <div className="radio-inputs">
              <label className="radio" onClick={() => setPlatform("4")}>
                <input type="radio" name="radio" />
                <span className="name">PC</span>
              </label>
              <label className="radio" onClick={() => setPlatform("187,18,1")}>
                <input type="radio" name="radio" />
                <span className="name">Console</span>
              </label>

              <label className="radio" onClick={() => setPlatform("3,21")}>
                <input type="radio" name="radio" />
                <span className="name">Mobile</span>
              </label>
            </div>
          </div>
        </div>

        <div className="home-main__left-content">
          <div className="home-main__left-data">
            <h1 className="home-main__left-number">02.</h1>
            <div className="home-main__left-title">Searching Games</div>
          </div>
          <div className="home-main__left-box">
            <form
              className="home-main__search"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                id="search"
                placeholder="Search Games"
                {...register("search", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              />
              {errors.search && (
                <span className="error-message">
                  {errors.search.message?.toString()}
                </span>
              )}
              <hr />

              <div className="search-results__box">
                {initial ? (
                  <div className="initial">
                    <h2 className="initial__title">Please, search a game</h2>
                  </div>
                ) : loading ? (
                  <div className="initial">
                    <h2 className="initial__title">Searching ...</h2>
                  </div>
                ) : empty ? (
                  <div className="initial">
                    <h2 className="initial__title">No games found</h2>
                  </div>
                ) : (
                  <ul className="search-results">
                    {games.map((item: any, index: number) => {
                      return (
                        <li className="search-results__item" key={item.id}>
                          <div className="search-results__data">
                            <span className="search-results__number">
                              {index + 1}
                            </span>
                            <h3 className="search-results__title">
                              {item.name}
                            </h3>
                          </div>
                          <i className="bx bx-plus search-results__plus" onClick={() => selectGame(item.id)}></i>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              <button type="submit" className="home-main__search-button">
                Search Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchGame;
