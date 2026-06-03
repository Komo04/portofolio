function home() {
  return (

    <main
      id="home"
      className="scroll-mt-20 flex items-center justify-center text-white text-center"
    >

      <div className="relative w-full min-h-screen flex flex-col items-center justify-center">

        {/* Background */}
        <img
          src="/background.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover md:object-contain object-center -z-10"
        />

        {/* Overlay */}
        <div className="absolute  inset-0 bg-black/50 -z-10"></div>

        {/* Profile */}
        <img
          src="./ijasah.jpeg"
          alt="Ijasah"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 
          rounded-full mb-4 border-4 border-white shadow-lg"
        />

        {/* Text */}
        <h1 className="text-5xl text-center font-bold mb-4">
          Hi, Saya Kusuma
        </h1>

        <p className="text-sm sm:text-base mx-5 mt-4 max-w-xs sm:max-w-md md:max-w-lg text-gray-300">
          Saya seorang developer yang sedang fokus mengembangkan kemampuan di dunia web development.
         
        </p>
      </div>

    </main>
  );
}

export default home;