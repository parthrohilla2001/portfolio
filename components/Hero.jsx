import user from '../data/user'

export default function Hero() {
  return (
    <section className="pt-8 pb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">{user.name} — {user.title}</h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-xl">{user.bio}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#contact" className="w-full sm:w-auto text-center bg-brand-500 text-white px-5 py-3 rounded-lg shadow hover:opacity-95">Work with me</a>
            <a href="#projects" className="w-full sm:w-auto text-center border border-slate-200 px-5 py-3 rounded-lg">See projects</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-br from-brand-50 to-white shadow-lg flex items-center justify-center">
            <img src={user.avatar} alt="avatar" className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
