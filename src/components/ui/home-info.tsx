
function HomeInfo() {

  return (
    <>
      <h1 className="home__title">
        start<span> streaming </span>games differently
      </h1>
      <p className="home__description">
        gamor now has <span className="garabato">stream party</span> platform
      </p>

      <div className="button-flex">
        <div>
          <a href="#" className="button__ghost ">
            Create account
          </a>
          <a href="/login" className="home-button">
            Sign in
          </a>
        </div>
      </div>
    </>
  );
}

export default HomeInfo;
