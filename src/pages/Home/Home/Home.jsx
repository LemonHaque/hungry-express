import React from 'react';
import bg from '../../../../public/images/bg-img.png'
import chef from '../../../../public/images/grocery-image.png'

const Home = () => {
    return (
        <div className='min-h-[calc(100vh-84px)] bg-center bg-cover' style={{backgroundImage: `url(${bg})`,
        backgroundRepeat:"no-repeat",
        opacity:"90%"
        }}>

            <div className='text-white pt-48 mx-24 leading-normal max-w-xl relative'> 
                <h1 className='text-5xl font-semibold'>Deshi Food by<br /><span className='text-red-500 font-bold text-7xl'>Popular Chef</span></h1>

                <p className='text-xl my-6'>Hungry Express will give you the most popular chef's along with their recipes also hundres of their information. Also you will be amused to use our mobile app.</p>
                <div>
                    <button className='btn bg-red-600 hover:bg-red-700 mr-4'>See Now</button>
                    <button className='btn bg-red-600 hover:bg-red-700'>Download App</button>
                </div>

            </div>
            <div>
                <img className='w-full lg:w-5/12 lg:pt-10 lg:absolute bottom-0 right-20' src={chef} alt="" />
            </div>
        </div>
    );
};

export default Home;