import React, { useEffect, useState } from 'react'
import {BsSpotify,BsInstagram,BsYoutube,BsTwitter} from 'react-icons/bs'
import {FaFacebookF,FaPinterestP} from 'react-icons/fa'
import linksData from '../../Api/links.json'
import { useWindowWidth } from '@react-hook/window-size';
import FooterMenus from '../Ui/FooterMenus';

const Footer = () => {
    const[links, setLinks] = useState([])
    const windowWidth = useWindowWidth();

    useEffect(()=>{
        setLinks(linksData)
    }, [])
    
  return (
    <>
        <div className='border-t-2'>
            <div className='container mx-auto lg:px-12 px-0 py-6'>
                <div className='lg:flex block gap-x-16 pb-10'>
                    {
                        links.map((link,index) =>(
                            <FooterMenus  key={index} {...link}/>
                        ))
                    }
                </div>
                <div className='border-t-2 pt-8'>
                    <nav>
                        <ul className='flex items-center gap-x-4'>
                            <li className='bg-black text-white rounded-full p-2 '>
                                <a href="/"><BsSpotify size={18}/></a>
                            </li>
                            <li className='bg-black text-white rounded-full p-2 '>
                                <a href="/"><FaFacebookF size={18}/></a>
                            </li>
                            <li className='bg-black text-white rounded-full p-2 '>
                                <a href="/"><FaPinterestP size={18}/></a>
                            </li>
                            <li className='bg-black text-white rounded-full p-2 '>
                                <a href="/"><BsInstagram size={18}/></a>
                            </li>
                            <li className='bg-black text-white rounded-full p-2 '>
                                <a href="/"><BsYoutube size={18}/></a>
                            </li>
                            <li className='bg-black text-white rounded-full p-2 '>
                                <a href="/"><BsTwitter size={18}/></a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='flex flex-col lg:flex-row lg:gap-x-6 gap-y-5 py-8'>
                    <div>
                        <a href="/" className='mr-5 hover:underline'>Privacy Policy</a>
                        {
                            windowWidth > 1024 &&
                            <span>|</span>
                        }
                    </div>
                    <div>
                        <a href="/" className='mr-5 hover:underline'>Terms of Use</a>
                        {
                            windowWidth > 1024 &&
                            <span>|</span>
                        }
                    </div>
                    <div>
                        <a href="/" className='mr-5 hover:underline'>CA Supply Chain Act</a>
                        {
                            windowWidth > 1024 &&
                            <span>|</span>
                        }
                    </div>
                    <div>
                        <a href="/" className='mr-5 hover:underline'>Cookie Preferences</a>
                    </div>
                </div>
                <div className='pb-4 text-sm text-gray-500 tracking-wide'>
                    &copy; 2022 Starbucks Coffee Company. All rights reserved.
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer