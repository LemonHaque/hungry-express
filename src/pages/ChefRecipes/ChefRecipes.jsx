import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ChefRecipes = () => {
    const { id } = useParams();
    const recipes = useLoaderData();
    console.log(recipes.recipes);
    // const [recipes, setrecipes] = useState([])

    // useEffect(() => {
    //     fetch('https://hungry-express-server-lemonhaque.vercel.app/recipes')
    //         .then(res => res.json())
    //         .then(data => setrecipes(data))
    // }, [])

    return (
        // <div className='mx-10'>
        //     <h2 className='text-center text-4xl my-10 font-semibold'>All Recipes</h2>
        //     <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-20'>
        //         {
        //             recipes.map(recipe => <p key={recipe.id}>

        //                 <div className=" bg-gray-100 rounded shadow-xl h-96">
        //                     <div className="card-body">
        //                         <h2 className="text-2xl text-center text-red-600 font-bold">{recipe.recipe.recipe_name}</h2>
        //                         <h3 className='font-semibold'>I ngredients: <br />{recipe.recipe.ingredients}</h3>
        //                         <p>{recipe.recipe.cooking_method}</p>


        //                     </div>
        //                 </div>

        //             </p>)
        //         }
        //     </div>
        // </div>
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

            <div className='grid sm:mx-24 md:grid-cols-3 my-8'>
            

                {
                    recipes.recipes.map(r => <div>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <img className='h-48 rounded-lg' src={r.img} alt="" />
                                <h2 className="card-title">{r.recipe_name}</h2>
                                <p><span className='font-semibold text-lg'>Ingredients: </span> {r.ingredients}</p>
                                <p><span className='font-semibold text-lg'>Cooking Method: </span> {r.cooking_method
                                }</p>
                                <p><span className='font-semibold text-lg'>Ratings: </span> {r.rating}</p>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-error bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg">Add to Favourite</button>

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