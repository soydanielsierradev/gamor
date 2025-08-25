import { categories } from "../data/categories";

function Categorias() {
  return (
    <>
      <section className="categories section container" id="categories">
        <h2 className="section__title">Trending Categories</h2>
        <div className="categories__container grid">
          {categories.map((category, index) => {
            return (
              <div className="categories__data" key={index}>
                <img src={category.image} alt="category-image" className="categories__img" />
                <p className="categories__description">
                  {category.description}
                </p>
                <h3 className="categories__subtitle">{category.title}</h3>
                <div>
                  <i className="bx bxs-right-arrow-alt categories__arrow"></i>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Categorias;
