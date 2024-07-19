import Logo from './assets/svg/logo.svg';
import Slider from './Slider';

function App() {
  return (
    <>
      <Slider />
      <footer className="footer">
        <img className="footer__logo" src={Logo} />
      </footer>
    </>
  );
}

export default App;
