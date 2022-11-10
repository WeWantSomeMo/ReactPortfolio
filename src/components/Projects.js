import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import showbiz_baby_pic from "../assets/showbiz-baby.png";
import WeatherBoiPic from "../assets/WeatherBoi.png";
import ThanksforGivingPic from "../assets/ThanksforGiving.png"


export default function Projects(){

  return(
    <Container className="setCustomHeight">
      <Row className="mt-5">
        <Col md={12}>
          <h2 className='ReadMe'>Projects</h2>
        </Col>
        <Col sm={12} md={6} className="mt-5">
          <div>
            <h5 className='sub-title'>Showbiz Baby!</h5>
            <img id="weather2" src={showbiz_baby_pic} alt = "Showbiz" />
            <a href="https://github.com/swvmpdad/showbiz-baby"><br></br> Showbiz Baby! on Github</a>
            <a href="https://swvmpdad.github.io/showbiz-baby/"><br></br> Showbiz Baby! Deployed</a>
          </div>
        </Col>
        <Col sm={12} md={6} className="mt-5">
          <div>
            <h5 className='sub-title'>Thanks For Giving</h5>
            <img id="giving2" src={ThanksforGivingPic} alt = "ThanksforGiving" />
            <a href="https://github.com/WeWantSomeMo/thanks-for-giving"><br></br>Thanks For Giving on Github</a>
            <a href="https://wewantsomemo.github.io/thanks-for-giving/"><br></br>Thanks For Giving Deployed</a>
          </div>
        </Col>
        <Col sm={12} md={6} className="mt-5">
          <div>
            <h5 className='sub-title'>WeatherBoi</h5>
            <img id="weather2" src={WeatherBoiPic} alt = "WeatherBoi" />
            <a href="https://github.com/WeWantSomeMo/WeatherBoi"><br></br>WeatherBoi on Github</a>
            <a href="https://wewantsomemo.github.io/WeatherBoi/"><br></br>WeatherBoi Deployed</a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
