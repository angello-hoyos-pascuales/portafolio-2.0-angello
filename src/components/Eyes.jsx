import React, { useState, useEffect, useRef } from 'react'

export default function AnimatedCharacter() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isBlinking, setIsBlinking] = useState(false)
  const [isSurprised, setIsSurprised] = useState(false)
  const [isWinking, setIsWinking] = useState(false)
  const [isHappy, setIsHappy] = useState(false)
  const [isThinking, setIsThinking] = useState(false)
  const [mouseSpeed, setMouseSpeed] = useState(0)
  const characterRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Calcular velocidad del mouse
      const speed = Math.sqrt(e.movementX ** 2 + e.movementY ** 2)
      setMouseSpeed(speed)
      
      // Efecto de sorpresa cuando el mouse se mueve rápido
      if (speed > 25) {
        setIsSurprised(true)
        setTimeout(() => setIsSurprised(false), 800)
      }
      
      // Efecto feliz con movimiento moderado
      if (speed > 5 && speed < 15) {
        setIsHappy(true)
        setTimeout(() => setIsHappy(false), 1000)
      }
    }

    const handleMouseStop = () => {
      setTimeout(() => {
        if (mouseSpeed < 1) {
          setIsThinking(true)
          setTimeout(() => setIsThinking(false), 2000)
        }
      }, 1000)
    }

    // Parpadeo automático
    const blinkInterval = setInterval(() => {
      if (!isSurprised && !isWinking) {
        setIsBlinking(true)
        setTimeout(() => setIsBlinking(false), 150)
      }
    }, Math.random() * 3000 + 2000)

    // Guiño ocasional
    const winkInterval = setInterval(() => {
      if (!isBlinking && !isSurprised) {
        setIsWinking(true)
        setTimeout(() => setIsWinking(false), 400)
      }
    }, Math.random() * 8000 + 6000)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousestop', handleMouseStop)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousestop', handleMouseStop)
      clearInterval(blinkInterval)
      clearInterval(winkInterval)
    }
  }, [mouseSpeed])

  const calculateEyePosition = (eyeElement) => {
    if (!eyeElement) return { x: 0, y: 0 }
    
    const rect = eyeElement.getBoundingClientRect()
    const eyeCenterX = rect.left + rect.width / 2
    const eyeCenterY = rect.top + rect.height / 2
    
    const angle = Math.atan2(mousePosition.y - eyeCenterY, mousePosition.x - eyeCenterX)
    const distance = Math.min(12, Math.sqrt((mousePosition.x - eyeCenterX) ** 2 + (mousePosition.y - eyeCenterY) ** 2) / 8)
    
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance
    }
  }

  const leftEyePos = calculateEyePosition(characterRef.current?.querySelector('.left-eye'))
  const rightEyePos = calculateEyePosition(characterRef.current?.querySelector('.right-eye'))

  const getEyeSize = () => {
    if (isSurprised) return 'scale-150'
    if (isBlinking) return 'scale-y-0'
    if (isHappy) return 'scale-110'
    return 'scale-100'
  }

  const getPupilSize = () => {
    if (isSurprised) return 'w-5 h-5'
    if (isHappy) return 'w-4 h-4'
    return 'w-3 h-3'
  }

  const getMouthShape = () => {
    if (isSurprised) return 'w-6 h-8 rounded-full bg-gray-800' // Boca O sorprendida
    if (isHappy) return 'w-12 h-3 rounded-b-full border-b-4 border-gray-800 bg-transparent' // Sonrisa
    if (isWinking) return 'w-8 h-2 rounded-full bg-gray-600' // Sonrisa pequeña
    if (isThinking) return 'w-6 h-2 rounded-full bg-gray-600 transform rotate-12' // Boca pensativa
    return 'w-8 h-1 rounded-full bg-gray-600' // Boca neutra
  }

  const getBodyAnimation = () => {
    if (isSurprised) return 'animate-bounce'
    if (isHappy) return 'animate-pulse'
    if (mouseSpeed > 15) return 'animate-bounce'
    return ''
  }

  const getCharacterMessage = () => {
    if (isSurprised) return "¡WOOOOW! 😱"
    if (isHappy) return "¡Me gusta cuando te mueves! 😊"
    if (isWinking) return "Te veo... 😉"
    if (isThinking) return "Mmm... ¿qué estarás pensando? 🤔"
    return "¡Hola! Mueve el cursor por aquí 👋"
  }

  return (
    <div className="flex flex-col items-center mt-8 mb-4">
      {/* Cabeza del personaje */}
      <div ref={characterRef} className={`relative ${getBodyAnimation()}`}>
        
        {/* Cara/Cabeza */}
        <div className="relative w-32 h-28 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-t-full border-4 border-gray-800 mb-2">
          
          {/* Ojos */}
          <div className="flex justify-center space-x-6 pt-4">
            {/* Ojo izquierdo */}
            <div className="left-eye relative">
              <div className={`w-12 h-8 bg-white border-2 border-gray-800 rounded-full transition-transform duration-150 ${getEyeSize()}`}>
                <div 
                  className={`${getPupilSize()} bg-black rounded-full absolute top-1/2 left-1/2 transition-all duration-100`}
                  style={{
                    transform: `translate(-50%, -50%) translate(${isWinking ? 0 : leftEyePos.x}px, ${leftEyePos.y}px)`
                  }}
                >
                  <div className="w-1 h-1 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                </div>
              </div>
              
              {/* Ceja izquierda */}
              <div 
                className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-1.5 bg-gray-700 rounded-full transition-transform duration-200 ${
                  isSurprised ? '-translate-y-2 rotate-12' : isThinking ? 'rotate-6' : ''
                }`}
              ></div>
              
              {/* Guiño */}
              {isWinking && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-0.5 bg-gray-800 rounded-full"></div>
                </div>
              )}
            </div>

            {/* Ojo derecho */}
            <div className="right-eye relative">
              <div className={`w-12 h-8 bg-white border-2 border-gray-800 rounded-full transition-transform duration-150 ${getEyeSize()}`}>
                <div 
                  className={`${getPupilSize()} bg-black rounded-full absolute top-1/2 left-1/2 transition-all duration-100`}
                  style={{
                    transform: `translate(-50%, -50%) translate(${rightEyePos.x}px, ${rightEyePos.y}px)`
                  }}
                >
                  <div className="w-1 h-1 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                </div>
              </div>
              
              {/* Ceja derecha */}
              <div 
                className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-1.5 bg-gray-700 rounded-full transition-transform duration-200 ${
                  isSurprised ? '-translate-y-2 -rotate-12' : isThinking ? '-rotate-6' : ''
                }`}
              ></div>
            </div>
          </div>

          {/* Boca */}
          <div className="flex justify-center mt-4">
            <div className={`${getMouthShape()} transition-all duration-300`}></div>
          </div>

          {/* Mejillas cuando está feliz */}
          {isHappy && (
            <>
              <div className="absolute left-2 bottom-8 w-4 h-4 bg-pink-300 rounded-full opacity-70"></div>
              <div className="absolute right-2 bottom-8 w-4 h-4 bg-pink-300 rounded-full opacity-70"></div>
            </>
          )}
        </div>

        {/* Cuello */}
        <div className="w-8 h-4 bg-yellow-300 border-x-2 border-gray-800 mx-auto"></div>

        {/* Cuerpo */}
        <div className={`w-20 h-24 bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg border-4 border-gray-800 mx-auto transition-transform duration-300 ${
          mouseSpeed > 20 ? 'scale-105' : ''
        }`}>
          
          {/* Brazos */}
          <div className="relative">
            <div className={`absolute -left-6 top-4 w-4 h-12 bg-yellow-300 border-2 border-gray-800 rounded-full transition-transform duration-300 ${
              isSurprised ? '-rotate-45' : isHappy ? 'rotate-12' : ''
            }`}></div>
            <div className={`absolute -right-6 top-4 w-4 h-12 bg-yellow-300 border-2 border-gray-800 rounded-full transition-transform duration-300 ${
              isSurprised ? 'rotate-45' : isHappy ? '-rotate-12' : ''
            }`}></div>
          </div>

          {/* Manos */}
          <div className="relative">
            <div className={`absolute -left-8 top-12 w-6 h-6 bg-yellow-300 border-2 border-gray-800 rounded-full transition-transform duration-300 ${
              isSurprised ? 'scale-125' : isHappy ? 'animate-pulse' : ''
            }`}></div>
            <div className={`absolute -right-8 top-12 w-6 h-6 bg-yellow-300 border-2 border-gray-800 rounded-full transition-transform duration-300 ${
              isSurprised ? 'scale-125' : isHappy ? 'animate-pulse' : ''
            }`}></div>
          </div>

          {/* Botones del cuerpo */}
          <div className="flex flex-col items-center pt-3 space-y-2">
            <div className="w-3 h-3 bg-white border-2 border-gray-800 rounded-full"></div>
            <div className="w-3 h-3 bg-white border-2 border-gray-800 rounded-full"></div>
            <div className="w-3 h-3 bg-white border-2 border-gray-800 rounded-full"></div>
          </div>
        </div>

        {/* Piernas */}
        <div className="flex justify-center space-x-2 mt-2">
          <div className={`w-6 h-16 bg-gray-700 border-2 border-gray-800 rounded-b-lg transition-transform duration-300 ${
            mouseSpeed > 15 ? 'rotate-12' : ''
          }`}></div>
          <div className={`w-6 h-16 bg-gray-700 border-2 border-gray-800 rounded-b-lg transition-transform duration-300 ${
            mouseSpeed > 15 ? '-rotate-12' : ''
          }`}></div>
        </div>

        {/* Pies */}
        <div className="flex justify-center space-x-4 mt-1">
          <div className="w-8 h-4 bg-black border-2 border-gray-800 rounded-full"></div>
          <div className="w-8 h-4 bg-black border-2 border-gray-800 rounded-full"></div>
        </div>
      </div>
      
      {/* Globo de diálogo */}
      <div className="relative mt-6">
        <div className="bg-white border-4 border-gray-800 rounded-xl px-4 py-2 shadow-lg max-w-xs">
          <p className="text-sm font-medium text-gray-800 text-center">
            {getCharacterMessage()}
          </p>
        </div>
        {/* Flecha del globo */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l-4 border-t-4 border-gray-800 rotate-45"></div>
      </div>

      {/* Efectos de partículas cuando está sorprendido */}
      {isSurprised && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-75"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-150"></div>
        </div>
      )}
    </div>
  )
}