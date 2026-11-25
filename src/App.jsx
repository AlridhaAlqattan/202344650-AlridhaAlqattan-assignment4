import './App.css'
import TimeDate from './components/TimeDate.jsx'
import kfupmLogo from './assets/kfupm-logo-300x284.webp'
import Contact from './components/Contact.jsx'
import JokeBox from './components/JokeBox.jsx'
import ReposBox from './components/ReposBox.jsx'
import Box from './components/Box.jsx'
// Importing important components and assets and style for the application


function App() {



  return (
    <>
      <a href="https://www.kfupm.edu.sa/"><img src={kfupmLogo} alt="KFUPM Logo" id="logo" /></a>

      <div id="wrap">

        {/* A element to display time and date */}
        <TimeDate />

        <div id="greet">
          <h1><strong>Alridha Alqattan Website</strong></h1>
          <h3>Welcome to my personal website!</h3>
        </div>

        {/* Navigation sections to the rest of the website */}
        <section id="navigation">
          <Box title="Navigation" content={
            <ul className="box">
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#repos">My Repositories</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#joke">Programming Joke</a></li>
            </ul>
          } />
        </section>

        <section id="about">
          <Box title="About Me" content={
            <div id="box1" className="box">
              <p>My name is Alridha Alqattan, and I am a Computer Science student at King Fahad
                University of Petroleum and Minerals. I joined the university in 2023. I am 21 years old. </p>
              <p><strong>I am very excited to learn more about Web Development!</strong></p>
            </div>} />
        </section>

        <section id="projects">
          <Box title="Projects" content={<>
            <h3 className="title">Project 1: Pseudo File System</h3>
            <div id="box2" className="box">
              <p>During my study of ICS202 (Algorithms and Data Structures), i worked on a
                project called Pseudo File System. The project was about creating a file system
                using some concepts of data structures i learned. i used java and tree like structures.
              </p>
              <a href="assets/file-system.jpg" target="_blank"><img src="assets/file-system.webp" alt="File System"
                className="projImg" /></a>
            </div>



            <h3 className="title">Project 2: Web Development Project</h3>
            <div id="box3" className="box">
              <p>During my study of SWE363 (Web Development), I worked in a team to create a website
                which enables KFUPM students to report problems in their buldings. Whether the
                problem is related to electricity, water, or any other issue.
              </p>
              <a href="assets/webdev.jpg" target="_blank"><img src="assets/webdev.webp" alt="Web Development"
                className="projImg" /></a>
            </div>
          </>} /></section>

        {/* A section to display my repositories */}
        <section id="repos">
          <Box title="My github repositories" content={
            <div id="repoBox" className="box">
              <ReposBox />
            </div>} />
        </section>

        <section id="contact">
          <Box title="Contact" content={<>

            <div id="box4" className="box">
              <Contact />
            </div> </>} />
        </section>




        <section id="joke">
          <Box title="Programming Joke" content={
            <div id="box5" className="box">
              <JokeBox />
            </div>} />
        </section>

      </div>

    </>
  )
}

export default App
