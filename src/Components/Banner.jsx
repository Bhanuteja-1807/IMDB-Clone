import React from 'react'

function Banner() {
  return (
    <div className= 'h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end'  style={{backgroundImage : `url(https://www.bollywoodhungama.com/wp-content/uploads/2021/01/Pushpa-banner.jpg)`}}>

    
        <div className = 'text-red-600  text-center w-full text-3xl bg-gray-300/60 p-3'>
            Pushpa 2: The Rule

        </div>

    </div>
  )
}

export default Banner