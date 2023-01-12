import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import Header from '../Components/Header';
import svgd from '../media/Vector.svg';
import giar from '../media/gfsf.svg';
import arow from '../media/AROW.svg'
import logout from '../media/logout.svg'

const Main = () => {
  const [show,setShow] = useState(false)

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
          <ul className="menu p-4 w-[200px] md:w-[250px]  bg-indigo-800 text-white">
            <div className='flex justify-end mb-3'>
              <label htmlFor="my-drawer-2" className='absolute btn-circle lg:hidden'>X</label>
            </div>
            <h1 className='mt-2 mb-14 text-2xl text-white text-center'>LOG HERE</h1>

            <li> <Link to='/dashboard'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Dashboard</Link></li>
            <li> <Link to='/attendance'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Attendance</Link></li>
            <li> <Link to='/'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Employees</Link></li>
            <li> <Link to='/'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Leaves</Link></li>
            <li> <Link to='/'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Expense</Link></li>
            <li> <Link to='/'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Notice</Link></li>
            <li> <Link to='/'> <img className='w-[20px] h-[20px]' src={svgd} alt="" />Departments </Link></li>
            <div>
              <button onClick={()=>setShow(!show)} className='flex justify-center items-center'><img className='w-6 h-6 mr-3' src={arow} alt="" /> <img className={show ? `animate-spin h-6 w-6 mr-2`:"h-6 w-6 mr-2"} src={giar} alt="" /> Setings</button>
              <div className={show ?`ease-in duration-1000 top-8 `:'hidden top-0'}>
                <li className='ml-10'>hello</li>
                <li className='ml-10'>hello</li>
                <li className='ml-10'>hello</li>
              </div>
            </div>
            <li className='flex'><button><img className='w-6 mt-2 h-6 mr-3' src={logout} alt="" />  Logout</button></li>
          </ul>
        </div>
      </div>



    </div>


  );
};

export default Main;