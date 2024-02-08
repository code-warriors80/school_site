import React, {useState} from 'react'
import menu from '../icon/icons8-menu-94.png'
import close from '../icon/icons8-close-94.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

// HEADER
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";


const Links = [
  {
    title: 'Home',
    href: '/',
    class: 'font-bold text-link-colol-1'
  },
  {
    title: 'About',
    href: '/about',
    class: 'font-bold text-link-colol-2'
  },
  {
    title: 'Classes',
    href: '/classes',
    class: 'font-bold text-link-colol-4'
  },
  {
    title: 'Gallery',
    href: '/gallery',
    class: 'font-bold text-link-colol-5'
  },
  {
    title: 'contact',
    href: '/contact',
    class: 'font-bold text-link-colol-3'
  },
]

const Header = () => {
    const [model, setModel] = useState(false);

    const openModal = () => {
      {model === false ? setModel(true) : setModel(false)}
    }
  return (
    <div>
      <div className='bg-transparent fixed z-50 w-full'>
        <div className='lg:w-[75%] hidden lg:flex items-center justify-between mx-auto py-5'>
          <div className='flex items-center justify-between gap-5 lg:gap-10'>
            <div className='text-[13px] flex items-center'>Phone:<p className='ml-3'>8801 234 567 890</p></div>
            <div className='text-[13px] flex items-center'>Opening Time:<p className='ml-3'>9:30am-5:30pm</p></div>
            <div className='text-[13px] flex items-center'>Address:<p className='ml-3'>Labartisan 1205 Newyork</p></div>
          </div>
          <div className='flex gap-10'>
              <Link className='bg-link-colol-1 p-3 rounded-full text-white'><BsFacebook /></Link>
              <Link className='bg-link-colol-2 p-3 rounded-full text-white'><BsInstagram /></Link>
              <Link className='bg-link-colol-3 p-3 rounded-full text-white'><BsTwitter /></Link>
              <Link className='bg-link-colol-4 p-3 rounded-full text-white'><BsLinkedin /></Link>
          </div>
        </div>

        <div className='relative'>
          <div className='bg-white'>
              <div className='flex items-center justify-between mx-auto py-5 lg:w-[75%] px-10'>
                <div className='flex items-center gap-5'><img src='https://img.freepik.com/free-vector/hand-drawn-book-elementary-school-logo_23-2149689287.jpg?size=626&ext=jpg&ga=GA1.1.559055985.1679753795&semt=ais' alt='' className='w-[40px] lg:w-[60px]'/> <h2 className='text-[17px] font-extrabold lg:block hidden'>School Website</h2></div>
                <div>
                  <ul className='hidden md:flex items-center gap-10'>
                      {Links.map((links, index) => (
                        <li key={index}><Link to={links.href} className={`${links.class}`}>{links.title}</Link></li>
                      ))}
                  </ul>
                  {!model ? <img src={menu} alt='' className='w-7 md:hidden' onClick={openModal}/>: <img src={close} alt='' className='w-7 md:hidden' onClick={openModal}/>}
                  
                </div>
              </div>
          </div>
          <ul className={`md:hidden  absolute w-full bg-white left-0 top-22 ${!model ? 'invisible' : 'visible'}`}>
                    {Links.map((links, index) => (
                      <li key={index} className='border-b-[1px] px-10 py-3'><Link to={links.href} className={`${links.class}`} onClick={() => setModel(false)}>{links.title}</Link></li>
                    ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header