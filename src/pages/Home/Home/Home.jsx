import React, { useEffect, useState } from 'react';
import bg from '../../../../public/images/bg-img.png'
import chef from '../../../../public/images/grocery-image.png'
import { Link } from 'react-router-dom';

const Home = () => {

    const [recipes, setrecipes] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then(res => res.json())
            .then(data => setrecipes(data))
    }, [])
    return (
        <div>

            {/* Banner Section start */}
            <div className='min-h-[calc(100vh-84px)] bg-center bg-cover' style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                opacity: "90%"
            }}>

                <div className='text-white pt-48 mx-24 leading-normal max-w-xl relative'>
                    <h1 className='text-5xl font-semibold'>Deshi Food by<br /><span className='text-red-500 font-bold text-7xl'>Popular Chef</span></h1>

                    <p className='text-xl my-6'>Hungry Express will give you the most popular chef's along with their recipes also hundres of their information. Also you will be amused to use our mobile app.</p>
                    <div>
                        <button className='btn bg-red-600 hover:bg-red-700 mr-4'>See More</button>
                        <button className='btn bg-red-600 hover:bg-red-700'>Download App</button>
                    </div>

                </div>
                <div>
                    <img className='w-full lg:w-5/12 lg:pt-10 lg:absolute bottom-0 right-20' src={chef} alt="" />
                </div>


            </div>

            {/* Banner section end */}



            {/* chef section start */}
            <div className='my-20'>
                    <div className='text-center mb-8'>
                        <h2 className='font-semibold text-6xl text-red-600'>Chef Section</h2>
                        <p className='sm:mx-8 lg:mx-36'>We can say that a chef is an all-in-all person who manages restaurant matters diligently. From deciding the menu of the restaurant to buying the food supplies and managing the food preparation, a chef ensures that visitors and guests receive the best cuisines.Here you can find world class chef with awesome working experience with their delicious recipes.</p>
                        </div>
                    
                
            <div className=' grid sm:mx-24 lg:grid-cols-3 gap-8'>
                
                {
                    recipes.map(recipe => <div>

                        
                            <div className="card rounded w-96 bg-gray-100 shadow-xl my-4">
                                <figure className="h-64">
                                    <img  src={recipe.photoUrl} alt="Shoes" className="rounded-sm text-center" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-red-600 text-3xl semibold">{recipe.chefName}</h2>
                                    <p>Years of Experience: {recipe.yearsOfExperience}</p>
                                    <p>Numbers of Recipes: {recipe.numberOfRecipes}</p>
                                    <p>Likes: {recipe.likes}</p>
                                    <div className="card-actions">
                                        
                                        <Link to={`/recipes/${recipe.id}`}><button  className="btn btn-error hover:bg-red-700 hover:text-white">View Recipe</button></Link>
                                    </div>
                                </div>
                            </div>
                        
                    </div>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;