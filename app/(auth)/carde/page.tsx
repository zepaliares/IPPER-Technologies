import React from "react"
import Carde from '../../../components/verifica.mjs';


const { atualizarExemplo } = require('../../../components/mongo');

async function atualizarExemploNoMontagem() {
  const exemploId = 1; // ID do exemplo a ser atualizado
  const atualizacaoExemplo = { $set: { verificacao: false } };
  await atualizarExemplo(exemploId, atualizacaoExemplo);
}

 export default function Card() {
  
    atualizarExemploNoMontagem(); 
     
  return (
    <div className="flex items-center justify-center pt-32 pb-12 md:pt-40 md:pb-20">

       <div className="text-center pb-12 md:pb-16">

           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Carde /></div>
      
      </div>
      
    </div>
  );
}
