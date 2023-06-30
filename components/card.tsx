import React from "react";
import "./card.css"
import Img2 from '../public/images/Progress indicator-rafiki.png';
import Image from 'next/image'

export default () => {
  return (


<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10%' }}>
      <div style={{ flex: 1 }}> 
      
      <div className="Carde">
      <div>
        <h1 className="texto">Nenhuma atualização por enquanto!</h1>
      </div>
      
    </div>
    </div>
    
     
      <div style={{ flex: 1}}>
        <Image src={Img2} width={450} height={450} alt="Img2" />
        </div>
        </div>  

   

  );
}
