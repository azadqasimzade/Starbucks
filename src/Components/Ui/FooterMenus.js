import React, { useEffect, useState } from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import {Collapse} from 'react-collapse';
import { useWindowWidth } from '@react-hook/window-size';

const FooterMenus = ({title,links}) => {
    const[isOpen, setIsOpen] = useState(true);
    const windowWidth = useWindowWidth();

    const toggleCollapse = () =>{
        if(windowWidth <= 1024){
            setIsOpen(!isOpen)
        }
    }

    useEffect(() =>{
        if(isOpen && windowWidth <=1024){
            setIsOpen(false)
        }
        if(!isOpen && windowWidth > 1024){
            setIsOpen(true)
        }
    },[windowWidth])

  return (
    <>
        <nav className='flex flex-col gap-y-6 lg:w-44'>
                <h3 className='text-xl tracking-wide font-semibold flex items-center justify-between' onClick={toggleCollapse}>
                    {title}
                {
                    windowWidth <=1024 &&
                    <button className='w-6 h-6 grid place-items-center'>
                        <span className={`transition-all transform ${isOpen ? 'rotate-180 duration-300' : ''} `}>
                            <IoIosArrowDown size={25}/>
                        </span>
                    </button>
                }
                </h3>
            <Collapse isOpened={isOpen}>
                <ul className='flex flex-col gap-y-5'>
                    {
                        links.map((link,index) =>(
                            <li key={index}>
                                <a href={link.url}>{link.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </Collapse>
        </nav>
    </>
  )
}

export default FooterMenus