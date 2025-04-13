import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants'
import CTA from '../componenets/CTA';
import Footer from '../componenets/Footer';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hi, I am <span className="blue-gradient_text font-semibold drop-shadow">Smita Mandhane</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
        A results-driven Business Analyst with nearly a decade of experience transforming raw data into meaningful business strategies. From building robust BI dashboards to leading data-driven initiatives in Fortune 500 companies, I thrive at the intersection of analytics, innovation, and impact. I am currently expanding my skill set in software development — blending my analytical foundation with technologies like React, Power BI, and cloud tools to create smarter, faster, and more interactive business solutions.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          My Skills
        </h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skills) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"></div>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skills.imageUrl}
                  alt={skills.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
          Over the past 9 years, I've grown as a Business Intelligence professional by solving real-world problems with data. My experience spans BI platforms, data modeling, dashboard design, analytics leadership, and stakeholder collaboration — all focused on delivering business value. I am now evolving that journey with a deeper dive into tech, and interactive data storytelling.
         👇 Scroll down to explore my professional milestones and career path.
          </p>
        </div>
        <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={<div className="flex justify-center items-center w-full h-full">
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>}
              iconStyle={{background: experience.iconBg}}
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none',
              }}
            
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p className="text-black-500 font-medium font-base" style={{margin:0}}>
                  {experience.company_name}
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point,index) => (
                  <li key={`experience-point-${index}`}className="text-black-500/50 font-normal pl-1 text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200"/>

      <CTA>
        
      </CTA>
      <Footer />
    </section>
  )
}

export default About