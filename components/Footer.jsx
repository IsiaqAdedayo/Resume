import { ChevronUpIcon } from "@heroicons/react/solid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, animateScroll as scroll } from "react-scroll";

import { faFacebookF, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="bg-coffee text-white relative text-center p-12 flex align-center justify-center">
            <div className="absolute -top-6 w-14 h-14 text-lg border-none bg-coffeeLight2 transition-all duration-200 ease-in-out rounded-full text-white cursor-pointer">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1500}
                    className="flex justify-center items-center text-center w-full h-full"
                >
                    <ChevronUpIcon className="w-10 h-10 font-extrabold"/>
                </Link>
            </div>
            
            <div className="w-7/12 md:w-3/12">
                <h1>&copy; 2021</h1>
                <div className="w-full grid grid-flow-col items-center pt-3 ml-2 md:ml-0">
                    <a href={`https://web.facebook.com/Hadedaryor/`}>
                        <FontAwesomeIcon icon={faFacebookF} className="h-5 md:h-7 transition duration-500 ease-in-out hover:text-oceanGreen" />
                    </a>
                    <a href={`https://twitter.com/ImDahDayo`}>
                        <FontAwesomeIcon icon={faTwitter} className="h-5 md:h-7 transition duration-500 ease-in-out hover:text-oceanGreen"/>
                    </a>
                    <a href={`https://www.linkedin.com/in/showande-adedayo-789a42195/`}>
                        <FontAwesomeIcon icon={faLinkedin} className="h-5 md:h-7 transition duration-500 ease-in-out hover:text-oceanGreen"/>
                    </a>
                    <a href={`https://www.instagram.com/lord_qaisi/`}>
                        <FontAwesomeIcon icon={faInstagram} className="h-5 md:h-7 transition duration-500 ease-in-out hover:text-oceanGreen"/>
                    </a>
                    <a href={`https://github.com/IsiaqAdedayo`}>
                        <FontAwesomeIcon icon={faGithub} className="h-5 md:h-7 transition duration-500 ease-in-out hover:text-oceanGreen"/>
                    </a> 
                </div>
            </div>
        </div>
    )
}

export default Footer
