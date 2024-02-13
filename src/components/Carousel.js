import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Landing = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: false, // Disable swipe
    draggable: false, // Disable dragging
  };

  return (
    <div className='overflow-hidden h-[100vh] w-full bg-red-300'>
    <Slider {...settings}>
                        <div className='h-[100vh] land-1'>
                            <div className='landing_trans w-full h-full flex items-center justify-center'>
                                <motion.div initial={{opacity: 0}} animate={{opacity: 2}} transition={{delay: 1.5, duration: 5}} className='text-center'>
                                                <h1  className=' text-lg lg:text-3xl font-[700] text-white'>Welcome To School Website</h1>
                                                <h2 className='text-[40px] lg:text-[70px] font-extrabold text-white'>Best For Education</h2>
                                                <p className='pt-5 mb-16 text-[16px] font-semibold w-[80%] mx-auto text-white'>Monotonely principle centered ahitectures through and outstanding magnetic metrics whereas cross functional products</p>
                                                <div className='flex items-center justify-center gap-5'>
                                                            <Link className='bg-link-colol-4 px-8 py-4 text-white font-bold'>Read More</Link>
                                                            <Link className='bg-link-colol-2 px-8 py-4 text-white font-bold'>Buy Now</Link>
                                                </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className='h-[100vh] land-2'>
                                        <div className='landing_trans w-full h-full flex items-center justify-center'>
                                                      <motion.div initial={{opacity: 0}} animate={{opacity: 2}} className='text-center'>
                                                                      <h1 className=' text-lg lg:text-3xl font-[700] text-white'>Welcome To School Website</h1>
                                                                      <h2 className='text-[40px] lg:text-[70px] font-extrabold text-white'>Best For Education</h2>
                                                                      <p className='pt-5 mb-16 text-[16px] font-semibold w-[80%] mx-auto text-white'>Monotonely principle centered ahitectures through and outstanding magnetic metrics whereas cross functional products</p>
                                                                      <div className='flex items-center justify-center gap-5'>
                                                                                    <Link className='bg-link-colol-4 px-8 py-4 text-white font-bold'>Read More</Link>
                                                                                    <Link className='bg-link-colol-2 px-8 py-4 text-white font-bold'>Buy Now</Link>
                                                                      </div>
                                                      </motion.div>
                                        </div>
                        </div>

                        <div className='h-[100vh] land-3'>
                                        <div className='landing_trans w-full h-full flex items-center justify-center'>
                                                      <motion.div initial={{opacity: 0}} animate={{opacity: 2}} className='text-center'>
                                                                      <h1 className=' text-lg lg:text-3xl font-[700] text-white'>Welcome To School Website</h1>
                                                                      <h2 className='text-[40px] lg:text-[70px] font-extrabold text-white'>Best For Education</h2>
                                                                      <p className='pt-5 mb-16 text-[16px] font-semibold w-[80%] mx-auto text-white'>Monotonely principle centered ahitectures through and outstanding magnetic metrics whereas cross functional products</p>
                                                                      <div className='flex items-center justify-center gap-5'>
                                                                                    <Link className='bg-link-colol-4 px-8 py-4 text-white font-bold'>Read More</Link>
                                                                                    <Link className='bg-link-colol-2 px-8 py-4 text-white font-bold'>Buy Now</Link>
                                                                      </div>
                                                      </motion.div>
                                        </div>
                        </div>

    </Slider>
    </div>
  );
};

export default Landing;
