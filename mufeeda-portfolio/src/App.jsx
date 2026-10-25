import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
     <div className='hero'>
      <img
  src="/myphoto.jpg"
  alt="Mufeeda Riyas"
  className="profile-photo"
/>
      <h1>Hello Iam <span className='highlight'>Mufeeda Riyas</span></h1>
      <h2>Junior Web Developer</h2>
      <p>
       I am an aspiring Web Developer with practical experience
       in WordPress website editing and content management.
       I have knowledge of HTML, CSS, JavaScript, PHP, and Laravel,
       and I am currently learning React to improve my frontend
       development skills.
      </p>
      <button
  onClick={() => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  }}
>
  Contact Me
</button>

     </div>
     <section className="about">
  <h2>About Me</h2>
  <p>
    I am an aspiring web developer with knowledge of
    PHP, Laravel, HTML, CSS, Bootstrap, React, and WordPress.
    During my internship, I have worked on the Bikeleague
    and Welvetskie websites, gaining practical experience
    in website design and development. I am passionate
    about learning new technologies and building responsive,
    user-friendly websites.
  </p>
  </section>

 <section className="skills">
  <h2>My Skills</h2>

  <div className="skills-container">
    <div className="skill-card">
      <h3>HTML5</h3>
      <p>Website Structure</p>
    </div>

    <div className="skill-card">
      <h3>CSS3</h3>
      <p>Website Styling</p>
    </div>

    <div className="skill-card">
      <h3>JavaScript</h3>
      <p>Interactive Websites</p>
    </div>

    <div className="skill-card">
      <h3>React.js</h3>
      <p>Frontend Development</p>
    </div>

    <div className="skill-card">
      <h3>PHP</h3>
      <p>Backend Development</p>
    </div>

    <div className="skill-card">
      <h3>Laravel</h3>
      <p>PHP Framework</p>
    </div>

    <div className="skill-card">
      <h3>Bootstrap</h3>
      <p>Responsive Design</p>
    </div>

    <div className="skill-card">
      <h3>WordPress</h3>
      <p>CMS Development</p>
    </div>

    <div className="skill-card">
      <h3>Elementor</h3>
      <p>Visual Page Design</p>
    </div>

    <div className="skill-card">
      <h3>MySQL</h3>
      <p>Database Management</p>
    </div>

    <div className="skill-card">
      <h3>Git & GitHub</h3>
      <p>Version Control</p>
    </div>
    </div>

   <section className="projects">
  <h2>My Projects</h2>

  <div className="projects-container">
    <div className="project-card">
      <h3>Bikeleague Website</h3>
      <p>
        Worked on website pages and design
        during my internship.
      </p>
      <span>WordPress | Elementor</span>
    </div>

    <div className="project-card">
      <h3>WELVETSKIE Website</h3>
      <p>
        Gained practical experience in website
        design and development.
      </p>
      <span>Website Development</span>
    </div>

    <div className="project-card">
      <h3>Adam & Haani Store</h3>
      <p>
        A practice e-commerce project for
        learning web development.
      </p>
      <span>React | HTML | CSS | Laraval | Javascript</span>
    </div>
  </div>
</section> 
<section id="contact" className="contact">
  <h2>Contact Me</h2>
  <a href="/Mufeeda_TP_Front-End-Developer.pdf"download>download Resume</a>

  <p>
    I am looking for opportunities to learn
    and grow as a web developer.
  </p>

  <p>
    Feel free to connect with me for
    internship and job opportunities.
  </p>
</section>

<div className="contact-links">
  <p>
    Email:{" "}
    <a href="mailto:mufeedariyasedk@gmail.com">
      mufeedariyasedk@gmail.com
    </a>
  </p>

  <p>
    Phone:{" "}
    <a href="tel:+918301921257">
      +91 8301921257
    </a>
  </p>
</div>
<footer className="footer">
  <p>
    © 2026 Mufeeda. All rights reserved.
  </p>

  <p>
    Designed and developed by Mufeeda
  </p>
</footer>
</section>
  
    </>
  )
}

export default App
