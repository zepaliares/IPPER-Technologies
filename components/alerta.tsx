import React from "react"
import "./card.css"
import Img1 from '../public/images/Computer troubleshooting-pana.png'
import Image from 'next/image'
import Link from 'next/link'
 


export default function Card() {
 


  
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  marginTop: '10%' }}>
      <div style={{ flex: 1 }}>
        <div className="Card">
          <div>
            <h1 className="texto">Uso indevido do capacete de segurança detectado!</h1>
          </div>
          <div>
            <div>
            <Link href="/carde" className="btn-sm text-gray-200 bg-indigo-700 hover:bg-indigo-900 ml-3">
                  <span>Verificar</span>
                  
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                 
                </Link>

            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, marginLeft: '200px' }}>
        <Image src={Img1} width={450} height={450} alt="Img1" />
      </div>
    </div>
  );
}

