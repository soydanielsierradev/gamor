import { NavLink } from "react-router";

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
          <NavLink to="/register" className="button__ghost">
            Create account
          </NavLink>
          <NavLink to="/login" className="home-button">
            Sign in
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default HomeInfo;
