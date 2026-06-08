
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <h1>KEERTHI P</h1>
          <h2>Frontend Web Developer</h2>

          <p>
            React.js | JavaScript | TypeScript | Manual Testing | JMeter
          </p>

          <div className="buttons">
            <a
              href="http://www.linkedin.com/in/keerthi12"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Keerthivijaya"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="section">
        <div className="container">
          <h2>About Me</h2>

          <p>
            Frontend Web Developer with hands-on experience in React.js,
            JavaScript, and UI development, along with practical exposure to
            Manual Testing and Performance Testing using JMeter.
          </p>

          <p>
            Worked on real-time web platforms including Property Source Hub and
            ClearStay360, building UI components, testing applications, and
            ensuring performance and usability.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="section dark">
        <div className="container">
          <h2>Technical Skills</h2>

          <div className="grid">
            <div className="card">
              <h3>Frontend Development</h3>

              <ul>
                <li>React.js</li>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div className="card">
              <h3>React Concepts</h3>

              <ul>
                <li>useState</li>
                <li>useEffect</li>
                <li>API Integration</li>
                <li>Controlled Forms</li>
                <li>Basic Context API</li>
                <li>React Router</li>
              </ul>
            </div>

            <div className="card">
              <h3>Testing & Tools</h3>

              <ul>
                <li>Manual Testing</li>
                <li>Performance Testing (JMeter)</li>
                <li>Postman</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Chrome DevTools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="container">
          <h2>Professional Experience</h2>

          <div className="card">
            <h3>Innovation Eco Solutions</h3>

            <p>Web Developer (Trainee / Intern Level)</p>

            <h4>Property Source Hub</h4>

            <ul>
              <li>
                Performed manual testing to ensure platform functionality and
                usability.
              </li>

              <li>
                Tested property listings, deal discovery, and service
                integrations.
              </li>

              <li>
                Conducted performance testing using JMeter.
              </li>

              <li>
                Identified bugs and reported issues.
              </li>
            </ul>

            <h4>ClearStay360</h4>

            <ul>
              <li>
                Developed and designed web pages using React.js, HTML, CSS, and
                TypeScript.
              </li>

              <li>Built reusable UI components.</li>

              <li>Implemented responsive layouts.</li>

              <li>Improved platform usability.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section dark">
        <div className="container">
          <h2>Projects</h2>

          <div className="grid">
            <div className="card">
              <h3>Property Source Hub</h3>

              <p>
                Property management platform where manual testing and
                performance testing were performed.
              </p>
            </div>

            <div className="card">
              <h3>ClearStay360</h3>

              <p>
                Hospitality management platform built using React.js,
                TypeScript, HTML, and CSS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="container">
          <h2>Education</h2>

          <div className="card">
            <h3>Full Stack Development</h3>
            <p>Great Learning (2023 - 2024)</p>

            <h3>B.Tech - Computer Science Engineering</h3>
            <p>
              Sri Venkateswara Engineering College for Women
              <br />
              71%
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section dark">
        <div className="container">
          <h2>Contact</h2>

          <div className="card">
            <p>Email: keerthipamula12@gmail.com</p>
            <p>Phone: 6301566225</p>

            <p>
              LinkedIn:
              linkedin.com/in/keerthi12
            </p>

            <p>
              GitHub:
              github.com/Keerthivijaya
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;