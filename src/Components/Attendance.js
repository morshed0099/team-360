import React from 'react';
import giear from '../media/giear.svg'
import doc from '../media/doc.png'
import eye from '../media/eye.png'
import right from '../media/rightarow.png'
import left from '../media/leftarow.png'




const Attendance = () => {

    return (
        <div   className=' ml-4 md:ml-10 mt-10'>
            <div  className='flex justify-between mb-8 items-center'>
                <h1 className='text-2xl mr-2 md:mr-0 lg:mr-0 font-bold text-indigo-800'>Attendance </h1>
                <div className='flex mr-6'>
                    <button className='btn capitalize btn-sm mr-8 bg-indigo-800 shadow-lg'>Download Report</button>
                    <img className='w-8 h-8' src={giear} alt="" />
                </div>
            </div>
            <div  className='mr-6 mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                <div>
                    <input type="date" id='department' placeholder='jan/1/2023' className='h-[64px] w-full  p-4 input input-bordered  rounded-md' />
                </div>
                <div>
                    <input id='department' type="text" placeholder='Department' className='h-[64px] w-full p-3 input input-bordered text-2xl rounded-md' />
                </div>
                <div>
                    <select className="select select-bordered select-lg w-full ">
                        <option disabled selected>Attendance</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div>
                    <select className="select select-bordered select-lg w-full ">
                        <option disabled selected>Present</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
            </div>
            <div className='mr-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                <div>
                    <input id='department' type="text" placeholder='Check In' className='h-[64px] w-full  p-3 input input-bordered text-2xl rounded-md' />
                </div>
                <div>
                    <input id='department' type="text" placeholder='Location' className='h-[64px] w-full p-3 input input-bordered text-2xl rounded-md' />
                </div>
                <div>
                    <select className="select select-bordered select-lg w-full ">
                        <option disabled selected>Designation</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div>
                    <select className="select select-bordered select-lg w-full ">
                        <option disabled selected>Department</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
            </div>

            {/* table  */}
            <div className=' bg-white mr-6 mt-6 rounded-2xl pb-4 mb-3 '>
                <div className="overflow-x-auto w-full mb-4">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className=" w-4 h-4" />
                                    </label>
                                </th>
                                <th>Employee Name</th>
                                <th>Department</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>Remark</th>
                                <th>Hours</th>
                                <th>Overtime</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="w-4 h-4" />
                                    </label>
                                </th>
                                <td>
                                    Hasan
                                </td>
                                <td>
                                    HR & Admin
                                </td>
                                <td>
                                    <button className='btn btn-xs bg-green-600 border-none hover:bg-green-800'>9.30 am</button>
                                </td>
                                <td>
                                    <button className='btn btn-xs bg-red-600 hover:bg-red-800 border-none'>6.30 am</button>
                                </td>
                                <td>
                                    <img src={doc} className='w-4 h-4' alt="" />
                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>
                                    <img src={eye} className='w-4 h-4' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="w-4 h-4" />
                                    </label>
                                </th>
                                <td>
                                    Hasan
                                </td>
                                <td>
                                    HR & Admin
                                </td>
                                <td>
                                    <button className='btn btn-xs bg-green-600 border-none hover:bg-green-800'>9.30 am</button>
                                </td>
                                <td>
                                    <button className='btn btn-xs bg-red-600 hover:bg-red-800 border-none'>6.30 am</button>
                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>
                                    <img src={eye} className='w-4 h-4' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="w-4 h-4" />
                                    </label>
                                </th>
                                <td>
                                    Hasan
                                </td>
                                <td>
                                    HR & Admin
                                </td>
                                <td>
                                    <button className='btn btn-xs bg-green-600 border-none hover:bg-green-800'>9.30 am</button>
                                </td>
                                <td>
                                    <button className='btn btn-xs bg-red-600 hover:bg-red-800 border-none'>6.30 am</button>
                                </td>
                                <td>
                                    <img src={doc} className='w-4 h-4' alt="" />
                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>
                                    <img src={eye} className='w-4 h-4' alt="" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-end items-center mr-6 pb-8 mt-14'>
                    <div>
                        <div><img className='h-[10px] w-[10px] cursor-pointer' src={right} alt="" /></div>
                    </div>
                    <div className='px-3 py-2 rounded-md hover:bg-slate-300'>
                        <p>1</p>
                    </div>
                    <div className='px-3 py-2 rounded-md hover:bg-slate-300'>
                        <p>2</p>
                    </div>
                    <div className='px-3 py-2 rounded-md hover:bg-slate-300'>
                        <p>3</p>
                    </div>
                    <div className='px-3 py-2 rounded-md hover:bg-slate-300'>
                        <p>4</p>
                    </div>
                    <div className='px-3 py-2 rounded-md hover:bg-slate-300'>
                        <p>5</p>
                    </div>
                    <div>
                        <div><img className='h-[10px] w-[10px] cursor-pointer' src={left} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;