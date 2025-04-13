import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">
            Looking For a project in mind? <br className="sm: block hidden"/>
            Let's collab and make something better..
        </p>
        <Link to="/contact" className="btn">
            Connect
        </Link>
    </section>
  )
}

export default CTA