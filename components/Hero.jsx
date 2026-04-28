import user from '../data/user'

export default function Hero() {
  return (
    <section className="pt-8 pb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">{user.name}</h1>
          <p className="mt-2 text-lg sm:text-xl text-brand-500 font-semibold">{user.title}</p>
          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-xl">{user.bio}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
            <span>📧 {user.email}</span>
            <span>📞 {user.phone}</span>
            <span>📍 {user.location}</span>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#contact" className="w-full sm:w-auto text-center bg-brand-500 text-white px-5 py-3 rounded-lg shadow hover:opacity-95">Get in touch</a>
            <a href="#experience" className="w-full sm:w-auto text-center border border-slate-200 px-5 py-3 rounded-lg hover:bg-slate-50">View experience</a>
          </div>
          <div className="mt-4 flex gap-4">
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-500 hover:underline">🔗 LinkedIn</a>
            <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-500 hover:underline">🔗 GitHub</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-br from-brand-500 to-teal-600 shadow-lg flex items-center justify-center">
            <span className="text-5xl sm:text-7xl font-bold text-white">PR</span>
          </div>
        </div>
      </div>
    </section>
  )
}
