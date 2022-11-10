import '../../src/App.css';
import ResumePic from "../assets/Resume.png"

export default function Resume(){

    return(
        <>
        <h2>Resume</h2>
            <div className='container about_container'>
                <div className='Resume'>
                    <div className='screenshot'>
                        <img id="Resume" src={ResumePic} alt = "Resume" />
                    </div>
                </div>
            </div>
        <br></br>
        </>
    )
}