'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Floating Social Media Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        <a
          href="https://wa.me/573016215531"
          className="block w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
        <a
          href="https://facebook.com"
          className="block w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a
          href="https://instagram.com"
          className="block w-14 h-14 bg-gradient-to-r from-brand-orange to-brand-orange hover:from-brand-orange hover:to-brand-orange rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
          </svg>
        </a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/images/logoInnovadeko.png"
                alt="INNOVADEKO - Persianas, Toldos & Cortinas"
                width={160}
                height={48}
                className="h-10 w-auto hover:opacity-90 transition-opacity cursor-pointer"
                priority
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-white hover:text-brand-orange transition-colors cursor-pointer">Inicio</a>
              <a href="#servicios" className="text-white hover:text-brand-orange transition-colors cursor-pointer">Servicios</a>
              <a href="#galeria" className="text-white hover:text-brand-orange transition-colors cursor-pointer">Galería</a>
              <a href="#contacto" className="text-white hover:text-brand-orange transition-colors cursor-pointer">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

        {/* Hero Section */}
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-transparent z-20"></div>
          
        
        {/* Background Video */}
        <div className="absolute inset-0">
          {/* Desktop Video */}
          <video
            className="hidden md:block w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/1-INNOVADEKO INTRO HORIZONTAL.mp4" type="video/mp4" />
            {/* Fallback image for browsers that don't support video */}
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2016&q=80"
                alt="Luxury curtains"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
          </video>
          
          {/* Mobile Video */}
          <video
            className="block md:hidden w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/2-INNOVADEKO INTRO VERTICAL.mp4" type="video/mp4" />
            {/* Fallback image for browsers that don't support video */}
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2016&q=80"
                alt="Luxury curtains"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
          </video>
        </div>


        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 group cursor-pointer"
          onClick={() => {
            document.getElementById('servicios')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <div className="text-white text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              Ver más
            </div>
            <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center group-hover:border-brand-orange transition-colors">
              <svg className="w-4 h-4 text-white mt-2 group-hover:text-brand-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
              <div className="w-1 h-1 bg-white rounded-full opacity-40"></div>
              <div className="w-1 h-1 bg-white rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 brand-title">INNOVA DEKO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto brand-body mb-6">
              Somos una empresa dedicada a la comercialización de productos para el cubrimiento, 
              la decoración de ventanas y la protección solar.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto brand-body">
              En los últimos años hemos incursionado en nuevas líneas de producto como 
              películas de control solar inteligente, tapetes de área y sistemas de automatización.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicio 1: Asesoría Integral */}
            <div className="group bg-gradient-to-br from-brand-orange-50 to-brand-orange-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 brand-subtitle">Asesoría Integral</h3>
              <p className="text-gray-600 mb-6 brand-body">
                Asesoría integral para la decoración de los espacios
              </p>
              <ul className="space-y-2 text-gray-600 brand-body">
                <li>• Diseño personalizado</li>
                <li>• Consultoría especializada</li>
                <li>• Soluciones a medida</li>
              </ul>
            </div>

            {/* Servicio 2: Mantenimiento Profesional */}
            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 brand-subtitle">Mantenimiento Profesional</h3>
              <p className="text-gray-600 mb-6 brand-body">
                Mantenimiento profesional de todos nuestros productos
              </p>
              <ul className="space-y-2 text-gray-600 brand-body">
                <li>• Servicio técnico especializado</li>
                <li>• Mantenimiento preventivo</li>
                <li>• Reparaciones garantizadas</li>
              </ul>
            </div>

            {/* Servicio 3: Lavado, Adaptación, Reparación e Instalación */}
            <div className="group bg-gradient-to-br from-brand-orange-50 to-brand-orange-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 brand-subtitle">Lavado, Adaptación, Reparación e Instalación</h3>
              <p className="text-gray-600 mb-6 brand-body">
                Servicios completos de lavado, adaptación, reparación e instalación
              </p>
              <ul className="space-y-2 text-gray-600 brand-body">
                <li>• Lavado profesional</li>
                <li>• Adaptación a medida</li>
                <li>• Instalación especializada</li>
              </ul>
            </div>

            {/* Servicio 4: Recogida y Entrega a Domicilio */}
            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 brand-subtitle">Recogida y Entrega a Domicilio</h3>
              <p className="text-gray-600 mb-6 brand-body">
                Recogida y entrega a domicilio para tu comodidad
              </p>
              <ul className="space-y-2 text-gray-600 brand-body">
                <li>• Servicio a domicilio</li>
                <li>• Recogida programada</li>
                <li>• Entrega segura</li>
              </ul>
            </div>

            {/* Servicio 5: Calidad y Garantía */}
            <div className="group bg-gradient-to-br from-brand-orange-50 to-brand-orange-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 brand-subtitle">Calidad y Garantía</h3>
              <p className="text-gray-600 mb-6 brand-body">
                Calidad y garantía en el servicio
              </p>
              <ul className="space-y-2 text-gray-600 brand-body">
                <li>• Garantía extendida</li>
                <li>• Calidad certificada</li>
                <li>• Satisfacción garantizada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 brand-title">Galería de Cortinas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto brand-body">
              Descubre algunos de nuestros trabajos más destacados en cortinas y decoración
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/images/cortinas1.png",
              "/images/cortinas2.png",
              "/images/cortinas3.png",
              "/images/cortinas4.png",
              "/images/cortinas5.png",
              "/images/cortinas6.png",
              "/images/cortinas7.png",
              "/images/cortinas8.png",
              "/images/cortinas9.png",
              "/images/cortinas10.png",
              "/images/cortinas11.png",
              "/images/cortinas12.png"
            ].map((src, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <Image
                  src={src}
                  alt={`Proyecto ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">Cortinas INNOVADEKO</h3>
                    <p className="text-sm opacity-90">Diseño y calidad premium</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-brand-orange to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 brand-title">¿Listo para Transformar tu Hogar?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto brand-body">
            Contacta con nuestros expertos para una consulta gratuita y descubre las posibilidades infinitas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-orange px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              Llamar Ahora
            </button>
            <a
              href="https://wa.me/573016215531"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-orange px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 inline-block cursor-pointer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <Image
                  src="/images/logoInnovadeko.png"
                  alt="INNOVADEKO - Persianas, Toldos & Cortinas"
                  width={200}
                  height={60}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-400 brand-body">
                Somos una empresa dedicada a la comercialización de productos para el cubrimiento, 
                la decoración de ventanas y la protección solar.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 brand-subtitle">Servicios</h4>
              <ul className="space-y-2 text-gray-400 brand-body">
                <li>Asesoría Integral</li>
                <li>Mantenimiento Profesional</li>
                <li>Lavado, Adaptación, Reparación e Instalación</li>
                <li>Recogida y Entrega a Domicilio</li>
                <li>Calidad y Garantía</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 brand-subtitle">Contacto</h4>
              <ul className="space-y-2 text-gray-400 brand-body">
                <li>📞 +57 301 621 5531</li>
                <li>✉️ info@innovadeko.com</li>
                <li>📍 Av. Principal 123, Ciudad</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 INNOVA DEKO. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
