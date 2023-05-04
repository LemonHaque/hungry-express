import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipes = () => {
    const { id } = useParams();
    const recipes = useLoaderData();
    console.log(recipes.recipes);

    const [fav, setFav] = useState(true)

    const toastHandle = (e) => {
        setFav(false)
        toast('added to favorite')
    }

    return (

        <div>
            {/* Details Section start */}
            <div>
                <h2 className='font-semibold text-4xl text-red-600 text-center my-10'>Chef Details</h2>
                <div className="card card-side bg-base-100 shadow-xl w-3/4 mb-16 mx-auto">

                    <figure className='p-6 '><img className='rounded-lg w-3/4' src={recipes.photoUrl} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{recipes.chefName}</h2>
                        <p><span className='font-semibold text-xl'>Bio: </span> {recipes.bio}</p>
                        <p><span className='font-semibold text-xl'>Likes: </span> {recipes.likes}</p>
                        <p> <span className='font-semibold text-xl'>Number of Recipes: </span>{recipes.numberOfRecipes}</p>
                        <p><span className='font-semibold text-xl'>Years of Experience: </span>{recipes.yearsOfExperience}</p>
                        <div><p className='font-semibold text-xl'>Main Recipes:</p> {recipes.recipes.map(r => <div>
                            <ul>
                                <li>{r.recipe_name}</li>

                            </ul>
                        </div>)}</div>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
            {/* details section end */}
            <h2 className='font-semibold text-4xl text-red-600 text-center my-10'>Recipe Details</h2>

            <div className='md:grid gap-4 sm:mx-24 md:grid-cols-2 lg:grid-cols-3 my-8'>


                {
                    recipes.recipes.map(r => <div>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <img className='h-48 rounded-lg' src={r.img} alt="" />
                                <h2 className="card-title">{r.recipe_name}</h2>
                                <p><span className='font-semibold text-lg'>Ingredients: </span> {r.ingredients}</p>
                                <p><span className='font-semibold text-lg'>Cooking Method: </span> {r.cooking_method.length > 180 ? r.cooking_method.slice(0, 180) : r.cooking_method}....</p>
                                <p><span className='font-semibold text-lg'>Ratings: </span> {r.rating}</p>

                                <div className="card-actions justify-end">
                                    <button disabled={!fav} onClick={toastHandle} className="btn btn-error bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg">Add to Favourite</button>
                                    <ToastContainer></ToastContainer>

                                </div>
                            </div>
                        </div>


                    </div>)
                }


            </div>

        </div>


    );
};

export default ChefRecipes;