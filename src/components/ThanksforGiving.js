import '../../src/App.css';
import ThanksforGivingPic from "../assets/ThanksforGiving.png"



export default function ThanksforGiving(){

    return(
        <>
        <h2 className='sub-title'>Thanks For Giving</h2>
        <div className='container about_container'>
            <div className='ThanksforGiving'>
            <div className='screenshot'>
                
                <img id="giving" src={ThanksforGivingPic} alt = "ThanksforGiving" />

                <a href="https://github.com/WeWantSomeMo/thanks-for-giving">Thanks For Giving on Github</a>
            </div>
            </div>
            <br></br>
            <div className='ReadMe'>
                <article>
                <h2>Mission Statement</h2>
                <br></br>
                Have you ever wanted to find the best deals and recipes for a major event?
                <br></br>
                This application will assist you in finding the best deals within your budget range, ingredients, and availability to ensure a successfully hosted event.                <br></br>
                <br></br>
                <h2>Goal Breakdown</h2>
                <br></br>
                Use Node.js and Express.js to create a RESTful API.
                <br></br>
                Use Handlebars.js as the templating engine.
                <br></br>
                Use MySQL and the Sequelize ORM for the database.
                <br></br>
                Have both GET and POST routes for retrieving and adding new data.
                <br></br>
                Be deployed using Heroku (with data).
                <br></br>
                Use at least one new library, package, or technology that we haven`t discussed.
                <br></br>
                Have a polished UI.
                <br></br>
                Be responsive.
                <br></br>
                Be interactive (i.e., accept and respond to user input).
                <br></br>
                Have a folder structure that meets the MVC paradigm.
                <br></br>
                Include authentication (express-session and cookies).
                </article>
                <br></br>
            </div>
            </div>
        </>
    
    )
}