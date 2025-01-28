import { Link } from "react-router-dom";
import logo from '../assets/khadamatylogopng.png'

function Header() {
  return (
    <header className="text-white w-full flex justify-between items-center p-4 bg-green-800">
      <div><img src={logo} alt="" /></div>
      <div>
        <Link to="/signup" className=" mr-4">S'inscrire</Link>
        <Link to="/login" className="ml-4">Connexion</Link>
      </div>
    </header>
  );
}

export default Header;
