import './index.css'; // Asegúrate de que esta línea esté presente
import Card from './Salchimonster/Menu_Salchimonster.js';

function App() {
  return (
    <div className='flex flex-wrap justify-center'>
      <div  style={{ backgroundColor: '#581845' }}className=' text-gray-50 max-w-xs rounded-2xl overflow-hidden transition duration-200 hover:bg-indigo-600 hover:scale-105'>
        <Card
        //Se hace una ruta general desde el ppublic para poder acceder a cada imagen, osea que cada iamgen está en la carpeta ImagenesSalchi
        //Se usa la ruta ./ImagenesSalchi/imagen.extensión
        imgSrc='./ImagenesSalchi/salchimonster1.jpg'
        h2Text="Deliciosa Salchi"
        pText="Salchipapa x3 super deliciosa"
        h2Class="text-xl mb-2" 
        pClass="text-sm" 
        buttonClass="bg-indigo-800 py-2 px-3 rounded-lg mt-4 ml-auto block transition duration-200 hover:bg-indigo-600 hover:scale-105"
        
        
        />
      </div>
      <div style={{ backgroundColor: '#581845' }} className="bg-gray-800 text-gray-50 max-w-xs rounded-2xl overflow-hidden transition duration-200 hover:bg-indigo-950 hover:scale-105 ml-32">           
         <Card
              imgSrc='./ImagenesSalchi/hamburguesa.jpg'
              h2Text="Plantas Latam 2"
              pText="Otras partes de latam"
              h2Class="text-xl mb-2" 
              pClass="text-sm" 
              buttonClass="bg-blue-600 hover:bg-blue-300 py-2 px-3 rounded-lg mt-4 ml-auto block transition duration-200"
              />
        </div>
    </div>
  );
}

export default App;
