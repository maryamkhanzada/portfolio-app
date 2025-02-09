import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Skills } from '@/components/Skills';

const About = () => {
  return (
    <div>
      <h2 className='mt-24 text-center text-4xl font-bold underline text-cyan-600'>About Me</h2>

      < div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/images/img31.webp"
            width={400}
            height={300}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium hover:text-white text-cyan-600">
              Maryam khan Web developer
            </h1>
            <p className="mb-8 leading-relaxed text-cyan-200" >
            &ldquo;I have a strong interest in IT and possess skills in HTML, CSS, and JavaScript.
              I enjoy creating web pages and have a good understanding of front-end development.
              My knowledge in these languages allows me to design and structure interactive and
              visually appealing websites.&ldquo;
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-[30px] text-blue-400 border-0 py-2 px-6 rounded text-lg ">
                <FaLinkedin />
              </button>
              <button className="inline-flex text-[30px] text-white-400 border-0 py-2 px-6 rounded text-lg ">
                <FaGithub />
              </button>
              <button className="inline-flex text-[30px] text-blue-500 border-0 py-2 px-6 rounded text-lg ">
                <FaFacebook />
              </button>
              <button className="inline-flex text-[30px] text-orange-400 border-0 py-2 px-6 rounded text-lg ">
                <FaInstagram />
              </button>
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </div>
  )
}

export default About;


