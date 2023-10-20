import { useEffect, useState } from 'react'
import './App.css'
import { Box, Button } from '@mui/material'
import SelectedCity from './components/SelectedCity'
import NextFiveDays from './components/NextFiveDays'
import DatosToday from './components/DatosToday'



function App() {
  const [climaActual, setClimaActual] = useState(null)
  const [climaProximo, setClimaProximo] = useState(null)
  const [city,setCity] = useState('lima')
  const [porcentaje,setPorcentaje] = useState(40)

  // const apiKey = 'bafb3bef1ccb9f00b7567afab00a77cf'


  // const link = `https://api.openweathermap.org/data/2.5/weather?q=guadalajara&appid=$07e5d768f4b675ac7a669adb679d000c`

  const getData = async () =>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bafb3bef1ccb9f00b7567afab00a77cf`)
    const datos = await res.json()
    setClimaActual(datos)
    console.log(climaActual);
  }

  useEffect(()=>{
    getData
  },[])

  return (
    <>

    {/* Contenedor general */}
      <div className='container-general'> 

        {/* Ciudad Seleccionada */}
        <SelectedCity getData={getData}/>



        <div className='details'>

          {/* Contenedor del clima de los proximo 5 dias */}
          <NextFiveDays/>


          {/* Contenedor de los datos del clima del dia */}
          
          <div className='datos-today'>
          <DatosToday climaActual={climaActual} porcentaje={porcentaje}/>
          </div>



        </div>


      </div>
    </>
  )
}

export default App
