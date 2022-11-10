import '../../src/App.css';
import WeatherBoiPic from "../assets/WeatherBoi.png"



export default function WeatherBoi(){

    return(
        <>
        <h2 className='sub-title'>WeatherBoi</h2>
        <div className='container about_container'>
            <div className='WeatherBoi'>
            <div className='screenshot'>
                <img id="weather" src={WeatherBoiPic} alt = "WeatherBoi" />
                <a href="https://github.com/WeWantSomeMo/WeatherBoi"> WeatherBoi on Github</a>
            </div>
            </div>
            <br></br>
            <div className='ReadMe'>
                <article>
                <h2>Goal Breakdown</h2>
                <br></br>
                GIVEN a weather dashboard with form inputs. WHEN I search for a city,
                <br></br>
                THEN I am presented with current and future conditions for that city and that city is added to the search history.
                <br></br>
                WHEN I view current weather conditions for that city THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed.
                <br></br>
                WHEN I view future weather conditions for that city THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity.
                <br></br>
                WHEN I click on a city in the search history THEN I am again presented with current and future conditions for that city.
                </article>
                <br></br>
            </div>
            </div>
        </>
    
    )
}