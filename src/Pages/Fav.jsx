
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Fav = () => {
  const navigate = useNavigate();
  const favourite = JSON.parse(localStorage.getItem("fav")) || [];

  const NavigateHandler = (recipe) => {
    navigate(`/recipes/recipesdetail/${recipe.id}`);
  };

  const renderrecipe = favourite.map((recipe) => (
    <div
      key={recipe.id}
      className='w-full sm:w-[80%] md:w-[45%] lg:w-[30%] bg-slate-900 rounded-[20px] flex items-center justify-evenly p-3 gap-3 hover:scale-105 duration-300 shadow-md'
    >
      <img
        className='h-[60px] w-[60px] object-cover rounded-full'
        src={recipe.image}
        alt={recipe.Title}
      />
      <h1 className='text-white text-sm sm:text-base font-medium flex-1'>{recipe.Title}</h1>
      <button
        onClick={() => NavigateHandler(recipe)}
        className='px-6 py-3 text-2xl cursor-pointer bg-red-300 hover:bg-red-400 text-gray-800 font-semibold text-sm rounded-[5px] transition-transform duration-200'
      >
        See Recipe
      </button>
    </div>
  ));

  return (
    <div className='w-full px-4 py-6 flex flex-wrap justify-center gap-4'>
      {favourite.length > 0 ? renderrecipe : (
        <div className='text-white text-lg font-semibold'>No recipe found</div>
      )}
    </div>
  );
};

export default Fav;
