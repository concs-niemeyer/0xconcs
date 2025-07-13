export default function StandardAbout() {
  return (
    <section id="background" className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Minha Trajetória
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
          <div className="space-y-12">
            <div className="timeline-item flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-4 rounded-lg shadow-lg card-hover">
                  <h3 className="text-base font-semibold tracking-tight text-gray-800 mb-2">
                    Graduação em Física (UFRJ)
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 mb-3">
                    Fundamentos sólidos em ciências da matemática e da natureza
                  </p>
                  <div className="flex gap-2 flex-wrap justify-end">
                    <small className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-700/10 ring-inset">Física Teórica</small>
                    <small className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-700/10 ring-inset">
                      Cálculo Diferencial e Integral
                    </small>
                  </div>
                </div>
              </div>
              <div className="w-4 h-4 bg-purple-500 rounded-full relative z-10"></div>
              <div className="w-1/2 pl-8"></div>
            </div>
            <div className="timeline-item flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full relative z-10"></div>
              <div className="w-1/2 pl-8">
                <div className="bg-white p-4 rounded-lg shadow-lg card-hover">
                   <h3 className="text-base font-semibold tracking-tight text-gray-800 mb-2">
                    Mestrado em Física Médica (IRD-CNEN)
                  </h3>
                 <p className="text-xs font-semibold text-indigo-600 mb-3">
                    Supervisor de Radioproteção em Medicina Nuclear
                  </p>
                  <div className="flex row gap-2 flex-wrap justify-end">
                    <small className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-700/10 ring-inset">Física Médica</small>
                    <small className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-700/10 ring-inset">Garantia da Qualidade</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-4 rounded-lg shadow-lg card-hover">
                   <h3 className="text-base font-semibold tracking-tight text-gray-800 mb-2">
                    Mestrado em Informática em Saúde (UFSC)
                  </h3>
                 <p className="text-xs font-semibold text-indigo-600 mb-3">
                    Deep Learning aplicado à ultrassonografia e processamento de
                    imagens médicas
                  </p>
                  <div className="flex gap-2 flex-wrap justify-end">
                    <small className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-700/10 ring-inset">Deep Learning</small>
                    <small className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-700/10 ring-inset">Python</small>
                    <small className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-700/10 ring-inset">TensorFlow</small>
                  </div>
                </div>
              </div>
              <div className="w-4 h-4 bg-purple-500 rounded-full relative z-10"></div>
              <div className="w-1/2 pl-8"></div>
            </div>
            <div className="timeline-item flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full relative z-10"></div>
              <div className="w-1/2 pl-8">
                <div className="bg-white p-4 rounded-lg shadow-lg card-hover">
                   <h3 className="text-base font-semibold tracking-tight text-gray-800 mb-2">
                    Desenvolvimento Web Full Stack (SENAI)
                  </h3>
                 <p className="text-xs font-semibold text-indigo-600 mb-3">
                    Transição para desenvolvimento web com foco em tecnologias
                    modernas
                  </p>
                  <div className="flex gap-2 flex-wrap justify-end">
                    <small className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-700/10 ring-inset">JavaScript</small>
                    <small className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-700/10 ring-inset">React</small>
                    <small className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-700/10 ring-inset">Next.js</small>
                    <small className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-700/10 ring-inset">PostgreSQL</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-4 rounded-lg shadow-lg card-hover">
                  <h3 className="text-base font-semibold tracking-tight text-gray-800 mb-2">
                    Blockchain & Web3 (NearX)
                  </h3>
                 <p className="text-xs font-semibold text-indigo-600 mb-3">
                    Desenvolvimento de aplicações descentralizadas e contratos
                    inteligentes{" "}
                  </p>
                  <div className="flex gap-2 flex-wrap justify-end">
                    <small className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-700/10 ring-inset">Ethereum</small>
                    <small className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-700/10 ring-inset">Hardhat</small>
                    <small className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-700/10 ring-inset">Viem</small>
                    <small className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-700/10 ring-inset">Wagmi</small>
                  </div>
                </div>
              </div>
              <div className="w-4 h-4 bg-purple-500 rounded-full relative z-10"></div>
              <div className="w-1/2 pl-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
