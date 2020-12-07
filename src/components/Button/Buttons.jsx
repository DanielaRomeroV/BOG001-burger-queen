import React from 'react'
import Button from '@material-ui/core/Button'


const Buttons = () => {

    return (
      <div className="button">
  
         <Button color="primary"  variant='outlined'  >
           Desayuno
         </Button>

         <Button style={ {marginLeft: '10px'} } color="primary" variant='contained' disableElevation>
           Almuerzo
         </Button>

          
  
      </div>          
  
  
    )
  }
  
  export default Buttons;