export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-preto-fundo pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Sobre o projeto</h2>
            <p className="text-xl text-gray-600">A IPPER usa tecnologia de visão computacional para identificar automaticamente se os funcionários estão usando capacete de segurança, oferencendo soluções eficazes para melhorar a segurança no local de trabalho e proteger os funcionários</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-preto-fundo rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-indigo-700" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-indigo-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-indigo-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Tecnologia de reconhecimento de capacetes por IA</h4>
              <p className="text-gray-600 text-center">A tecnologia de reconhecimento de capacetes por IA usa algoritmos para detectar se os trabalhadores estão usando capacetes de segurança adequados em locais de trabalho perigosos.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-preto-fundo rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-indigo-700" width="64" height="64" rx="32" />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                    <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                    <path className="stroke-current text-indigo-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Sobre o projeto</h4>
              <p className="text-gray-600 text-center">A IPPER usa tecnologia de visão computacional para identificar automaticamente se os funcionários estão usando capacetes de segurança, oferecendo soluções eficazes para melhorar a segurança no local de trabalho e proteger os funcionários.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-preto-fundo rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-indigo-700" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-indigo-300" d="M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286" />
                    <path className="stroke-current text-indigo-300" d="M36.571 32H40" />
                    <path className="stroke-current text-white" d="M24 32h3.429" strokeLinecap="square" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Funcionalidades do sistema de reconhecimento de capacetes</h4>
              <p className="text-gray-600 text-center">O sistema de reconhecimento de capacetes possui funcionalidades como detecção de uso incorreto do capacete pelos trabalhadores e a capacidade de enviar alertas em tempo real para o supervisor.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-preto-fundo rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-indigo-700" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
                    <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
                    <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
                    <path className="stroke-current text-indigo-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">O futuro da tecnologia de reconhecimento de capacetes por IA</h4>
              <p className="text-gray-600 text-center">A tecnologia de reconhecimento de capacetes por IA tem potencial de evoluir no futuro e monitorar outros aspectos da segurança do trabalhador, além de integrar com outras tecnologias emergentes, como realidade virtual e aumentada.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-preto-fundo rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-indigo-700" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-white" d="M19.429 32a12.571 12.571 0 0021.46 8.89L23.111 23.11A12.528 12.528 0 0019.429 32z" />
                    <path className="stroke-current text-indigo-300" d="M32 19.429c6.943 0 12.571 5.628 12.571 12.571M32 24a8 8 0 018 8" />
                    <path className="stroke-current text-white" d="M34.286 29.714L32 32" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Aplicações do sistema de reconhecimento de capacetes</h4>
              <p className="text-gray-600 text-center">O sistema de reconhecimento de capacetes pode ser aplicado em vários setores, incluindo construção, mineração, transporte e petróleo e gás.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-preto-fundo rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-indigo-700" width="64" height="64" rx="32" />
                  <g strokeWidth="2" strokeLinecap="square">
                    <path className="stroke-current text-white" d="M29.714 40.358l-4.777 2.51 1.349-7.865-5.715-5.57 7.898-1.147L32 21.13l3.531 7.155 7.898 1.147L40 32.775" />
                    <path className="stroke-current text-indigo-300" d="M44.571 43.429H34.286M44.571 37.714H34.286" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Benefícios do sistema de reconhecimento de capacetes</h4>
              <p className="text-gray-600 text-center">O sistema identifica trabalhadores sem capacetes de segurança, registra dados para regulamentação e reduz os custos de indenização e tratamentos médicos decorrentes de acidentes.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}