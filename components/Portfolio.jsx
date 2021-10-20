import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLink } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"

const Portfolio = ({ data }) => {

    // buttonRight.onclick = function () {
    //     document.getElementById('container').scrollLeft += 20;
    //   };
    //   buttonLeft.onclick = function () {
    //     document.getElementById('container').scrollLeft -= 20;
    //   };
  

    if (data) {
        var projectsImg = data.projects.map(function (projects) {
          var projectImage =  projects.image;
          return (
            <div className="h-28 md:mb-11 w-36 md:h-48 md:w-64 cursor-pointer transition duration-100 transform group hover:scale-125" key={projects.title}>            
                <a href={projects.url}>
                    <Image 
                        src={projectImage}
                        layout="fill"
                        alt={projects.title}
                    />
                    <div className="absolute inset-0 bg-black bg-trns h-full w-full opacity-0 group-hover:opacity-100 text-center text-white flex justify-center align-center flex-col z-50">
                        <h1 className="whitespace-nowrap">{projects.title}</h1>
                        <FontAwesomeIcon icon={faLink} className="w-6 h-6 ml-28 mt-5"/>
                    </div>
                </a>
            </div>
          );
        });
      }

    return (
        <div className="h-2/6 bg-coffee pt-28  md:p-28 flex flex-col items-center space-y-12 text-white pb-32" id="portfolio">
            <h1 className="text-sm tracking-widest md:text-2xl font-semibold sm:text-center font-OpenSansBold">CHECK OUT SOME OF MY PROJECTS</h1>
            <div className="relative w-screen">
                <div className="px-10 sm:px-24 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide grid grid-flow-col">
                    {/* <div className="h-28 md:mb-11 w-36 md:h-48 md:w-64 cursor-pointer transition duration-100 group transform hover:scale-125">
                        <a href="#">
                            <Image 
                                src="https://mk0pilotjps46rl7iol.kinstacdn.com/wp-content/uploads/2021/06/summit_jumper-light_grey_marle_1738_1180x1770.jpeg"
                                layout="fill"
                            />
                            <div className="absolute inset-0 bg-black bg-trns h-full w-full opacity-0 group-hover:opacity-100 text-center text-white flex justify-center align-center flex-col z-50">
                                <h1 className="tracking-widest">Project Name</h1>
                                <FontAwesomeIcon icon={faLink} className="w-6 h-6 ml-28 mt-5"/>
                            </div>
                        </a>
                    </div> */}

                    {projectsImg}

                    {/* <div className="h-28 md:mb-11 w-36 md:h-48 md:w-64 cursor-pointer transition duration-100 group transform hover:scale-125">
                        <a href="#">
                            <Image 
                                src="https://mk0pilotjps46rl7iol.kinstacdn.com/wp-content/uploads/2021/06/summit_jumper-light_grey_marle_1738_1180x1770.jpeg"
                                layout="fill"
                            />
                            <div className="absolute inset-0 bg-black bg-trns h-full w-full opacity-0 group-hover:opacity-100 text-center text-white flex justify-center align-center flex-col z-50">
                                <h1 className="tracking-widest">Project Name</h1>
                                <FontAwesomeIcon icon={faLink} className="w-6 h-6 ml-28 mt-5"/>
                            </div>
                        </a>
                    </div> */}
                </div>
                <div className="absolute top-0 left-0 bg-gradient-to-r from-[#2B2B2B] h-56 w-2/12" />
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#2B2B2B] h-52 w-1/12" />
            </div>
        </div>
    )
}

export default Portfolio;
