import user from '../data/user'

export default function Achievements() {
  return (
    <section id="achievements" className="mt-16">
      <h2 className="text-2xl font-semibold">Achievements</h2>
      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {user.achievements.map((a) => (
          <div key={a.title} className="p-6 bg-white rounded-2xl shadow flex gap-4 items-start hover:shadow-md transition-shadow">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center text-xl">
              🏆
            </div>
            <div>
              <h3 className="font-semibold text-base">{a.title}</h3>
              <p className="text-sm text-brand-500 font-medium">{a.org}</p>
              <p className="mt-1.5 text-sm text-slate-600">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
