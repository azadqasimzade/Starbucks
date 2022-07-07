import React from 'react'
import {BsSpotify,BsInstagram,BsYoutube,BsTwitter} from 'react-icons/bs'
import {FaFacebookF,FaPinterestP} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <div className='border-t-2'>
            <div className='container mx-auto px-12 py-6'>
                <div className='flex gap-x-16 pb-10'>
                    <div className='w-36'>
                        <h3 className='font-medium text-xl mb-8'>About Us</h3>
                        <nav>
                            <ul className='flex flex-col gap-y-6'>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Our Company</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Our Coffe</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Stories and News</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Starbucks Archive</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Investor Relations</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Customer Service</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='w-44'>
                        <h3 className='font-medium text-xl mb-8'>Careers</h3>
                        <nav>
                            <ul className='flex flex-col gap-y-6'>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Culture and Values</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Inclusion, Diversity, and Equity</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Collage Achievement Plan</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Alumni Community</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">U.S. Careers</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">International Careers</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='w-44'>
                        <h3 className='font-medium text-xl mb-8'>Social Impact</h3>
                        <nav>
                            <ul className='flex flex-col gap-y-6'>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">People</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Planet</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Environmental and Social Impact Reporting</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='w-52'>
                        <h3 className='font-medium text-xl mb-8'>For Business Partners</h3>
                        <nav>
                            <ul className='flex flex-col gap-y-6'>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Landlord Support Center</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Suppliers</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Corporate Gift Card Sales</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Office and Foodservice Coffee</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='w-44'>
                        <h3 className='font-medium text-xl mb-8'>Order and Pickup</h3>
                        <nav>
                            <ul className='flex flex-col gap-y-6'>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Order on the App</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Order on the Web</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Delivery</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Order and Pickup Options</a>
                                </li>
                                <li className='text-gray-500 hover:text-black'>
                                    <a href="/">Explore and Find Coffe for Home</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
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
                <div className='flex items-center gap-x-6 py-8'>
                    <div>
                        <a href="/" className='mr-5 hover:underline'>Privacy Policy</a>
                        <span>|</span>
                    </div>
                    <div>
                        <a href="/" className='mr-5 hover:underline'>Terms of Use</a>
                        <span>|</span>
                    </div>
                    <div>
                        <a href="/" className='mr-5 hover:underline'>CA Supply Chain Act</a>
                        <span>|</span>
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