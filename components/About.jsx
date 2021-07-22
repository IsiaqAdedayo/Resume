import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image"

const About = ({ data }) => {
    if (data) {
      var name = data.name;
      var profilepic = data.image;
      var bio = data.bio;
      var city = data.address.city;
      var zip = data.address.zip;
      var phone = data.phone;
      var email = data.email;
      var resumeDownload = data.resumedownload;
    }

    return (
        <div className="py-7 pb-8 md:py-20 lg:p-28 bg-coffee flex justify-center items-center" id="about">
            <div className="container flex w-11/12 max-w-screen-lg justify-around">
                <div className="md:mr-10"> 
                    <div className="hidden md:inline-flex md:h-32 md:w-32 lg:h-40 lg:w-40 rounded-full">
                        <img 
                            src={profilepic}
                            layout="fill"
                            alt={name}
                            className="md:h-32 md:w-32 lg:h-40 lg:w-40 rounded-full"
                        />
                    </div>
                </div>

                <div className="flex flex-col text-gray-50 my-12 md:my-0 space-y-7">
                    <div className="space-y-5">
                        <h1 className="text-2xl font-bold">About Me</h1>
                        <p className="text-xl text-textLight leading-9">{bio}</p>
                    </div>

                    <div className="flex flex-col md:flex-row space-y-9 md:space-x-32">
                        <div className="space-y-3">
                            <h1 className="text-2xl font-bold">Contact Details</h1>
                            <p className="text-textLight leading-8">
                            {name} <br />
                            {city}, {zip} <br />
                            {phone} <br />
                            {email} <br />
                            </p>
                        </div>

                        <a href="#" className="flex justify-center items-center w-auto bg-bgHeader text-white py-3 px-5 cursor-pointer h-auto rounded md:h-16">
                            <FontAwesomeIcon icon={faDownload} className="h-4 w-6"/> &nbsp; &nbsp;
                            <h1>Download Resume</h1>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
