import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader from '../componenets/Loader';
import Fox from '../models/Fox';
import Alert from '../componenets/Alert';
import useAlert from '../hooks/useAlert';
import Footer from '../componenets/Footer';


const Contact = () => {
  const formref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const {alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => { 
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Smita Mandhane",
        from_email: form.email,
        to_email: 'smita.mandhane@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setIsLoading(false);
      showAlert({ show: true, text: 'Message sent successfully!', type: 'success'})

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle')
        setForm({ name: '', email: '', message: '' });
      },[3000])

    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle')
      console.log(error);
      showAlert({ show: true, text: 'I didnt recieve your message', type: 'danger'})
    })
  };
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-max">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get In Touch</h1>
        <form 
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Smita Mandhane"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="smita.mandhane@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let Me Know How Can I Help You."
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button type="submit" 
          className="btn" 
          onFocus={handleFocus} 
          onBlur={handleBlur}
          disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message' }
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auo md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
          >
            <directionalLight intensity={2.5} position={[0,0,1]}/>
            <ambientLight intensity={0.5}/>
            <Suspense fallback={<Loader/>}>
              <Fox 
                currentAnimation={currentAnimation}
                position={[0.5,0.35,0]}
                rotation={[12.6,-0.6,0]}
                scale={[0.5,0.5,0.5]}
              />
            </Suspense>
            
        </Canvas>
        <Footer />
      </div>
      
    </section>
    
  )
}

export default Contact
