import BackgroundImage from './assets/images/background.jpg';
import Button from './components/Button/Button.js';
import Button1 from './assets/images/button1.png';
import Image1 from './assets/images/image1.png';
import Image2 from './assets/images/image2.png';
import Image3 from './assets/images/image3.png';
import Image4 from './assets/images/image4.png';
import Image5 from './assets/images/image5.png';
import Image6 from './assets/images/image6.png';
import Image7 from './assets/images/image7.png';
import Image8 from './assets/images/image8.png';
import Image9 from './assets/images/image9.png';

function Slider() {
  return (
    <>
      <main className="slider">
        <div className="slider__background">
        <img className="slider__backgroundimage" src={BackgroundImage}></img>
        </div>
        <div className="slider__slide">
            <img className="slider__image" src={Image1} style={{ height: 110, top: 75, left: -75 }}/>
            <img className="slider__image" src={Image2} style={{ height: 60, top: 45, right: 45 }}/>
            <img className="slider__image" src={Image3} style={{ height: 70, bottom: 60, left: 350 }}/>
            <img className="slider__image" src={Image4} style={{ height: 90, right: 30, top: 150, zIndex: "4000" }}/>
            <img className="slider__image" src={Image5} style={{ height: 200, bottom: -10, left: -75 }}/>
            <img className="slider__image slider__image_animation1" src={Image6} style={{ height: 115, top: 200, right: 50 }}/>
            <img className="slider__image slider__image_animation2" src={Image7} style={{ height: 50, top: 65, right: 215 }}/>
            <img className="slider__image slider__image_animation3" src={Image8} style={{ height: 225, bottom: -100, right: 250 }}/>
            <img className="slider__image slider__image_animation4" src={Image9} style={{ height: 75, left: 25, bottom: 185 }}/>
          <div className="hellotext">
            <div className="hellotext__row hellotext__row_small">ПРИВЕТ,</div>
            <div className="hellotext__row">
              ЭТО <span className="hellotext__row_bold">НЕ</span>
            </div>
            <div className="hellotext__row">КОММЕРЧЕСКОЕ</div>
            <div className="hellotext__row hellotext__row_flex">ЗАДАНИЕ <Button isIcon="CheckInfo"><img src={Button1} className="button__checkinfo"></img>Что дальше?</Button></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Slider;
