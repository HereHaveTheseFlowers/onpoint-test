import BackgroundImage from './assets/images/background.jpg';
import HomeIcon from './assets/svg/homeicon.svg';
import Icon1 from './assets/svg/icon1.svg';
import Icon2 from './assets/svg/icon2.svg';
import Icon3 from './assets/svg/sliderleft.svg';
import Icon4 from './assets/svg/sliderright.svg';
import IconClose from './assets/svg/iconclose.svg';
import Button from './components/Button/Button.js';
import Button1 from './assets/images/button1.png';
import Button2 from './assets/images/button2.png';
import Image1 from './assets/images/image1.png';
import Image2 from './assets/images/image2.png';
import Image3 from './assets/images/image3.png';
import Image4 from './assets/images/image4.png';
import Image5 from './assets/images/image5.png';
import Image6 from './assets/images/image6.png';
import Image7 from './assets/images/image7.png';
import Image8 from './assets/images/image8.png';
import Image9 from './assets/images/image9.png';
import Image10 from './assets/images/image10.png';
import Image11 from './assets/images/image11.png';
import Bubble1 from './assets/images/bubble1.png';
import Bubble2 from './assets/images/bubble2.png';
import Bubble3 from './assets/images/bubble3.png';
import Bubble4 from './assets/images/bubble4.png';
import Bubble5 from './assets/images/bubble5.png';
import Bubble6 from './assets/images/bubble6.png';
import Bubble7 from './assets/images/bubble7.png';
import Bubble8 from './assets/images/bubble8.png';
import { useEffect, useState, useRef } from 'react';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalState, setModalState] = useState(false);
  const modalRef = useRef(null);
  const [currentModalSlide, setCurrentModalSlide] = useState(0);

  useEffect(() => {
    let slideNumber = 0;
    const slides = document.querySelectorAll('.slider__slide');
    for (let slide of slides) {
      if (slide.style && slide.style.transform === '') {
        slide.style.transform = `translateX(${slideNumber * 100}%)`;
        if (slideNumber !== 0) {
          slide.style.opacity = 0;
          setTimeout(() => {
            slide.style.opacity = 1;
          }, 800);
        }
        slideNumber++;
      }
    }
  });

  function moveSlide(amount, home = false) {
    if (home) {
      moveSlide(-currentSlide);
      return;
    }
    const slides = document.querySelectorAll('.slider__slide');
    if (slides.length <= currentSlide + amount || (currentSlide === 0 && amount < 0)) return;
    let newCurrentSlide = currentSlide + amount;
    setCurrentSlide(currentSlide + amount);
    let slideNumber = 0;
    for (let slide of slides) {
      if (slide.style) {
        slide.style.transform = `translateX(${(slideNumber - newCurrentSlide) * 100}%)`;
        slideNumber++;
      }
    }
    const sliderBackground = document.querySelector('.slider__background');
    if (sliderBackground) {
      sliderBackground.style.transform = `translateX(-${newCurrentSlide * 940}px)`;
    }
    if (modalState) {
      handleModal();
    }
  }

  let getEvent = function () {
    return event.type.search('touch') !== -1 ? event.touches[0] : event;
  };
  let posInit = 0;
  let posX1 = 0;
  let posFinal = 0;
  let slideWidth = window.screen.width;
  let posThreshold = slideWidth * 0.106;
  function swipeStart() {
    let evt = getEvent();

    posInit = posX1 = evt.clientX;
    document.addEventListener('touchmove', swipeAction);
    document.addEventListener('touchend', swipeEnd);
    document.addEventListener('mousemove', swipeAction);
    document.addEventListener('mouseup', swipeEnd);
  }
  function swipeAction() {
    let evt = getEvent();
    posX1 = evt.clientX;
  }
  function swipeEnd() {
    posFinal = posInit - posX1;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    if (Math.abs(posFinal) > posThreshold) {
      if (posInit < posX1) {
        moveSlide(-1);
      } else if (posInit > posX1) {
        moveSlide(1);
      }
    }
  }

  const handleModal = () => {
    if (!modalRef.current) return;
    if (modalState) {
      setModalState(!modalState);
      modalRef.current.classList.remove('modal_active');
    } else {
      setModalState(!modalState);
      modalRef.current.classList.add('modal_active');
    }
  };

  const handleSlider = (amount) => {
    if (amount > 0) {
      if (currentModalSlide > 1) return;
      const sliderPoints = document.querySelectorAll('.modal__sliderpoint');
      if (sliderPoints[currentModalSlide + 1]) {
        sliderPoints[currentModalSlide].classList.remove('modal__sliderpoint_active');
        sliderPoints[currentModalSlide + 1].classList.add('modal__sliderpoint_active');
      }
      const sliderPages = document.querySelectorAll('.modal__sliderpage');
      if (sliderPages[currentModalSlide + 1]) {
        sliderPages[currentModalSlide + 1].classList.add('modal__sliderpage_active');
        sliderPages[currentModalSlide].classList.remove('modal__sliderpage_active');
      }
      setCurrentModalSlide(currentModalSlide + 1);
    } else {
      if (currentModalSlide <= 0) return;
      const sliderPoints = document.querySelectorAll('.modal__sliderpoint');
      if (sliderPoints[currentModalSlide]) {
        sliderPoints[currentModalSlide - 1].classList.add('modal__sliderpoint_active');
        sliderPoints[currentModalSlide].classList.remove('modal__sliderpoint_active');
      }
      const sliderPages = document.querySelectorAll('.modal__sliderpage');
      if (sliderPages[currentModalSlide]) {
        sliderPages[currentModalSlide].classList.remove('modal__sliderpage_active');
        sliderPages[currentModalSlide - 1].classList.add('modal__sliderpage_active');
      }
      setCurrentModalSlide(currentModalSlide - 1);
    }
  };

  return (
    <>
      <header className="header">
        <button
          className="header__homebutton"
          label="home"
          onClick={() => {
            moveSlide(0, true);
          }}
        >
          <img src={HomeIcon} />
        </button>
        <h1 className="header__projectname">PROJECT</h1>
      </header>
      <main className="slider" onTouchStart={swipeStart} onMouseDown={swipeStart}>
        <div className="slider__background">
          <img className="slider__backgroundimage" src={BackgroundImage}></img>
        </div>
        <div className="slider__slide">
          <img className="slider__image" src={Image1} style={{ height: 110, top: 75, left: -75 }} />
          <img className="slider__image" src={Image2} style={{ height: 60, top: 45, right: 45 }} />
          <img
            className="slider__image"
            src={Image3}
            style={{ height: 70, bottom: 60, left: 350 }}
          />
          <img
            className="slider__image"
            src={Image4}
            style={{ height: 90, right: 30, top: 150, zIndex: '4000' }}
          />
          <img
            className="slider__image"
            src={Image5}
            style={{ height: 200, bottom: -10, left: -75 }}
          />
          <img
            className="slider__image slider__image_animation1"
            src={Image6}
            style={{ height: 115, top: 200, right: 50 }}
          />
          <img
            className="slider__image slider__image_animation2"
            src={Image7}
            style={{ height: 50, top: 65, right: 215 }}
          />
          <img
            className="slider__image slider__image_animation3"
            src={Image8}
            style={{ height: 225, bottom: -100, right: 250 }}
          />
          <img
            className="slider__image slider__image_animation4"
            src={Image9}
            style={{ height: 75, left: 25, bottom: 185 }}
          />
          <div className="hellotext">
            <div className="hellotext__row hellotext__row_small">ПРИВЕТ,</div>
            <div className="hellotext__row">
              ЭТО <span className="hellotext__row_bold">НЕ</span>
            </div>
            <div className="hellotext__row">КОММЕРЧЕСКОЕ</div>
            <div className="hellotext__row hellotext__row_flex">
              ЗАДАНИЕ{' '}
              <Button
                onClick={() => {
                  moveSlide(1);
                }}
              >
                <img src={Button1} className="button__checkinfo"></img>Что дальше?
              </Button>
            </div>
          </div>
        </div>
        <div className="slider__slide">
          <img
            className="slider__image"
            src={Image10}
            style={{ height: 540, top: 100, right: -510 }}
          />
          <img
            className="slider__image"
            src={Image10}
            style={{ height: 340, top: 100, right: -300 }}
          />
          <img
            className="slider__image"
            src={Image10}
            style={{ height: 200, top: 70, right: -100 }}
          />
          <img
            className="slider__image"
            src={Image10}
            style={{ height: 340, top: 410, right: -600 }}
          />
          <img
            className="slider__image"
            src={Image10}
            style={{ height: 160, top: 520, right: -205 }}
          />
          <div className="textfield">
            <div className="textfield__row">
              ТЕКСТ<br></br>
              СООБЩЕНИЯ
            </div>
            <div className="textfield__row">
              <div className="textfield__wrapper">
                <div className="textfield__field" dir="rtl">
                  <p dir="ltr">
                    <span style={{ fontWeight: 700 }}>Lorem ipsum dolor sit amet,</span> consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi
                    tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Nulla
                    pharetra diam sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
                    lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse interdum
                    consectetur libero id. Nec ullamcorper sit amet risus nullam eget felis eget.
                    Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Euismod quis
                    viverra nibh cras pulvinar mattis nunc. Massa massa ultricies mi quis. Sit amet
                    massa vitae tortor condimentum lacinia. Et malesuada fames ac turpis egestas
                    integer eget. Elementum pulvinar etiam non quam lacus suspendisse faucibus
                    interdum posuere.
                    <br></br>
                    <br></br>
                    Amet justo donec enim diam vulputate ut pharetra sit. Risus ultricies tristique
                    nulla aliquet enim tortor at auctor. Velit sed ullamcorper morbi tincidunt
                    ornare massa. Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim
                    diam quis enim. Gravida neque convallis a cras. Ut enim blandit volutpat
                    maecenas volutpat. Mauris sit amet massa vitae tortor condimentum lacinia quis
                    vel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider__slide">
          <img
            className="slider__image"
            src={Image11}
            style={{ height: 700, left: 50, top: 75, zIndex: 4000 }}
          />
          <img
            className="slider__image"
            src={Icon1}
            style={{ height: 65, left: 350, top: 350, zIndex: 1000 }}
          />
          <img
            className="slider__image"
            src={Icon2}
            style={{ height: 57, left: 721, top: 355, zIndex: 1000 }}
          />

          <img
            className="slider__image"
            src={Bubble1}
            style={{ height: 38, left: 198, top: 65, zIndex: 3000 }}
          />
          <img
            className="slider__image"
            src={Bubble2}
            style={{ height: 67, left: 184, top: 155, zIndex: 4000 }}
          />
          <img
            className="slider__image"
            src={Bubble3}
            style={{ height: 34, left: 77, top: 212, zIndex: 4000 }}
          />
          <img
            className="slider__image"
            src={Bubble4}
            style={{ height: 112, left: 185, top: 316, zIndex: 3000 }}
          />
          <img
            className="slider__image"
            src={Bubble5}
            style={{ height: 33, left: 10, top: 453, zIndex: 3000 }}
          />
          <img
            className="slider__image"
            src={Bubble6}
            style={{ height: 75, left: 25, top: 553, zIndex: 4000 }}
          />
          <img
            className="slider__image"
            src={Bubble7}
            style={{ height: 61, left: 242, top: 591, zIndex: 3000 }}
          />
          <img
            className="slider__image"
            src={Bubble8}
            style={{ height: 142, left: 182, bottom: -75, zIndex: 4000 }}
          />

          <div className="maininfo">
            <div className="maininfo__header">
              КЛЮЧЕВОЕ СООБЩЕНИЕ
              <span className="maininfo__title">
                BREND <span style={{ fontFamily: 'Gilroy-ExtraBold', marginLeft: -28 }}>XY</span>
              </span>
            </div>
            <div className="maininfo__windows">
              <div className="maininfo__windowleft">
                Ehicula ipsum a arcu <br />
                cursus vitae. Eu non <br />
                diam phasellus <br />
                vestibulum lorem sed <br />
                risus ultricies
                <br />
                <br />
                <br />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '33px' }}>
                <div className="maininfo__windowright">
                  A arcu <br />
                  cursus vitae <br />
                  <br />
                </div>
                <Button onClick={handleModal}>
                  <img src={Button2} className="button__checkinfo"></img> Подробнее
                </Button>
              </div>
            </div>
          </div>

          <div ref={modalRef} className="modal">
            <div className="modal__window">
              <span className="modal__header">ПРЕИМУЩЕСТВА</span>
              <div className="modal__slider">
                <div className="modal__sliderpage modal__sliderpage_active">
                  <span className="list__number">01</span>
                  <p className="list__p">
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit
                  </p>
                  <span className="list__number">02</span>
                  <p className="list__p">
                    Faucibus pulvinar elementum integer enim
                    <br />
                  </p>
                  <span className="list__number">03</span>
                  <p className="list__p">Faucibus pulvinar elementum integer enim</p>
                </div>
                <div className="modal__sliderpage">
                  <span className="list__number">04</span>
                  <p className="list__p">
                    Mi bibendum neque egestas congue quisque <br />
                    egestas diam
                  </p>
                  <span className="list__number">05</span>
                  <p className="list__p">
                    Venenatis lectus magna fringilla urna
                    <br />
                  </p>
                  <span className="list__number">06</span>
                  <p className="list__p">Venenatis lectus magna fringilla urna</p>
                </div>
                <div className="modal__sliderbuttons">
                  <button
                    onClick={() => {
                      handleSlider(-1);
                    }}
                    className="modal__sliderbutton modal__sliderbutton_left"
                  >
                    <img className="modal__buttonicon" src={Icon3} />
                  </button>
                  <span className="modal__sliderpoint modal__sliderpoint_active"></span>
                  <span className="modal__sliderpoint"></span>
                  <button
                    onClick={() => {
                      handleSlider(1);
                    }}
                    className="modal__sliderbutton modal__sliderbutton_right"
                  >
                    <img className="modal__buttonicon" src={Icon3} />
                  </button>
                </div>
              </div>
              <button onClick={handleModal} className="modal__close">
                <img className="modal__closeicon" src={IconClose} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Slider;
