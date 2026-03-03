// import Wedding from '/assets/Tarjeta Boda.png';
// import FraseWedding from '/assets/Frase Boda.png';
// import HorarioWedding from '/assets/Horario Boda.png';
// import SalonWedding from '/assets/Salon Boda.png';
// import DressCodeWedding from '/assets/DressCode Boda.png';
// import MusicWedding from '/assets/Musica Boda.png';
// import RegalosWedding from '/assets/Regalos Boda.png';
// import FotosWedding from '/assets/Fotos Boda.png';
// import FinalWedding from '/assets/Final Boda.png';
import Reloj from '../components/Reloj';

function Inicio() {
  return (
    <div class="main-container">
      <div class="top-div">
      </div>
      <div class="middle-div">
      <img src="/tarjeta-boda/assets/Tarjeta Boda.png" alt="Invitacion boda de Estefi y Cristian" width="400"/>
        <audio controls>
        <source src={`${process.env.PUBLIC_URL}/Christina-Perri-A-Thousand-Years.mp3`} type="audio/mpeg" />
          Tu navegador no soporta el reproductor de audio.
        </audio>
      <img src="../public/assets/Frase Boda.png" alt="Frase boda de Estefi y Cristian" width="400"/>
      <img src="/assets/Horario Boda.png" alt="Horario boda de Estefi y Cristian" width="400"/>
      <Reloj/>
      <img src="/assets/Salon Boda.png" alt="Ubicacion salon boda de Estefi y Cristian" width="400"/>
      <a href='https://maps.app.goo.gl/MwEySygyjPYy24Nt5' target='_blank' rel='noreferrer'><button className='botones'>¿Cómo llegar?</button></a>
      <img src="/assets/DressCode Boda.png" alt="Vestimenta boda de Estefi y Cristian" width="400"/>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSf8id0yuwwSTDWECaE43I7i5I9z7O-yUocqcrAxOAFD6RrCoA/viewform?usp=sharing' target='_blank' rel='noreferrer'><button className='botones'>Confirmar asistencia aquí</button></a>
      <img src="/assets/Musica Boda.png" alt="Musica boda de Estefi y Cristian" width="400"/><a href='https://docs.google.com/forms/d/e/1FAIpQLSdgPEHyJM43p0zaNNwZv8yCvmhvGimUekZLWPnlJkpZsCVkPA/viewform?usp=sharing' target='_blank' rel='noreferrer'><button className='botones'>Recomendar</button></a>
      <img src="/assets/Regalos Boda.png" alt="Regalos boda de Estefi y Cristian" width="400"/>
      <img src="/assets/Fotos Boda.png" alt="Album digital boda de Estefi y Cristian" width="400"/>
      <a href='https://photos.app.goo.gl/hHHZKGedB8GiZHtD7' target='_blank' rel='noreferrer'><button className='botones'>Álbum Digital</button></a>
      <div style={{ position: 'relative', display: 'inline-block', width: '400px' }}>
  <img 
    src="/assets/Final Boda.png" 
    alt="Frase final boda de Estefi y Cristian" 
    style={{ width: '100%' }} 
  />
  <p 
    style={{
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      margin: 0,
      padding: '5px',
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
      color: 'white',
      fontSize: '9px',
      borderRadius: '5px',
    }}
  >
    Design by <a href='https://ekoddex.com/' target='_blank' rel='noreferrer' className="firma">eKoddex</a>
  </p>
</div>

      </div>
      <div class="bottom-div"></div>
    </div>
  );
}

export default Inicio;
