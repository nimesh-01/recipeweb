import React, { useContext } from 'react';
import { recipecontext } from "../Context/RecipeContext";
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Recipes = () => {
  const navigate = useNavigate();
  const { data } = useContext(recipecontext);

  const NavigateHandler = (recipe) => {
    navigate(`/recipes/recipesdetail/${recipe.id}`);
  };

  const renderrecipe = data.map((recipe) => (
    <div
      key={recipe.id}
      className='w-full sm:w-[80%] md:w-[45%] lg:w-[30%] min-h-[100px] bg-slate-900 rounded-[20px] flex flex-col sm:flex-row items-center justify-between gap-4 p-4 hover:scale-105 duration-300'
    >
      <img className='h-[60px] w-[60px] object-cover rounded-full' src={recipe.image} alt="" />
      <h1 className="text-center flex-1">{recipe.Title}</h1>
      <button
        className="bg-red-300 cursor-pointer duration-200 hover:bg-red-400 text-gray-900 font-semibold px-3 py-2 rounded w-full sm:w-auto"
        onClick={() => NavigateHandler(recipe)}
      >
        View Recipe
      </button>
    </div>
  ));

  return (
    <>
      <div className='w-full px-4 mt-6 flex flex-wrap justify-center gap-6'>
        {data.length > 0 ? renderrecipe : <p className="text-white text-center">No recipe found</p>}
      </div>
      <Outlet />
    </>
  );
};

export default Recipes;
