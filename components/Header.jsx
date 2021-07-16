import { XIcon, MenuIcon } from '@heroicons/react/outline'
import React, {useState} from 'react';
import { Transition } from "@headlessui/react";
import TypeWriter from 'react-typewriter';
import { ChevronDownIcon } from "@heroicons/react/solid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = ({ data }) => {

    if (data) {
        var name = data.name;
        var occupation = data.occupation;
        var description = data.description;
        var city = data.address.city;
    }
    

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="bg-bgh h-screen bg-cover">
            <div className=" h-screen w-screen">
                <div className="md:hidden fixed z-50">
                    <button onClick={() => setIsOpen(!isOpen)} className="absolute p-2 bg-purple-600 top-3 rounded-tr-2xl rounded-br-2xl">                           
                        <MenuIcon className="text-white" width="30" height="30"/>
                    </button>
                    
                    
                    <Transition show={isOpen}>
                        <Transition.Child
                        enter="transition ease-in duration-300 transform origin-top-left"
                        enterFrom="opacity-0 scale-0"
                        enterTo="opacity-100 scale-100"
                        // leave="transition ease-in duration-2000 transform origin-top-left"
                        // leaveFrom="opacity-75 scale-100"
                        // leaveTo="opacity-0 scale-0"
                        >
                            <div className="absolute z-30 bg-black bg-trns w-screen h-screen flex flex-col space-y-20 text-white" >
                                <Transition.Child
                                    enter="transition ease-in duration-500 transform origin-top-left"
                                    enterFrom="opacity-0 scale-0"
                                    enterTo="opacity-100 scale-100"
                                    leave="transition ease-in duration-1000 transform origin-top-left"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-0"
                                    className="absolute w-screen bg-purple-600 h-4/6 rounded-br-mc z-40"
                                >
                                    <div className="h-full">
                                        <Transition.Child
                                            enter="transition ease-in duration-700 transform origin-top-left"
                                            enterFrom="opacity-0 scale-0"
                                            enterTo="opacity-100 scale-100"
                                            leave="transition ease-in duration-1000 transform origin-top-left"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-0"
                                            className="absolute w-screen bg-blue-600 h-c rounded-br-mc2 z-50"
                                        >
                                            <div className="h-c">
                                                <div className="flex w-full justify-between z-60">
                                                    <div className="flex flex-col pt-10 pl-16 space-y-8 font-OpenSansBold"> 
                                                        <a href="#" onClick={() => setIsOpen(!isOpen)} >HOME</a>
                                                        <a href="#about" onClick={() => setIsOpen(!isOpen)} >ABOUT</a>
                                                        <a href="#resume" onClick={() => setIsOpen(!isOpen)} >RESUME</a>
                                                        <a href="#portfolio" onClick={() => setIsOpen(!isOpen)} >PORTFOLIO</a>
                                                        <a href="#testimonials" onClick={() => setIsOpen(!isOpen)} >TESTIMONIAL</a>
                                                        <a href="#contact" onClick={() => setIsOpen(!isOpen)} >CONTACT</a>
                                                    </div>

                                                    <Transition.Child
                                                        enter="transition ease-in duration-1000 transform origin-right"
                                                        enterFrom="opacity-0 translate-x-full"
                                                        enterTo="opacity-100 translate-x-0"
                                                        leave="transition ease-out duration-100 transform origin-right"
                                                        leaveFrom="translate-x-0"
                                                        leaveTo="translate-x-full"
                                                        className="absolute bg-red-800 h-20 w-20 mt-8 left-3/4 rounded-full"
                                                    >
                                                        <div className=" bg-red-800">

                                                        </div>
                                                    </Transition.Child>
                                                </div>
                                            </div>
                                        </Transition.Child>
                                    </div>
                                </Transition.Child>
                                
                                <div className="absolute bottom-10 left-1/3 flex justify-center ml-8 text-white z-44 origin-bottom-left" >
                                <Transition.Child
                                    enter="transition ease-in-out duration-1000 transform origin-bottom"
                                    enterFrom=" translate-y-full"
                                    enterTo=" -translate-y-2/4"
                                    leave="transition ease-out duration-100 transform origin-bottom"
                                    leaveFrom="-translate-y-3/4"
                                    leaveTo="translate-y-full"
                                >
                                        <div onClick={handleClick} className="bg-green-900 rounded-full p-2  origin-bottom">
                                            <XIcon className="text-blue-400 origin-bottom" width="40" height="40"/>
                                        </div>
                                </Transition.Child>
                                    </div>
                            </div>
                        </Transition.Child>     
                    </Transition>  
                </div>


                <div className="hidden md:flex md:w-auto  md:text-bold  md:mt-0  md:border-none justify-center items-center flex-grow cursor-pointer font-opensansn tracking-widest font-OpenSansBold text-sm">  
                    <a href="#" className="block md:inline-block text-white hover:text-oceanGreen px-3 py-3 border-b-2 border-blue-900 md:border-none">HOME</a>
                    <a href="#about" className="block md:inline-block text-white hover:text-oceanGreen px-3 py-3 border-b-2 border-blue-900 md:border-none">ABOUT</a>
                    <a href="#resume" className="block md:inline-block text-white hover:text-oceanGreen px-3 py-3 border-b-2 border-blue-900 md:border-none">RESUME</a>
                    <a href="#portfolio" className="block md:inline-block text-white hover:text-oceanGreen px-3 py-3 border-b-2 border-blue-900 md:border-none">PORTFOLIO</a>
                    <a href="#testimonials" className="block md:inline-block text-white hover:text-oceanGreen px-3 py-3 border-b-2 border-blue-900 md:border-none">TESTIMONIALS</a>
                    <a href="#contact" className="block md:inline-block text-white hover:text-oceanGreen px-3 py-3 border-b-2 border-blue-900 md:border-none">CONTACT</a>
                </div>


                <div className="pt-40 flex flex-col justify-center items-center h-4/6 text-white w-screen">
                    <div className="flex flex-col justify-center items-center">
                        <h1  className="flex items-center text-4xl md:text-6xl lg:text-7xl p-3 font-OpenSansBold tracking-wide">
                            <TypeWriter typing={1} className="flex text-center">{name ? `I'm ${name}.` : null}</TypeWriter >
                        </h1>
                        <h3 className="mt-5 w-9/12 text-center items-center text-textLight font-librebaskervilleRegular">
                            Based in {city}. <span className="font-OpenSansBold text-white">{occupation}</span>. &nbsp; {description}.
                        </h3>
                        <hr />
                        <div className="w-6/12 md:w-4/12 mt-7 grid grid-flow-col items-center p-3">
                            <a href={`https://web.facebook.com/Hadedaryor/`}>
                                <FontAwesomeIcon icon={faFacebookF} className="h-5 md:h-8 transition duration-500 ease-in-out hover:text-oceanGreen" />
                            </a>
                            <a href={`https://twitter.com/ImDahDayo`}>
                                <FontAwesomeIcon icon={faTwitter} className="h-5 md:h-8 transition duration-500 ease-in-out hover:text-oceanGreen"/>
                            </a>
                            <a href={`https://www.linkedin.com/in/showande-adedayo-789a42195/`}>
                                <FontAwesomeIcon icon={faLinkedin} className="h-5 md:h-8 transition duration-500 ease-in-out hover:text-oceanGreen"/>
                            </a>
                            <a href={`https://www.instagram.com/lord_qaisi/`}>
                                <FontAwesomeIcon icon={faInstagram} className="h-5 md:h-8 transition duration-500 ease-in-out hover:text-oceanGreen"/>
                            </a>
                            <a href={`https://github.com/IsiaqAdedayo`}>
                                <FontAwesomeIcon icon={faGithub} className="h-5 md:h-8 transition duration-500 ease-in-out hover:text-oceanGreen"/>
                            </a> 
                        </div>
                        <div className="hidden md:block absolute bottom-6 w-14 h-14 text-lg border-none bg-white transition-all duration-200 ease-in-out rounded-full text-gray-800 hover:bg-oceanGreen">
                            <a href="#about" className="flex justify-center items-center text-center w-full h-full">
                                <ChevronDownIcon className="w-10 h-10"/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
