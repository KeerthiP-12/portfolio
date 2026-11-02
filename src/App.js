import { useState } from "react";
import "./App.css";

const skills = [
  "React.js",

  "TypeScript",
  "HTML5",
  "CSS3",
  "Responsive Design",
  "GitHub",
  "Postman",
  "Chrome DevTools",
  "MySQL",
  "JMeter",
];

const projects = [
  {
    number: "01",
    title: "Property Source Hub",
    type: "Property Platform",
    description:
      "A real-time property platform where I worked on property workflows, deal discovery, application testing and performance testing.",
    technologies: ["React.js", "TypeScript", "JMeter", "Testing"],
  },
  {
    number: "02",
    title: "ClearStay360",
    type: "Hospitality Platform",
    description:
      "A hospitality management web platform where I developed responsive pages and reusable frontend components.",
    technologies: ["React.js", "TypeScript", "HTML", "CSS"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo" onClick={closeMenu}>
            Keerthi<span>.</span>
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>

        </div>
      </header>


      {/* HERO */}
      <section id="home" className="hero">

        <div className="container hero-container">

          <div className="hero-content">

            <p className="section-label">
              FRONTEND WEB DEVELOPER
            </p>

            <h1>
              Hi, I'm <span>Keerthi P.</span>
            </h1>

            <h2>
              I build clean and responsive
              <br />
              web experiences.
            </h2>

            <p className="hero-description">
              Frontend Web Developer with hands-on experience in React.js,
              JavaScript, TypeScript, HTML and CSS. I enjoy creating
              responsive and user-friendly web applications.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="primary-btn">
                View My Work <span>↗</span>
              </a>

              <a
                href="mailto:keerthivijaya123@gmail.com"
                className="secondary-btn"
              >
                Contact Me
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/KeerthiP-12"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/keerthi12"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

            </div>

          </div>


          {/* CODE CARD */}
          <div className="code-card">

            <div className="code-header">

              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>developer.js</span>

            </div>

            <div className="code-body">

              <p>
                <span className="purple">const</span>{" "}
                <span className="blue">developer</span> = {"{"}
              </p>

              <p className="indent">
                name: <span className="green">"Keerthi P"</span>,
              </p>

              <p className="indent">
                role:{" "}
                <span className="green">
                  "Frontend Developer"
                </span>,
              </p>

              <p className="indent">
                experience: <span className="orange">1.5</span>,
              </p>

              <p className="indent">
                skills: [
              </p>

              <p className="indent2">
                <span className="green">"React"</span>,
              </p>

              <p className="indent2">
                <span className="green">"TypeScript"</span>,
              </p>

              <p className="indent2">
                <span className="green">"JavaScript"</span>
              </p>

              <p className="indent">]</p>

              <p>{"}"}</p>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="section">

        <div className="container">

          <div className="section-title">

            <p className="section-label">
              ABOUT ME
            </p>

            <h2>
              Building interfaces that are
              <br />
              simple and useful.
            </h2>

          </div>


          <div className="about-grid">

            <div className="about-text">

              <p className="big-text">
                I'm a Frontend Web Developer with practical experience
                working on real-time web applications in property and
                hospitality domains.
              </p>

              <p>
                I enjoy creating responsive interfaces, developing
                reusable React components and improving the overall
                usability of web applications.
              </p>

              <p>
                I also have practical exposure to manual testing and
                performance testing using JMeter.
              </p>

            </div>


            <div className="stats">

              <div className="stat">
                <strong>1.5+</strong>
                <span>Years Experience</span>
              </div>

              <div className="stat">
                <strong>2</strong>
                <span>Real Projects</span>
              </div>

              <div className="stat">
                <strong>5+</strong>
                <span>Skills & Tools</span>
              </div>

              <div className="stat">
                <strong>React</strong>
                <span>Primary Frontend</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section id="skills" className="section light-section">

        <div className="container">

          <div className="section-title center">

            <p className="section-label">
              MY TOOLKIT
            </p>

            <h2>Skills & Technologies</h2>

            <p>
              Technologies and tools I have worked with during my
              development experience.
            </p>

          </div>


          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div className="skill-card" key={skill}>

                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{skill}</strong>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section id="projects" className="section">

        <div className="container">

          <div className="projects-heading">

            <div>
              <p className="section-label">
                SELECTED WORK
              </p>

              <h2>Projects I've worked on</h2>
            </div>

            <p>
              Real-world web application experience across property
              and hospitality platforms.
            </p>

          </div>


          <div className="projects-grid">

            {projects.map((project) => (

              <article className="project-card" key={project.title}>

                <div className="project-image">

                  <div className="browser">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                  <div className="fake-screen">

                    <div className="fake-title"></div>
                    <div className="fake-subtitle"></div>

                    <div className="fake-boxes">

                      <div></div>
                      <div></div>
                      <div></div>

                    </div>

                  </div>

                  <span className="project-number">
                    {project.number}
                  </span>

                </div>


                <div className="project-content">

                  <span className="project-type">
                    {project.type}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="technology-list">

                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* EXPERIENCE */}
      <section id="experience" className="section dark-section">

        <div className="container">

          <div className="section-title">

            <p className="section-label">
              EXPERIENCE
            </p>

            <h2>
              My professional journey
            </h2>

          </div>


          <div className="experience">

            <div className="experience-line"></div>

            <div className="experience-item">

              <div className="experience-date">
                2025 — 2026
              </div>

              <div className="experience-content">

                <h3>
                  Software Engineer — Web Developer
                </h3>

                <h4>
                  Innovation Eco Solutions
                </h4>

                <p>
                  Worked on real-time web applications in property and
                  hospitality domains. Developed responsive web pages
                  using React.js, HTML, CSS and TypeScript, while also
                  supporting application testing and performance analysis.
                </p>

                <div className="technology-list">

                  <span>React.js</span>
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>JMeter</span>
                  <span>Manual Testing</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* EDUCATION */}
      <section className="section">

        <div className="container education">

          <div className="section-title">

            <p className="section-label">
              EDUCATION
            </p>

            <h2>Academic Background</h2>

          </div>


          <div className="education-item">

            <div>

              <span>2017 — 2021</span>

              <h3>
                B.E / B.Tech — Computer Science & Engineering
              </h3>

              <p>
                Sri Venkateswara Engineering College for Women
              </p>

            </div>

            <strong>71%</strong>

          </div>


          <div className="education-item">

            <div>

              <span>2023 — 2024</span>

              <h3>
                Full Stack Development
              </h3>

              <p>
                Great Learning
              </p>

            </div>

            <strong>Completed</strong>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <div className="container">

          <p className="section-label">
            GET IN TOUCH
          </p>

          <h2>
            Let's build something
            <br />
            <span>great together.</span>
          </h2>

          <p>
            I'm open to frontend development opportunities and
            collaborations.
          </p>

          <a
            href="mailto:keerthivijaya123@gmail.com"
            className="email"
          >
            keerthivijaya123@gmail.com ↗
          </a>

          <div className="contact-links">

            <a
              href="https://github.com/KeerthiP-12"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/keerthi12"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="tel:6301566225">
              6301566225
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="container footer">

          <span>
            © {new Date().getFullYear()} Keerthi P.
          </span>

          <span>
            Frontend Web Developer
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;