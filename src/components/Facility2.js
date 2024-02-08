import React from 'react'
import { Fade } from 'react-reveal'

// DATA
import { facilities } from '../data/facilities';

const Facility2 = () => {
  return (
    <div>
               <div className='w-[75%] mx-auto grid md:grid-cols-2 lg:grid-cols-4 mt-44 py-16'>
               {facilities && facilities.map((facility) => (
                        <Fade left>
                            <div className='mb-5'>
                                <img src={facility.image} alt='' className='mx-auto mb-5'/>
                                <h1 className={facility.id === 1 ? `text-[25px] font-bold text-center text-link-colol-1 mb-5` : facility.id === 2 ? `text-[25px] font-bold text-center text-link-colol-2 mb-5` : facility.id === 3 ? `text-[25px] font-bold text-center text-link-colol-3 mb-5` : `text-[25px] font-bold text-center text-link-colol-4 mb-5`}>{facility.header}</h1>
                                <p className='text-center font-semibold px-10 text-[16px] text-text-color'>{facility.Desc}</p>
                            </div>
                        </Fade>
                ))}
               </div>
    </div>
  )
}

export default Facility2