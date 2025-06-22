import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Breakfast', image: "https://tse4.mm.bing.net/th?id=OIP.7T24HQX1rb-bcbc4DjHOYgHaHa&pid=Api&P=0&h=220" },
    { name: 'Lunch', image: 'https://tse2.mm.bing.net/th?id=OIP.LF4UzQDTE-cnxpNuG0prVwHaHR&pid=Api&P=0&h=220' },
    { name: 'Snacks', image: 'https://tse2.mm.bing.net/th?id=OIP.1ILUBI81oCG4FvHFhAkqqgHaFi&pid=Api&P=0&h=220' },
    { name: 'Desserts', image: 'https://tse4.mm.bing.net/th?id=OIP.SFmZoeTYOla0uWFetnZIogHaFs&pid=Api&P=0&h=220' },
    { name: 'Drinks', image: 'https://tse4.mm.bing.net/th?id=OIP.eWEiLdq83Odm9eSgqazg7AHaHa&pid=Api&P=0&h=220' },
  ];

  const popularRecipes = [
    {
      title: 'Crispy Samosa',
      image: 'https://www.simplyrecipes.com/thmb/kFG0KjF0DYtVCSlkFivDSrUBpkg=/1600x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__12__Vegetable-Samosas-LEAD-1-65199bf0727346c8871b4b3d362da391.jpg',
      idx: "MdTkG-6u035oojHPljfMf"
    },
    {
      title: 'Paneer Butter Masala',
      image: "https://www.whiskaffair.com/wp-content/uploads/2019/05/Paneer-Butter-Masala-2-3.jpg",
      idx: '09z5XdEQh60dWnYoBSEyA'
    },
    {
      title: 'Mango Lassi',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/mango-lassi.jpg',
      idx: "9rXwIRdvGfqpXeE7AqtJz",
    },
  ];

  return (
    <div className="text-white bg-gray-900 rounded-[10px] pb-[1px] mt-[20px]">
      {/* Hero Banner */}
      <section
        className="h-[30vh] md:h-[40vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4 sm:px-8"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1605478902830-bb7bc36d05a2?auto=format&fit=crop&w=1500&q=80')`,
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Find Your Next Favorite Recipe</h1>
      </section>

      {/* Categories */}
      <h2 className="text-2xl font-semibold text-center mt-10">Browse by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-6 py-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={() => navigate('/recipes')}
          >
            <img src={cat.image} alt={cat.name} className="h-36 w-full object-cover rounded-t-lg" />
            <p className="p-3 text-center font-medium">{cat.name}</p>
          </div>
        ))}
      </div>

      {/* Popular Recipes */}
      <h2 className="text-2xl font-semibold text-center mt-10">Popular Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 py-6">
        {popularRecipes.map((recipe, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <img src={recipe.image} alt={recipe.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <button
                className="mt-2 cursor-pointer bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
                onClick={() => navigate(`/recipes/recipesdetail/${recipe.idx}`)}
              >
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <section className="bg-pink-200 text-center py-6 md:py-10 rounded-lg mx-4 sm:mx-6 mb-6 md:mb-10 text-black">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Have a Tasty Recipe to Share?</h2>
        <button
          onClick={() => navigate('/create')}
          className="bg-pink-600 cursor-pointer hover:bg-pink-700 text-white px-6 py-3 rounded"
        >
          Create Your Recipe
        </button>
      </section>
    </div>
  );
};

export default Home;
