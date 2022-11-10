import headshot from "../assets/headshot.jpg"
import '../../src/App.css';

const AboutMe = () => {
    return (
      <section id='about'>
        <h2>About Me</h2>
  
        <div className='container about_container'>
          <div className='about_me'>
            <div className='headshot'>
              <img id="me" src={headshot} alt = "Headshot" />
            </div>
          </div>
            <div className='This-is-me'>
              <article>Extraordinarily driven leader with specializations in mass communication, and interpersonal connection.
                <br></br>
                Graduated with a Bachelor's in Acting, Directing, and Design from TAMUCC with a certification in Fullstack Web Development from SMU.
                <br></br>
                This includes skills in Javascript, Html, React, NoSql, Node.js, and Css.
                <br></br> <br></br>
                </article>
            </div>
          </div>
      </section>  
    )
  }
  
  export default AboutMe