import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'
import TestimonialImage2 from '@/public/images/testimonial2.jpg'
import TestimonialImage3 from '@/public/images/testimonial3.jpg'


export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Feedback de empresas parceiras:</h2>

          </div>

         

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-transparent rounded bg-gray-800">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-indigo-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ – A equipe da IPPER é formada por especialistas altamente qualificados em inteligência artificial, tecnologia de visão computacional e segurança no local de trabalho, garantindo soluções eficazes e confiáveis. “
                </blockquote>

                <div className="text-white">
                <cite className="font-bold text-lg not-italic">Danyel Sena</cite><a className="text-gray-500 hover:underline font-bold" href="#0"> || </a><a className="text-indigo-500 hover:underline font-bold" href="#0">IPPER</a>
                </div>
              </div>

            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-transparent rounded bg-gray-800">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-indigo-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <Image className="relative rounded-full" src={TestimonialImage2} width={96} height={96} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ – O software da IPPER além de detectar o uso incorreto do capacete, o sistema de reconhecimento de capacetes pode enviar alertas em tempo real ao supervisor, proporcionando uma resposta rápida em caso de emergência.“
                </blockquote>

                <div className="text-white">
                <cite className="font-bold text-lg not-italic">Erick Santos</cite><a className="text-gray-500 hover:underline font-bold" href="#0"> || </a><a className="text-indigo-500 hover:underline font-bold" href="#0">IPPER</a>
                </div>
              </div>

            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-transparent rounded bg-gray-800">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-indigo-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <Image className="relative rounded-full" src={TestimonialImage3} width={96} height={96} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ – A IPPER também possui um amplo potencial de evolução, explorando novas tecnologias e capacidades, como a integração com outras tecnologias emergentes, para tornar o local de trabalho mais seguro. “
                </blockquote>
                
                <div className="text-white">
                <cite className="font-bold text-lg not-italic">Thiago Elias</cite><a className="text-gray-500 hover:underline font-bold" href="#0"> || </a><a className="text-indigo-500 hover:underline font-bold" href="#0">IPPER</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}