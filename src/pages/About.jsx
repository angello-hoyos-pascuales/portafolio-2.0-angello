import React from "react"

export default function About() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sobre mí</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
            <div className="flex-shrink-0 relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1">
                <img src="./imagen angello.png" alt="Angello Hoyos" className="w-full h-full rounded-full object-cover shadow-lg" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Angello Andres Hoyos Pascuales</h2>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl text-blue-600 font-semibold">💻 Ingeniero de Software Full Stack</span>
                <span className="animate-pulse">|</span>
                <span className="text-gray-600">🚀 Innovador Digital</span>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-6">
                <p className="text-gray-700 leading-relaxed italic">
                  "Transformo ideas complejas en soluciones digitales elegantes y funcionales. 
                  Mi misión es crear experiencias web que no solo funcionen perfectamente, 
                  sino que inspiren y conecten con las personas."
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center bg-blue-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-600">2+</div>
                  <div className="text-sm text-gray-600">Años de experiencia</div>
                </div>
                <div className="text-center bg-green-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-gray-600">Proyectos completados</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <a 
                  href="https://drive.google.com/file/d/1irOndO4SfsXMoUF6Tq_lWjCRI5LTEG25/view?usp=drive_link" 
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                  Descargar CV
                </a>
                <button className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4M20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                  </svg>
                  Contactar
                </button>
              </div>
            </div>
          </div>

          {/* Nueva sección: Mi historia */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">📖</span>
              Mi Historia
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Mi aventura en el mundo de la programación comenzó durante mis estudios universitarios, 
                  donde descubrí que <strong>resolver problemas complejos con código</strong> era más que 
                  una carrera: era mi pasión.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Desde entonces, he trabajado en proyectos que van desde <em>aplicaciones web empresariales</em> 
                  hasta <em>sistemas de gestión innovadores</em>, siempre buscando la perfección en cada línea de código.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="mr-2">🎯</span>
                  Lo que me motiva
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="mr-2">🌟</span>Crear experiencias digitales memorables</li>
                  <li className="flex items-center"><span className="mr-2">🔧</span>Resolver desafíos técnicos complejos</li>
                  <li className="flex items-center"><span className="mr-2">👥</span>Colaborar en equipos multidisciplinarios</li>
                  <li className="flex items-center"><span className="mr-2">📚</span>Aprender nuevas tecnologías constantemente</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Nueva sección: Datos curiosos */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">⚡</span>
              Datos Curiosos
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-emerald-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">🎵</div>
                <h4 className="font-semibold text-gray-800 mb-2">Programo con Música</h4>
                <p className="text-gray-600 text-sm">Mi productividad se potencia con música. Cualquier ritmo me inspira y me ayuda a mantener la concentración.</p>
              </div>
              <div className="text-center bg-rose-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">📚</div>
                <h4 className="font-semibold text-gray-800 mb-2">Apasionado por la Lectura</h4>
                <p className="text-gray-600 text-sm">La lectura es mi forma favorita de expandir conocimientos. Disfruto tanto libros técnicos como literatura general.</p>
              </div>
              <div className="text-center bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">🌳</div>
                <h4 className="font-semibold text-gray-800 mb-2">Conectado con la Naturaleza</h4>
                <p className="text-gray-600 text-sm">Los entornos naturales estimulan mi creatividad. Mis mejores ideas surgen durante momentos de reflexión al aire libre.</p>
              </div>
            </div>
          </div>

          {/* Nueva sección: Formación y Skills */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Educación mejorada */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="mr-3">🎓</span>
                Formación Académica
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800">Ingeniería de Software</h4>
                      <p className="text-blue-600 font-medium">Universidad de Cartagena</p>
                      <p className="text-sm text-gray-500">2018 - 2023</p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Graduado
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-600">
                      Especialización en desarrollo web, bases de datos y metodologías ágiles. 
                      Proyectos destacados en React, Node.js y sistemas distribuidos.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <span className="mr-2">📚</span>
                    Aprendizaje Continuo
                  </h4>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600">• Cursos especializados en React y Node.js</p>
                    <p className="text-sm text-gray-600">• Certificaciones en metodologías ágiles</p>
                    <p className="text-sm text-gray-600">• Workshops de UI/UX Design</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Habilidades mejoradas */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="mr-3">🚀</span>
                Stack Tecnológico
              </h3>
              
              <div className="space-y-5">
                <div>
                  <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                    <span className="mr-2">💻</span> Lenguajes Base
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">HTML5</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">CSS3</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                    <span className="mr-2">🌐</span> Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Vite</span>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Bootstrap</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                    <span className="mr-2">⚙️</span> Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Express.js</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">API REST</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">JSON</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                    <span className="mr-2">🗄️</span> Bases de Datos
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">MySQL</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                    <span className="mr-2">🛠️</span> Herramientas & DevOps
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Git</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">GitHub</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Docker</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">VS Code</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Postman</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">NPM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nueva sección: Filosofía de trabajo */}
          <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
              <span className="mr-3">💡</span>
              Mi Filosofía de Trabajo
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Diseño Centrado en el Usuario</h4>
                <p className="text-gray-600 text-sm">Cada línea de código debe servir a una experiencia de usuario excepcional</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Código Limpio y Escalable</h4>
                <p className="text-gray-600 text-sm">Escribo código que otros desarrolladores puedan entender y mantener fácilmente</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Innovación Constante</h4>
                <p className="text-gray-600 text-sm">Siempre busco nuevas tecnologías y metodologías para mejorar mis proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
