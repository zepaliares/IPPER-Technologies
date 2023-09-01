
import Form from '../../../components/form.mjs';

export default function Hero() {

  return (
    
    <section className="relative bg-preto-fundo">
      <div className=''>
        {/* Illustration behind hero content */}
        

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Hero content */}
          <div className="flex items-center justify-center pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">

              <Form />
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}