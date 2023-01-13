import React from 'react';
import DasborardCart from './DasborardCart';
import DashboardCard from './DashboardCard';
import taka from '../media/taka-removebg-preview.png'
import DasboardTask from './DasboardTask';

const Dashboard = () => {
    return (
        <div>
            <div className=' ml-4 md:ml-10 mt-4'>
                <h1 className='text-2xl font-bold text-indigo-800'>Dashboard</h1>
                <p className='mt-8 mb-2 text-black text-1xl font-bold'>Company Status</p>
                <div>
                    <DashboardCard></DashboardCard>
                </div>

                <div className='grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>

                    <div className='col-span-2'>
                        <p className='md:mt-10 mt-3 mb-3 text-1xl text-black font-bold '>Expense Report</p>

                        <div className='p-6 mb-3 bg-white border rounded-md '>

                            <div className='flex justify-between mb-8'>
                                <div className='flex'>
                                    <div className='text-1xl font-semibold text-black mr-3'>Day</div>
                                    <div className='text-1xl font-semibold text-gray-400 mr-3'>Week</div>
                                    <div className='text-1xl font-semibold text-gray-400 mr-3'>Month</div>
                                    <div className='text-1xl font-semibold text-gray-400 mr-3'>Year</div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-[2px] h-[40px] bg-indigo-800'></div><button className='btn drop-shadow-lg btn-sm capitalize bg-indigo-800'>Export Details</button>
                                </div>

                            </div>
                            <div className='flex items-center mb-4'>
                                <img className='h-6 w-6' src={taka} alt="" />
                                <p className='text-3xl font-bold text-black'>45,000</p>
                            </div>
                            <DasborardCart></DasborardCart>

                        </div>
                    </div>
                    <div>
                        <p className='md:mt-10 mt-3  flex mb-3 justify-start text-1xl font-bold text-black '>Task Summary</p>
                        <DasboardTask></DasboardTask>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;