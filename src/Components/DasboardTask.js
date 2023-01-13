import React from 'react';

const DasboardTask = () => {
    return (
        <div   className='info w-[390px] lg:w-[250px] rounded-md p-4 mb-3 pr-8'>
            <div className='mb-3'>
                <p>Total task</p>
                <p className='text 2xl font-semibold text black'>112</p>
            </div>
            <div>
                <p className='mb-2'>Completed</p>
                <div className='bg-gray-300 flex justify-between w-full h-8 rounded-full overflow-hidden'>
                    <div className='w-[50%] taks h-8 mr-3'></div>
                    <div className='px-2'>
                        <span className='text-2xl font-semibold text-gray-400 '>50/</span>
                        <span className='text-2xl font-semibold text-black '>80</span>
                    </div>
                </div>

            </div>
            <div>
                <p className='mb-2'>In progress</p>
                <div className='bg-gray-300 flex justify-between w-full h-8 rounded-full overflow-hidden'>
                    <div className='w-[5%] taks h-8 mr-3'></div>
                    <div className='px-2'>
                        <span className='text-2xl font-semibold text-gray-400 '>15/</span>
                        <span className='text-2xl font-semibold text-black '>112</span>
                    </div>
                </div>

            </div>
            <div>
                <p className='mb-2'>Pending</p>
                <div className='bg-gray-300 flex w-full justify-between h-8 rounded-full overflow-hidden'>
                    <div className='w-[20%] taks h-8 mr-3'></div>
                    <div className='px-2'>
                        <span className='text-2xl  font-semibold text-gray-400 '>30/</span>
                        <span className='text-2xl font-semibold text-black '>80</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DasboardTask;