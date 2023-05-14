import React from 'react';
import Cycle from '../../images/cycle.png'
import { BsArrowRight } from 'react-icons/bs';
import './Explore.css'

const Explore = () => {
    return (
        <div className='container mx-auto lg:flex '>
            <div className='mt-24 ml-8'>
                <h1 className='text-[#396C03] text-[45px] font-[700] font-[Merienda]' >Explore your <br /> favourite city’s food.</h1>
                <p className='text-[#676767] my-3 text-left text-[17px] font-[Poppins]'>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.</p>
                <button className='bg-[#396C03] px-10 py-3 rounded-full text-white flex align-middle items-center justify-center gap-3'>Explore <span className='mt-1'> <BsArrowRight /></span> </button>
            </div>
            <div>
                <div className='delivery-container'>
                    <div className='cycle-area'>
                        {/* <img className='max-sm:pt-44' src={Cycle} alt="" /> */}
                        <div class="cycle"></div>
                        <div class="delivery-man"></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Explore;