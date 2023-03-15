import './Landing.css'
import image from '../assets/fondo1.png'
import Navbar from '../components/Navbar';
import Columns from '../components/Columns';
function Landing() {

  const myStyle={
      backgroundImage: `url(${image})`,
      height:'100vh',
      marginTop:'10px',
      fontSize:'18px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };
  return (   
    
    <div style={myStyle}>
      <Navbar/>
      <Columns/>
    </div>

  );
}

export default Landing;