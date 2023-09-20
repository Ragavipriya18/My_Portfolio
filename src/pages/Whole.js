import React,{useState} from "react";
import '../styles/Whole.css';
import {Link} from 'react-router-dom';
import {FaGithub, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
//import { NavLink } from 'react-router-dom';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import {  DiReact, DiMysql } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaJava,FaDatabase } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';


function Whole(){

   
    const [activeLink, setActiveLink] = useState('home'); // Initialize with the 'home' link as active

    // Function to handle link click and update the active link
    const handleLinkClick = (link) => {
      setActiveLink(link);
    };

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!validatePhone(phone)) {
      alert('Please enter a valid phone number.');
      return;
    }
    // Send the form data to your backend or perform any other actions
    window.alert("Form Submitted!!");
    console.log('Form submitted:', { name, email, phone, message });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
    return phoneRegex.test(phone);
  };


  const ScrollTo = ({ to, children }) => {
    return (
      <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        offset={-100} // Adjust this offset as needed to account for your fixed navbar height
        duration={400}
        className="scroll-link"
      >
        {children}
      </ScrollLink>



    );
    }

    return(
<div>
   {/* Navbar section */}
        <section id="navbar">
            <div className="main_navbar">
                <div className="name_nav">
                    <img src="./images/dp.png" alt="dp" width="80px" height="80px"></img>
                </div>
            <div className="list_nav">
                <ul>
                <li>
                <ScrollTo
                  to="home"
                  onClick={() => handleLinkClick('home')}
                  className={activeLink === 'home' ? 'active' : ''}
                >
                  HOME
                </ScrollTo>
              </li>
              <li>
                <ScrollTo
                  to="about"
                  onClick={() => handleLinkClick('about')}
                  className={activeLink === 'about' ? 'active' : ''}
                >
                  ABOUT
                </ScrollTo>
              </li>
              <li>
                <ScrollTo
                  to="skill"
                  onClick={() => handleLinkClick('skill')}
                  className={activeLink === 'skill' ? 'active' : ''}
                >
                  SKILLS
                </ScrollTo>
              </li>
              <li>
                <ScrollTo
                  to="project"
                  onClick={() => handleLinkClick('project')}
                  className={activeLink === 'project' ? 'active' : ''}
                >
                  PROJECTS
                </ScrollTo>
              </li>
              <li>
                <ScrollTo
                  to="contact"
                  onClick={() => handleLinkClick('contact')}
                  className={activeLink === 'contact' ? 'active' : ''}
                >
                  CONTACT
                </ScrollTo>
              </li>    
                    {/*<li><NavLink to="/Contact" activeClassName="active" className="l5">CONTACT</NavLink></li>*/}
                </ul>
            </div>
            </div>
        </section>

        {/*Home Section*/}

        <section id="home">
        <div className="main_home">
            <div className="home1">
                <h1 id="text1">Hello!</h1>
               <h1 id="text2">I'm <span>Ragavi</span></h1>
               <p id="text3"> I'm a Front End Developer with a passion for creating interactive, engaging and responsive websites. I am a highly skilled and passionate front-end developer in building dynamic and responsive web applications. With a strong foundation in HTML, CSS, JavaScript and ReactJS. I am dedicated to delivering excellence in every project and constantly strive to enhance my skills by learning best practices.</p>
               
                
            </div>
            <div className="home2">
            <img src="./images/profile.jpg" alt="" width="310px" height="330px"></img>
            </div>
            
           
        
        </div>
        <br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </section>

        {/*About Section*/}
        <br></br>
        <section id="about">
        <div className="main_about">
                <h1>ABOUT MYSELF</h1>
                <div className="underline">

                </div>
                
                <div className="Abt">
                <div className="about1">
                    <p>Hello again! Myself Ragavi Muthu Thangam R. Currently I'm pursuing <span>Bachelor's of Engineering in Computer Science </span>from Francis Xavier Engineering College, Tirunelveli. I love to code and develop interactive websites.
                       
                    </p>
                    <div className="resume">
                    <Link to="./images/Resume.pdf">CLICK HERE </Link><span id="s1">TO VIEW MY RESUME</span>
                    </div>
                    <br>
                    </br>
                   <div id="icons">
                    <Link to="https://github.com/Ragavipriya18/"><FaGithub id="icon1" size="2rem"/></Link>

                    <Link to="https://www.linkedin.com/in/ragavi-r-2a2a42243/"><FaLinkedin id="icon2" size="2rem"/></Link>

                    <Link to="https://instagram.com/ragavi__priya?igshid=MzNlNGNkZWQ4Mg=="><FaInstagramSquare id="icon3" size="2rem" /></Link>

                    <Link to="https://mail.google.com/mail"><SiGmail id="icon4" size="2rem"/></Link>
                   </div>
                  

                </div>
                
                <div className="about2">
                    <img src="./images/about.jpg" 
                    alt="" width="310px" height="330px"></img>
                </div>
            </div>
            </div>
            <br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </section>

          {/*Skills Section*/}

        <section id="skill">
        <div className='main_skills'>
      <h1>MY SKILLS</h1>
      <div className='underline3'>
        {/*underline*/}
      </div>

     <div className='section'>
    <div className='sec1'>
      <div className="skill-box">
                <span className="title"><AiFillHtml5 size="5rem"/></span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">95%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title"><BiLogoCss3 size="5rem"></BiLogoCss3></span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title"><DiJavascript size="5rem"></DiJavascript></span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title"><DiReact size="5rem"></DiReact></span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tooltip">40%</span>
                    </span>
                </div>
            </div>

</div>


<div className='sec2'>
            <div className="skill-box">
                <span className="title"><FaPython size="5rem"></FaPython></span>
                <div className="skill-bar">
                    <span className="skill-per python">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title"><FaJava size="5rem"></FaJava></span>
                <div className="skill-bar">
                    <span className="skill-per java">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
              </div>

                <div className="skill-box">
                <span className="title"><DiMysql size="5rem"></DiMysql></span>
                <div className="skill-bar">
                    <span className="skill-per mysql">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
                </div>

                <div className="skill-box">
                <span className="title"><FaDatabase size="5rem"></FaDatabase></span>
                <div className="skill-bar">
                    <span className="skill-per dbms">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
                </div>
            </div>
        </div>
    </div>

    </section>

                {/*Projects Section*/}
    <section id="project">
    <div className='main_projects'>
            <h1>PROJECTS</h1>
            <div className='underline2'>
            </div>
            <div className='projects-row1'>
                <Link to="./Project1" id="pro1"  ><div className='project1'>
                    <img src='./images/project1.jpg' alt='' width="350px" height="270px"></img>
                    <h4>Image Color Detection Using PYTHON</h4>
                </div></Link>
                <Link to="./Project2" id="pro2"><div className='project2'>
                <img src='./images/project2.jpg' alt='' width="350px" height="270px"></img>
                <h4>Agricultural Website Using REACTJS & CSS</h4>
                </div></Link>
                <Link to="./Project3"id="pro3"><div className='project3'>
                <img src='./images/project3.jpg' alt='' width="350px" height="270px"></img>
                <h4>Portfolio Website Using REACTJS & CSS</h4>
                </div></Link>
            </div>
            <div className='projects-row2'>
            <Link to="./Project4" id="pro4"  ><div className='project4'>
                    <img src='./images/project4.jpg' alt='' width="350px" height="270px"></img>
                    <h4>Calculator Using HTML, CSS & JAVASCRIPT</h4>
                </div></Link>
                <Link to="./Project5" id="pro5"  ><div className='project5'>
                    <img src='./images/project5.jpg' alt='' width="350px" height="270px"></img>
                    <h4>Cloned Website of Digisailor Company Using REACTJS & CSS</h4>
                </div></Link>
            
            
            </div>
        </div>
    </section>


    {/*Contact Section*/}

    <section id="contact">
    <div className="main_contact">

<div className='form'>
<h1>CONTACT</h1>
<div className='underline1'>

</div>
<div className="contact1">
  <h2>Let's Connect by using the below Contact Form</h2>
</div>
</div>
<br></br>

<div className='form1'>
<div className='form2'>
  <form onSubmit={handleSubmit}>
    <input
      id="in1"
      type="text"
      placeholder="Your Name"
      value={name}
      onChange={handleNameChange}
    />
    <br></br>
    <br></br>
    <br></br>
    <input
      id="in2"
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={handleEmailChange}
    />
    <br></br>
    <br></br>
    <br></br>
    <input
      id="in3"
      type="tel"
      placeholder="Phone Number"
      value={phone}
      onChange={handlePhoneChange}
    />
    <br></br>
    <br></br>
    <br></br>
    <textarea
      id="in4"
      rows="6"
      cols="10"
      placeholder="Message[Optional]"
      value={message}
      onChange={handleMessageChange}
    ></textarea>
    <br></br>
    <br></br>
    <br></br>
    
    <button id="btn" type="submit">
      Send Message
    </button>
    
  </form>
</div>

<div className='map'>
        <div
        style={{maxWidth:'100%',overflow:'hidden',color:'red',width:'370px',height:'370px'}}>
                  <div id="embedmap-canvas" style={{height:'100%',width:'100%',maxWidth:'100%'}}>
                      <iframe style={{height:'100%',width:'100%',border:'0' }}frameborder="0" title="maps"src="  https://www.google.com/maps/embed/v1/place?q=Thangavel+Nadar+Compound,+Sivaloganathar+Street,+Palayamkottai,+Tirunelveli,+Tamil+Nadu,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                      </iframe>
                  </div>
                </div>
                </div>
                </div>
                </div>
</section>

    {/* Footer section */}

    <section id="footer">
    <div>
        <div className="main_footer">
            <div className="col1">
                <h3>About</h3>
                <p>As a front-end developer, I specialize in creating engaging and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I bring web designs to life and ensure seamless user experiences across various devices and browsers.</p>

                <div className="footicons">

                    <Link to="https://github.com/Ragavipriya18/"><FaGithub id="f1" size="2rem" color="black"/></Link>

                    <Link to="https://www.linkedin.com/in/ragavi-r-2a2a42243/"><FaLinkedin id="f2" size="2rem" color="black"/></Link>

                    <Link to="https://instagram.com/ragavi__priya?igshid=MzNlNGNkZWQ4Mg=="><FaInstagramSquare id="f3" size="2rem"  color="black"/></Link>

                    <Link to="https://mail.google.com/mail"><SiGmail id="f4" size="2rem" color="black"/></Link>

                  
                </div>
                
            </div>
            <div className="col2">
                <h3>Links</h3>

                <Link to="/"><li>Home</li></Link>
                <Link to="/About"><li>About</li></Link>
                <Link to="/Skills"> <li>Skills</li></Link>
               <Link to="/Project">  <li>Projects</li></Link>
              <Link to="/Contact"><li>Contact</li></Link>
                
                
            </div>
            <div className="col3">
                <h3>Connect</h3>
                    <Link to="https://www.linkedin.com/in/ragavi-r-2a2a42243/"> <li>Linkedin</li></Link>
                    <Link to="https://instagram.com/ragavi__priya?igshid=MzNlNGNkZWQ4Mg=="><li>Instagram</li></Link>
                   <Link to="https://github.com/Ragavipriya18/"><li>Github</li></Link>
                    <Link to="https://mail.google.com/mail"> <li>Gmail</li></Link>
                    
                   
               
            </div>
            <div className="col4">
                <h3>Have A Question?</h3>
              
              
                <Link to="https://www.googlemaps.com/"><li>S4, Samathanapuram, Palayamkottai, Tirunelveli</li></Link>
                <Link to="https://www.whatsapp.com"><li>9363389748</li></Link>
                <Link to="https://mail.google.com/mail"><li>ragavipriya2003@gmail.com</li></Link>
                
            </div>
           

        </div>
        </div>
       
    </section>


</div>
    );
}

export default Whole;