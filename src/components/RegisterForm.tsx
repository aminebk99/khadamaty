import { Link } from "react-router-dom"

function RegisterForm() {
  return (
    <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=%23146551&shade=600"
          className="mx-auto h-10 w-auto"
        /> */}
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[#146551]">
          Créez votre compte
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="firstname" className="block text-sm/6 font-medium text-gray-900">
                Prénom
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  placeholder="Prénom"
                  name="firstname"
                  type="text"
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#146551] sm:text-sm/6"
                />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="lastname" className="block text-sm/6 font-medium text-gray-900">
                Nom
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  placeholder="Nom"
                  name="lastname"
                  type="text"
                  required
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#146551] sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              E-mail 
            </label>
            <div className="mt-2">
              <input
                id="email"
                placeholder="E-mail"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#146551] sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">
              Numéro de téléphone
            </label>
            <div className="mt-2">
              <input
                id="phone"
                placeholder="Numéro de téléphone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#146551] sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
              Mot de passe
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Mot de passe"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#146551] sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm/6 font-medium text-gray-900">
              Confirmer le mot de passe
            </label>
            <div className="mt-2">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                placeholder="Confirmer le mot de passe"
                required
                autoComplete="new-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#146551] sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#146551] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#0f4a3c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Créer un compte
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Vous avez déjà un compte ?{" "}
          <Link to="/login" className="font-semibold text-[#146551] hover:text-[#0f4a3c]">
            Connectez-vous
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterForm
