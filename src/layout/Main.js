import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import Header from '../Components/Header';
import svgd from '../media/Vector.svg';
import giar from '../media/gfsf.svg';
import arow from '../media/AROW.svg'
import logout from '../media/logout.svg'

const Main = () => {
  const [show, setShow] = useState(false)

  return (

    <div >

      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Header></Header>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu  w-[200px] md:w-[250px]   bg-indigo-800 text-white">           
            <div className='flex justify-end mb-3'>
              <label htmlFor="my-drawer-2" className='absolute p-6 btn-circle lg:hidden'>X</label>
            </div>
            <h1 className='mt-2 mb-14 text-2xl text-white text-center'>Morshed</h1>
            <input  type="text" placeholder="Search" className=" input text-indigo-800 mb-3 search input-bordered input-sm block w-full md:hidden " />

            <li> <NavLink to='/' className='w-full flex pl-12'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Dashboard</NavLink></li>
            <li> <NavLink className={({isActive})=>isActive?"active":"deactive"} to='/attendance'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Attendance</NavLink></li>
            <li> <NavLink className={({isActive})=>isActive?"active":"deactive"} to='/dashborad'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Employees</NavLink></li>
            <li> <NavLink className={({isActive})=>isActive?"active":"deactive"} to='/dashborad'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Leaves</NavLink></li>
            <li> <NavLink className={({isActive})=>isActive?"active":"deactive"} to='/dashborad'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Expense</NavLink></li>
            <li> <NavLink className={({isActive})=>isActive?"active":"deactive"} to='/dashborad'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Notice</NavLink></li>
            <li> <NavLink className={({isActive})=>isActive?"active":"deactive"} to='/dashborad'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Departments </NavLink></li>
            <div>
              <button onClick={() => setShow(!show)} className='flex pl-1 ml-4 justify-center items-center'><img className='w-4 h-4 mr-3' src={arow} alt="" /> <img className={show ? `animate-spin h-6 w-6 mr-2` : "h-6 w-6 mr-2"} src={giar} alt="" /> Setings</button>
              <div className={show ? `ease-in duration-1000 top-8 ` : 'hidden top-0'}>
                <ul className='list-disc'>
                  <li className='ml-10'>
                    <div className='flex items-center'>
                      <span className='text-4xl mt-[-20px]'>.</span>
                      <span className='text-1xl '>Approval</span>
                    </div>
                  </li>
                  <li className='ml-10'>
                    <div className='flex items-center'>
                      <span className='text-4xl mt-[-20px]'>.</span>
                      <span className='text-1xl '>Leave </span>
                    </div>
                  </li>
                  <li className='ml-10'>
                    <div className='flex items-center'>
                      <span className='text-4xl mt-[-20px]'>.</span>
                      <span className='text-1xl '>Office Setting</span>
                    </div>
                  </li>

                  <li className='ml-10'>
                    <div className='flex items-center'>
                      <span className='text-4xl mt-[-20px]'>.</span>
                      <span className='text-1xl '>My Subscriptions</span>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
            <li className='flex pl-8'><button><img className='w-6 mt-2 h-6 mr-3' src={logout} alt="" />  Logout</button></li>
          </ul>
        </div>
      </div>



    </div>


  );
};

export default Main;