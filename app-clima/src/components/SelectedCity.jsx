import { Box } from '@mui/material'
import React from 'react'

function SelectedCity({getData}) {
  return (
    <div className='selected-city'>
          <Box sx={{p:'8%'}}>
        <button onClick={getData}>Traer cambios</button>
        <p>icono</p>
        </Box>

        <Box className='data-today'>
          <img src="" alt="" />
          
          <Box className=''>
          <p>imagen</p>
          <h2 className='grados-today'>15c</h2>
          <h2 className='letter-gray'>Shower</h2>

            <Box className=''>
              <p>Today   .   Fecha del dia</p>
              <p>ubicacion</p>
              </Box>        
          </Box>
        </Box>
        </div>
  )
}

export default SelectedCity