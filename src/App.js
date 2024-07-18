import HomeIcon from './assets/svg/homeicon.svg';
import Logo from './assets/svg/logo.svg';
import Slider from './Slider';

function App() {
  return (
    <>
      <header className="header">
        <button className="header__homebutton" label="home">
          <img className="header__homeicon" src={HomeIcon} />
        </button>
        <h1 className="header__projectname">PROJECT</h1>
      </header>
      <Slider />
      <footer className="footer">
        <img className="footer__logo" src={Logo} />
      </footer>
    </>
  );
}

export default App;
