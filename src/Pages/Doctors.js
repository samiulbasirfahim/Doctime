import React from 'react';
import Doctor from '../Components/Doctor';

const Doctors = () => {
    return (
        <div className='w-full'>
        <div className="container flex justify-center mx-auto pt-16 ">
            <div>
                <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
                <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
            </div>
        </div>
        <div className="w-full bg-gray-100 px-10 pt-10  dark:bg-gray-800">
            <div className="container mx-auto">
                <div className="grid justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Doctors;