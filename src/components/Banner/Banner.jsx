import React from 'react';
import Leaf from '../../images/leap.png';
import Plate1 from '../../images/egg.png'
import Plate2 from '../../images/food.png';
import Round from '../../images/round.png';

const Banner = () => {
    return (
        <div className='bg-[#6B9142] bg-opacity-10 w-full '>
            <div className='lg:flex lg:justify-center'>
                <div>
                    <img className='w-48 -my-10' src={Leaf} alt="" />
                    <div className='-mt-20 lg:ml-20 md:ml-16 max-sm:ml-5'>
                        <h1 className='text-[#396C03] lg:text-[60px] md:text-[45px] max-sm:text-[30px] lg:w-[600px] max-sm:w-[400px]  font-[Merienda]'>Order food online from your favourite local restaurants.</h1>
                        <p className='text-[#676767] text-lg font-[Poppins] my-3'>Freshly made food delivered to your door.</p>
                        <div className='flex my-5'>
                            <div className='border border-gray-500 rounded-full flex gap-3 w-96 px-2 py-1'>
                                <img className='w-8' src={Round} alt="" />
                                <input className='py-1' type="text" placeholder='Enter your location' />
                            </div>
                            <input className='bg-[#396C03] lg:px-12 md:px-12 max-sm:px-8 py-1 -ml-10 rounded-full text-white' type="submit" value="Search" />
                        </div>
                    </div>
                </div>

                <div className='relative mx-14 md:mx-28 max-sm:mx-5'>
                    <div className='absolute top-16 -left-20'><img className='w-[200px] ' src={Plate2} alt="" /></div>
                    <div className=' '>
                        <div className=' font-[Poppins] bg-gradient-to-b from-white to-white/40 backdrop-blur-0 w-[200px] h-[100px]  text-center absolute top-10 lg:left-48 md:left-32 max-sm:left-24 '>
                            <h1 className='mt-3 text-[#FF8B00] text-[30px] font-[700]'>200k+</h1>
                            <p className='text-[#838383] text-[17px]'>People Delivered</p>
                        </div>
                        <img className='w-[500px] mt-24' src={Plate1} alt="" />
                    </div>
                    <img className='absolute top-0 lg:left-96 md:left-96 max-sm:left-52 max-sm:hidden w-[250px]' src={Leaf} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;