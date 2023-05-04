import React, { useEffect, useState } from 'react';
import bg from '../../../../public/images/bg-img.png'
import chef from '../../../../public/images/grocery-image.png'
import { Link } from 'react-router-dom';
import pic from "../../../../public/images/reserved.jpg"

const Home = () => {

    const [chefData, setchefData] = useState([])

    useEffect(() => {
        fetch('https://hungry-express-server-lemonhaque.vercel.app/chefData')
            .then(res => res.json())
            .then(data => setchefData(data))
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
                        <button className='btn btn-error bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg'>Explore More</button>

                    </div>

                </div>
                <div>
                    <img className='w-full lg:w-5/12 lg:pt-10 lg:absolute bottom-0 right-20' src={chef} alt="" />
                </div>


            </div>

            {/* Banner section end */}



            {/* chef section start */}
            <div>
                <div className='my-20'>
                    <div className='text-center mb-8'>
                        <h2 className='font-semibold text-6xl text-red-600'>Chef Section</h2>
                        <div className="h-1 mx-auto bg-gradient-to-r from-purple-800 via-pink-500 to-red-400 sm:w-1/2 lg:w-96 mb-6 mt-3 opacity-75 my-0 py-0 rounded-t"></div>
                        <p className='sm:mx-8 lg:mx-36'>We can say that a chef is an all-in-all person who manages restaurant matters diligently. From deciding the menu of the restaurant to buying the food supplies and managing the food preparation, a chef ensures that visitors and guests receive the best cuisines.Here you can find world class chef with awesome working experience with their delicious recipes.</p>
                    </div>


                    <div className=' sm:grid sm:mx-36 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                        {
                            chefData.map(chef => <div key={chef.id}>


                                <div className="card rounded w-96 bg-gray-100 shadow-xl my-4">
                                    <figure className="h-64">
                                        <img src={chef.photoUrl} alt="Shoes" className="rounded-sm text-center" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-red-600 text-3xl semibold">{chef.chefName}</h2>
                                        <p>Years of Experience: {chef.yearsOfExperience}</p>
                                        <p>Numbers of Recipes: {chef.numberOfRecipes}</p>
                                        <p>Likes: {chef.likes}</p>
                                        <div className="card-actions">

                                            <Link to={`/recipes/${chef.id}`}><button className="btn btn-error bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg">View Recipe</button></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>)
                        }
                    </div>
                </div>
            </div>
            {/* chef section end */}

            {/* make a reservation start */}
            <div>


                <section className="bg-gray-800 py-8 px-20">
                    <div className="container mx-auto px-2 pt-4 pb-12 text-white">
                        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Make a Reservation</h1>
                        <div className="w-full mb-4">
                            
                        </div>
                        <div className="flex flex-col md:flex-row justify-center pt-12 my-12 sm:my-4">
                            <div className="md:w-1/2 pr-4">
                                <form className="w-full max-w-lg">
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                First Name
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="John" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                Last Name
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-email">
                                                Email Address
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="johndoe@example.com" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-phone">
                                                Phone Number
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type="tel" placeholder="(123) 456-7890" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-date">
                                                Date
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-date" type="date" placeholder="Date" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-time">
                                                Time
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-time" type="time" placeholder="Time" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-party-size">
                                                Party Size
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-party-size" type="number" placeholder="Number of Guests" min="1" max="10" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <button className="btn btn-error bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg" type="button">
                                                Submit Reservation
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="md:w-1/2">
                                <img className="object-cover object-center rounded" alt="reservation" src={pic} />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            {/* reservation end */}

            {/* about us start */}
            <div className='mx-20'>
                <section className="bg-white py-8">
                    <div className="container mx-auto px-2 pt-4 pb-12">
                        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-red-600">About Us</h1>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto bg-gradient-to-r from-purple-800 via-pink-500 to-red-400 sm:w-56 lg:w-64 opacity-75 my-0 py-0 rounded-t"></div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center pt-12 my-12 sm:my-4">
                            <div className="md:w-1/2 pr-4">
                                <h3 className="text-2xl mb-2 font-bold text-red-600">Our Story</h3>
                                <p className=" mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                                <h3 className="text-2xl mb-2 font-bold text-red-600">Our Mission</h3>
                                <p className=" mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                            </div>
                            <div className="md:w-1/2">
                                <img src="https://source.unsplash.com/800x600/?restaurant" alt="Restaurant" className="w-full rounded-lg shadow-lg" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            {/* about us end */}

        </div>
    );
};

export default Home;