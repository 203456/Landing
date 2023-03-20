import './Landing.css'
import image from '../assets/fondo1.png'
import Navbar from '../components/Navbar/Navbar';
import Columns from '../components/Columns/Columns';
import Ubicacion from '../components/Ubicacion/Ubicacion';
function Landing() {

  const myStyle={
  
      backgroundImage: `url(${image})`,
      width: 'auto',
      height: 'auto',
      marginTop:'10px',
      fontSize:'18px',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
  };
  return (   
    
    <div style={myStyle}>
      <Navbar/>
      <Columns/>
      <Ubicacion/>
    </div>

  );
}

export default Landing;