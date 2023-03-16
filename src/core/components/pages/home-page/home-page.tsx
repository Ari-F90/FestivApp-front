import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="homepage">
      <h2>Find your plan. Get ready</h2>
      <Link to={"/register"}>
        <button className="registerbutton" type="button">
          REGISTER
        </button>
      </Link>
      <Link to={"/login"}>
        <button className="loginbutton" type="button">
          LOGIN
        </button>
      </Link>
    </section>
  );
}
