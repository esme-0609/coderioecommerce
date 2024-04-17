import { Link } from "react-router-dom";

export default function Carrito() {
  return (
    <div class="min-h-screen flex flex-col justify-center items-center">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">
        Site is under maintenance
      </h1>
      <p class="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
        We're working hard to improve the user experience. Stay tuned!
      </p>
      <div class="flex space-x-4">
        <Link to="/"
          class="border-2 border-orange-400 text-black font-bold py-3 px-6 rounded dark:text-white dark:border-white"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
