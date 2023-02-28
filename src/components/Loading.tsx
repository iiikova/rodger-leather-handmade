import logo from '../assets/images/logo.png';

const Loading = () => {
  return (
    <div className="grid items-center place-items-center h-screen">
      <img className="animate__animated animate__pulse animate__infinite" src={logo} alt="loading" />
    </div>
  );
};

export default Loading;
