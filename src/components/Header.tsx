import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" shadow text-black w-full py-6">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-xl font-bold">Logo</div>
        <div className="space-x-4">
          <Link
            to="/signup"
            className="px-4 py-2 border border-[#146551] text-[#146551] rounded-xl transition hover:bg-[#146551] hover:text-white"
          >
            S'inscrire
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 bg-[#146551] text-white rounded-xl hover:bg-white hover:text-[#146551] hover:border hover:border-[#146551]"
          >
            Connexion
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
