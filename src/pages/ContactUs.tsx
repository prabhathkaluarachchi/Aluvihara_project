import React, { useEffect, useRef } from 'react';
import '../styles/ContactPage.css';
import emailjs from 'emailjs-com'; 
import NavBar from '../component/common/NavBar';
import Footer from '../component/common/Footer';
import { IoLocationSharp } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import NavBar1 from '../component/common/NavBar1';
import lineart from '../assets/linearts/lineart.svg'; 
import lineart2 from '../assets/linearts/lineart2.svg';  
import HeroImage from '../assets/images/ContactNav.jpg'

const ContactPage: React.FC = () => {
  //top mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_06p015i',     
        'template_jztofiw',    
        form.current,
        '91q11vFING9sfkqt-'     
      ).then(
        (result:any) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current?.reset(); 
        },
        (error:any) => {
          console.error(error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
    }
  };

  return (
    <>
      <div className="contact-page">
        {/* Hero Section */}
              <section className="relative h-[50dvh] min-h-[500px] md:min-h-[600px] text-white flex items-center overflow-hidden">
                <NavBar1 page="contact" />
                <img
                  src={HeroImage}
                  alt="Aluvihara Rock Temple"
                  className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                <div className="w-full pr-4 relative z-10">
                  <div className="lg:w-[800px] md:max-w-[90%] md:mr-auto">
                    <div className="bg-black/70 p-6 rounded-md md:rounded-r-[10px]">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-2 pl-0 md:pl-14 font-roboto leading-[1.5] md:leading-[1.5] lg:leading-[1.3] text-center md:text-left">
                        <span className="text-primary block">Reach</span>
                        <span className="text-white">Out To Us</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </section>

        <img className='absolute lg:top-150 w-40' src={lineart} alt="lineart" />

        {/* Contact Form Section */}
        <div className="contact-form-section">
          <div className="form-container">
            <div className="w-full lg:w-3/5">
              <h2 className='flex flex-col text-ternary/50 text-center lg:text-left text-base'>
                If you have questions,
                <span className='text-[46px] text-black'>Feel Free To Contact Us</span>
              </h2>
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input type="text" name="user_name" placeholder="Your Name*" required />
                <input type="text" name="subject" placeholder="Subject*" required />
                <input type="email" name="user_email" placeholder="E-mail*" required />
                <textarea name="message" placeholder="Message*" required></textarea>
                <button type="submit" className="border-2 border-primary text-secondary bg-transparent">Send Your Message</button>
              </form>
            </div>
            <div className="contact-info">
              <div>
                <div className='icon-border'>
                  <IoLocationSharp className='icon' />
                </div>
                <h3>LOCATION</h3>
                <p>Aluvihara Rock Cave Temple,<br />Thotagamuwa, Matale, Sri Lanka</p>
                <hr />
              </div>
              <div style={{ marginTop: "10px" }}>
                <div className='icon-border'>
                  <FiPhone className='icon' />
                </div>
                <h3>CONTACT US</h3>
                <p>Mobile: +94-66-222-5233</p>
                <hr />
              </div>
              <div style={{ marginTop: "10px" }}>
                <div className='icon-border'>
                  <HiOutlineMail className='icon' />
                </div>
                <h3>EMAIL</h3>
                <p>Aluviharacave.lk@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <img className='absolute top-340 lg:block right-0  lg:top-240 w-40 lg:right-0' src={lineart2} alt="lineart2" />
      </div>

      {/* footer section */}
      <div className="mt-30">
        <footer className="bg-[#222222] py-10">
          <Footer />
        </footer>
        {/* copyrights */}
        <div
          className="bg-[#1E1E1E] text-center py-3 text-[8px] md:text-xs text-ternary">
          <p>All rights reserved | Powered by All In One Holdings</p>
        </div>
      </div>
       
    </>
  );
};

export default ContactPage;
