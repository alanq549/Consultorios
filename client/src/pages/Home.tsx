import { Link } from "react-router-dom";
import { CalendarDays, Stethoscope, ShieldCheck, Users, Star, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-900">
          Salud Integral en <span className="text-teal-600">Un Solo Lugar</span>
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-teal-800">
          Conectamos pacientes con los mejores especialistas. Agenda fácilmente y gestiona tu salud de manera integral.
        </p>
        
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
  to={`/login?redirect=${encodeURIComponent("/client/schedule?foo=bar")}`}
            className="bg-teal-600 text-white px-6 py-3 rounded-xl hover:bg-teal-700 transition font-medium flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <CalendarDays size={20} />
            Reservar cita
          </Link>
          <Link
  to={`/login?redirect=${encodeURIComponent("/client/schedule?foo=bar")}`}
            className="bg-white border border-teal-600 text-teal-600 px-6 py-3 rounded-xl hover:bg-teal-50 transition font-medium flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <Stethoscope size={20} />
            Ver especialidades
          </Link>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-teal-900">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-teal-50 p-6 rounded-xl text-center border border-teal-100 hover:border-teal-200 transition">
              <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-teal-600" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-teal-800">+50 Especialistas</h3>
              <p className="text-teal-700">Profesionales certificados en diversas áreas médicas.</p>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-xl text-center border border-teal-100 hover:border-teal-200 transition">
              <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-teal-600" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-teal-800">Agenda 24/7</h3>
              <p className="text-teal-700">Reserva citas en cualquier momento desde nuestra plataforma.</p>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-xl text-center border border-teal-100 hover:border-teal-200 transition">
              <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-teal-600" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-teal-800">Historial Seguro</h3>
              <p className="text-teal-700">Tus registros médicos protegidos y accesibles cuando los necesites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Specialties */}
      <section className="py-16 px-6 bg-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-teal-900">Nuestras Especialidades</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Cardiología", icon: "❤️", bg: "bg-red-100", text: "text-red-600" },
              { name: "Pediatría", icon: "👶", bg: "bg-blue-100", text: "text-blue-600" },
              { name: "Dermatología", icon: "✨", bg: "bg-purple-100", text: "text-purple-600" },
              { name: "Nutrición", icon: "🍎", bg: "bg-green-100", text: "text-green-600" },
              { name: "Psicología", icon: "🧠", bg: "bg-indigo-100", text: "text-indigo-600" },
              { name: "Odontología", icon: "🦷", bg: "bg-cyan-100", text: "text-cyan-600" },
            ].map((specialty) => (
              <div 
                key={specialty.name}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer border border-teal-100 flex items-center gap-4 hover:border-teal-200"
              >
                <span className={`text-2xl ${specialty.bg} ${specialty.text} p-3 rounded-full`}>{specialty.icon}</span>
                <div>
                  <h3 className="font-bold text-teal-800">{specialty.name}</h3>
                  <p className="text-sm text-teal-600">+15 especialistas</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link 
              to="/client/schedule" 
              className="text-teal-600 font-medium hover:text-teal-800 transition flex items-center justify-center gap-2"
            >
              Ver todas las especialidades <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-teal-900">Lo que dicen nuestros pacientes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Encontré al especialista perfecto para mi condición y pude agendar en menos de 5 minutos.",
                author: "María González",
                rating: 5
              },
              {
                quote: "La plataforma es muy intuitiva y me encanta tener todo mi historial médico en un solo lugar.",
                author: "Carlos Mendoza",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-teal-50 p-6 rounded-xl border border-teal-100 hover:border-teal-200 transition">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <p className="italic mb-4 text-teal-800">"{testimonial.quote}"</p>
                <p className="font-medium text-teal-900">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para cuidar de tu salud?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Regístrate ahora y agenda tu primera cita en minutos.
          </p>
          <Link
  to={`/login?redirect=${encodeURIComponent("/client/schedule?foo=bar")}`}
            className="bg-white text-teal-600 px-8 py-3 rounded-xl hover:bg-teal-50 transition font-medium inline-block shadow-md hover:shadow-lg"
          >
            Comenzar ahora
          </Link>
        </div>
      </section>
    </div>
  );
}