import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="text-white w-full flex justify-between items-center p-4 bg-green-800">
      <div>Logo</div>
      <div>
        <Link to="/signup" className=" mr-4">S'inscrire</Link>
        <Link to="/login" className="ml-4">Connexion</Link>
      </div>
    </header>
  );
}

export default Header;
