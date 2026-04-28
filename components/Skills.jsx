import user from '../data/user'

export default function Skills() {
  return (
    <section id="skills" className="mt-16">
      <h2 className="text-2xl font-semibold">Technical Skills</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(user.skills).map(([category, items]) => (
          <div key={category} className="p-5 bg-white rounded-2xl shadow hover:shadow-md transition-shadow">
            <h3 className="text-sm font-semibold text-brand-500 uppercase tracking-wide mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill} className="text-xs px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
