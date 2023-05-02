import React, { useEffect, useState } from 'react';

const ChefRecipes = () => {
    const [recipes, setrecipes] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then(res => res.json())
            .then(data => setrecipes(data))
    }, [])

    return (
        <div className='mx-10'>
          <h2 className='text-center text-4xl my-10 font-semibold'>All Recipes</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-20'>
            {
                recipes.map(recipe => <p key={recipe.id}>

                    
                    <div className=" bg-gray-100 rounded shadow-xl h-96">
                        <div className="card-body">
                            <h2 className="text-2xl text-center text-red-600 font-bold">{recipe.recipe_name}</h2>
                            <h3 className='font-semibold'>Ingredients: <br />{recipe.ingredients}</h3>
                            <p>{recipe.cooking_method}</p>

                        
                        </div>
                    </div>
                
                </p>)
            }
        </div>
        </div>

    );
};

export default ChefRecipes;