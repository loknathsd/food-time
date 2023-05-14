import React from 'react';
import Cart from '../../images/cart.png'

const Navbar = () => {
    return (
        <div className='shadow-lg bg-[#6B9142] bg-opacity-10 '>
            <nav className='container mx-auto flex justify-between align-middle items-center py-3'>
                <h1 className='text-[#396C03] text-[28px] font-[Merienda] cursor-pointer'>FoodTime</h1>
                <div className='text-[15px] flex gap-8 cursor-pointer'>
                    <p>Home</p>
                    <p>Blog</p>
                    <p>About</p>
                    <select className='bg-[#6B9142] bg-opacity-10' >
                        <option  value="">EN</option>
                        {/* <option  value=""></option> */}
                    </select>
                </div>
               <div className='flex gap-3 cursor-pointer'>
                <button className="bg-[#396C03]  px-8 py-2 rounded-full text-white">Login</button>
                <img className='bg-[#396C03] w-[40px] p-2 rounded-full' src={Cart} alt="" />
               </div>

            </nav>
        </div>
    );
};

export default Navbar;