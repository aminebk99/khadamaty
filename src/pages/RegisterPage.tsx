import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import logo from "../assets/khadamatylogopng.png";

function RegisterPage() {
  return (
    <div className="h-[50vh]">
      <Header />
      <div className="grid grid-cols-1 xl:grid-cols-2">
        {/* Hide the logo on medium screens and show it only on xl screens */}
        <div className="hidden xl:flex bg-[#146551] items-center justify-center">
          <img src={logo} alt="Khadamaty Logo" />
        </div>
        <div className="flex items-center justify-center">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
