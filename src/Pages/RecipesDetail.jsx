import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { recipecontext } from '../Context/RecipeContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const RecipesDetail = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { data, setdata } = useContext(recipecontext);

    if (!data || data.length === 0) {
        return <div className="text-white text-center mt-10">Loading recipe...</div>;
    }

    const recipe = data.find((recipe) => params.id == recipe.id);
    if (!recipe) {
        return (
            <div className="text-red-500 font-semibold text-center mt-10">
                Recipe not found. It might have been deleted or not loaded yet.
            </div>
        );
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            Title: recipe?.Title,
            chefname: recipe?.chefname,
            image: recipe?.image,
            ingredients: recipe?.ingredients,
            instructions: recipe?.instructions,
            category: recipe?.category,
            description: recipe?.description
        }
    });

    const [favourite, setFavourite] = useState(JSON.parse(localStorage.getItem("fav")) || []);

    const submithandler = (recipe) => {
        const index = data.findIndex((recipe) => params.id == recipe.id);
        const copydata = [...data];
        copydata[index] = { ...copydata[index], ...recipe };
        setdata(copydata);
        localStorage.setItem("recipes", JSON.stringify(copydata));
        toast.success("Recipe Updated", { autoClose: 800 });
    };

    const Deletehandler = () => {
        const filterdata = data.filter(r => r.id != params.id);
        setdata(filterdata);
        localStorage.setItem("recipes", JSON.stringify(filterdata));
        setFavourite(filterdata);
        localStorage.setItem("fav", JSON.stringify(filterdata));
        toast.success("Recipe Deleted", { autoClose: 800 });
        navigate("/recipes");
    };

    const Favhandler = () => {
        let copyfav = [...favourite];
        copyfav.push(recipe);
        setFavourite(copyfav);
        localStorage.setItem("fav", JSON.stringify(copyfav));
    };

    const UnFavhandler = () => {
        const filterfav = favourite.filter(r => r.id != recipe?.id);
        setFavourite(filterfav);
        localStorage.setItem("fav", JSON.stringify(filterfav));
    };

    return (
        <div className='flex flex-col lg:flex-row justify-center w-full gap-6 md:gap-[50px] p-4'>
            {/* Left Panel */}
            <div className='w-full lg:w-1/2 relative self-center bg-slate-900 p-6 md:p-10 rounded-[20px] text-indigo-100'>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <img className='w-[100px] rounded-[10px]' src={recipe.image} alt={recipe.Title} />
                    <div className='flex flex-col gap-[5px] w-full'>
                        <h2 className='text-2xl font-bold'>{recipe.Title}</h2>
                        <h4 className='text-sm text-red-300'>{recipe.chefname}</h4>
                        <h3>{recipe.category}</h3>
                    </div>
                </div>

                {/* Favorite Toggle */}
                {favourite.find((f) => f.id == recipe.id) ? (
                    <img
                        onClick={UnFavhandler}
                        className='absolute duration-500 top-4 right-4 h-[40px] cursor-pointer'
                        src="https://static.vecteezy.com/system/resources/previews/018/842/695/large_2x/red-heart-shape-icon-like-or-love-symbol-for-valentine-s-day-3d-render-illustration-free-png.png"
                        alt="Unfavorite"
                    />
                ) : (
                    <img
                        onClick={Favhandler}
                        className='absolute duration-500 top-4 right-4 h-[40px] cursor-pointer'
                        src="http://clipart-library.com/images_k/white-heart-png-transparent/white-heart-png-transparent-3.png"
                        alt="Favorite"
                    />
                )}

                {/* Details */}
                <p className='mt-5'><span className='text-xl font-bold text-rose-200'>Description:</span> {recipe.description}</p>
                <p className='mt-5'><span className='text-xl font-bold text-rose-200'>Ingredients:</span> {recipe.ingredients}</p>
                <p className='mt-5'><span className='text-xl font-bold text-rose-200'>Recipe:</span> {recipe.instructions}</p>
            </div>

            {/* Form Panel */}
            <form onSubmit={handleSubmit(submithandler)} className='w-full lg:w-1/2'>
                <input className='block w-full border-b outline-0 p-2 mb-2' {...register("image", { required: "Upload Recipe Image" })} type="url" placeholder='Enter image URL' />
                <small className='text-red-400 text-xs'>{errors?.image?.message}</small>

                <input className='block w-full border-b outline-0 p-2 mb-2' {...register("Title", { required: "Recipe title empty" })} type="text" placeholder='Recipe Title' />
                <small className='text-red-400 text-xs'>{errors?.Title?.message}</small>

                <textarea className='block w-full border-b outline-0 p-2 mb-2' {...register("description", { required: "Enter Description of Recipe" })} placeholder="Recipe Description..." ></textarea>
                <small className='text-red-400 text-xs'>{errors?.description?.message}</small>

                <textarea className='block w-full border-b outline-0 p-2 mb-2' {...register("ingredients", { required: "Enter Ingredients..." })} placeholder="Write Ingredients separated by commas..." ></textarea>
                <small className='text-red-400 text-xs'>{errors?.ingredients?.message}</small>

                <textarea className='block w-full border-b outline-0 p-2 mb-2' {...register("instructions", { required: "Enter Instructions..." })} placeholder="Write Instructions separated by commas..." ></textarea>
                <small className='text-red-400 text-xs'>{errors?.instructions?.message}</small>

                <select className='block w-full border-b border-white outline-0 p-2 mb-2  bg-slate-800 text-white' {...register("category")}>
                    <option value="">Select Category</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Drinks">Drinks</option>
                </select>

                <input className='block w-full border-b outline-0 p-2 mb-2' {...register("chefname")} type="text" placeholder='Chef Name...' />

                <button className='mt-5 cursor-pointer block w-full rounded-[10px] bg-blue-400 text-gray-800 font-semibold p-2'>Update Recipe</button>
                <button onClick={Deletehandler} type="button" className='mt-3 cursor-pointer block w-full rounded-[10px] bg-red-400 text-gray-800 font-semibold p-2'>Delete Recipe</button>
            </form>
        </div>
    );
};

export default RecipesDetail;
