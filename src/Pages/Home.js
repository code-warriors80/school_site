import React from 'react'
import { Zoom } from 'react-reveal'
import { Link } from 'react-router-dom'

// COMPONENTS
import Landing from '../components/Carousel'
import Review from '../components/Review'
import Classes from '../components/Classes'
import Teachers from '../components/Teachers'
import Gallery from '../components/Gallery'
import Event from '../components/Event'
import Facility from '../components/Facility'
import NewsLetter from '../components/News-Letter'


const Home = () => {
  return (
    <div>
               <Landing />
               <section className='md:w-[85%] lg:w-[75%] grid md:grid-cols-2 items-center lg:gap-20 mx-auto py-32 px-5 lg:px-20'>
                        <Zoom left><img src='https://labartisan.net/demo/kidsacademy/images/about/about-3.png' alt='' className='w-full mb-20'/></Zoom>
                        <Zoom right>
                              <div className=''>
                                             <h1 className='text-[40px] font-extrabold mb-5 text-link-colol-4'>About School Website</h1>
                                             <p className='text-[16px] pb-16 font-semibold text-text-color'>Enthusiasticay diseminate competitive oportunitie through transparent an actions Compelngly seize viral schemas through intermandated creative is adiea sources. Enthusiasticay plagiarize clientcentered relationship for the covalent experiences. Distinctively architect 24/365 service for wireless is ebusiness ahosfluorescently Efficiently comunicate coperative methods of empowerment awesome athrough Monotonectaly myocardinate cross and functional niche markets and an functional.</p>
                                             <div className='flex items-center gap-5'>
                                                  <Link to='/about' className='bg-link-colol-4 px-8 py-4 text-white font-bold'>Read More</Link>
                                                  <Link className='bg-link-colol-2 px-8 py-4 text-white font-bold'>Buy Now</Link>
                                             </div>
                              </div>
                        </Zoom>
               </section>

                <Facility />

               <Classes />

               <Teachers />

              <Gallery />

              <Review />   

              <Event />    

              <NewsLetter />
    </div>
  )
}

export default Home