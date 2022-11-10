import '../../src/App.css';
import showbiz_baby_pic from "../assets/showbiz-baby.png"



export default function Showbiz(){

    return(
        <>
        <h2 className='sub-title'>Showbiz Baby!</h2>
        <div className='container about_container'>
            <div className='Showbiz'>
            <div className='screenshot'>
                <img id="weather" src={showbiz_baby_pic} alt = "Showbiz" />
                <a href="https://github.com/swvmpdad/showbiz-baby"> Showbiz Baby! on Github</a>
            </div>
            </div>
            <br></br>
            <div className='ReadMe'>
                <article>
                <h2>Breakdown</h2>
                <br></br>
                A website to get information, ratings, trailers, and reviews about popular movies in theaters now.
                <br></br>
                <h2>Built Using:</h2>
                <br></br>
                HTML, Javascript, Bulma(Css).
                <br></br>
                <h2>Contributors</h2>
                <br></br>
                swvmpdad (William Campbell), WeWantSomeMo (Mason Ortiz), and AhmadMHanif7 (Ahmad Hanif)
                </article>
                <br></br>
            </div>
            </div>
        </>
    
    )
}