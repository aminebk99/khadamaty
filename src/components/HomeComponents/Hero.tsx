function Hero() {
  return (
    <div className="mdpx-20 sm:px-10 my-10">
      <div className="rounded-2xl bg-[#146551] h-[430px] flex flex-col justify-center items-center">
        <div className="w-2xl flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white text-center">
            Trouvez l'artisan qu'il vous faut, en toute confiance et en quelques
            clics !
          </h2>
          <div className="relative w-full max-w-xl mt-6">
            <input
              autoComplete="off"
              className="outline-none pl-4 pr-12 w-full bg-white h-[55px] rounded-xl"
              type="search"
              placeholder="Recherchez un service..."
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded bg-[#146551] shadow">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
              >
                <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
