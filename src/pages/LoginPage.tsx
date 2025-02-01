import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import logo from "../assets/khadamatylogopng.png"

function LoginPage() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 xl:grid-cols-2 h-screen">
        {/* Hide the logo on medium screens and show it only on xl screens */}
        <div className="hidden xl:flex bg-[#146551] items-center justify-center">
          <img src={logo} alt={logo} />
        </div>
        <div className=" flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
