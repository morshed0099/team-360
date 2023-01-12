import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Header from '../Components/Header';
import svgd from '../media/Vector.svg';

const Main = () => {
  return (

    <div >

      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col mr-5 ml-5">
          <Header></Header>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[200px] md:w-[250px]  bg-indigo-800 text-white">
            <div className='flex justify-end mb-3'>
              <label htmlFor="my-drawer-2" className='absolute btn-circle lg:hidden'>X</label>
            </div>
            <h1 className='mt-2 mb-14 text-2xl text-white text-center'>LOG HERE</h1>

            <li> <Link to='/dashboard'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Dashboard</Link></li>
            <li> <Link to='/attendance'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Attendance</Link></li>

          </ul>

        </div>
      </div>



    </div>


  );
};

export default Main;