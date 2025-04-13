import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold"> Smita Mandhane</span>👋
            <br />
            Passionate about data and technology
        </h1>
    ),
    2: (
        <InfoBox
            text="A curious mind with a clear goal — to grow alongside the best people and build impactful solutions in different organizations"
            link="/about"
            btnText="Know More"
        />
    ),
    3: (
        <InfoBox
            text="Projects A Way To Know Your Potential. Want To See My Impact"
            link="/projects"
            btnText="Visit My Projects"
        />
    ),
    4: (
        <InfoBox
            text="Need Any Help Or Looking For Any Collab, Then You Are Just Few Clicks Away."
            link="/contact"
            btnText="Let's Connect"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo