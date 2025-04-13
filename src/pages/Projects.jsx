import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'
import CTA from '../componenets/CTA'
import Footer from '../componenets/Footer';

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My<span className="blue-gradient_text font-semibold drop-shadow"> Projects</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
        I am deeply passionate about my work and continuously strive to grow through hands-on experience.
        The three projects showcased below have each played a valuable role in my learning journey — helping me explore new technologies, enhance my strategic thinking and strengthen my ability to design complex data-driven solutions with a digital-first mindset.
        I truly appreciate your time in reviewing them and I am always open to feedback or conversations that encourage mutual learning and growth.
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img 
                src = {project.iconUrl}
                alt = "Project Icon"
                className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500 ">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Github Link

                </Link>
                <img 
                src = {arrow}
                alt = "arrow"
                className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200"/>

      <CTA />
      <Footer />
      </section>
  )
}

export default Projects