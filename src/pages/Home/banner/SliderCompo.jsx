import React from 'react';
import './bannrStyle.css'

const SliderCompo = ({data}) => {
    return (
        <>
            <div className='relative img-gradient'>
                <img src={data.photo} alt="bannr pic" />
            </div>

            <div className='absolute top-1/3 lg:left-20 left-5 z-10 text-white text-start w-full'>
                <p className='text-white text-4xl'>{data.title}</p>
                <h1 className='text-white text-7xl font-bold w-10/12'>{data.details1}</h1>
                <h1 className='text-white text-7xl font-bold w-8/12'>{data.details2}</h1>
            </div>
        </>
    );
};

export default SliderCompo;