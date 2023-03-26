import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Ubicacion.css';
import background from '../../assets/fondo2.png'

export default function Ubicacion() {
    
    const myStyle={
  
        backgroundImage: `url(${background})`,
        width: 'auto',
        height: 'auto',
        marginTop:'0px',
        padding:'0',
        fontSize:'18px',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
    };

  return (  
    <div style={myStyle}>
        <div className='letter_ubicanos'>
            <p>UBICANOS</p>
        </div>
        <div className="flex-container">

            <div class="flex-item1 ">
                <h1>Ubicación</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
            </div>

                <MapContainer center={[16.617951, -93.096841]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'    
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[16.617951, -93.096841]}>
                        <Popup>
                        Restaurant el chido. <br /> Comida oriental pa q coma sabloso.
                        </Popup>
                    </Marker>
                </MapContainer>  
    
        
        </div>
    </div>   
  )
}
