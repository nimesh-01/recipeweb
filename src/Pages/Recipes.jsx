import React, { useContext, useState } from 'react';
import { recipecontext } from "../Context/RecipeContext";
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Recipes = () => {
  const navigate = useNavigate();
  const { data } = useContext(recipecontext);
  const [searchResults, setSearchResults] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [searchText, setSearchText] = useState("");

  const NavigateHandler = (recipe) => {
    navigate(`/recipes/recipesdetail/${recipe.id}`);
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchText(val);

    if (val.trim() !== "") {
      setShowButton(true);
    } else {
      setShowButton(false);
      setSearchResults(null);
    }
  };

  const handleSearch = () => {
    const val = searchText.trim();
    if (val === "") {
      setSearchResults(null);
      return;
    }
    const results = data.filter(obj => obj.Title.toLowerCase().includes(val.toLowerCase()));
    setSearchResults(results);
  };

  const handleKeyUp = (e) => {
    handleInputChange(e);
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const renderrecipe = (recipeList) => (
    recipeList.map((recipe) => (
      <div
        key={recipe.id}
        className='w-full sm:w-[80%] md:w-[45%] lg:w-[30%] min-h-[100px] bg-slate-900 rounded-[20px] flex flex-col sm:flex-row items-center justify-between gap-4 p-4 hover:scale-105 duration-300'
      >
        <img className='h-[60px] w-[60px] object-cover rounded-full' src={recipe.image} alt="" />
        <h1 className="text-center flex-1">{recipe.Title}</h1>
        <button
          className="bg-red-300 cursor-pointer hover:bg-red-400 text-gray-900 font-semibold px-3 py-2 rounded w-full sm:w-auto duration-300"
          onClick={() => NavigateHandler(recipe)}
        >
          View Recipe
        </button>
      </div>
    ))
  );

  return (
    <>
      <div className="w-full flex justify-center items-center mt-6 px-4">
        <div className='flex border rounded-[20px] w-full sm:w-[300px] h-[50px] justify-center items-center transition-all duration-500 gap-2 p-2'>
          <input
            type="text"
            placeholder='Search for recipe...'
            value={searchText}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            className='focus:outline-none text-lg flex-1 w-[70%]'
          />
          <button
            onClick={handleSearch}
            className={`bg-red-300 hover:bg-red-400 text-gray-900 font-semibold px-3 py-1 rounded transition-all duration-500 outline-none ${
              showButton ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
            }`}
          >
            Search
          </button>
        </div>
      </div>

      {/* Recipe Listing */}
      <div className='w-full px-4 mt-6 flex flex-wrap lg:justify-start gap-6 sm:justify-center'>
        {searchResults === null ? (
          data.length > 0 ? renderrecipe(data) : <p className="text-white text-center">No recipe found...</p>
        ) : (
          searchResults.length > 0 ? renderrecipe(searchResults) : <p className="text-white text-center">No matching recipe found...</p>
        )}
      </div>

      <Outlet />
    </>
  );
};

export default Recipes;
