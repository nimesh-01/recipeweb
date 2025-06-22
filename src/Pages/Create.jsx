import { nanoid } from 'nanoid';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { recipecontext } from '../Context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const submithandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("New Recipe Created", {
      autoClose: 800,
    });
    reset();
    navigate('/recipes');
  };

  return (
    <form
      className='w-full flex flex-col items-center px-4 pt-6 md:pt-10'
      onSubmit={handleSubmit(submithandler)}
    >
      <input
        className='w-full sm:w-[90%] md:w-[70%] border-b outline-0 p-2'
        {...register("image", { required: "Upload Recipe Image" })}
        type="url"
        placeholder='Enter image URL'
      />
      <small className='text-red-400 text-xs'>{errors?.image?.message}</small>

      <input
        className='w-full sm:w-[90%] md:w-[70%] border-b outline-0 p-2 mt-4'
        {...register("Title", { required: "Recipe title empty" })}
        type="text"
        placeholder='Recipe Title'
      />
      <small className='text-red-400 text-xs'>{errors?.Title?.message}</small>

      <textarea
        className='w-full sm:w-[90%] md:w-[70%] border-b outline-0 p-2 mt-4'
        {...register("description", { required: "Enter Description of Recipe" })}
        placeholder="Recipe Description..."
      />
      <small className='text-red-400 text-xs'>{errors?.description?.message}</small>

      <textarea
        className='w-full sm:w-[90%] md:w-[70%] border-b outline-0 p-2 mt-4'
        {...register("ingredients", { required: "Enter Ingredients..." })}
        placeholder="Write Ingredients separated by commas..."
      />
      <small className='text-red-400 text-xs'>{errors?.ingredients?.message}</small>

      <textarea
        className='w-full sm:w-[90%] md:w-[70%] border-b outline-0 p-2 mt-4'
        {...register("instructions", { required: "Enter Instructions..." })}
        placeholder="Write Instructions separated by commas..."
      />
      <small className='text-red-400 text-xs'>{errors?.instructions?.message}</small>

      <select
        className='w-full sm:w-[90%] md:w-[70%] border-b border-white outline-0 p-2 mt-4 bg-slate-800 text-white '
        {...register("category")}
      >
        <option disabled selected value="">Select Category</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Snacks">Snacks</option>
        <option value="Dessert">Dessert</option>
        <option value="Drinks">Drinks</option>
      </select>

      <input
        className='w-full sm:w-[90%] md:w-[70%] border-b outline-0 p-2 mt-4'
        {...register("chefname")}
        type="text"
        placeholder='Chef Name...'
      />

      <button
        className="mt-6 cursor-pointer rounded-[10px] bg-red-300 text-gray-800 font-semibold p-2 w-fit hover:scale-105 transition duration-300"
        to="/create"
      >
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
