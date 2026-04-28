import user from '../data/user'

export default function Education() {
  return (
    <section id="education" className="mt-16">
      <h2 className="text-2xl font-semibold">Education</h2>
      <div className="mt-6 p-6 bg-white rounded-2xl shadow flex gap-4 items-start">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center text-xl">
          🎓
        </div>
        <div>
          <h3 className="font-semibold text-base">{user.education.degree}</h3>
          <p className="text-sm text-brand-500 font-medium">{user.education.university}</p>
          <p className="mt-1 text-sm text-slate-500">{user.education.period}</p>
        </div>
      </div>
    </section>
  )
}
