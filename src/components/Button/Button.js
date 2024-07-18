import './button.css';

function Button(props) {
    const { className, children, onClick } = props;
  return (
    <>
      <button className={`button ${className}`}>{children}</button>
    </>
  );
}

export default Button;
