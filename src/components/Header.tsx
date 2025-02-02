import { Link } from "react-router-dom";
// import logo from "../assets/khadamatylogopng.png";

function Header() {
  return (
    <header className="shadow text-black w-full flex justify-between items-center md:px-6 lg:px-10 py-4 ">
      <div>
        {/* <img src={logo} alt="" /> */}
        Logo
      </div>
      <div>
        <Link to="/signup" className=" mr-4">
          S'inscrire
        </Link>
        <Link to="/login" className="ml-4">
          Connexion
        </Link>
      </div>
    </header>
  );
}

export default Header;
